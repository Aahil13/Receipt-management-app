const filterBtnParent = document.querySelector(".filters");
export let billsArr = Array.from(document.querySelectorAll(".bill"));
let btnArr = document.querySelectorAll(".filter-btn");

function toggleBtn(btnClass) {
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

export function togglebillView() {
  //   Unpaid bills
  toggleBtn("unpaid");

  //   processing bills
  toggleBtn("processing");

  //   Paid bills
  toggleBtn("paid");

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
