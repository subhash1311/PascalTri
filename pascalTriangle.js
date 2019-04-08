function pascalTriangle(count) {
    var first = [1];
	var second = [1,1];
    
	if (count == 0) { 
		console.log('');
		return;
	} else if (count == 1) { 
		console.log(first[0]); 
		return;
	}
	
	var str = new Array(count).join(' ');
	console.log(str + first[0]);

	str = new Array(count-1).join(' ');
	console.log(str + second[0] + " " + second[1]);
	
    var prev = second;

    for (var i = 1; i < count - 1; i++) {
        var row = [];
        row.push(1);
		let val = prev[0];
        for (let j = 1; j < prev.length; j++) {
			var next = prev[j];
            row.push(val + next);
			val = next;
        }
        row.push(1);
		str = new Array(count-i-1).join(' ');
		for(var k=0; k<row.length; k++) {
			str += row[k] + " ";
		}
		console.log(str);
        prev = row;
    }
}

pascalTriangle(5);