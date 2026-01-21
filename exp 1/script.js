// Load balance from localStorage or use default





let balance = parseFloat(localStorage.getItem("bankBalance")) || 1000;

const balanceDisplay = document.getElementById("balance-display");
const amountInput = document.getElementById("amount");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const form = document.getElementById("banking-form");

function updateBalance() {
  balanceDisplay.textContent = `$${balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  // Save to localStorage
  localStorage.setItem("bankBalance", balance);
}

// Display the loaded balance on page load
updateBalance();

function showError(message = "⚠️ Invalid amount!") {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
  successMessage.style.display = "none";
}

function hideError() {
  errorMessage.style.display = "none";
}

function showSuccess(message = "✓ Transaction successful!") {
  successMessage.textContent = message;
  successMessage.style.display = "block";
  errorMessage.style.display = "none";
}

function validateAmount(amount) {
  return amount > 0 && !isNaN(amount);
}

function handleDeposit() {
  const amount = parseFloat(amountInput.value);

  if (validateAmount(amount)) {
    balance += amount;
    updateBalance();
    showSuccess(`✓ Deposited $${amount.toFixed(2)}`);
    amountInput.value = "";
    amountInput.classList.remove("valid");
  } else {
    showError("⚠️ Please enter a valid amount!");
  }
}

function handleWithdraw() {
  const amount = parseFloat(amountInput.value);

  if (!validateAmount(amount)) {
    showError("⚠️ Please enter a valid amount!");
  } else if (amount > balance) {
    showError(`⚠️ Insufficient funds! Available: $${balance.toFixed(2)}`);
  } else {
    balance -= amount;
    updateBalance();
    showSuccess(`✓ Withdrawn $${amount.toFixed(2)}`);
    amountInput.value = "";
    amountInput.classList.remove("valid");
  }
}

// Add click event listeners
depositBtn.addEventListener("click", handleDeposit);
withdrawBtn.addEventListener("click", handleWithdraw);

// Hide error when user enters valid input
amountInput.addEventListener("input", () => {
  const amount = parseFloat(amountInput.value);
  if (validateAmount(amount)) {
    hideError();
    amountInput.classList.add("valid");
  } else {
    amountInput.classList.remove("valid");
  }
});

// Prevent form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
});