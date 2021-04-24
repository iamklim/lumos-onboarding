import "./single-select-question.scss";
import sleep from "../../utils/sleep";
import { useEffect } from "react";
import pushAnalytics from "../../utils/push-analytics";

function SingleSelectQuestion({
  title,
  subtitle,
  answerOptions,
  onClick,
  eventName,
}) {
  const onButtonClick = async (value) => {
    await sleep(400);
    onClick(value);
  };

  useEffect(() => {
    if (eventName) {
      pushAnalytics(eventName);
    }
  }, [eventName]);

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
