const filterBtnParent = document.querySelector(".filters");
export let billsArr = Array.from(document.querySelectorAll(".bill"));

function handleSort(btnClass) {
  filterBtnParent.addEventListener("click", (e) => {
    if (e.target.className !== `filter-btn filter-btn-${btnClass}`) return;

    billsArr.forEach((e) => {
      e.classList.remove("hidden-class");
      if (e.className !== `bill ${btnClass}`) {
        e.classList.add("hidden-class");
      }
    });
  });
}

export function sortBills() {
  //   Unpaid bills
  handleSort("unpaid");

  //   processing bills
  handleSort("processing");

  //   Paid bills
  handleSort("paid");

  // All bills
  filterBtnParent.addEventListener("click", (e) => {
    if (e.target.className !== "filter-btn filter-btn-all") return;

    billsArr.forEach((e) => {
      e.classList.remove("hidden-class");
      if (e.className !== "bill") {
        e.classList.remove("hidden-class");
      }
    });
  });
}
