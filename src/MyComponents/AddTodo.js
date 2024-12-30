import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [startAmPm, setStartAmPm] = useState("AM");
  const [endAmPm, setEndAmPm] = useState("AM");
  const [dateOption, setDateOption] = useState("today"); // Options: "today", "tomorrow", "custom"
  const [customDate, setCustomDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and description cannot be blank!");
      return;
    }
    if (!startTime || !endTime) {
      alert("Please provide both start and end times!");
      return;
    }

    const formatTimeWithAmPm = (time, amPm) => {
      const [hours, minutes] = time.split(":").map(Number);
      const adjustedHours =
        amPm === "PM" ? (hours % 12) + 12 : hours % 12 || 12; // Convert to 24-hour format
      return `${adjustedHours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    };

    const formattedStartTime = formatTimeWithAmPm(startTime, startAmPm);
    const formattedEndTime = formatTimeWithAmPm(endTime, endAmPm);

    // let todoDate;
    // if (dateOption === "today") {
    //   todoDate = new Date().toLocaleDateString();
    // } else if (dateOption === "tomorrow") {
    //   todoDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString();
    // } else if (dateOption === "custom" && customDate) {
    //   todoDate = new Date(customDate).toLocaleDateString();
    // } else {
    //   alert("Please provide a valid date.");
    //   return;
    // }

    addTodo(title, desc, formattedStartTime, formattedEndTime);
    setTitle("");
    setDesc("");
    setStartTime("");
    setEndTime("");
    setStartAmPm("AM");
    setEndAmPm("AM");
    setDateOption("today");
    setCustomDate("");
  };

  return (
    <div className="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">
            Start Time
          </label>
          <div className="d-flex">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="form-control me-2"
              id="startTime"
            />
            <select
              value={startAmPm}
              onChange={(e) => setStartAmPm(e.target.value)}
              className="form-select"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">
            End Time
          </label>
          <div className="d-flex">
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="form-control me-2"
              id="endTime"
            />
            <select
              value={endAmPm}
              onChange={(e) => setEndAmPm(e.target.value)}
              className="form-select"
            >
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Date</label>
          <div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="today"
                name="dateOption"
                value="today"
                checked={dateOption === "today"}
                onChange={(e) => setDateOption(e.target.value)}
              />
              <label className="form-check-label" htmlFor="today">
                Today
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="tomorrow"
                name="dateOption"
                value="tomorrow"
                checked={dateOption === "tomorrow"}
                onChange={(e) => setDateOption(e.target.value)}
              />
              <label className="form-check-label" htmlFor="tomorrow">
                Tomorrow
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="custom"
                name="dateOption"
                value="custom"
                checked={dateOption === "custom"}
                onChange={(e) => setDateOption(e.target.value)}
              />
              <label className="form-check-label" htmlFor="custom">
                Custom Date
              </label>
            </div>
            {dateOption === "custom" && (
              <input
                type="date"
                value={customDate}
                onChange={(e) => setCustomDate(e.target.value)}
                className="form-control mt-2"
              />
            )}
          </div>
        </div> */}
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};
