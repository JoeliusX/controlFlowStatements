const numbers = [];
for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100));
}

let opperation = 0
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    opperation++
    if (numbers[i] > 50) {
        let reglage = (numbers.length - opperation)
        console.log("Cette amelioration à reussi à eviter "+reglage)
        break;
    }
}