function myComponent(){
    return(
        <button>
            this is my button!
        </button>
    );
}

export default function myApp(){    
    return(
        <div>
            <h1>
                this is a heading!
            </h1>
            <myComponent/>
        </div>
    );
}

export function sayHi(user){
    alert(`Hi! ${user}`);
}

const add = (a, b)=>{
    const result=a+b;
    return result;
}

function greet(user){
    return `Hello ${user}!`;
}

const greet=name=>{
    return `Hi  there`;
}

const funcAdd=(a, b)=>a+b;

const squareNum=a=>a*a;

const nums=[1,2,3,4,5];
const doubled=nums.map(n=>n*2);

const evens=nums.filter(n=>n%2===0);

const marks=[10,20,30,50];
const filteredMarks=marks.filter(n=>n>20);
console.log(filteredMarks);

const student={
    name:"John", 
    age=23, 
    course="Btech"
}

const {user_name, user_age, user_course}=student;
console.log(user_name, user_age, user_course);

//array destructuring
const arr=["red", "blue", "pink"];
const [color1, color2, color3]=arr;

console.log(color1, color2, color3);

//async, await, promise, resolve
function delay(){
    return new Promise(resolve=>{
        setTimeout(resolve, 3000);
    })
}

async function run(){
    console.log("task 1 completed!");
    delay();
    //following function gets fired after 3 seconds
    console.log("task 2 completed!");
}
run();

delay().then(()=>{
        console.log("Fired after 3 seconds");
    }
)

const delayedBy=(ms)=>new Promise(resolve=>setTimeout(resolve, ms));
delayedBy(6000);

//shallow copy
const original={a:1, nested:{b:2}};
const copied={...original};
console.log(copied.nested.b);

//deep copy
const obj={
    a:1,
    nested:{l:3}, 
    fn:()=>{}, 
    date:new Date(),
};

const deep=JSON.parse(JSON.stringify(obj));

//in case of referencing to the value of an object inside an object, refer to the original object
console.log(original.nested.l);
console.log(deep.fn);
console.log(typeof(deep.date));