function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    for (let i=0;i<A.length;i++) {
    	for(let j=i+1;j<A.length;j++) {
      	for(let k=j+1;k<A.length;k++) {
        	if (
          A[i]+A[j]>A[k] && 
          A[j]+A[k]>A[i] && 
          A[k]+A[i]>A[j]) {
          	return 1
          }
        }
      }
    }
    return 0;
}

//test case 75%


function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  A.sort(function(a, b) { return a - b; });
  console.info(A);
  for (let i=0;i<A.length-2;i++) {
    if (
        A[i]+A[i+1]>A[i+2] && 
        A[i+1]+A[i+2]>A[i] && 
        A[i+2]+A[i]>A[i+1]) {
      return 1
    }
  }
  return 0;
}