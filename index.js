// loginBtn************************************************
    let loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", function(){
        let loginArea = document.getElementById("login-area");
            loginArea.style.display = "none";
        let transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display = "block";
    })
// depositBtn**********************************************
    let depositBtn = document.getElementById("addDeposit");
    depositBtn.addEventListener("click", function(){
        let depositNumber = getInputNumber("depositAmount")
        updateSpanText("currentDeposit", depositNumber )
        updateSpanText("currentBalance", depositNumber)
        document.getElementById("depositAmount").value = ""; 
    })
// addWithdrow**********************************************    
    let withdrowBtn = document.getElementById("addWithdrow");
    withdrowBtn.addEventListener("click", function(){
        let withdrowNumber = getInputNumber("withdrowAmount")
        updateSpanText("currentWithdraw", withdrowNumber )
        updateSpanText("currentBalance", -1 * withdrowNumber)
        document.getElementById("withdrowAmount").value = ""; 
    })
//getInputNumber**********************************************  
    function getInputNumber(id){
        let Amount = document.getElementById(id).value;
        let Number = parseFloat(Amount)
        return Number;
    }
//updateSpanText********************************************** 
    function updateSpanText(id, depositNumber){
        let current = document.getElementById(id).innerText;
        let currentNumber = parseFloat(current);
        let total = depositNumber + currentNumber;
        document.getElementById(id).innerText = total;  
    }