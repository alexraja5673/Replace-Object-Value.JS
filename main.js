//sort
		let obj={
				foo:{a:"hello",b:"world"},
				bar:["example","mem",null,{xyz:6},88],
				qux:[4,8,12]
		};
		
		for (a in obj){
			obj.bar[3].xyz=606
			
		}
	
		
		console.log(obj);