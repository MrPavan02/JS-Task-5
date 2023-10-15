import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <label>
        Enter your date of birth<br></br><br></br>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </label><br></br><br></br>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p><b>You are {age} years old</b></p>}
    </div>
  );
}

export default App;