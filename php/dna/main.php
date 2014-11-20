<?php
	$string=file_get_contents('data.txt');
	$aCount=substr_count($string,"A");
	$cCount=substr_count($string,"C");
	$gCount=substr_count($string,"G");
	$tCount=substr_count($string,"T");
	echo $aCount." ".$cCount." ".$gCount." ".$tCount;
?>
