<?php
	$string=strrev(file_get_contents('data.txt'));
	foreach(str_split($string) as $symbol){
		if($symbol=="A"){
			echo "T";
		}
		if($symbol=="T"){
			echo "A";
		}
		if($symbol=="C"){
			echo "G";
		}
		if($symbol=="G"){
			echo "C";
		}
	}
?>
