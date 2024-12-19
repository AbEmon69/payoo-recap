document.getElementById('btn-add-money')
.addEventListener('click',function(event){
    event.preventDefault();
   
   const addMoney =document.getElementById('input-add-money').value ;
   const addMoneyInput = parseFloat(addMoney);
   const pinNumber = document.getElementById('input-pin-number').value ;
   console.log(pinNumber,addMoney)
    // wrong way to verify pin number
    if(pinNumber ==='1234'){
           const balance = document.getElementById('account-balance').innerText;
           const balanceInput = parseFloat(balance);

           const newBalance = addMoneyInput + balanceInput ;

           document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money please try again later')
    }
})