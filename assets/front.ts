import "./css/front.css";

let result = document.getElementById('result') as HTMLElement;
const calculate = document.getElementById('calculate') as HTMLElement;
let go = document.getElementById('go') as HTMLElement;

let chiffre: NodeListOf<Element> = document.querySelectorAll(".elements");

let stringArray: string[] = [];

for (let i = 0; i < chiffre.length; i++) {
    chiffre[i].addEventListener('click', function ():void {

        calculate.innerHTML += chiffre[i].innerHTML + " + ";

        stringArray.push(chiffre[i].innerHTML);

        console.log(stringArray);
    })
}

go.addEventListener('click', function ():void {
    let numberArray:number[] = [];

    for(let i:number = 0 ; i<stringArray.length ; i++)
    {
        numberArray[i]= parseFloat(stringArray[i]);
    }

    let total = 0;

    for (let i:number = 0; i< numberArray.length ;i++){
        total= total+ numberArray[i];
    }

    calculate.innerHTML="";
    result.innerHTML=total.toString();

})

//
// document.getElementById('add').addEventListener('click', function () {
//     stringArray.push(calculate.innerHTML);
// })