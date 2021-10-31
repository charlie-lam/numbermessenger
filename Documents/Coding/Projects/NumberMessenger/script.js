const numbMessenger = () => {
    const num1arr = [0,1,2,3,4,5]
    const num2arr = [0,1,2,3,4,5]
    const num3arr = [0,1,2,3,4,5]
    let num1 = num1arr[Math.floor(Math.random()*num1arr.length)]
    let num2 = num2arr[Math.floor(Math.random()*num2arr.length)]
    let num3 = num3arr[Math.floor(Math.random()*num3arr.length)]
    console.log(`Random ${num1}, next up ${num2} and finally ${num3}.`)
}

numbMessenger();