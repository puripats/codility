function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let current = 0
    let result = []
    if(A.length>1){
    A.sort()
    result.push(A[0]);
        for (let i=1;i<A.length;i++) {
    	if (result[current] !== A[i]) {
      	result.push(A[i]);
        current++;
      }
    }
    }
    return result.length
}

// test case 100%