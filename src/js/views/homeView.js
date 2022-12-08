import * as model from "../model.js";

export let billsSection = document.querySelector(".Bills");
const receiptSection = document.querySelector(".Receipts");
const billBtn = document.querySelector(".bill-menu");
const receiptBtn = document.querySelector(".receipt-menu");

// This function toggles the homeView.

export function updateStateObject(section) {
  model.state.currentView = section;
}

export function addUI(section, btn) {
  section.classList.add("hidden-class");
  btn.classList.add("Btn-color");
}

export function removeUI(section, btn) {
  section.classList.remove("hidden-class");
  btn.classList.remove("Btn-color");
}

export function toggleView() {
  [billBtn, receiptBtn].forEach((e) => {
    e.addEventListener("click", (e) => {
      const trimmedText = e.target.textContent.replace(/\s/g, "");

      if (trimmedText == "Bills") {
        addUI(receiptSection, billBtn);

        removeUI(billsSection, receiptBtn);

        updateStateObject(billsSection);
      } else {
        addUI(billsSection, receiptBtn);

        removeUI(receiptSection, billBtn);

        updateStateObject(receiptSection);
      }
    });
  });
}
