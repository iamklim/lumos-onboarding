function SingleSelectQuestion({ title, subtitle, answerOptions, onClick }) {
  return (
    <div className="single-select-question">
      <h1 className="single-select-question__title">{title}</h1>
      <h2 className="single-select-question__subtitle">{subtitle}</h2>
      {answerOptions.map((item, index) => (
        <button
          className="single-select-question__answer"
          key={`answer-option-${index}`}
          onClick={() => onClick(item.value)}
        >
          {item.icon && (
            <div className="single-select-question__answer-icon">
              {item.icon}
            </div>
          )}
          <div className="single-select-question__answer-title">
            {item.title}
          </div>
        </button>
      ))}
    </div>
  );
}

export default SingleSelectQuestion;
