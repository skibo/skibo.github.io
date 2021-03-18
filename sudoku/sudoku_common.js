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
// sudoku_common.js
//
// Sudoku routines in JavaScript.
//
/////////////////////////////

var createSymmetrical = false;

function blankPuzzleString() {
    return '0000000000000000000000000000000000000' +
	'00000000000000000000000000000000000000000000';
}

// Turn a puzzle string to a puzzle array.
function puzzleToArray(puzzle_string) {
    var i;
    var puzzle = new Array(81);

    for (i=0; i<81; i++) {
	if (puzzle_string.charAt(i) >= '1' && puzzle_string.charAt(i) <= '9')
	    puzzle[i] = (1<<(Number(puzzle_string.charAt(i))-1));
	else
	    puzzle[i] = 511;
    }

    return puzzle;
}

// Turn an array into a puzzle string.
function arrayToPuzzle(p) {
    var puzzle_string = "";
    var i, j;

    for (i=0; i<81; i++)
	if (p[i] == 0)
	    puzzle_string = puzzle_string.concat('?');
    else if ((p[i] & (p[i]-1)) == 0) {
	j = 8;
	while ((p[i] & (1<<j)) == 0 && j>=0)
	    j--;
	puzzle_string = puzzle_string.concat(String(j+1));
    }
    else
	puzzle_string = puzzle_string.concat('0');

    return puzzle_string;
}

// Turn a number puzzle into a letter puzzle.
function puzzleToLetters(puzzle_string) {
    var i;
    var puzzle_string2 = '';

    for (i=0; i<puzzle_string.length; i++) {
	if (puzzle_string.charAt(i) >= '1' && puzzle_string.charAt(i) <= '9')
	    puzzle_string2 = puzzle_string2.concat(String.fromCharCode(64+Number(puzzle_string.charAt(i))));
	else
	    puzzle_string2 = puzzle_string2.concat(puzzle_string.charAt(i));
    }

    return puzzle_string2;
}

///////////////////////////////////////////////////////////////////////

// These routines are for working with puzzle arrays.  Puzzle arrays
// are arrays of 81 integers, each which represent a 9 bit mask indicating
// what possible values each cell can have.  For example, a blank puzzle is
// an 81 cell array of 511, 511, 511, ..., 511.  A cell is "solved" if it
// is a power of 2, thus representing the only possible value left.  A cell
// of 0 means no value is possible at this square which probably means there
// is no solution to the puzzle or something went very wrong!


// Count the number of unsolved cells in a puzzle array.
function countBlanks(p) {
    var i;
    var n = 0;
    for (i=0; i<81; i++)
	if (p[i] == 0)
	    return -1;
    else if ((p[i] & (p[i]-1)) != 0) // not a power of two
	n++;
    return n;
}

// Create a copy of a puzzle array.
function copyPuzzle(p) {
    var i;
    var p2 = new Array(81);

    for (i=0; i<81; i++)
	p2[i] = p[i];

    return p2;
}


// Do an eliminate operation on a puzzle.  p[i] is a solved cell so go
// to all the adjacent cells (same row, column, or 3x3 square) and eliminate
// the value of p[i] from those cells' possibilities.
//
function eliminate(p, i) {
    var j;

    for (j=0; j<81; j++)
	if (i != j) {
	    if ((i % 9) == (j % 9) ||
		Math.floor(i / 9) == Math.floor(j / 9) ||
		(Math.floor(i / 27) == Math.floor(j / 27) &&
		 (Math.floor(i / 3) % 3) == (Math.floor(j / 3) % 3))) {

		p[j] &= ~p[i];
		if (p[j] == 0)
		    return -1; // unsolvable!
	    }
	}

    return 0;
}

// Do an "eliminate pass" which means find every solved square and
// eliminate the value from it's adjacencies.
//
function eliminatePass(p) {
    var i;

    for (i=0; i<81; i++)
	if ((p[i] & (p[i]-1)) == 0) {
	    if (eliminate(p, i) < 0)
		return -1; // unsolvable!
	}

    return 0;
}

