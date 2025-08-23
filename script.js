console.log("script connected");

document.getElementById("btn-login").addEventListener("click", function () {
  const fixedmobileNumber = 11688356695;
  const fixedpinNumber = 1234;

  let mobileNumberValue = document.getElementById("input-mobile-number").value;

  let mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("input-pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);
  // console.log(mobileNumberValueConverted, pinNumberValueConverted);

  if (
    mobileNumberValueConverted === fixedmobileNumber &&
    pinNumberValueConverted === fixedpinNumber
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid input ");
  }
});
