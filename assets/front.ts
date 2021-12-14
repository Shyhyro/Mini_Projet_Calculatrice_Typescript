let result = document.getElementById('result');
const calculate = document.getElementById('calculate');
let go = document.getElementById('go');

let chiffre = document.querySelectorAll(".elements");

let stringArray = [];

for (let i=0; i<chiffre.length; i++) {
    chiffre[i].addEventListener('click', function () {

        calculate.innerHTML += this.innerHTML + " + ";

        stringArray.push(this.innerHTML);

        console.log(stringArray);
    })
}

go.addEventListener('click', function () {
    let numberArray=[];

    for(let i=0; i<stringArray.length ; i++)
    {
        numberArray[i]= parseFloat(stringArray[i]);
    }

    let total = 0;

    for (let i =0; i< numberArray.length ;i++){
        total= total+ numberArray[i];
    }

    calculate.innerHTML="";
    result.innerHTML=total.toString();

})

//
// document.getElementById('add').addEventListener('click', function () {
//     stringArray.push(calculate.innerHTML);
// })