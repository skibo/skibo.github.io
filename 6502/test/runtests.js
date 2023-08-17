//
// Copyright (c) 2022 Thomas Skibo.
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

function Run6502TestHw() {
    var ram = new Array(0x10000);

    this.reset = function() {
        var i;

        for (i = 0; i < 0xfffc; i++) {
            if (i < klaustests.length)
                ram[i] = klaustests[i];
            else
                ram[i] = 0x44;
        }

        ram[0xfffc] = 0x00;
        ram[0xfffd] = 0x04;
        ram[0xfffe] = 0xab;
        ram[0xffff] = 0x37;
    }

    this.read = function(addr) {
        if (addr < 0 || addr >= ram.length) {
            console.log("Run6502TestHw.read: bad addr: %s",
                        addr.toString(16));
            return 0;
        }

        // console.log("Run6502TestHw.read: %s %s", addr.toString(16),
        //            ram[addr].toString(16));

        return ram[addr];
    }

    this.write = function(addr, d8) {
        if (addr < 0 || addr >= ram.length) {
            console.log("Run6502TestHw.write: bad addr: %s",
                        addr.toString(32));
            return 0;
        }
        if (d8 < 0 || d8 > 255) {
            console.log("Run6502TestHw.write: bad data: %s", d8.toString(16));
            return 0;
        }

        // console.log("Run6502TestHw.write: %s %s", addr.toString(16),
        //            d8.toString(16));

        ram[addr] = d8;
    }
}

function Run6502Tests() {
    var hw = new Run6502TestHw();
    var cpu = new Cpu6502(hw);

    this.go = function() {
        var n = 0;
        var last_pc = 0;
        var last_pc_cnt = 0;

        hw.reset();
        cpu.reset();

        while (n++ < 100000000) {

            cpu.cycle();

            if (cpu.getPc() == last_pc) {
                last_pc_cnt++;
                if (last_pc_cnt > 8) {
                    console.log("Run6502Tests: Looping at %s",
                                last_pc.toString(16));
                    break;
                }
            } else {
                last_pc = cpu.getPc();
                last_pc_cnt = 0;
            }
        }

        console.log("Run6502Tests: Done after %s cycles, last_pc=%s",
                    n.toString(10), last_pc.toString(16));
    }
}
