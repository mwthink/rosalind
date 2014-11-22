<?php
	$string=file_get_contents('data.txt');
	$codons = array("UUU","UUC","UUA","UUG","UCU","UCC","UCA","UCG","UAU","UAC","UAA","UAG","UGU","UGC","UGA","UGG","CUU","CUC","CUA","CUG","CCU","CCC","CCA","CCG","CAU","CAC","CAA","CAG","CGU","CGC","CGA","CGG","AUU","AUC","AUA","AUG","ACU","ACC","ACA","ACG","AAU","AAC","AAA","AAG","AGU","AGC","AGA","AGG","GUU","GUC","GUA","GUG","GCU","GCC","GCA","GCG","GAU","GAC","GAA","GAG","GGU","GGC","GGA","GGG");
	$aminoAcids = array("F","F","L","L","S","S","S","S","Y","Y","","","C","C","","W","L","L","L","L","P","P","P","P","H","H","Q","Q","R","R","R","R","I","I","I","M","T","T","T","T","N","N","K","K","S","S","R","R","V","V","V","V","A","A","A","A","D","D","E","E","G","G","G","G");

	foreach(str_split($string,3) as $codon){
		echo str_replace($codons, $aminoAcids, $codon);
	}
?>
