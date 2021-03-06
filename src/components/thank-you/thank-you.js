import "./thank-you.scss";
import { useEffect } from "react";
import pushAnalytics from "../../utils/push-analytics";

function ThankYou({ eventName }) {
  useEffect(() => {
    if (eventName) {
      pushAnalytics(eventName);
    }
  }, [eventName]);

  return (
    <div className="thank-you">
      <h1 className="thank-you__title">
        Dear Friend,
        <br />
        <br />
        We're building <b>LUMOS</b> - a mobile app which helps getting{" "}
        <b>sticky habits</b> and transforming <b>your behavior</b> for the
        better
      </h1>
      <h2 className="thank-you__subtitle">
        No worries - you will not be charged, our app is still in progress.
        Still, we are grateful you came here and we would like to provide you
        with <b>personal plan</b> in our application for special{" "}
        <b>discounted price</b>.
        <br />
        <br />
        We will contact you by email once it's ready!
      </h2>
    </div>
  );
}

export default ThankYou;
