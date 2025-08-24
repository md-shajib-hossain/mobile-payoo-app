document
  .getElementById("btn-add-money")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank-name").value;
    const accountNumber = parseInt(
      document.getElementById("bank-acc-number").value
    );
    const amount = parseInt(document.getElementById("amount").value);

    const pinNumber = parseInt(document.getElementById("pin").value);
    const currentBalance = parseInt(
      document.getElementById("current-balance").innerText
    );

    let newBalance = amount + currentBalance;
    console.log(newBalance);
    document.getElementById("current-balance").innerText = newBalance;
  });

//
// toggling features
document
  .getElementById("add-money-feature")
  .addEventListener("click", function () {
    document.getElementById("add-money-container").style.display = "block";
    document.getElementById("cash-out-container").style.display = "none";

    // document.getElementById("add-money-feature").style.backgroundColor = "red";
  });

document
  .getElementById("cash-out-feature")
  .addEventListener("click", function () {
    document.getElementById("add-money-container").style.display = "none";
    document.getElementById("cash-out-container").style.display = "block";
  });

// document
//   .getElementById("add-money-feature")
//   .addEventListener("mouseover", function () {
//     document.getElementById("add-money-feature").style.backgroundColor =
//       "lightblue";
//   });
// document
//   .getElementById("add-money-feature")
//   .addEventListener("mouseleave", function () {
//     document.getElementById("add-money-feature").style.backgroundColor =
//       "white";
//   });

//  mouse over and mouse leave function
function mouseOverOutEffect(id) {
  document.getElementById(id).addEventListener("mouseover", function () {
    document.getElementById(id).style.backgroundColor = "lightblue";
    document.getElementById(id).addEventListener("mouseleave", function () {
      document.getElementById(id).style.backgroundColor = "white";
    });
  });
}
// function ends here
mouseOverOutEffect("add-money-feature");
mouseOverOutEffect("cash-out-feature");
mouseOverOutEffect("transfer-money-feature");
mouseOverOutEffect("get-bonus-feature");
mouseOverOutEffect("pay-bill-feature");
mouseOverOutEffect("transactions-feature");
