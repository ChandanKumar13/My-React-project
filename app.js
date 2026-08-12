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
    alert(`Hi!`)
}