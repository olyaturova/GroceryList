const button = document.querySelector("#btn");
button.addEventListener("click", calculateAmount);

const buttonTip = document.querySelector("#addTip");
buttonTip.addEventListener("click", showTip);

function showTip(e) {
  e.preventDefault(); 
  tip.style.display = "block";
}


function calculateAmount(e) {
   e.preventDefault(); 
   let billInput = document.querySelector("#bill").value;
  // let bill = billInput.replace(',', '.')
   const people = document.querySelector("#people").value;
   const tip = document.querySelector("#tip").value;


  if (billInput === "" || people === "") {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Please enter your information!'
    })
  }

//Формулы
  let amountPerPerson = billInput/ people;
  let tipPerPerson = (billInput * tip) / people;
  let totalSum = amountPerPerson + tipPerPerson;

//toFixed()
amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);


 //Показываем в приложении

 document.querySelector("#dividedBill").textContent = amountPerPerson;
 document.querySelector("#dividedTip").textContent = tipPerPerson;
 document.querySelector("#billAndTip").textContent = totalSum;
}

