import { useState } from "react";
import "./styles.css";
import Section1 from "./Section1";
import Section2 from "./Section2";

export default function App() {
  const [rows, setRows] = useState([]);
  const [newRow, setNewRow] = useState({
    date: null,
    category: "",
    item: "",
    income: "",
    expense: "",
    notes: "",
  });

  const addRow = () => {
    /*const formattedRow = {
      ...newRow,
      date: newRow.date ? newRow.date.toISOString().split("T")[0] : "",
    }; //문자열로 변환하여 저장하기 위함.2024-07-01 꼴로*//
    setRows(
      [...rows, newRow].sort((a, b) => new Date(a.date) - new Date(b.date))
    ); // 날짜 기준으로 내림차순 정렬
    setNewRow({
      date: "",
      category: "",
      item: "",
      income: "",
      expense: "",
      notes: "",
    });
  };
  const handleDateChange = (date) => {
    setNewRow({ ...newRow, date });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRow({ ...newRow, [name]: value });
  };
  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setNewRow({ ...newRow, category: value, income: "", expense: "" });
  };
  //지출 항목 필터링
  const expenseData = rows.filter((row) => row.category === "지출");
  // 수입 항목 필터링.
  const incomeData = rows.filter((row) => row.category === "수입");

  return (
    <div className="all">
      <header className="header">
        <h1>SPIDERS&#x1F577;</h1>
        <div className="header-right">
          <h4> 전체 회비 </h4>
          <h4> 관리자 로그인</h4>
        </div>
      </header>
      <main className="main-content">
        <Section1
          rows={rows}
          addRow={addRow}
          newRow={newRow}
          handleChange={handleChange}
          handleCategoryChange={handleCategoryChange}
          handleDateChange={handleDateChange}
        />
        <Section2 incomeData={incomeData} expenseData={expenseData} />
      </main>
    </div>
  );
}
