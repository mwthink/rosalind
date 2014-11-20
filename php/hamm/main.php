<?php
	function hammingDistance($stringA, $stringB){
		if(strlen($stringA)!=strlen($stringB)){
			return false;
		}
		$stringC=str_split($stringA);
		$stringD=str_split($stringB);
		$count=0;
		for ($i = 0; $i < strlen($stringA); $i++) {
			if($stringC[$i]!=$stringD[$i]){
				$count++;
			}
		}
		return $count;
		
	}
	$string=explode("\n",file_get_contents('data.txt'));
	echo hammingDistance($string[0],$string[1]);
?>
