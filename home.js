document.getElementById("btn-add-money").addEventListener("click", function () {
  const bankAcc = 12345678910;
  const pinNumber = 1234;
  const amount = parseInt(document.getElementById("amount").value);
  const amountConverted = parseInt(amount);
  const pin = parseInt(document.getElementById("pin").value);
  const bankAccNumber = parseInt(
    document.getElementById("bank-acc-number").value
  );
  let taka = document.getElementById("current-balance").innerText;
  if (bankAccNumber === bankAcc && pin === pinNumber) {
  } else {
    alert("invalid ");
  }
});
