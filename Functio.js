//function
let sum=(x,y)=>x*y;
console.log(`sum is ${sum(12,3)}`)

let mult=(a,b=2)=>a*b;
console.log(`result is ${mult(12)}`)

let multiply=(x,y)=>x/y;
console.log(`multiply is ${multiply(20,4)}`)

let restfunction=function(...arg){
    let sum=0;
    for(value of arg)
    sum+=value;
    return sum;
}

console.log(`sum is ${restfunction(1,4,6,6,8,5,2,8,3,7)}`)

//Arry 
let fullName=['Yahye','Ali']
console.log('fullName '+fullName)
let [firstname,lastname]=fullName;
console.log(`your first name is ${firstname}`)
console.log(`Your last name is ${lastname}`)
const user={
    iD:'C119004',
    UserName:'admin'
}
const{iD,UserName}=user;
console.log('id:'+iD)
console.log('username: '+UserName)