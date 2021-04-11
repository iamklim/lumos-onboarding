import { useEffect, useState } from "react";
import { CircleProgress } from "react-gradient-progress";
import useInterval from "../../hooks/use-interval";
import "./progress-loader.scss";

function ProgressLoader({ start = 0, finish = 100, onFinish }) {
  const [progress, setProgress] = useState(start);
  const isAnimationFinished = progress === finish;

  useInterval(
    () => {
      setProgress(progress + 1);
    },
    isAnimationFinished ? null : 100
  );

  useEffect(() => {
    if (isAnimationFinished && onFinish) {
      setTimeout(() => onFinish(), 1000);
    }
  }, [isAnimationFinished, onFinish]);

  return (
    <div className="progress-loader">
      <CircleProgress percentage={progress} strokeWidth={8} />
    </div>
  );
}

export default ProgressLoader;
