let id: number = 5
let company: string = "yash"
let ispub: boolean = true
let x:any = "Hello"
let age: number

age = 20
x = true

//array
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1,true,"Yash"]

//tuple
let person: [number, string, boolean] = [1,"yash",true]

//tuple array
let employee: [number,string][]
employee = [
    [1,'Yash'],
    [2, 'Anand'],
    [3,'Mahesh'],
]

//Union
let pid: string | number 
pid = 22
pid = '22'

//enums
enum Direction1{
    Up=1,
    Down,
    Left,
    Right
}
enum Direction2{
    Up="UP",
    Down="DOWN",
    Left="LEFT",
    Right="RIGHT"
}
// console.log(Direction2.Down)

//objects
type User = {
    id:number,
    name:String
}

const user: User = {
    id:1,
    name:"yash"
}

//Type assertion
let cid: any = 1
let customerId = <number>cid
//OR
let customerId2 = cid as number
//Type assertion lets you use a variable and alter the datatype that it accepts.

//Function
function addnum(x:number,y:number): number {
    return x + y;
}

//Void type
function log(message: string | number): void {
    console.log(message)
}

//interfaces
interface usersinterface {
    readonly username:string,
    userid : number,
    age?:number
}

let user3: usersinterface = {
    username:"Yashh",
    userid:2
}
//readonly does not allow you to change properties from outside like using user3.age = 5. You cant do this now that age is just readonly


//interface function 
interface Mathfunc {
    (x:number, y: number): number
}
const add: Mathfunc = (x:number,y:number): number => x + y
const subt: Mathfunc = (x:number, y:number): number => x-y

//Classes
class Person {
     id:number
     name:string
     //these vars above can be public, private or protected
     //by default it is public

     constructor(id: number, name:string){
        this.id = id
        this.name = name
     }   

     register() {
         return `${this.name} is now registered`
     }
}

const yash = new Person(1,'Yash Vishwakarma')
console.log(yash.register())
//You can also implement interface in class


