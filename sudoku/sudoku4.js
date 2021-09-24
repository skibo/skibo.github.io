//
// Copyright (c) 2008 Thomas Skibo.
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

/////////////////////////////
//
// sudoku4.js
//
/////////////////////////////

var minHints = 28;
var useLetters = false;
var currentPuzzleId;
var puzzles;

function progress(n,p) {
    if (p) {
	var img = document.getElementById('puzzle' + currentPuzzleId);
	var link = document.getElementById('puzzle_link' + currentPuzzleId);

	link.href = 'index.php?puzzle=' + p;
	if (useLetters)
	    link.href += '&useLetters=true';
	puzzles[currentPuzzleId] = p;

	if (useLetters)
	    p = puzzleToLetters(p);
	img.src = 'https://www.skibo.net/sudoku/puzzleimage.php?p=' + p;

	if (++currentPuzzleId < 4)
	    createPuzzle(minHints, progress);
	else
	    document.getElementById('progtbl').style.display = 'none';
    }
    else if (n % 2 == 1)
	document.getElementById('prog').style.width = (n * 5) + 'px';
}

function onDocumentLoad() {
    var urlVars = getUrlVars();
    if (urlVars['minHints'])
	minHints = urlVars['minHints'];
    if (urlVars['createSymmetrical'])
	createSymmetrical = true;
    if (urlVars['useLetters'])
	useLetters = true;
    currentPuzzleId = 0;
    puzzles = Array(4);
    createPuzzle(minHints, progress);
}
