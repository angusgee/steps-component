import { useState } from "react";
import "./App.css";
import "./index.css";

// function DateCounter() {
//   const [dateCount, setDateCount] = useState(1);
//   const [dateStep, setDateStep] = useState(1);

//   const today = new Date();

//   const date = new Date();
//   date.setDate(today.getDate() + dateStep);
//   // console.log(date.toDateString());

//   return (
//     <div>
//       <div className="flex">
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={dateStep}
//           onChange={(e) => setDateStep(Number(e.target.value))}
//         />

//         <span>
//           <p>Step: {dateStep}</p>
//         </span>
//       </div>
//       <div className="flex">
//         <button
//           className="btn"
//           onClick={() => setDateCount((c) => c - dateStep)}
//         >
//           &minus;
//         </button>
//         <p>Count: {dateCount}</p>
//         <button
//           className="btn"
//           onClick={() => setDateCount((c) => c + dateStep)}
//         >
//           &#43;
//         </button>
//       </div>
//       <div className="flex">
//         <span>
//           {dateCount === 0
//             ? "Today is "
//             : dateCount > 0
//             ? `${dateCount} days from today is `
//             : `${Math.abs(dateCount)} days ago was `}
//           {/* <p>{`${dateCount} days ago was ${date.toDateString()}`}</p> */}
//         </span>
//       </div>
//     </div>
//   );
// }

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // The useState hook must be called at the top of the component not inside an if statement or function call
  // Syntax:
  // const [stateVariable, setterFunction] = useState(initialState)
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {/* if isOpen is true then render div.steps */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
      {/* <DateCounter /> */}
    </>
  );
}

export default App;
