// multi-D array

function printArray() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            process.stdout.write(`${arr[i][j]} `)
        }
        console.log()
    }
}


// Dynamic Array 
function Dynamic() {
    const prompt = require('prompt-sync')()

    const size = Number(prompt("Enter the size of array: "))
    const arr = new Array(size)

    for (let i = 0; i < arr.length; i++) {
        let innerSize = Number(prompt(`Enter inner size array index-${i}: `))
        arr[i] = new Array(innerSize)
    }
    // [ [], [], [] ]

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = Number(prompt("Enter number: "))
        }
    }

    console.log(arr)
}


// Sum of Array

function sumOfArray(){
    let arr = [
        [1,2,3,4],
        [5,6,7,8],
        [1,2,3,4],
        [5,6,7,8]
    ]

    let leftSum = 0, rightSum = 0, sum = 0, n = arr.length

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++) {
            if (i == j) sum += arr[i][j]
            if(i + j == arr.length - 1) sum += arr[i][j] 
        }
    }

    if(n % 2 === 1){
        sum -= arr[Math.floor(n/2)][Math.floor(n/2)] //arr[1][1]
    }

    console.log(sum)
    // console.log(arr[Math.floor(n/2)][Math.floor(n/2)])
}

// rotate the array row --> column

function transposeMatrix() {
    // convert rows into column

    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    // let row = arr.length
    // let col = arr[0].length
    // let ans = new Array(col)

    // for(let i = 0; i < arr.length; i++) {
    //     ans[i] = new Array(row)
    // }


    // for(let i = 0; i < arr.length; i++) {
    //     for(let j = 0; j < arr[i].length; j++){
    //         ans[i][j] = arr[j][i]
    //     }
    // }

    // console.log(ans)

    let ans = Array.from({ length: arr[0].length}, () => Array(arr.length))

    for(let i = 0; i < ans.length; i++){
        for(let j = 0; j < ans[i].length; j++){
            ans[i][j] = arr[j][i]
        }
    }

    console.log(ans)
}


// Rotate Array 

function rotateArray() {
    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ] 

    for(let i = 0 ; i < arr.length; i++ ){
        for(let j = i; j < arr.length; j++){
            let temp = arr[i][j]
            arr[i][j] = arr[j][i]
            arr[j][i] = temp
        }
    }

    for(let i = 0; i < arr.length; i++){
        let k = 0, j = arr.length - 1

        while(k < j) {
            let temp = arr[i][k]
            arr[i][k] = arr[i][j]
            arr[i][j] = temp
            k++
            j--
        }
    }

    console.log(arr)
}

// Spiral matrix 

function spiral(){
    let arr = [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16]
    ]

    let cStart = 0
    let cEnd = arr[0].length - 1
    let rStart = 0
    let rEnd = arr.length - 1
    let result = []

    while(rStart <= rEnd && cStart <= cEnd){
        for(let i = cStart; i <= cEnd; i++){
            result.push(arr[rStart][i])
        }

        rStart++

        for(let i = rStart; i <= rEnd; i++){
            result.push(arr[i][cEnd])
        }

        cEnd--

        if (rStart <= rEnd){
            for(let i = cEnd; i >= cStart; i--){
                result.push(arr[rEnd][i])
            }
            rEnd--
        }


        if(cStart <= cEnd) {
            for(let i = rEnd; i >= rStart; i--){
                result.push(arr[i][cStart])
            }
            cStart++
        }
    }

    console.log(result)
}

// flipping an image 

function flipping(){
    let arr = [
        [1,1,0],
        [1,0,1],
        [0,0,0]
    ]

    for(let i = 0; i < arr.length; i++){
        let k = 0, j = arr.length - 1
        while(k < j){
            let temp = arr[i][k]
            arr[i][k] = arr[i][j]
            arr[i][j] = temp
            k++
            j--
        }
    }

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === 0) arr[i][j] = 1
            else arr[i][j] = 0
        }
    }

    console.log(arr)
}

flipping()