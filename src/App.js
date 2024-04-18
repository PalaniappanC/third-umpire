import React, { useState, useEffect } from 'react';
import './ThirdUmpire.css';

function ThirdUmpire() {
  const [balls, setBalls] = useState(0);
  const [overs, setOvers] = useState(0);
  const [runs, setRuns] = useState(0);

  useEffect(() => {
    if (balls === 6) {
      setBalls(0);
      setOvers(prevOvers => prevOvers + 1);
    }
  }, [balls]);

  const handleRunButtonClick = (runValue) => {
    setRuns(prevRuns => prevRuns + runValue);
  };

  const handleManualRunChange = (increment) => {
    setRuns(prevRuns => prevRuns + increment);
  };

  const handleReset = () => {
    setBalls(0);
    setOvers(0);
    setRuns(0);
  };

  return (
    <div className="container">
      <div className="ads">
        <p style={{textAlign:'center'}}>ADS</p>
      </div>
      <div className="section">
        <h2>Balls</h2>
        <div className="section-content">
          <div className="counter">
            <button onClick={() => setBalls(prevBalls => prevBalls + 1)}>+</button>
            <button onClick={() => setBalls(prevBalls => Math.max(0, prevBalls - 1))}>-</button>
          </div>
        </div>
        <div className="section-content">
          <div className="label">Balls</div>
          <div className="balls">{balls}</div>
        </div>
        <div className="section-content">
          <div className="label">Overs</div>
          <div className="overs">{overs}</div>
        </div>
      </div>
      <div className="section">
        <h2>Runs</h2>
        <div className="section-content runs-content">
          <button className="runs-button" onClick={() => handleRunButtonClick(1)}>1</button>
          <button className="runs-button" onClick={() => handleRunButtonClick(2)}>2</button>
          <button className="runs-button" onClick={() => handleRunButtonClick(3)}>3</button>
          <button className="runs-button" onClick={() => handleRunButtonClick(4)}>4</button>
          <button className="runs-button" onClick={() => handleRunButtonClick(5)}>5</button>
          <button className="runs-button" onClick={() => handleRunButtonClick(6)}>6</button>
          <button className="runs-button" onClick={() => handleManualRunChange(-1)}>-1</button>
        </div>
        <div className="section-content">
        <div className="label">Total Runs</div>
          <div className="total-runs">{runs}</div>
        </div>
      </div>
      <div className="section reset-section">
        <button className="reset-button" onClick={handleReset}>Reset</button>
      </div>
      <div className="ads">
        <p style={{textAlign:'center'}}>ADS</p>
      </div>
    </div>
  );
}

export default ThirdUmpire;