// A "put pass" (I didn't know what else to call it) is where you go through
// all the rows, columns, and squares and try to find cells that are the
// only place in that row/column/square that a particular value can go.
//
function putPass(p) {
    var a, x, y, i, i2, n;

    // Do columns.  For each column and each value 1 through 9, count
    // the possible places for the value and if it's one, plug it in.
    // If it's zero, there's no solution.
    //
    for (x=0; x<9; x++)
	for (a=1; a<512; a=(a<<1)) {

	    // How many possible a's in this column?
	    n = 0;
	    for (y=0; y<9; y++) {
		i = x+y*9;
		if ((p[i] & a) != 0) {
		    n++;
		    i2=i;
		}
	    }
	    if (n == 1)
		p[i2] = a; // possibly redundant if the cell is already sovled.
	    else if (n == 0)
		return -1; // unsolvable!
	}

    // Do rows.
    for (y=0; y<9; y++)
	for (a=1; a<512; a=(a<<1)) {

	    // How many possible a's in this row?
	    n = 0;
	    for (x=0; x<9; x++) {
		i = x+y*9;
		if ((p[i] & a) != 0) {
		    n++;
		    i2=i;
		}
	    }
	    if (n == 1)
		p[i2] = a;
	    else if (n == 0)
		return -1;
	}

    // Do Squares.
    for (x=0; x<9; x+=3)
	for (y=0; y<9; y+=3)
	    for (a=1; a<512; a=(a<<1)) {
		var x2, y2;

		// How many possible a's in this square?
		n = 0;
		for (x2=0; x2<3; x2++)
		    for (y2=0; y2<3; y2++) {
			i = (x+x2)+(y+y2)*9;
			if ((p[i] & a) != 0) {
			    n++;
			    i2=i;
			}
		    }
		if (n == 1)
		    p[i2] = a;
		else if (n == 0)
		    return -1;
	    }

    return 0;
}

// When the elimination and put passes stop converging on a solution,
// we start making random guesses to solutions of the puzzle.
// It's not necessary to guess randomly to solve a puzzle but by
// guessing randomly, we can use the solvePuzzle() function
// on a blank puzzle to generate random puzzle solutions.
//
function puzzleGuess(p) {
    var r, i=0, a, b;

    // Pick a random unsolved cell.
    r = Math.floor(81 * Math.random());
    do {
	while ((p[i] & (p[i]-1)) == 0)
	    if (++i >= 81)
		i=0;
    } while (--r >= 0);

    // Start at a random value 1 through 9 and try plugging it and
    // subsequent values into the cell and see if we get a solution.
    //
    r = Math.floor(9 * Math.random());
    for (b=0; b<9; b++) {
	if (r+b >= 9)
	    a = (1<<(r+b-9));
	else
	    a = (1<<(r+b));

	if ((p[i] & a) != 0) {
	    var p2 = copyPuzzle(p);
	    p2[i] = a;

	    p2 = solvePuzzle(p2);
	    if (p2 != undefined)
		return p2; // got it!
	}
    }
    return undefined; // no solution after trying all values for this cell!
}

// Main puzzle solver.  Pass this function a puzzle array to solve.
//
function solvePuzzle(p) {
    var blanks, prev_blanks;

    // Keep track of unsolved cells (blanks) to see if we are
    // converging on a solution.
    //
    prev_blanks = countBlanks(p);

    while (1) {

	// Do an elimination pass.
	if (eliminatePass(p) < 0)
	    return undefined; // unsolvable!

	// Solved?
	blanks = countBlanks(p);
	if (blanks == 0)
	    return p; // solved!!

	// Do a "put" pass.
	if (putPass(p) < 0)
	    return undefined; // unsolvable!

	// Solved?
	blanks = countBlanks(p);
	if (blanks == 0)
	    return p; // solved!

	// Have we solved any cells since the last pass?
	// If not, start making guesses.
	if (blanks == prev_blanks)
	    return puzzleGuess(p);

	prev_blanks = blanks;
    }
}

// countGuesses() is similar to puzzleGuess() except that it is
// only concerned with the number of possible solutions to a puzzle
// than with the solution itself.  It is used by uniqueSolution() which
// is similar to solvePuzzle().  Once we know there is more than one
// solution, we return a value because we're really only concerned if
// there are zero, one, or multiple solutions.  The function returns 0,
// 1, or >1 (I think it's guaranteed to return 2).
//
function countGuesses(p) {
    var i = 0, a;
    var solutions = 0;

    // Find first unsolved cell.
    while (i<81 && p[i] != 0 && (p[i] & (p[i]-1)) == 0)
	i++;
    if (p[i] == 0 || i >= 81)
	return -1;

    // Try all valid values (until we see more than one solution)
    //
    for (a=1; a<512; a=(a<<1))
	if ((p[i] & a) != 0) {
	    var p2 = copyPuzzle(p);
	    p2[i] = a;
	    solutions += uniqueSolution(p2);
	    if (solutions > 1)
		return solutions;
	}

    return solutions;
}

