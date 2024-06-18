document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("calculateButton");
  console.log("Button found: ", button);
  button.addEventListener("click", calculatePayment);
});

function calculatePayment() {
  console.log("Button clicked");

  const principal = parseFloat(document.getElementById("principal").value);
  const yearlyRate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);

  console.log(
    `Principal: ${principal}, Yearly Rate: ${yearlyRate}, Years: ${years}`
  );

  if (isNaN(principal) || principal <= 0) {
    alert("Please enter a valid principal amount.");
    return;
  }
  if (isNaN(yearlyRate) || yearlyRate <= 0) {
    alert("Please enter a valid yearly interest rate.");
    return;
  }
  if (![10, 15, 30].includes(years)) {
    alert("Please select a valid mortgage length.");
    return;
  }

  const monthlyRate = yearlyRate / 1200;
  const numberOfPayments = years * 12;

  console.log(
    `Monthly Rate: ${monthlyRate}, Number of Payments: ${numberOfPayments}`
  );

  const numerator = principal * monthlyRate;
  const denominator = 1 - Math.pow(1 + monthlyRate, -numberOfPayments);
  const monthlyPayment = numerator / denominator;

  console.log(`Monthly Payment: ${monthlyPayment}`);

  const formattedPayment = monthlyPayment.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  document.getElementById("monthlyPayment").textContent = formattedPayment;
}
