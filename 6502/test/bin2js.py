#!/usr/bin/python
#
# Copyright (c) 2023 Thomas Skibo.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
#
# THIS SOFTWARE IS PROVIDED BY AUTHOR AND CONTRIBUTORS ``AS IS'' AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED.  IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.
#

# usage bin2js.py <binary-filename> [<array-name>]

import sys

def bin2js(filename, arrayname):
    """Convert filename to const JavaScript array"""

    f = open(filename, 'rb')
    dat = f.read()

    print("const " + arrayname + " = [")
    print("\t", end='')

    offs = 0
    col = 0
    n = len(dat)
    while offs < n:
        if offs != 0:
            print(",", end='')

            col += 1
            if col == 8:
                print("")
                print("\t", end='')
                col = 0
            else:
                print(" ", end='')

        print(f"0x{dat[offs]:02x}", end='')

        offs += 1

    print("")
    print("]; // " + arrayname)


if __name__ == "__main__":
    if (len(sys.argv) < 2):
        print(f"Usage: {sys.argv[0]} <binary-filename> [<array-name>]")
        exit(1)

    arrayname = "array"
    if (len(sys.argv) > 2):
        arrayname = sys.argv[2]

    bin2js(sys.argv[1], arrayname)


