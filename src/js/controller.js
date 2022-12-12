import * as billView from "./views/billsView.js";
import * as receiptView from "./views/receiptView.js";
import * as homeView from "./views/homeView.js";
4;
import * as model from "./model.js";

// This calls the method of the homeView
homeView.toggleView();

// This sorts the bills view
billView.sortBills();

// This sorts the receipt view
receiptView.sortReceipts();
