//
// Copyright (c) 2014 Thomas Skibo.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
// 1. Redistributions of source code must retain the above copyright
//    notice, this list of conditions and the following disclaimer.
// 2. Redistributions in binary form must reproduce the above copyright
//    notice, this list of conditions and the following disclaimer in the
//    documentation and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY AUTHOR AND CONTRIBUTORS ``AS IS'' AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED.  IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
// OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
// HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
// LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
// OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
// SUCH DAMAGE.
//

function Pet2001Video(context) {
    // VCYCLE0 is the number of 1us cycles after the SYNC signal goes low that
    // the first video RAM data is read.  Video bytes are read each of the
    // next 40 cycles.  The next line starts being read 64 cycles after the
    // first.
    const VCYCLE0 = 3862;
    const VCYCLEEND = (VCYCLE0 + (64 * 199) + 40);
    const PET_VRAM_SIZE = 0x400;

    var vidram = new Uint8Array(PET_VRAM_SIZE);
    var bitmap = new Uint8Array(40 * 200);

    var ctx = context;
    var charset = false;
    var charvers = false;
    var charrom = petCharRom1g;
    var blank = false;
    var blank_delay = 0;

    for (var i = 0; i < 40 * 200; i++)
        bitmap[i] = 0;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 640, 400);

    // Write to video ram.
    this.write = function(addr, d8) {
        vidram[addr & (PET_VRAM_SIZE - 1)] = d8;
    }

    // Read from video ram.
    this.read = function(addr) {
        return vidram[addr & (PET_VRAM_SIZE - 1)];
    }

    // Called in response to change in blanking signal.
    // Blanking of the screen is delayed by 20ms to avoid flickering
    // during scrolling.  (It takes 18,000 cycles to scroll the screen.)
    this.setVideoBlank = function(flag) {
        if (!blank && flag)
            blank_delay = 20000;
        else {
            if (!flag)
                blank_delay = 0;
            blank = flag;
        }
    }

    // Called in response to character set signal change.
    this.setCharset = function(flag) {
        charrom = flag ? (charvers ? petCharRom2b : petCharRom1b) :
            (charvers ? petCharRom2g : petCharRom1g);
        charset = flag;
    }

    // Set character ROM version
    this.setCharvers = function(flag) {
        charvers = flag;
        this.setCharset(charset);
    }

    this.cycle = function(video_cycle) {
        if (blank_delay > 0) {
            if (--blank_delay == 0)
                blank = true;
        }

        if (video_cycle < VCYCLE0 || video_cycle >= VCYCLEEND)
            return;

        // Which byte is being read from video RAM?
        var col = (video_cycle - VCYCLE0) & 0x3f;
        if (col > 39)
            return;
        var row = (video_cycle - VCYCLE0) >> 6;

        // Get byte from video memory.
        var vbyte = vidram[col + (row >> 3) * 40];
        var cdata = 0;
        if (!blank) {
            cdata = charrom[(vbyte & 0x7f) * 8 + (row & 0x07)];
            if ((vbyte & 0x80) != 0)
                cdata ^= 0xff;
        }

        // Update pixels?
        if (cdata != bitmap[col + row * 40]) {
            bitmap[col + row * 40] = cdata;
            if (cdata == 0x00) {
                ctx.fillStyle = "#000000";
                ctx.fillRect(col * 16, row * 2, 16, 2);
            } else if (cdata == 0xff) {
                ctx.fillStyle = "#effeff"; // Color for "white" pixels
                ctx.fillRect(col * 16, row * 2, 16, 2);
            } else {
                ctx.fillStyle = "#000000";
                ctx.fillRect(col * 16, row * 2, 16, 2);
                ctx.fillStyle = "#effeff"; // Color for "white" pixels
                for (x = 0; x < 8; x++) {
                    if ((cdata & 0x80) != 0)
                        ctx.fillRect(col * 16 + x * 2, row * 2, 2, 2);
                    cdata <<= 1;
                }
            }
        }
    }
}
