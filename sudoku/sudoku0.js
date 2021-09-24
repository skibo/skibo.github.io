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
// sudoku0.js
//
/////////////////////////////

var puzzle;		// current puzzle, in string form
var solution;		// current solution, in string form
var highlightedCell;	// id of highlighted cell.
var useLetters = false;	// use letters intead of numbers.

// Unhighlight the highlighted cell.
function noHighlightedCell() {
    if (highlightedCell) {
	document.getElementById(highlightedCell).style.background = "#ddeecc";
	highlightedCell = undefined;
    }
}

// Fill puzzle with puzzle and solution (if solution is valid).
function fillPuzzle() {
    var x, y, cell, a, b;
    var link;

    noHighlightedCell();

    for (y=1; y<=9; y++)
	for (x=1; x<=9; x++) {
	    cell = document.getElementById(x+"_"+y);
	    a = puzzle.charAt(x+y*9-10);
	    b = solution.charAt(x+y*9-10);

	    if (!(a>='1' && a<='9') && (b>='1' && b<='9')) {
		if (useLetters)
		    cell.value = '?ABCDEFGHI'.charAt(Number(b));
		else
		    cell.value = b;
		cell.style.color = "red";
	    }
	    else {
		if (!(a>='1' && a<='9'))
		    cell.value = ' ';
		else if (useLetters)
		    cell.value = '?ABCDEFGHI'.charAt(Number(a));
		else
		    cell.value = a;
		cell.style.color = "black";
	    }

	    cell.blur();
	}
}

// On document load, initialize stuff, get puzzle and solution strings
// from URL, if they exist.
//
function onDocumentLoad() {
    var i;
    var urlVars = getUrlVars();

    puzzle = blankPuzzleString();
    solution = blankPuzzleString();
    highlightedCell=undefined;

    // Look for p and s variables in url.
    if (urlVars['puzzle']) {
	puzzle = urlVars['puzzle'];
	if (urlVars['solution'])
	    solution = urlVars['solution'];
    }

    if (urlVars['useLetters']) {
	useLetters = true;
	document.getElementById('useLetters').checked = true;
    }

    fillPuzzle(puzzle);
}

////////////////////////////////////////////////////////////////////////
//
// These are all functions called in response to button presses or other
// ordinary HTML events.
//

// Solve button
function solveButton() {
    var p = puzzleToArray(puzzle);
    p = solvePuzzle(p);
    if (p == undefined)
	alert("No Solution!");
    else {
	solution = arrayToPuzzle(p);
	fillPuzzle();
    }
}

// Clear button
function clearButton() {
    puzzle = blankPuzzleString();
    solution = blankPuzzleString();
    fillPuzzle();
}

// Clear solution button
function clearSolButton() {
    solution = "";
    fillPuzzle();
}

function createProgress(n,p) {
    if (p) {
	puzzle = p;
	solution = "";
	fillPuzzle();
    }
    else {
	var x = Math.floor(9 * Math.random()) + 1;
	var y = Math.floor(9 * Math.random()) + 1;
	noHighlightedCell();
	highlightedCell = x+'_'+y;
	document.getElementById(highlightedCell).style.background = "#eebbcc";
    }
}

// Create button
function createButton() {
    var minHints = document.getElementById("difficulty_select").value;
    useLetters = document.getElementById('useLetters').checked;
    createSymmetrical = document.getElementById("symmetrical").checked;

    if (createPuzzle(minHints, createProgress)) {
	puzzle = blankPuzzleString();
	solution = blankPuzzleString();
	fillPuzzle();
    }
}

// Create 4 button
function create4Button() {
    var minHints = document.getElementById("difficulty_select").value;
    var url = 'sudoku4.html?minHints=' + minHints;
    if (document.getElementById('symmetrical').checked)
	url += '&createSymmetrical=true';
    if (document.getElementById('useLetters').checked)
	url += '&useLetters=true';
    window.location = url;
}

// A cell is modified.
//
function modifyCell(x,y) {
    var i = (x-1) + (y-1)*9;
    var e = document.getElementById(x+'_'+y);
    var value = Number(e.value);

    if (value >= 0 && value <= 9) {
	var temp = puzzle.substr(0,i);
	temp = temp.concat(String(value));
	if (i < 81)
	    temp = temp.concat(puzzle.substr(i+1));
	puzzle = temp;
	solution = blankPuzzleString();
    }

    if (value > 0 && value <= 9)
	e.value = String(value);
    else
	e.value = " ";
    e.style.color = "black";

    var link = document.getElementById("smallLink");
    link.href = "https://www.skibonet/sudoku/puzzleimage.php?p=" + puzzle;
}

function onUseLetters() {
    useLetters = document.getElementById('useLetters').checked;
    fillPuzzle();
}
