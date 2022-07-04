function solution(A) {
let maxNum
let firstCase
let secondCase
A.sort(function(a, b) { return a - b; });
if (A[0]<0 && A[1]<0) {
    firstCase = ((A[0])*(A[1])*(A[A.length-1]))
  secondCase = ((A[A.length-3])*(A[A.length-2])*(A[A.length-1]))
      if (firstCase > secondCase) {
      maxNum = firstCase
  } else {
      maxNum = secondCase
  }
} else {
maxNum = ((A[A.length-3])*(A[A.length-2])*(A[A.length-1]))
}
return maxNum;
}
//test case = 100%


