import { useEffect, useState } from "react";
import { CircleProgress } from "react-gradient-progress";
import useInterval from "../../hooks/use-interval";
import "./progress-loader.scss";
import pushAnalytics from "../../utils/push-analytics";

function ProgressLoader({ start = 0, finish = 100, onFinish, eventName }) {
  const [progress, setProgress] = useState(start);
  const isAnimationFinished = progress === finish;

  useInterval(
    () => {
      setProgress(progress + 1);
    },
    isAnimationFinished ? null : 80
  );

  useEffect(() => {
    if (isAnimationFinished && onFinish) {
      setTimeout(() => onFinish(), 1000);
    }
  }, [isAnimationFinished, onFinish]);

  useEffect(() => {
    if (eventName) {
      pushAnalytics(eventName);
    }
  }, [eventName]);

  return (
    <div className="progress-loader">
      <CircleProgress
        percentage={progress}
        strokeWidth={8}
        primaryColor={["#91B286", "#91B286"]}
      />
    </div>
  );
}

export default ProgressLoader;
