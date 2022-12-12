const filterBtnParent = document.querySelector(".receipt-filters");
export let receiptArr = Array.from(document.querySelectorAll(".receipt"));

function handleSort(btnClass) {
  filterBtnParent.addEventListener("click", (e) => {
    if (e.target.className !== `filter-btn filter-btn-${btnClass}`) return;

    receiptArr.forEach((e) => {
      e.classList.remove("hidden-class");
      if (e.className !== `receipt ${btnClass}`) {
        e.classList.add("hidden-class");
      }
    });
  });
}

export function sortReceipts() {
  //  confirmed Receipts
  handleSort("confirmed");

  //  received Receipts
  handleSort("received");

  // All receipts
  filterBtnParent.addEventListener("click", (e) => {
    if (e.target.className !== "filter-btn filter-btn-allReceipts") return;

    receiptArr.forEach((e) => {
      e.classList.remove("hidden-class");
      if (e.className !== "receipt") {
        e.classList.remove("hidden-class");
      }
    });
  });
}
