// console.log("login file added")
// need to stop form submit reloading the page

document.getElementById("button-login").addEventListener("click",function(event){
    event.preventDefault(); // < --- Vejal to beginners

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber);
    console.log(pinNumber);

    // validate phone and PIN
    if (phoneNumber === "5" && pinNumber === "1234"){
        console.log("Your are logged in");
        window.location.href = "./home.html";
    }
    else{
        alert ("Wrong phone number or PIN");
    }

})