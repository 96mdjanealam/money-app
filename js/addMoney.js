console.log("add money loaded")
document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();
    
    console.log("add money button clicked")
    // const addMoney = getInputFieldValueById();
    // console.log ("add money value is", addMoney); 

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById("input-pin-number");
    console.log(addMoney, pinNumber);
})
