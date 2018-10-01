<script>
let tag = ["#","\xa0\xa0"];
let board = "";
let size = 8;
let finalboardsize = size*size;

for(let i=1; i<finalboardsize; i++){
(i %2 === 0)?board += tag[0]:board += tag[1];

  if(i%size === 0){
    board += '\n';
    let temp = tag[0];
    tag[0] = tag[1];
    tag[1] = temp;
  }
}

console.log(board);
</script>
