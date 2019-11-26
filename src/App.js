import React, { useState } from 'react';

export default () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const onClick = () => {
    const sum = num1 + num2;
    setResult(sum);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Input name="num1" value={num1} onChange={(val) => setNum1(val)} />
      <Input name="num2" value={num2} onChange={(val) => setNum2(val)} />
      Result:
      {result}
      <div style={{ padding: '10px' }}>
        <Button text="Add" onClick={onClick} />
      </div>
    </div>
  );
};

const Input = ({ name, onChange, value }) => (
  <div style={{ padding: '10px' }}>
    <label htmlFor={name}>
      {name}
      :
    </label>
    <input
      id={name}
      value={value}
      onChange={(e) => onChange(parseInt(e.target.value, 10))}
    />
  </div>
);

const Button = ({ text, onClick }) => (
  <button
    type="submit"
    onClick={onClick}
  >
    {text}

  </button>
);
