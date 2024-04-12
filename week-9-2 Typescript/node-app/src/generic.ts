function generic<M>(arg: M) {
    console.log(arg);
}

let output1 = generic<string>("aditya");
let output2 = generic<number>(22);


function getFirstElement<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement<string>(["harkiratSingh", "ramanSingh"]);
console.log(el.toLowerCase())