import "./input-question.scss";
import { useState } from "react";

function InputQuestion({ title, subtitle, inputType = "text", onSubmit }) {
  const [value, setValue] = useState("");
  const isBtnDisabled = !value.trim().length;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input-question">
      <div className="input-question__head">
        <h1 className="input-question__title">{title}</h1>
        {subtitle && <h2 className="input-question__subtitle">{subtitle}</h2>}
      </div>
      <form onSubmit={onSubmit}>
        <input
          className="input-question__input"
          value={value}
          onChange={onChange}
          type={inputType}
        />
        <button
          className="input-question__btn"
          disabled={isBtnDisabled}
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default InputQuestion;
