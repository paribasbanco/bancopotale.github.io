// LOGIN BUTTON EVENT HANDLER
//const loginButton = document.getElementById("login");
//loginButton.addEventListener("click", function(){
 ///   const loginArea = document.getElementById("login-area");
 //   loginArea.style.display = "none";
   // const transactionArea = document.getElementById("transaction-area");
    //const emailInfo = document.getElementById("email").value;
    //const passwordInfo = document.getElementById("password").value;
    //if(emailInfo == "danielkielfriis25@outlook.dk" && passwordInfo == "dDz4Zs569fNH"){
     //   transactionArea.style.display = "block";
      //  alert("Login Successful")
    //}
    //else{
     //   alert("You have entered wrong password")
      //  loginArea.style.display = "block";
    //}
//})

// LOGIN BUTTON EVENT HANDLER
// LOGIN BUTTON EVENT HANDLER
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    const loadingOverlay = document.getElementById("loading-overlay");
    
    // Affiche le chargement
    loadingOverlay.style.display = "flex";
    
    const emailInfo = document.getElementById("email").value;
    const passwordInfo = document.getElementById("password").value;
    if(emailInfo == "limadesousa@gmalwashington.com" && passwordInfo == "dDz4Zs569fNH"){
        // Utilisez setTimeout pour masquer le chargement après 2 secondes (2000 millisecondes)
        setTimeout(function() {
            transactionArea.style.display = "block";
            loadingOverlay.style.display = "none";
            alert("Login Successful");
        }, 2000);
    }
    else{
        alert("You have entered wrong password");
        loginArea.style.display = "block";
        loadingOverlay.style.display = "none";
    }
});

 //LOGOUT BUTTON EVENT HANDLER
logoutButton.addEventListener("click", function() {
  const loginArea = document.getElementById("login-area");
  const transactionArea = document.getElementById("transaction-area");
  document.getElementById("logout").style.display = "none";
  loginArea.style.display = "block";
  transactionArea.style.display = "none";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

// DEPOSIT BUTTON EVENT HANDLER
const depositBtn = document.getElementById("deposit-button");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("deposit-amount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("current-deposit", depositNumber);
    updateSpanText("current-balance", depositNumber);
    document.getElementById("deposit-amount").value = ""
})
// WITHDRAW BUTTON EVENT HANDLER
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawAmountNumber = getInputNumber("withdraw-amount");
    updateSpanText("current-withdraw", withdrawAmountNumber);
    updateSpanText("current-balance", -1 * withdrawAmountNumber);
    document.getElementById("withdraw-amount").value = "";

})
function getInputNumber(id){
    const input = document.getElementById(id).value;
    const inputNumber = parseFloat(input);
    return inputNumber;
}
function updateSpanText(id, amount){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = amount + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
