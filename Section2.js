import React from "react";
import "./section2.css";

function Section2({ incomeData = [], expenseData = [] }) {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  // 수입 항목의 합계 계산
  const totalIncome = incomeData.reduce(
    (total, item) => total + (parseFloat(item.income) || 0),
    0
  );
  const totalExpense = expenseData.reduce(
    (total, item) => total + (parseFloat(item.expense) || 0),
    0
  ); //item은 현재 배열 요소들을 의미

  return (
    <div className="section2-content">
      <h2>Summary</h2>

      <table id="income_list">
        <thead>
          <tr>
            <th>구분</th>
            <th>항목</th>
            <th>수입금액</th>
            <th>지출금액</th>
          </tr>
        </thead>
        <tbody>
          {incomeData.map((item, index) => (
            <tr key={index}>
              <td>수입</td>
              <td>{item.item}</td>
              <td>{item.income ? formatNumber(item.income) : ""}</td>
              <td>0</td>
            </tr>
          ))}
          <tr style={{ backgroundColor: "#c8c8c8" }}>
            <td>
              <strong>수입총계</strong>
            </td>
            <td></td>
            <td>
              <strong>{totalIncome ? formatNumber(totalIncome) : ""}</strong>
            </td>
            <td></td>
          </tr>
          {expenseData.map((item, index) => (
            <tr key={index}>
              <td>지출</td>
              <td>{item.item}</td>
              <td>0</td>
              <td>{item.expense ? formatNumber(item.expense) : ""}</td>
            </tr>
          ))}
          <tr style={{ backgroundColor: "#c8c8c8" }}>
            <td>
              <strong>지출총계</strong>
            </td>
            <td></td>
            <td></td>
            <td>
              <strong>{totalExpense ? formatNumber(totalExpense) : ""}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <strong>총계</strong>
            </td>
            <td></td>
            <td></td>
            <td id="left-money">
              <strong>{formatNumber(totalIncome - totalExpense)}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Section2;
