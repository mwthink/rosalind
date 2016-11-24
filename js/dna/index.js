const str = 'GGCCGGGCCCAGGTCAGTTACTACCCTAGGACGGGTCAGGTTGGGCATCCCGAACGCGACCCGACAACCAATACCAATCCCATTACTCTCATCTCCACGTTCTTATTTGTGAAGGAGTGGGTGGTGTCTCCGAAAGCGGCTAACTCACCATTATATGGTGGACGGCAACGGACGGGTTTCGAACGGTGGGAACATAGGACCCAAAGTCTTCAACGGAGGGAAGCAGTTGCAAGATCTATGCCGGTGGTCTAAGCACAAATATCTAGAGCGTCGAATCATCATGGAATCCAGTGTAAGTTTGATAGCACTTCAGATTCTGAGGCGTAATATCGATCGTTTCTGCCCAAGCAGTTGTTTATAATCTCCGAAGGCCCCTCAACGCCGAATAAACGTCTTAGCCGGGGACCACGGGCATCATGACCTGTGGATTATTGTACCACGTCAGATGTCACGGGAATGGCATGGCCTGACATACAAAAAATGATGTGTTAGCTAAATAAAGCGTGACTTATTGCGCGATGCTTCCTACTCCCCAGATATCTGAAAAGGTTCTCGACACCCAACCTGAAGCACAATGGAAAATTAAAAACCACCAACACACACCATTGAAGATACCGCTGCCTGGACTGTAACTACGGGGGTTCCCCGGAATCGCCTCTCATTCGTGACTGGAAACATTCCATTAGCGATTATCCTATAAGTCGCACCAGACGGTATGTCGACAGGCTAGAACCAAAGAGTCACCACTAGCGTGTCAGAGTTCTATTTTGCCAGCCTCCATGTTGTAGAAGTGAAAACCGAATAGTATTCAAACAGTGCTAGACTATGTTCCTCCGGATAAGAGACGCCTGGGCATGATTAACAGGGAAGCAGCATCCGCGCTTGATTGCTATAACAGTCGTAATGAATCGCGGGTATTGGCTGGATCTAGGTAATAATCCGCACTCTGATCTATAGCGGTTACTAGAGCCGTTGTGACTAGGGCAGGAAC';
const res = str.split('').reduce((result,char)=>{
  if(!result[char]){result[char] = 0;}
  result[char] = result[char]+1;
  return result;
},{});

console.log(res.A,res.C,res.G,res.T);
