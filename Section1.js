import React from "react";
import "./section1.css";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Section1({
  rows,
  addRow,
  newRow,
  handleChange,
  handleCategoryChange,
  handleDateChange,
}) {
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      addRow();
    }
  };
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="section1-content">
      <h2>2024.1학기</h2>

      <table id="money_list">
        <thead>
          <tr>
            <th>날짜</th>
            <th>구분</th>
            <th>항목</th>
            <th>수입</th>
            <th>지출</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.date ? new Date(row.date).toLocaleDateString() : ""}</td>
              <td>{row.category}</td>
              <td>{row.item}</td>
              <td>{row.income ? formatNumber(row.income) : ""}</td>
              <td>{row.expense ? formatNumber(row.expense) : ""}</td>
              <td>{row.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="input-form">
        <DatePicker
          selected={newRow.date}
          onChange={(date) => handleDateChange(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜"
        />
        <p>
          <select
            name="category"
            value={newRow.category}
            onChange={handleCategoryChange}
          >
            <option value="">구분</option>
            <option value="수입">수입</option>
            <option value="지출">지출</option>
          </select>

          <input
            type="number"
            name="income"
            placeholder="수입"
            value={newRow.income}
            onChange={handleChange}
            disabled={newRow.category === "지출"}
          />
          <input
            type="number"
            name="expense"
            placeholder="지출"
            value={newRow.expense}
            onChange={handleChange}
            disabled={newRow.category === "수입"}
          />
        </p>
        <input
          type="text"
          name="item"
          placeholder="항목"
          value={newRow.item}
          onChange={handleChange}
        />
        <input
          type="text"
          name="notes"
          placeholder="비고"
          value={newRow.notes}
          onChange={handleChange}
          onKeyDown={onCheckEnter}
        />
        <button onClick={addRow}>확인</button>
      </div>
    </div>
  );
}

export default Section1;
