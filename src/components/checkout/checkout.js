import "./checkout.scss";
import { useStateValue } from "../../state/state";
import { useEffect, useRef, useState } from "react";
import pushAnalytics from "../../utils/push-analytics";
import redPanda from "./red-panda.png";

function Checkout({ onSubmit, eventName }) {
  const checkoutCardsRef = useRef(null);
  const [
    {
      quiz: { name },
    },
    ,
  ] = useStateValue();

  const [planSelected, setPlanSelected] = useState("1year");

  const isOneYearPlan = planSelected === "1year";
  const isThreeMonthPlan = planSelected === "3month";
  const isOneMonthPlan = planSelected === "1month";

  const currentDate = new Date();
  const currentDateFormatted = currentDate
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");
  const nextYear = currentDate.getFullYear() + 1;

  const onTopButtonClick = () => {
    pushAnalytics(`checkout_top_button`);
    checkoutCardsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onBottomButtonClick = () => {
    pushAnalytics(`plan_submit_${planSelected}`);
    onSubmit(planSelected);
  };

  const onPlanSelect = (planName) => {
    pushAnalytics(`plan_select_${planName}`);
    setPlanSelected(planName);
  };

  useEffect(() => {
    if (eventName) {
      pushAnalytics(eventName);
    }
  }, [eventName]);

  return (
    <div className="checkout">
      <img className="checkoutImage" src={redPanda} alt="Red Panda" />
      <p className="checkoutText">
        <strong>Hi, {name}!</strong>
        <br />
        <br />
        I’m Lumos the Red Panda! A digital friend on your way to better you. I’m
        here to help you{" "}
        <b>to build good habits and increase quality of living</b>.
        <br />
        <br />
        It’s the time to make first steps to future you! I believe you have a
        strong personality and can start changing right now with your{" "}
        <b>personal plan</b>.
        <br />
        <br />
        <b>Let’s start this journey together!</b>
      </p>
      <button className="checkoutButton" onClick={onTopButtonClick}>
        GET MY PLAN
      </button>
      <div className="checkoutCards" ref={checkoutCardsRef}>
        <h2 className="checkoutCardsTitle">Choose your plan</h2>

        <div
          className={isOneYearPlan ? "checkoutCardSelected" : "checkoutCard"}
          onClick={() => onPlanSelect("1year")}
        >
          <div className="checkoutCardLabel">Save 50%</div>
          <div className="checkoutCardPeriod">1 YEAR PLAN</div>
          <div className="checkoutCardPrice">$39.99</div>
        </div>
        <div
          className={isThreeMonthPlan ? "checkoutCardSelected" : "checkoutCard"}
          onClick={() => onPlanSelect("3month")}
        >
          <div className="checkoutCardLabel">Save 25%</div>
          <div className="checkoutCardPeriod">3 MONTH PLAN</div>
          <div className="checkoutCardPrice">$14.99</div>
        </div>
        <div
          className={isOneMonthPlan ? "checkoutCardSelected" : "checkoutCard"}
          onClick={() => onPlanSelect("1month")}
        >
          <div className="checkoutCardPeriod">1 MONTH PLAN</div>
          <div className="checkoutCardPrice">$4.99</div>
        </div>
      </div>

      <button className="checkoutButton" onClick={onBottomButtonClick}>
        CONTINUE
      </button>

      <div className="moneyBack">
        <div className="moneyBackContent">
          <h3 className="moneyBackTitle">30-Day Money-Back Guarantee</h3>
          <p className="moneyBackText">
            Our mission is to introduce you to your future self. If you don’t
            begin to see improvements in 30 days, tell us what happened and
            we’ll give you your money back.
            <br />
            <br />
            We’re confident that we can launch you into the life you want and we
            want you to be, too. Above all else, we want you to meet your future
            self—whoever they may be.
          </p>
        </div>
        <svg
          className="moneyBackStamp"
          width="64"
          height="89"
          viewBox="0 0 64 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M28.5235 64.4537C28.0714 64.0237 27.2534 63.7442 26.4569 63.7442C26.0479 63.7442 25.6604 63.8302 25.359 63.9592C24.6917 64.2817 23.9598 64.4537 23.2063 64.4537C21.3119 64.4537 19.5898 63.4432 18.7071 61.8092C18.2766 61.0137 17.0926 60.3472 16.1024 60.3472C16.0163 60.3472 15.9301 60.3472 15.8656 60.3687C15.6503 60.3902 15.435 60.4117 15.2197 60.4117C13.5837 60.4117 12.0768 59.6162 11.1296 58.3691L2.90625 80.9229L16.5329 74.5803L22.8834 88.1899L31.0422 65.7867C30.1165 65.5502 29.2339 65.1202 28.5235 64.4537Z" />
          <path d="M48.8664 60.3697C48.6511 60.3697 48.4358 60.3482 48.2206 60.3267C48.1345 60.3267 48.0699 60.3052 47.9838 60.3052C46.9935 60.3052 45.8095 60.9717 45.379 61.7672C44.4964 63.4012 42.7742 64.4117 40.8798 64.4117C40.1264 64.4117 39.3945 64.2397 38.7271 63.9172C38.4258 63.7882 38.0383 63.7022 37.6293 63.7022C36.8328 63.7022 36.0147 63.9817 35.5627 64.4117C34.8523 65.0782 33.9912 65.5298 33.0225 65.7018L41.1812 88.105L47.5317 74.4953L61.1583 80.8379L52.935 58.2842C51.9878 59.5742 50.4809 60.3697 48.8664 60.3697Z" />
          <path
            d="M63.11 29.779C61.9233 28.5695 61.5631 26.3172 62.3047 24.7948C63.0464 23.2724 62.4107 21.3747 60.9062 20.5822C59.4016 19.7898 58.3633 17.7669 58.5752 16.0985C58.8083 14.4302 57.6004 12.8244 55.9263 12.5116C54.2523 12.1988 52.6206 10.593 52.3027 8.94551C51.9849 7.29801 50.3532 6.10932 48.6579 6.33871C46.9627 6.56811 44.9072 5.52539 44.1019 4.04473C43.2967 2.56408 41.3683 1.9593 39.8214 2.66835C38.2745 3.39825 36.0071 3.04373 34.7568 1.87588C33.5277 0.708039 31.4934 0.708039 30.2432 1.87588C29.0141 3.04373 26.7255 3.39825 25.1786 2.66835C23.6317 1.93844 21.7033 2.56408 20.8981 4.04473C20.0928 5.52539 18.0373 6.54726 16.3421 6.33871C14.6468 6.10932 13.0151 7.29801 12.6973 8.94551C12.3794 10.593 10.7477 12.1988 9.07366 12.5116C7.3996 12.8244 6.19172 14.4302 6.42482 16.0985C6.65792 17.7669 5.59838 19.7898 4.09384 20.5822C2.5893 21.3747 1.97478 23.2724 2.69526 24.7948C3.43694 26.3172 3.07669 28.5486 1.89001 29.779C0.70333 30.9886 0.70333 32.9906 1.89001 34.221C3.07669 35.4305 3.43694 37.6828 2.69526 39.2052C1.95359 40.7275 2.5893 42.6253 4.09384 43.4178C5.59838 44.2102 6.63673 46.2331 6.42482 47.9014C6.19172 49.5698 7.3996 51.1756 9.07366 51.4884C10.7477 51.8012 12.3794 53.407 12.6973 55.0545C13.0151 56.702 14.6468 57.8907 16.3421 57.6613C18.0373 57.4319 20.0928 58.4746 20.8981 59.9553C21.7033 61.4359 23.6317 62.0407 25.1786 61.3317C26.7255 60.6017 28.9929 60.9563 30.2432 62.1241C31.4723 63.292 33.5066 63.292 34.7568 62.1241C35.9859 60.9563 38.2745 60.6017 39.8214 61.3317C41.3683 62.0616 43.2967 61.4359 44.1019 59.9553C44.9072 58.4746 46.9627 57.4527 48.6579 57.6613C50.3532 57.8907 51.9849 56.702 52.3027 55.0545C52.6206 53.407 54.2523 51.8012 55.9263 51.4884C57.6004 51.1756 58.8083 49.5698 58.5752 47.9014C58.3421 46.2331 59.4016 44.2102 60.9062 43.4178C62.4107 42.6253 63.0252 40.7275 62.3047 39.2052C61.5631 37.6828 61.9233 35.4514 63.11 34.221C64.2967 32.9906 64.2967 30.9886 63.11 29.779Z"
            fill="#FFFFFF"
          />
          <path d="M63.0959 29.8606C61.8904 28.6136 61.5244 26.2916 62.2778 24.7221C63.0313 23.1526 62.3855 21.1961 60.8571 20.3791C59.3286 19.562 58.2738 17.4765 58.4891 15.7565C58.7259 14.0365 57.4988 12.381 55.7982 12.0585C54.0975 11.736 52.44 10.0805 52.1171 8.38198C51.7941 6.68347 50.1366 5.45796 48.4144 5.69446C46.6922 5.93097 44.6041 4.85596 43.7861 3.32945C42.968 1.80294 41.0091 1.17943 39.4376 1.91044C37.8661 2.66294 35.5627 2.29744 34.2926 1.09344C33.0441 -0.110572 30.9775 -0.110572 29.7074 1.09344C28.4588 2.29744 26.1339 2.66294 24.5624 1.91044C22.9909 1.15793 21.032 1.80294 20.2139 3.32945C19.3959 4.85596 17.3078 5.90947 15.5856 5.69446C13.8634 5.45796 12.2059 6.68347 11.8829 8.38198C11.56 10.0805 9.90245 11.736 8.20182 12.0585C6.50118 12.381 5.27413 14.0365 5.51093 15.7565C5.74773 17.4765 4.67137 19.562 3.14295 20.3791C1.61453 21.1961 0.990249 23.1526 1.72217 24.7221C2.47562 26.2916 2.10965 28.5921 0.904137 29.8606C-0.301379 31.1076 -0.301379 33.1716 0.904137 34.4402C2.10965 35.6872 2.47562 38.0092 1.72217 39.5787C0.968722 41.1482 1.61453 43.1047 3.14295 43.9217C4.67137 44.7387 5.7262 46.8242 5.51093 48.5442C5.27413 50.2642 6.50118 51.9198 8.20182 52.2423C9.90245 52.5648 11.56 54.2203 11.8829 55.9188C12.2059 57.6173 13.8634 58.8428 15.5856 58.6063C17.3078 58.3698 19.3959 59.4448 20.2139 60.9713C21.032 62.4978 22.9909 63.1213 24.5624 62.3903C26.1339 61.6378 28.4373 62.0033 29.7074 63.2073C30.9559 64.4113 33.0225 64.4113 34.2926 63.2073C35.5412 62.0033 37.8661 61.6378 39.4376 62.3903C41.0091 63.1428 42.968 62.4978 43.7861 60.9713C44.6041 59.4448 46.6922 58.3913 48.4144 58.6063C50.1366 58.8428 51.7941 57.6173 52.1171 55.9188C52.44 54.2203 54.0975 52.5648 55.7982 52.2423C57.4988 51.9198 58.7259 50.2642 58.4891 48.5442C58.2523 46.8242 59.3286 44.7387 60.8571 43.9217C62.3855 43.1047 63.0098 41.1482 62.2778 39.5787C61.5244 38.0092 61.8904 35.7087 63.0959 34.4402C64.3014 33.1716 64.3014 31.1076 63.0959 29.8606ZM32.0323 56.8648C18.3841 56.8648 7.27615 45.7707 7.27615 32.1396C7.27615 18.5085 18.3841 7.41448 32.0323 7.41448C45.6805 7.41448 56.7884 18.5085 56.7884 32.1396C56.7884 45.7707 45.6805 56.8648 32.0323 56.8648Z" />
          <path d="M32.0321 9.58594C19.5679 9.58594 9.4502 19.691 9.4502 32.1396C9.4502 44.5883 19.5679 54.6934 32.0321 54.6934C44.4963 54.6934 54.614 44.5883 54.614 32.1396C54.614 19.691 44.4963 9.58594 32.0321 9.58594ZM46.0893 24.3566L28.6308 46.3728C28.0066 47.1468 26.9517 47.1898 26.2844 46.4803L16.2958 35.7302C15.6069 34.9992 15.65 33.8167 16.3389 33.1287L19.4172 30.0541C20.1276 29.3446 21.2686 29.3446 21.979 30.0541L26.4135 34.4832L27.7052 35.7732L28.7815 34.3327L39.7819 19.691C40.3846 18.8955 41.5256 18.745 42.3221 19.3255L45.7449 21.8841C46.5629 22.4431 46.7136 23.5826 46.0893 24.3566Z" />
        </svg>
      </div>
    </div>
  );
}

export default Checkout;
