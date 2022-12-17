function reverse(str){
let newString = ''
for (let i = str.length - 1; i>=0; i--){
    newString += str[i]
}
    console.log(newString)
    }
    reverse('Привет')

function getMidArg(...args){
    console.log(args.reduce((a, b) => (a + b)) / args.length);
}
getMidArg(5, 7, 8, 9, 6, 7, 5, 4, 3, 2, 1)
