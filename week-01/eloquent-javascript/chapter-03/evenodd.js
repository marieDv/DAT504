<script>
console.log(isEven(50));

function isEven(nmbr){
	if(nmbr > -1 && Number.isInteger(nmbr)){
		let x = nmbr;
		if(x === 0){
			return true;
		}else if(x === 1){
			return false;
		}else {
			return isEven(x - 2);
		}
	}else{
		return "Err: please add a valid number!";
	}
}
</script>
