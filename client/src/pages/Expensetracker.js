import React from "react";
import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { TransactionList } from "../components/TransactionList";
import { AddTransaction } from "../components/AddTransaction";
import { GlobalProvider } from "../context/GlobalState";
import "./Expensetracker.css";
function Expensetracker() {
  //function logout
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  return (
    <GlobalProvider>
      <Header />
      <div className="container2">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <button className="form__button2" onClick={(e) => logout(e)}>
          Logout
        </button>
      </div>
    </GlobalProvider>
  );
}

export default Expensetracker;
