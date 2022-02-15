 // input field function
 function getInputValue(inputId) {
     debugger;
     const inputField = document.getElementById(inputId);
     const inputAmountText = inputField.value;
     const amountValue = parseFloat(inputAmountText);
     // clear input field
     inputField.value = '';
     return amountValue;
 }
 
 function updateTotalField(totalFieldId, amount) {
     // debugger;
     const totalElement = document.getElementById(totalFieldId);
     const totalText = totalElement.innerText;
     const previousTotal = parseFloat(totalText);
     totalElement.innerText = previousTotal + amount;
 }
 
 function getCurrentBalance() {
     const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
     return previousBalanceTotal;
 }
 
 function updateBalance(amount, isAdd) {
     const balanceTotal = document.getElementById('balance-total');
     const previousBalanceTotal = getCurrentBalance();
     if (isAdd == true) {
         balanceTotal.innerText = previousBalanceTotal + amount;
     }
     else {
         balanceTotal.innerText = previousBalanceTotal - amount;
     }
 }
 
 document.getElementById('deposit-button').addEventListener('click', function () {
     const depositAmount = getInputValue('deposit-input');
     if (depositAmount > 0) {
         updateTotalField('deposit-total', depositAmount);
         updateBalance(depositAmount, true);
     }
 });
 
 // handle withdraw button 
 document.getElementById('withdraw-button').addEventListener('click', function () {
     const withdrawAmount = getInputValue('withdraw-input');
     const currentBalance = getCurrentBalance();
     if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
         updateTotalField('withdraw-total', withdrawAmount);
         updateBalance(withdrawAmount, false);
     }
     if (withdrawAmount > currentBalance) {
         console.log('You can not withdraw more than what you have in your account');
     }
 });



















/* 
// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
     // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText  = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
     
     // update deposit total
    const depositTotal  = document.getElementById('deposit-total');
    const depositTotalPreviousText = depositTotal.innerText;
    const depositTotalPreviousAmount = parseFloat(depositTotalPreviousText);
    const newDepositTotal =  newDepositAmount + depositTotalPreviousAmount;

    depositTotal.innerText= newDepositTotal ;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalPreviousText = balanceTotal.innerText;
    const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);
    const newBalanceTotal = newDepositAmount + balanceTotalPreviousAmount;
    balanceTotal.innerText = newBalanceTotal;

     // clear the deposit input field
    depositInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
     // get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);

      // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount =parseFloat(withdrawTotalText);
    const newWithdrawTotal = withdrawInputAmount + withdrawTotalAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalPreviousText = balanceTotal.innerText;
    const balanceTotalPreviousAmount = parseFloat(balanceTotalPreviousText);
    const newBalanceTotal = balanceTotalPreviousAmount - withdrawInputAmount  ;
    balanceTotal.innerText = newBalanceTotal;

     // clear the deposit input field
     withdrawInput.value = '';
}); */