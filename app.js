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