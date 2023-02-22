function Linear_Search(A, val){
    for(let i = 0; i < A.length; i++){
        if(A[i] === val){
            console.log("El número se encuentra en la posición: ", i)
            return i;
        }
    }
    return null
}

A = [9, 4, 7, 3, 2, 5, 1]
Linear_Search(A, 10)