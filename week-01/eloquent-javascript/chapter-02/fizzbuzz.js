let nmbr = 1;
for(let i=0; i<100; i++){
	if((nmbr %3 === 0) && (nmbr %5 === 0)){
      document.write("FizzBuzz" +"<br>");
  }else if(nmbr %3 === 0){
	    document.write("Fizz" +"<br>")
  }else if(!(nmbr %3 === 0) && nmbr %5 === 0){
      document.write("Buzz" +"<br>")
  }else{
      document.write(nmbr +"<br>");
  }
  nmbr ++;
}
