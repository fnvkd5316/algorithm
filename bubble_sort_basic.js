function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++){
        if( arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }
    
    // if (answer.length === 0) {
    //     answer.push(-1)
    // }else{
    //     answer.sort((a, b)=>(a-b))
    // }
    // answer.length === 0 ? answer.push(-1) : answer.sort((a, b)=>(a-b))
    
    answer.length === 0 ? answer.push(-1) : my_sort(answer)
    
    return answer
}

function my_sort(arr){
    
    for (let i = 0; i < arr.length-1; i++){
        for (let j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j+1]) {
                // let temp = arr[j]
                // arr[j] = arr[j+1]
                // arr[j+1] = temp 
                
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]] //구조분해 할당 javascript 기능!!
                
            }
        }
    }
}