// uniqueSolution() is similar to solvePuzzle() except that it is only
// concerned with determining if there are zero, one, or multiple solutions
// to a puzzle.  It returns 0, 1, or >1 (although I think you're guaranteed
// to get a 2 if there are multiple solutions).
//
function uniqueSolution(p) {
    var blanks, prev_blanks;

    prev_blanks = countBlanks(p);
    while (1) {

	// Do an eliminate pass.
	if (eliminatePass(p) < 0)
	    return 0; // unsolvable.  Zero solutions.

	// Is the puzzle solved?  That's one solution then.
	blanks = countBlanks(p);
	if (blanks == 0)
	    return 1; // solved!!

	// Do a "put" pass.
	if (putPass(p) < 0)
	    return 0; // unsolvable!

	// Solved?
	blanks = countBlanks(p);
	if (blanks == 0)
	    return 1; // solved!!

	// If we've solved no more cells from the last pass,
	// start couting how many "guesses" lead to a solution thus
	// determining if there are zero, one, or multiple solutions.
	if (blanks == prev_blanks)
	    return countGuesses(p);

	prev_blanks = blanks;
    }
}

// createPuzzle() kicks off the process of creating a new puzzle.  The
// process is completed in subsequent timeout() operations so that the
// process runs in the background (otherwise it hogs the browser too long).
//
// It starts by creating a random solution (by solving a blank puzzle, see
// my comment on random guesses).  Cells are randomly blanked out and then
// the puzzle is checked for multiple solutions.  At most, it will blank out
// cells until there are only minHints cells still left filled.  With
// minHints=0, we usually get roughly 24-28 hints which can be pretty
// challenging.
//
var workPuzzle = undefined;	// current working puzzle array
var createTimeout = undefined;	// timeout handle for creating a puzzle
var hintList;			// array of randomized cells

function createPuzzle(minHints,progressRoutine) {
    var i, r, temp;
    var hints;

    if (workPuzzle)
	return false;

    // A random solution is created by solving a blank puzzle.
    workPuzzle = new Array(81);
    for (i=0; i<81; i++)
	workPuzzle[i] = 511;
    workPuzzle = solvePuzzle(workPuzzle);

    // Make a list of random cells to blank out.
    hintList = new Array(81);
    if (createSymmetrical) {
	for (i=0; i<41; i++)
	    hintList[i] = i;
	for (i=0; i<41; i++) {
	    r = Math.floor(41 * Math.random());
	    temp = hintList[i];
	    hintList[i] = hintList[r];
	    hintList[r] = temp;
	}
    }
    else {
	for (i=0; i<81; i++)
	    hintList[i] = i;
	for (i=0; i<81; i++) {
	    r = Math.floor(81 * Math.random());
	    temp = hintList[i];
	    hintList[i] = hintList[r];
	    hintList[r] = temp;
	}
    }

    doCreateTimeout(0,81,minHints,progressRoutine);

    return true;
}

// doCreateTimeout() does incremental work to creating a puzzle.  It's
// done as a timeout so as not to block the users browser too much.
//
function doCreateTimeout(i,hints,minHints,progressRoutine) {

    if (!workPuzzle)
	return;

    var p2 = copyPuzzle(workPuzzle);

    // Blank out the next cell in the list.  If the puzzle still has
    // a unique solution, we'll leave it that way.
    //
    p2[ hintList[i] ] = 511;
    if (createSymmetrical)
	p2[ 80 - hintList[i] ] = 511;
    if (uniqueSolution(p2) == 1) {
	workPuzzle[ hintList[i] ] = 511;
	hints--;
	if (createSymmetrical) {
	    workPuzzle[ 80 - hintList[i] ] = 511;
	    hints--;
	}
    }
    i++;

    // Are we done?
    //
    if (i < (createSymmetrical ? 41 : 81) && hints>minHints) {
	progressRoutine(i, undefined);
	createTimeout = setTimeout("doCreateTimeout("+i+
				   ","+hints+","+minHints+","+
				   progressRoutine+")", 100);
    }
    else {
	var puzzleString = arrayToPuzzle(workPuzzle);
	workPuzzle = undefined;
	createTimeout = undefined;
	hintList = undefined;
	progressRoutine(i, puzzleString);
    }
}

// Cancel an in-progress puzzle create.
function killCreate() {
    if (createTimeout) {
	workPuzzle = undefined;
	hintList = undefined;
	clearTimeout(createTimeout);
	createTimeout = undefined;
    }
}
