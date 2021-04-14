import "./single-select-question.scss";
import sleep from "../../utils/sleep";

function SingleSelectQuestion({ title, subtitle, answerOptions, onClick }) {
  const onButtonClick = async (value) => {
    await sleep(400);
    onClick(value);
  };

  return (
    <div className="single-select-question">
      <div className="single-select-question__head">
        <h1 className="single-select-question__title">{title}</h1>
        {subtitle && (
          <h2 className="single-select-question__subtitle">{subtitle}</h2>
        )}
      </div>
      {answerOptions.map((item, index) => (
        <button
          className="single-select-question__answer"
          key={`answer-option-${index}`}
          onClick={() => onButtonClick(item.value)}
        >
          {item.icon && (
            <span className="single-select-question__icon">{item.icon}</span>
          )}
          <span className="single-select-question__answer-title">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SingleSelectQuestion;
