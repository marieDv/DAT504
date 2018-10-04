console.log(countChar("Beeeeeebb", "b"));

function countChar(word, counter){
let nmbrB = 0;
for(let i=0; i<word.length;i++){
  if(word[i] === counter){
    nmbrB ++;
  }
}
return nmbrB;
}
