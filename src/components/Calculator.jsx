// src/components/Calculator.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setDisplay(eval(input).toString());
      } catch (error) {
        setDisplay('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setDisplay('0');
      setInput('');
    } else {
      setInput((prevInput) => prevInput + value);
      if (display === '0' || display === 'Error') {
        setDisplay(value);
      } else {
        setDisplay((prevDisplay) => prevDisplay + value);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card calculator-card">
            <div className="card-body">
              <h5 className="card-title">Calculator</h5>
              <input
                type="text"
                className="form-control mb-3"
                value={display}
                readOnly
              />
              <div className="row">
                <div className="col-md-9">
                  {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((btn) => (
                    <button
                      key={btn}
                      className="btn btn-light m-1"
                      onClick={() => handleButtonClick(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
                <div className="col-md-3">
                  {['/', '*', '-', '+', '='].map((btn) => (
                    <button
                      key={btn}
                      className={`btn btn-primary btn-block mt-1 ${btn === '=' ? 'btn-equal' : ''}`}
                      onClick={() => handleButtonClick(btn)}
                    >
                      {btn}
                    </button>
                  ))}
                  <button
                    className="btn btn-danger btn-block mt-1"
                    onClick={() => handleButtonClick('C')}
                  >
                    C
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
