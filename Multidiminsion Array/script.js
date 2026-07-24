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

function transposeMatrix() {
    // convert rows into column

    let arr = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]

    let row = arr.length
    let col = arr[0].length
    let ans = new Array(col)

    for(let i = 0; i < arr.length; i++) {
        ans[i] = new Array(row)
    }


    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++){
            ans[i][j] = arr[j][i]
        }
    }

    console.log(ans)
}

transposeMatrix()
