import "./single-select-question.scss";

function SingleSelectQuestion({ title, subtitle, answerOptions, onClick }) {
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
          onClick={() => onClick(item.value)}
        >
          <span className="single-select-question__answer-title">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );
}

export default SingleSelectQuestion;
