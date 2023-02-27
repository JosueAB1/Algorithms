function Bubble_Sort(A){
    for( var i = 0; i < A.length-1; i++){
        for(j = 0; j < (A.length-i-1); i++){
            if(A[j] > A[j+1]){
                var k = A[j]
                A[j] = A[j+1]
                A[j+1] = k
            }
        }
    }
    console.log("Array after sorting: ", A);
}

var A = [7,2,5,1,6,3]
console.log("Array before sorting: ", A)
Bubble_Sort(A)