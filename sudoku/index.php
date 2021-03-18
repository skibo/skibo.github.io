<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
   <title>Sudoku Puzzle Generator/Solver</title>
   <!-- by Thomas Skibo --->
<style type="text/css">
.sudo1 {
     background: #ddaabb;
     border: thin solid black;
}
.sudo2 {
     empty-cells: show;
     border: none;
}
.sudo3 {
     background: #ddeecc;
     width: 40px;
     height: 40px;
     font: 35px bold;
     text-align: center;
     border: thin solid black;
}
</style>
<script type="text/javascript" src="geturlvars.js"></script>
<script type="text/javascript" src="sudoku_common.js"></script>
<script type="text/javascript" src="sudoku0.js"></script>
</head>
<body>
<center>
<table class="sudo1">
<?php

for ($y1=0; $y1<3; $y1++) {
    print "<tr>";
    for ($x1=0; $x1<3; $x1++) {
	print "<td><table class=\"sudo2\">\n";

	for ($y2=0; $y2<3; $y2++) {
	    print "<tr>";
	    for ($x2=0; $x2<3; $x2++) {
		$x = $x2+$x1*3+1;
		$y = $y2+$y1*3+1;
		$id = $x . "_" . $y;
		print "<td><input type=\"text\" id=\"$id\" class=\"sudo3\" ";
		print "onchange=\"javascript:modifyCell($x,$y)\"></td>\n";
	    }
	    print "</tr>\n";
	}
	print "</table></td>\n";
    }
    print "</tr>\n";
}
?>
</table><br>
<input type="button" onClick="javascript:solveButton()" value="Solve">
<input type="button" onClick="javascript:clearButton()" value="Clear">
<input type="button" onClick="javascript:clearSolButton()" value="Clear Solution"><br>
<input type="button" onClick="javascript:createButton()" value="Create">
<select id="difficulty_select" name="difficulty">
<option value="32">Easy</option>
<option value="28">Medium</option>
<option value="0">Hard</option>
</select>
<input type="button" onClick="javascript:create4Button()" value="Create Four">
<br>
<input type="checkbox" id="symmetrical">Create Symmetrical<br>
<input type="checkbox" id="useLetters" onChange="javascript:onUseLetters()">Use Letters<br>
</center>
<br>
<div style="margin-left: 5%; margin-right: 5%; background: #ddddff; padding: 40px;">
This page generates random sudoku puzzles.  It uses Javascript to do
the computation.  Press the "Create Four" button to get four puzzles on a printer-friendly
page.
<p>
You can also enter numbers into the puzzle and have it search for a solution.  If there
are mutliple solutions, you will get a random solution.
<p>
<a href="mailto:info7533@skibo.net">E-mail me</a> your comments,
suggestions, or bugs.<p>
<br>
</div>
<script type="text/javascript">
onDocumentLoad();
</script>
</body>
</html>
