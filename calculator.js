
function calculateTip(){
    //getting the inputs 

let price = document.getElementById("price").value;
let tip = document.getElementById("tipPrecentage").value;

console.log(price);
console.log(tip);

//divide the number so it's in decimal point
let tipPrecentage = tip / 100;
console.log(tipPrecentage);
//multiply the price of the meal by the tip precentage that was calculated above
let tipamount = price * tipPrecentage;
//formatting to only show 2 decimal points
tipamount = tipamount.toFixed(2);
console.log(tipamount);
numOfPeople(tipamount);
}

function clearTxt(){
     document.getElementById("price").value = "";
     document.getElementById("tipPrecentage").value = "";
     document.getElementById("numofPeople").value = "";
}

function numOfPeople(amount){
    let numOfPeople = document.getElementById("numofPeople").value;
    let numAmount = amount / numOfPeople; 
    console.log(numAmount);
    return numAmount;
}
