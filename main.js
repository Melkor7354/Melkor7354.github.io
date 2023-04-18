function fibonacci(n) {
    const fibonacci_1=[]
    for (let i=0; i<=n; i++) {
        if (i ===0) {
            fibonacci_1[i]=0
        }
        if (i ===1) {
            fibonacci_1[i]=1
        }
        if (i > 1) {
            fibonacci_1[i]=fibonacci_1[i-1]+fibonacci_1[i-2]
        }
    }
    console.log(fibonacci_1)
}
function bubblesort(arr) {
    let n = arr.length
    for (let i=0; i<=n-1; i++) {
        for (let j=0; j<=n-1; j++) {
            if (arr[j]>arr[j+1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
function Change() {
    window.location.href="'www.youtube.com'"
}
function alternate(str) {
    let n = str.length
    let new_str = ""
    for (let i=0; i<n; i++) {
        if (i%2===0) {
            if (str[i]!=str[i].toUpperCase()) {
                new_str+=str[i].toUpperCase()
            }
            else {
                new_str+=str[i]
            }
        }
        else {
            if (str[i]!=str[i].toLowerCase()) {
                new_str+=str[i].toLowerCase()
            }
            else {
                new_str+=str[i]
            }
        }
    }
    console.log(new_str)
}
alternate("Eklavya")