"use strict";

// ------------------------------------
// 1. SELECT DOM ELEMENTS
// ------------------------------------
// Cache the controls used to read input and update the page.
const descriptionInput = document.querySelector("#description");
const amountInput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");
const addExpenseButton = document.querySelector("#add-expense");
const resetButton = document.querySelector("#reset");
const expenseList = document.querySelector("#expense-list");
const expenseCount = document.querySelector("#expense-count");
const totalDisplay = document.querySelector("#total");
const budgetStatus = document.querySelector("#budget-status");
const message = document.querySelector("#message");

// ------------------------------------
// 2. APPLICATION DATA
// ------------------------------------
const budget = 500;
// This array is the source of truth for the displayed expense list.
let expenses = [];

// Format every displayed amount as USD with two decimal places.
const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);

// ------------------------------------
// 3. FUNCTIONS
// ------------------------------------
// Rebuild the list and refresh its summary values.
function displayExpenses() {
  // Replacing the contents avoids leaving stale or duplicate rows.
  expenseList.replaceChildren();

  if (expenses.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No expenses have been added yet.";
    expenseList.append(emptyMessage);
  } else {
    // Render one row for every expense currently stored.
    expenses.forEach((expense) => {
      const item = document.createElement("article");
      item.className = "expense-item";

      const details = document.createElement("div");
      const description = document.createElement("p");
      description.className = "expense-description";
      description.textContent = expense.description;

      const category = document.createElement("p");
      category.className = "expense-category";
      category.textContent = expense.category;

      const amount = document.createElement("p");
      amount.className = "expense-amount";
      amount.textContent = formatCurrency(expense.amount);

      details.append(description, category);
      item.append(details, amount);
      expenseList.append(item);
    });
  }

  expenseCount.textContent = `${expenses.length} ${expenses.length === 1 ? "Expense" : "Expenses"}`;
  updateTotal();
}

// Sum stored expense amounts for totals and budget checks.
function calculateTotal() {
  let total = 0;

  for (const expense of expenses) {
    total += expense.amount;
  }

  return total;
}

function updateTotal() {
  const total = calculateTotal();
  totalDisplay.textContent = formatCurrency(total);
  // Keep the budget message in sync whenever the total changes.
  updateBudgetStatus(total);
}

function updateBudgetStatus(total) {
  // Exactly the budget amount still counts as under budget.
  if (total <= budget) {
    budgetStatus.textContent = "You are under budget.";
    budgetStatus.className = "budget-status under-budget";
  } else {
    budgetStatus.textContent = "You are over budget.";
    budgetStatus.className = "budget-status over-budget";
  }
}

// Validate the form before storing a new expense.
function addExpense() {
  // Input values start as strings, so convert the amount before calculations.
  const description = descriptionInput.value.trim();
  const amountValue = amountInput.value.trim();

  // Stop at the first invalid field so incomplete expenses are never stored.
  if (!description) {
    message.textContent = "Enter a description for the expense.";
    message.className = "message error";
    return;
  }

  if (!amountValue) {
    message.textContent = "Enter an amount for the expense.";
    message.className = "message error";
    return;
  }

  const amount = Number(amountValue);

  if (!Number.isFinite(amount)) {
    message.textContent = "Enter a valid number for the amount.";
    message.className = "message error";
    return;
  }

  if (amount <= 0) {
    message.textContent = "The amount must be greater than zero.";
    message.className = "message error";
    return;
  }

  // Save the selected category before resetting the form controls.
  expenses.push({
    description,
    amount,
    category: categorySelect.value,
  });
  displayExpenses();
  // Prepare the form for another entry without clearing saved expenses.
  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
  message.textContent = "Expense added.";
  message.className = "message success";
  descriptionInput.focus();
}

// Restore the tracker and form to their initial state.
function resetApplication() {
  expenses = [];
  descriptionInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
  message.textContent = "";
  message.className = "message";
  displayExpenses();
}

// ------------------------------------
// 4. EVENT LISTENERS
// ------------------------------------
// Run these actions only in response to the matching button clicks.
addExpenseButton.addEventListener("click", addExpense);
resetButton.addEventListener("click", resetApplication);

// Show the empty list, zero total, and initial budget status on page load.
displayExpenses();