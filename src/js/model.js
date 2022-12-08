import * as togglebillView from "./views/billsView.js";
import * as homeView from "./views/homeView.js";

// State object

export const state = {
  walletAmount: 0,
  currentView: document.querySelector(".Bills"),
  bills: togglebillView.billsArr,
};
