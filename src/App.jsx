import "./index.css";
import { useRef, useState } from "react";
export default function App() {
  const containerRef = useRef(null);
  const seatRef = useRef(null);
  const countRef = useRef(null);
  const movieRef = useRef(null);
  const [selectedSeat, setSelectedSeat] = useState(0);
  let ticketPrice = movieRef.current?.value;
  const updateSelectedCount = () => {
    const selectedSeat = document.querySelectorAll(".row .seat.selected");

    const selectedSeatCount = selectedSeat.length;
    setSelectedSeat(selectedSeatCount);
  };
  const handleClick = (e) => {
    if (
      e.target.className.includes("seat") &&
      !e.target.className.includes("occupied")
    ) {
      e.target.classList.toggle("selected");
    }
    updateSelectedCount();
  };
  const handleChange = (e) => {
    ticketPrice = e.target.value;
    console.log(ticketPrice);
    updateSelectedCount();
  };
  const seatRow = () => {
    return (
      <div className="row" ref={seatRef}>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat "></div>
        <div className="seat occupied"></div>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="movie-container">
        <label>pick a movie</label>
        <select id="movie" ref={movieRef} onChange={handleChange}>
          <option value="10">Avengers($10)</option>
          <option value="9">Agnipath($9)</option>
          <option value="15">Aviman($15)</option>
        </select>
      </div>
      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>Na</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>
      <div className="container" ref={containerRef} onClick={handleClick}>
        <div className="screen"></div>

        {seatRow()}
        {seatRow()}
        {seatRow()}
        {seatRow()}
        {seatRow()}
      </div>
      <p className="text">
        you have selected
        <span id="count" ref={countRef}>
          {selectedSeat}
        </span>{" "}
        seats and aplied for $
        <span id="count" ref={countRef}>
          {selectedSeat * ticketPrice}
        </span>{" "}
      </p>
    </div>
  );
}
