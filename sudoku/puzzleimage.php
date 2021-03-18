<?php
/*
 * Copyright (c) 2008 Thomas Skibo.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY AUTHOR AND CONTRIBUTORS ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */

  /*
   * puzzleimage.php
   *
   */
$puzzle = $_GET['p'];

$size = 320;
$thick = 3;

if ($_GET['size'] != "" && $_GET['size'] >= 30 && $_GET['size'] <= 1000)
    $size = $_GET['size'];


$cellsize = $size/9;
$fontsize = floor($cellsize * 0.8);
$fontfile = "FreeMonoBold";
putenv('GDFONTPATH=' . realpath('.'));

$image = imagecreate($size+$thick, $size+$thick);

$white = imagecolorallocate($image,255,255,255);
$black = imagecolorallocate($image,64,64,64);

for ($i=0; $i<10; $i++) {
    $x = $i * $cellsize;

    if ($i % 3 == 0) {
	for ($j=0; $j<$thick; $j++) {
	    imageline($image, $x+$j, 0, $x+$j, $size+$thick, $black);
	    imageline($image, 0, $x+$j, $size+$thick, $x+$j, $black);
	}
    }
    else {
	imageline($image, $x+$thick/2, 0, $x+$thick/2, $size+$thick, $black);
	imageline($image, 0, $x+$thick/2, $size+$thick, $x+$thick/2, $black);
    }
}

for ($yi=0; $yi<9; $yi++)
    for ($xi=0; $xi<9; $xi++) {

	$x = $xi * ($size-3) / 9 + $fontsize * 0.40;
	$y = $yi * ($size-3) / 9 + $fontsize * 1.1;

	$c = substr($puzzle, $xi+$yi*9, 1);

	if ($c != '0')
	    imageTTFText($image, $fontsize, 0, $x, $y, $black, $fontfile, $c);
    }

header("Content-Type: image/jpeg");
header("Content-Disposition: inline; filename=puzzle.jpg");
imagejpeg($image);

imagedestroy($image);
?>
