const str = 'GCCCCTTGGAGGAAGTGGGAATATTGGTTCAGACGGGCAGTCATACCCGTCGACGTTCAAGGGTCCATCATCCACCGCGAAATCGCTGCGAACTACAATGATAGGACTTGGTGCCTATGGCACAATTAGATTAAGACGTTGTAGAAGCTCAGACTGTTGCCTTTGAGCATCTGCCGCGAAACTAAGAACCGCGTATCTGGTAGAATACATCCTCTGGGGTCTGGTGTGCAACAAGACCTCCGTCAGAGTATGGCAGGTGCCCCCGTTATACCTTCCCTAATTTCGACAGTGGCCGTGAGTCAGCCCGGGGGTCCACAGAGTGTTTTTTAATGGGCACCCGATGGCTGTGACCAGTGTAATTATAACGTTATCCTGCTTTGTGCGCTCTTGCGAACGACTGCTTGCCTTCGGGAAGAACAGAGGGGGGCCATCTATGTGGGAGCGCAGCTTCGTATAGGAGATCCAAGTGCATTGGTAGCGGATCCCATAACAGATCTTATGAGGGTAATAGATTAGAACGGCGCTTTGTTAACGGTCAGTGCCTCCTATGATTTGAGTAGTGATTTGGTAGCTTGCGGACAATACGAGCATCGCCGATGCAGTGATCCTTACAGTGGCATGCGCACCAACCTGCCGCATGCACACGCCAATTTGCAACGGCTCAGATCACCCACCCTTTAAAGCGTTGGCGGAGCTTAGTACGTGACCTAGCAGAGGGTATGCGGACCCCTTCCAAGCCTTATAAGTGGGTGGAATTTTCGCGAGAATATTAGTTAAGCAAGGAAAAGACATAACCACAATGTCCCTTCCCTCTAAAGGGCAAGGTGTCATGCCTAGAAAGTCCCGAAGTAGTGGATGGTTTCCGCGGCCGGTACCCAAGAATTAAAGACAACATGCTTATGTTGTTACATTAAGCACGCATGCAAGT';
const res = str.split('').map((char)=>{
  if(char === 'T'){return 'U';}
  return char;
}).join('');

console.log(res);
