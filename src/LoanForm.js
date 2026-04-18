import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    employee: false,
    salary: "",
  });

  const buttonIsDisabled =
    loanInputs.name === "" ||
    loanInputs.phoneNumber === "" ||
    loanInputs.age === "" ||
    loanInputs.salary === "";

  function handleSubmit(e) {
    e.preventDefault();
    const age = Number(loanInputs.age);
    const number = loanInputs.phoneNumber.trim();

    const ageInvalid = age < 18 || age > 100;
    const numberInvalid = number.length < 10 || number.length > 12;

    if (ageInvalid && numberInvalid) {
      setErrorMsg("Age not allowed and wrong phone number");
    } else if (ageInvalid) {
      setErrorMsg("Age is not allowed");
    } else if (numberInvalid) {
      setErrorMsg("Phone number format is incorrect");
    } else {
      setErrorMsg(null);
    }
    setShowModal(true);
  }
  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }
  return (
    <div onClick={handleDivClick} className="container">
      <form id="loan-form" onSubmit={handleSubmit}>
        <h1 className="header">requesting a form</h1>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={loanInputs.name}
          onChange={(event) => {
            setLoanInputs((prev) => ({ ...prev, name: event.target.value }));
          }}
        />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          placeholder="min 10 numbers max 12 numbers"
          id="phoneNumber"
          type="tel"
          value={loanInputs.phoneNumber}
          onChange={(event) => {
            setLoanInputs((prev) => ({
              ...prev,
              phoneNumber: event.target.value,
            }));
          }}
        />
        <label htmlFor="age">Age</label>
        <input
          placeholder="min age 18 max age 100"
          id="age"
          type="number"
          value={loanInputs.age}
          onChange={(event) => {
            setLoanInputs((prev) => ({ ...prev, age: event.target.value }));
          }}
        />
        <label htmlFor="employee" className="employee">
          Are you an employee ?
        </label>
        <input
          id="employee"
          type="checkbox"
          checked={loanInputs.employee}
          onChange={(event) => {
            setLoanInputs((prev) => ({
              ...prev,
              employee: event.target.checked,
            }));
          }}
        />
        <label htmlFor="salary">salary</label>
        <select
          id="salary"
          value={loanInputs.salary}
          onChange={(event) => {
            setLoanInputs((prev) => ({
              ...prev,
              salary: event.target.value,
            }));
          }}
        >
          <option value="low">less than 500$</option>
          <option value="mid">between 500$ and 2000$</option>
          <option value="high">above 2000$</option>
        </select>
        <button
          className={buttonIsDisabled ? "disabled" : ""}
          id="submit"
          type="submit"
          disabled={buttonIsDisabled}
        >
          submit
        </button>
      </form>
      <Modal errorMessage={errorMsg} isVisible={showModal} />
    </div>
  );
}
