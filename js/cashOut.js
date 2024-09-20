document.getElementById("btn-cash-out").addEventListener("click", function(event){
    event.preventDefault();

    const cashOutPin = getInputFieldValueById("input-cash-out-pin");
    const cashOutAmount = getInputFieldValueById("input-cash-out");
    // console.log("inside the click handler", cashOutAmount, cashOutPin);

    if (cashOutPin === 1234) {
        const balance = getTextFieldValueById("account-balance");
        const newBalance = balance - cashOutAmount;
        document.getElementById("account-balance").innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.innerHTML = `Cash out: ${cashOutAmount} Tk. Balance: ${newBalance}`;

        document.getElementById("transaction-container").appendChild(div);
    }
    else {
        alert ("No money for you ... DGM");
    }
})