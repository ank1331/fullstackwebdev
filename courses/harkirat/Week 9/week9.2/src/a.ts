


// function displayhello (mynamenew:String):String{
//     return (`hello ${mynamenew}`)
// }
// // const myname:String = "ankit"

import { generatePath } from "react-router-dom"

// console.log(displayhello("coffee"))


// Funtion that calculates the sum of two numbers

// function sum(a:number, b:number):number{

//     return a+b

// }

// console.log(sum(3,4))


// age calculator


// function agecalc(age:number):Boolean{
//     if(age>18){
//         return true
//     }
//     else{
//         return false
//     }
// }

// const newage:Boolean = agecalc(20)

// console.log(`Ram is above 18 ${newage}`)












// create a function that take another function as input and runs it after 1 sec

// function mainfunc(newfunc:()=>String){
//     setInterval(()=>{
//         console.log(newfunc())
//     }, 1000)
// }



// function showname():string{
//     return "my name is Ankit"
// }

// mainfunc(showname)

// interface User{
//     firstName:String,
//     lastName: String,
//     age:number,
//     email?:String
// }


// function isLeagel(user:User){
//     if(user.age>18){
//         return "User is Leagel"
//     }
//     else{
//         return "user is not leagel"
//     }
// }

// const user = {
//     firstName:"ankit",
//     lastName:"Sharma",
//     age:19
// }

// console.log(isLeagel(user))




// interface Person {
//     firstName: string,
//     lastName:string,
//     age:number,
//     greet(phrase:string):void
// }

// class Employee implements Person{
//     firstName:string;
//     lastName:string;
//     age:number;

//     constructor(f:string, l:string, a:number){
//         this.firstName= f;
//         this.lastName = l;
//         this.age = a

//     }

//     greet(phrase: string): void {
//         console.log(`the name of the person is ${this.firstName} ${this.lastName} and the age is ${this.age}`)
//     }
// }

// const greetnow = new Employee( "ankit", "sharama", 31)

// greetnow.greet("hello")


// type User = {
//     firstName:string,
//     lastName:string,
//     age:number
// }

// type greet = number|string
// export function newuser (age:greet){

// }

// newuser(1)
// newuser("!")


// Intersection

// type Employee = {
//     firstName:string,
//     age:number
// }

// interface Manager {
//     lastname:string,
//     role?:Date
// }

// type ankit = Employee & Manager

// const sirji:ankit = {
//     firstName:"adasda",
//     lastname:"sdas",
//     age:31,
//     // role:"1/11/2023"
// }



// type numberval = number[]

// function gratestnum(num:numberval){
//     for (let index = 0; index < num.length; index++) {
//         if(num[index]>10){
//             console.log(num[index])
//              console.log(`the greatest num is ${num[index]}`)
//         }

        
//     }
//     // console.log(" there is no greatest number")
// }

// gratestnum([1,2,3,11])



// interface User {
//     fname:string,
//     lname:string,
//     age:number
// }

// function userage(user:User[]){
//     return user.filter(x=>x.age>18)
// }

// const newname = userage([{
//     fname:"Ankit",
//     lname:"sha",
//     age:31
// },{
//     fname:"Anksit",
//     lname:"shsa",
//     age:17
// }])

// console.log(newname)

// type buttonvalue = "up"|"down"|"right"|"left"

// enum direction {
//     up,
//     down,
//     right,
//     left
// }


// function konsabutton(diyahai:direction){
//     if(diyahai=== direction.up){

//     }
// }

// konsabutton(direction.left)
// konsabutton(direction.up)
// // konsabutton("das")

type valuedihai = string | number

function levalue<T>(args:T[]):T{
    return args
}

const firstval = levalue<string>(["hello", "sdas"])