const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const button = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var returnNotes = document.querySelectorAll(".returnNotes")
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]

function clickHandler(){
    hideMEssage ()
   if (billAmount.value > 0) {

    console.log(typeof(cashGiven.value),"cashGiven.value");

    const cashGivenNumber = Number(cashGiven.value);
    const billAmountNumber = Number(billAmount.value);

    console.log(billAmount.value, 'billAmount.value')
    
        if (cashGivenNumber >= billAmountNumber){
            const amountToBEReturned = cashGivenNumber - billAmountNumber;
            console.log(amountToBEReturned);
            console.log(typeof(cashGiven.value),"cashGiven.value")
            returnChange(amountToBEReturned);
        } else {
            errorMessage("‼ cash given is less than the bill amount")
        }
    } else {
        errorMessage ("❌ invalid bill input");
    }
    
}

function hideMEssage (){
    message.style.display = "none"
}

function returnChange(amountToBEReturned){
    for (let i=0 ; i < notes.length ; i++) {
        const numberOfNotes = Math.trunc(amountToBEReturned / notes[i]);
        amountToBEReturned = amountToBEReturned % notes[i];
        returnNotes[i].innerText = numberOfNotes;
    }
}

function errorMessage (msg){
    message.style.display="block";
    message.innerText = msg 
}



button.addEventListener("click", function clickHandler(){
    console.log("clicked");
    hideMEssage ()
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value){
            const amountToBEReturned = cashGiven.value - billAmount.value;
            console.log(amountToBEReturned);
            returnChange(amountToBEReturned);
        } else {
            errorMessage("!! cash given is less than the bill amount !!")
        }
    } else {
        errorMessage ("❌ invalid bill input");
    }
    
});