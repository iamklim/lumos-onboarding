(this["webpackJsonplumos-quiz"]=this["webpackJsonplumos-quiz"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(8),s=n.n(i),r=(n(14),n(15),{quiz:{step:1,gender:null,wakeUp:null,age:null,name:null,mainGoal:null,focusOnPastOrFuture:null,obstacles:null,fitnessLevel:null,workSchedule:null,sleepQuality:null,waterIntake:null,badHabits:null,delays:null,dayStructure:null,email:null}}),u=n(1),o=function(e,t){switch(t.type){case"setStep":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{step:t.newStep})});case"setGender":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{gender:t.newGender})});case"setWakeUp":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{wakeUp:t.newWakeUp})});case"setAge":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{age:t.newAge})});case"setName":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{name:t.newName})});case"setMainGoal":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{mainGoal:t.newMainGoal})});case"setFocusOnPastOrFuture":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{focusOnPastOrFuture:t.newFocusOnPastOrFuture})});case"setObstacles":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{obstacles:t.newObstacles})});case"setFitnessLevel":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{fitnessLevel:t.newFitnessLevel})});case"setWorkSchedule":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{workSchedule:t.newWorkSchedule})});case"setSleepQuality":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{sleepQuality:t.newSleepQuality})});case"setWaterIntake":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{waterIntake:t.newWaterIntake})});case"setBadHabits":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{badHabits:t.newBadHabits})});case"setDelays":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{delays:t.newDelays})});case"setDayStructure":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{dayStructure:t.newDayStructure})});case"setEmail":return Object(u.a)(Object(u.a)({},e),{},{quiz:Object(u.a)(Object(u.a)({},e.quiz),{},{email:t.newEmail})});default:return e}},l=n(0),j=Object(c.createContext)(),b=function(e){var t=e.reducer,n=e.initialState,a=e.children;return Object(l.jsx)(j.Provider,{value:Object(c.useReducer)(t,n),children:a})},O=function(){return Object(c.useContext)(j)},d=(n(17),n(2)),h=(n(18),n(5)),p=n.n(h),m=n(6),v=(n(20),function(e){return new Promise((function(t){return setTimeout(t,e)}))}),C=function(e){window.dataLayer&&window.dataLayer.push({event:"VirtualPageView",virtualPageURL:e})};var f=function(e){var t=e.title,n=e.subtitle,a=e.answerOptions,i=e.onClick,s=e.eventName,r=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(400);case 2:i(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){s&&C(s)}),[s]),Object(l.jsxs)("div",{className:"single-select-question",children:[Object(l.jsxs)("div",{className:"single-select-question__head",children:[Object(l.jsx)("h1",{className:"single-select-question__title",children:t}),n&&Object(l.jsx)("h2",{className:"single-select-question__subtitle",children:n})]}),a.map((function(e,t){return Object(l.jsxs)("button",{className:"single-select-question__answer",onClick:function(){return r(e.value)},children:[e.icon&&Object(l.jsx)("span",{className:"single-select-question__icon",children:e.icon}),Object(l.jsx)("span",{className:"single-select-question__answer-title",children:e.title})]},"answer-option-".concat(t))}))]})};var y=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"How old are you?",subtitle:"We\u2019ll personalize recommendations based on your selection",answerOptions:[{title:"18 - 24",value:"18_24"},{title:"25 - 34",value:"25_34"},{title:"35 - 44",value:"35_44"},{title:"45+",value:"45+"}],onClick:function(e){c({type:"setAge",newAge:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_age"})};var w=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"How do you identify?",subtitle:"We may provide gender specific recommendations",answerOptions:[{title:"Woman",value:"woman",icon:"\ud83d\udc69"},{title:"Man",value:"man",icon:"\ud83d\udc68"},{title:"Non-binary",value:"nonBinary",icon:"\ud83e\uddd1"}],onClick:function(e){c({type:"setGender",newGender:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_gender"})};var x=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"When do you wake up generally?",answerOptions:[{title:"7:00 AM",value:"7Am",icon:"\ud83d\udc26"},{title:"8:00 AM",value:"8Am",icon:"\ud83d\udd57"},{title:"9:00 AM",value:"9Am",icon:"\u23f0"},{title:"Other",value:"Other",icon:"\ud83d\ude34"}],onClick:function(e){c({type:"setWakeUp",newWakeUp:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_wake_up"})},k=n(9);var N=function(e,t){var n=Object(c.useRef)(e);Object(c.useEffect)((function(){n.current=e}),[e]),Object(c.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])};n(23);var q=function(e){var t=e.start,n=void 0===t?0:t,a=e.finish,i=void 0===a?100:a,s=e.onFinish,r=e.eventName,u=Object(c.useState)(n),o=Object(d.a)(u,2),j=o[0],b=o[1],O=j===i;return N((function(){b(j+1)}),O?null:80),Object(c.useEffect)((function(){O&&s&&setTimeout((function(){return s()}),1e3)}),[O,s]),Object(c.useEffect)((function(){r&&C(r)}),[r]),Object(l.jsx)("div",{className:"progress-loader",children:Object(l.jsx)(k.a,{percentage:j,strokeWidth:8,primaryColor:["#91B286","#91B286"]})})};var S=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(q,{start:0,finish:75,onFinish:function(){c({type:"setStep",newStep:n+1})},eventName:"quiz_loader_one"})};var g=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(q,{start:75,finish:100,onFinish:function(){c({type:"setStep",newStep:n+1})},eventName:"quiz_loader_two"})};n(24);var z=function(e){var t=e.title,n=e.subtitle,a=e.inputType,i=void 0===a?"text":a,s=e.onSubmit,r=e.eventName,u=Object(c.useState)(""),o=Object(d.a)(u,2),j=o[0],b=o[1],O=!j.trim().length,h=function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v(400);case 3:s(j);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r&&C(r)}),[r]),Object(l.jsxs)("div",{className:"input-question",children:[Object(l.jsxs)("div",{className:"input-question__head",children:[Object(l.jsx)("h1",{className:"input-question__title",children:t}),n&&Object(l.jsx)("h2",{className:"input-question__subtitle",children:n})]}),Object(l.jsxs)("form",{onSubmit:h,children:[Object(l.jsx)("input",{className:"input-question__input",value:j,onChange:function(e){b(e.target.value)},type:i}),Object(l.jsx)("button",{className:"input-question__btn",disabled:O,type:"submit",children:"Continue"})]})]})};function _(){return Object(l.jsxs)(l.Fragment,{children:["Please share email to receive your ",Object(l.jsx)("b",{children:"personal plan"})," on how to get sticky habits"]})}var P=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(z,{title:Object(l.jsx)(_,{}),subtitle:"\u2714 no spam, we promise",onSubmit:function(e){c({type:"setEmail",newEmail:e}),c({type:"setStep",newStep:n+1})},inputType:"email",eventName:"quiz_email"})};var L=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"What single change would improve your life right now?",answerOptions:[{title:"More energy",value:"energy",icon:"\ud83d\udd0b"},{title:"More strength",value:"strength",icon:"\ud83d\udcaa"},{title:"More focus",value:"focus",icon:"\ud83d\udc41\ufe0f"},{title:"More calm",value:"calm",icon:"\ud83d\ude0c"}],onClick:function(e){c({type:"setMainGoal",newMainGoal:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_main_goal"})};var M=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"How often do you focus on the past or future?",answerOptions:[{title:"Never - I live in the present",value:"never",icon:"\ud83d\ude0c"},{title:"Some of the time",value:"sometimes",icon:"\ud83d\udcad"},{title:"Most of the time",value:"often",icon:"\ud83e\udd14"},{title:"All of the time",value:"always",icon:"\ud83d\udd2d"}],onClick:function(e){c({type:"setFocusOnPastOrFuture",newFocusOnPastOrFuture:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_focus_on_past"})};var F=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"Who gets in the way of what you want?",answerOptions:[{title:"My family",value:"family",icon:"\ud83d\udc6a"},{title:"My friends",value:"friends",icon:"\ud83d\udc6b"},{title:"My boss or coworkers",value:"work",icon:"\ud83d\udc54"},{title:"Myself",value:"myself",icon:"\ud83d\ude4b"}],onClick:function(e){c({type:"setObstacles",newObstacles:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_obstacles"})};var W=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"How often do you exercise or play sports?",answerOptions:[{title:"3 to 5 times a week",value:"3_5",icon:"\ud83c\udfc5"},{title:"1 to 2 workouts a week",value:"1_2",icon:"\ud83d\udc5f"},{title:"I\u2019m just getting in the groove",value:"rare",icon:"\ud83e\udda5"}],onClick:function(e){c({type:"setFitnessLevel",newFitnessLevel:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_fitness_level"})};var I=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"What\u2019s your work schedule like?",answerOptions:[{title:"9 to 5",value:"common",icon:"\u2600\ufe0f"},{title:"Night shifts",value:"night",icon:"\ud83c\udf12"},{title:"My hours are flexible",value:"flexible",icon:"\ud83d\udc81"},{title:"I\u2019m retired",value:"retired",icon:"\ud83e\uddd3"}],onClick:function(e){c({type:"setWorkSchedule",newWorkSchedule:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_work_schedule"})};var A=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"What's your daily water intake?",answerOptions:[{title:"I only have coffee or tea",value:"minimal",icon:"\u2615"},{title:"About 2 glasses (16 oz)",value:"low",icon:"\u270c\ufe0f"},{title:"2 to 6 glasses (16-48 oz)",value:"normal",icon:"\ud83d\udc4c"},{title:"More than 6 glasses",value:"high",icon:"\ud83e\udd18"}],onClick:function(e){c({type:"setWaterIntake",newWaterIntake:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_water_intake"})};var B=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"Which of the habits below most troubles you?",answerOptions:[{title:"Social Media",value:"socialMedia",icon:"\ud83d\udcf1"},{title:"Smoking",value:"smoking",icon:"\ud83d\udeac"},{title:"Sugar",value:"sugar",icon:"\ud83c\udf6b"},{title:"Other",value:"other",icon:"\ud83e\udd37"}],onClick:function(e){c({type:"setBadHabits",newBadHabits:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_bad-habits"})};var E=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"How often do you delay what you know you should do?",answerOptions:[{title:"Almost always",value:"always",icon:"\u231b"},{title:"Sometimes",value:"sometimes",icon:"\u23f3"},{title:"Almost never",value:"never",icon:"\u23f1\ufe0f"}],onClick:function(e){c({type:"setDelays",newDelays:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_day_delays"})};var T=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(f,{title:"Last question: How often do you feel that your day is lacking structure?",answerOptions:[{title:"I have a good structure",value:"good",icon:"\ud83d\udccb"},{title:"Sometimes. I'd like to improve my structure",value:"normal",icon:"\ud83d\udcdd"},{title:"I'm just going with the flow: no real structure",value:"bad",icon:"\ud83d\ude2d"}],onClick:function(e){c({type:"setDayStructure",newDayStructure:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_day_structure"})},D=(n(25),n.p+"static/media/red-panda.7a855c06.png");var H=function(e){var t=e.onSubmit,n=e.eventName,a=Object(c.useRef)(null),i=Object(c.useState)("1year"),s=Object(d.a)(i,2),r=s[0],u=s[1],o="1year"===r,j="3month"===r,b="1month"===r,O=function(e){C("plan_select_".concat(e)),u(e)};return Object(c.useEffect)((function(){n&&C(n)}),[n]),Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("img",{className:"checkoutImage",src:D,alt:"Red Panda"}),Object(l.jsx)("button",{className:"checkoutButton",onClick:function(){C("checkout_top_button"),a.current.scrollIntoView({behavior:"smooth"})},children:"GET MY PLAN"}),Object(l.jsxs)("p",{className:"checkoutText",children:[Object(l.jsx)("strong",{children:"Hi, Friend! \ud83d\udc4b"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"I\u2019m Lumos the Red Panda! A digital friend on your Way to Better You. I\u2019m here to help you ",Object(l.jsx)("b",{children:"Build good Habits and Increase Quality of Living"})," ","\ud83d\ude80",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"It\u2019s the time to make First Steps to Future You! \ud83d\udc8e I believe you have a strong Personality and can start Changing Right Now with your"," ",Object(l.jsx)("b",{children:"Personalized Plan"})," \ud83d\ude4c",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:"Let\u2019s start this journey together!"})," \ud83d\udc47"]}),Object(l.jsxs)("div",{className:"checkoutCards",ref:a,children:[Object(l.jsx)("h2",{className:"checkoutCardsTitle",children:"Choose your plan"}),Object(l.jsxs)("div",{className:o?"checkoutCardSelected":"checkoutCard",onClick:function(){return O("1year")},children:[Object(l.jsx)("div",{className:"checkoutCardLabel",children:"Save 45%"}),Object(l.jsxs)("div",{className:"checkoutCardPeriod",children:[Object(l.jsx)("p",{className:"checkoutCardPeriodTitle",children:"1 YEAR PLAN"}),Object(l.jsx)("p",{className:"checkoutCardPeriodSubtitle",children:"39.99 USD"})]}),Object(l.jsxs)("div",{className:"checkoutCardPrice",children:[Object(l.jsx)("p",{className:"checkoutCardPriceTitle",children:"$0.11"}),Object(l.jsx)("p",{className:"checkoutCardPriceSubtitle",children:"per day"})]})]}),Object(l.jsxs)("div",{className:j?"checkoutCardSelected":"checkoutCard",onClick:function(){return O("3month")},children:[Object(l.jsx)("div",{className:"checkoutCardLabel",children:"Save 25%"}),Object(l.jsxs)("div",{className:"checkoutCardPeriod",children:[Object(l.jsx)("p",{className:"checkoutCardPeriodTitle",children:"3 Months"}),Object(l.jsx)("p",{className:"checkoutCardPeriodSubtitle",children:"12.99 USD"})]}),Object(l.jsxs)("div",{className:"checkoutCardPrice",children:[Object(l.jsx)("p",{className:"checkoutCardPriceTitle",children:"$1.08"}),Object(l.jsx)("p",{className:"checkoutCardPriceSubtitle",children:"per week"})]})]}),Object(l.jsxs)("div",{className:b?"checkoutCardSelected":"checkoutCard",onClick:function(){return O("1month")},children:[Object(l.jsxs)("div",{className:"checkoutCardPeriod",children:[Object(l.jsx)("p",{className:"checkoutCardPeriodTitle",children:"1 Month"}),Object(l.jsx)("p",{className:"checkoutCardPeriodSubtitle",children:"5.99 USD"})]}),Object(l.jsxs)("div",{className:"checkoutCardPrice",children:[Object(l.jsx)("p",{className:"checkoutCardPriceTitle",children:"$1.5"}),Object(l.jsx)("p",{className:"checkoutCardPriceSubtitle",children:"per week"})]})]})]}),Object(l.jsx)("button",{className:"checkoutButton",onClick:function(){C("plan_submit_".concat(r)),t(r)},children:"CONTINUE"}),Object(l.jsxs)("div",{className:"moneyBack",children:[Object(l.jsxs)("div",{className:"moneyBackContent",children:[Object(l.jsx)("h3",{className:"moneyBackTitle",children:"30-Day Money-Back Guarantee"}),Object(l.jsxs)("p",{className:"moneyBackText",children:["Our mission is to introduce you to your future self. If you don\u2019t begin to see improvements in 30 days, tell us what happened and we\u2019ll give you your money back.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"We\u2019re confident that we can launch you into the life you want and we want you to be, too. Above all else, we want you to meet your future self\u2014whoever they may be."]})]}),Object(l.jsxs)("svg",{className:"moneyBackStamp",width:"64",height:"89",viewBox:"0 0 64 89",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(l.jsx)("path",{d:"M28.5235 64.4537C28.0714 64.0237 27.2534 63.7442 26.4569 63.7442C26.0479 63.7442 25.6604 63.8302 25.359 63.9592C24.6917 64.2817 23.9598 64.4537 23.2063 64.4537C21.3119 64.4537 19.5898 63.4432 18.7071 61.8092C18.2766 61.0137 17.0926 60.3472 16.1024 60.3472C16.0163 60.3472 15.9301 60.3472 15.8656 60.3687C15.6503 60.3902 15.435 60.4117 15.2197 60.4117C13.5837 60.4117 12.0768 59.6162 11.1296 58.3691L2.90625 80.9229L16.5329 74.5803L22.8834 88.1899L31.0422 65.7867C30.1165 65.5502 29.2339 65.1202 28.5235 64.4537Z"}),Object(l.jsx)("path",{d:"M48.8664 60.3697C48.6511 60.3697 48.4358 60.3482 48.2206 60.3267C48.1345 60.3267 48.0699 60.3052 47.9838 60.3052C46.9935 60.3052 45.8095 60.9717 45.379 61.7672C44.4964 63.4012 42.7742 64.4117 40.8798 64.4117C40.1264 64.4117 39.3945 64.2397 38.7271 63.9172C38.4258 63.7882 38.0383 63.7022 37.6293 63.7022C36.8328 63.7022 36.0147 63.9817 35.5627 64.4117C34.8523 65.0782 33.9912 65.5298 33.0225 65.7018L41.1812 88.105L47.5317 74.4953L61.1583 80.8379L52.935 58.2842C51.9878 59.5742 50.4809 60.3697 48.8664 60.3697Z"}),Object(l.jsx)("path",{d:"M63.11 29.779C61.9233 28.5695 61.5631 26.3172 62.3047 24.7948C63.0464 23.2724 62.4107 21.3747 60.9062 20.5822C59.4016 19.7898 58.3633 17.7669 58.5752 16.0985C58.8083 14.4302 57.6004 12.8244 55.9263 12.5116C54.2523 12.1988 52.6206 10.593 52.3027 8.94551C51.9849 7.29801 50.3532 6.10932 48.6579 6.33871C46.9627 6.56811 44.9072 5.52539 44.1019 4.04473C43.2967 2.56408 41.3683 1.9593 39.8214 2.66835C38.2745 3.39825 36.0071 3.04373 34.7568 1.87588C33.5277 0.708039 31.4934 0.708039 30.2432 1.87588C29.0141 3.04373 26.7255 3.39825 25.1786 2.66835C23.6317 1.93844 21.7033 2.56408 20.8981 4.04473C20.0928 5.52539 18.0373 6.54726 16.3421 6.33871C14.6468 6.10932 13.0151 7.29801 12.6973 8.94551C12.3794 10.593 10.7477 12.1988 9.07366 12.5116C7.3996 12.8244 6.19172 14.4302 6.42482 16.0985C6.65792 17.7669 5.59838 19.7898 4.09384 20.5822C2.5893 21.3747 1.97478 23.2724 2.69526 24.7948C3.43694 26.3172 3.07669 28.5486 1.89001 29.779C0.70333 30.9886 0.70333 32.9906 1.89001 34.221C3.07669 35.4305 3.43694 37.6828 2.69526 39.2052C1.95359 40.7275 2.5893 42.6253 4.09384 43.4178C5.59838 44.2102 6.63673 46.2331 6.42482 47.9014C6.19172 49.5698 7.3996 51.1756 9.07366 51.4884C10.7477 51.8012 12.3794 53.407 12.6973 55.0545C13.0151 56.702 14.6468 57.8907 16.3421 57.6613C18.0373 57.4319 20.0928 58.4746 20.8981 59.9553C21.7033 61.4359 23.6317 62.0407 25.1786 61.3317C26.7255 60.6017 28.9929 60.9563 30.2432 62.1241C31.4723 63.292 33.5066 63.292 34.7568 62.1241C35.9859 60.9563 38.2745 60.6017 39.8214 61.3317C41.3683 62.0616 43.2967 61.4359 44.1019 59.9553C44.9072 58.4746 46.9627 57.4527 48.6579 57.6613C50.3532 57.8907 51.9849 56.702 52.3027 55.0545C52.6206 53.407 54.2523 51.8012 55.9263 51.4884C57.6004 51.1756 58.8083 49.5698 58.5752 47.9014C58.3421 46.2331 59.4016 44.2102 60.9062 43.4178C62.4107 42.6253 63.0252 40.7275 62.3047 39.2052C61.5631 37.6828 61.9233 35.4514 63.11 34.221C64.2967 32.9906 64.2967 30.9886 63.11 29.779Z",fill:"#FFFFFF"}),Object(l.jsx)("path",{d:"M63.0959 29.8606C61.8904 28.6136 61.5244 26.2916 62.2778 24.7221C63.0313 23.1526 62.3855 21.1961 60.8571 20.3791C59.3286 19.562 58.2738 17.4765 58.4891 15.7565C58.7259 14.0365 57.4988 12.381 55.7982 12.0585C54.0975 11.736 52.44 10.0805 52.1171 8.38198C51.7941 6.68347 50.1366 5.45796 48.4144 5.69446C46.6922 5.93097 44.6041 4.85596 43.7861 3.32945C42.968 1.80294 41.0091 1.17943 39.4376 1.91044C37.8661 2.66294 35.5627 2.29744 34.2926 1.09344C33.0441 -0.110572 30.9775 -0.110572 29.7074 1.09344C28.4588 2.29744 26.1339 2.66294 24.5624 1.91044C22.9909 1.15793 21.032 1.80294 20.2139 3.32945C19.3959 4.85596 17.3078 5.90947 15.5856 5.69446C13.8634 5.45796 12.2059 6.68347 11.8829 8.38198C11.56 10.0805 9.90245 11.736 8.20182 12.0585C6.50118 12.381 5.27413 14.0365 5.51093 15.7565C5.74773 17.4765 4.67137 19.562 3.14295 20.3791C1.61453 21.1961 0.990249 23.1526 1.72217 24.7221C2.47562 26.2916 2.10965 28.5921 0.904137 29.8606C-0.301379 31.1076 -0.301379 33.1716 0.904137 34.4402C2.10965 35.6872 2.47562 38.0092 1.72217 39.5787C0.968722 41.1482 1.61453 43.1047 3.14295 43.9217C4.67137 44.7387 5.7262 46.8242 5.51093 48.5442C5.27413 50.2642 6.50118 51.9198 8.20182 52.2423C9.90245 52.5648 11.56 54.2203 11.8829 55.9188C12.2059 57.6173 13.8634 58.8428 15.5856 58.6063C17.3078 58.3698 19.3959 59.4448 20.2139 60.9713C21.032 62.4978 22.9909 63.1213 24.5624 62.3903C26.1339 61.6378 28.4373 62.0033 29.7074 63.2073C30.9559 64.4113 33.0225 64.4113 34.2926 63.2073C35.5412 62.0033 37.8661 61.6378 39.4376 62.3903C41.0091 63.1428 42.968 62.4978 43.7861 60.9713C44.6041 59.4448 46.6922 58.3913 48.4144 58.6063C50.1366 58.8428 51.7941 57.6173 52.1171 55.9188C52.44 54.2203 54.0975 52.5648 55.7982 52.2423C57.4988 51.9198 58.7259 50.2642 58.4891 48.5442C58.2523 46.8242 59.3286 44.7387 60.8571 43.9217C62.3855 43.1047 63.0098 41.1482 62.2778 39.5787C61.5244 38.0092 61.8904 35.7087 63.0959 34.4402C64.3014 33.1716 64.3014 31.1076 63.0959 29.8606ZM32.0323 56.8648C18.3841 56.8648 7.27615 45.7707 7.27615 32.1396C7.27615 18.5085 18.3841 7.41448 32.0323 7.41448C45.6805 7.41448 56.7884 18.5085 56.7884 32.1396C56.7884 45.7707 45.6805 56.8648 32.0323 56.8648Z"}),Object(l.jsx)("path",{d:"M32.0321 9.58594C19.5679 9.58594 9.4502 19.691 9.4502 32.1396C9.4502 44.5883 19.5679 54.6934 32.0321 54.6934C44.4963 54.6934 54.614 44.5883 54.614 32.1396C54.614 19.691 44.4963 9.58594 32.0321 9.58594ZM46.0893 24.3566L28.6308 46.3728C28.0066 47.1468 26.9517 47.1898 26.2844 46.4803L16.2958 35.7302C15.6069 34.9992 15.65 33.8167 16.3389 33.1287L19.4172 30.0541C20.1276 29.3446 21.2686 29.3446 21.979 30.0541L26.4135 34.4832L27.7052 35.7732L28.7815 34.3327L39.7819 19.691C40.3846 18.8955 41.5256 18.745 42.3221 19.3255L45.7449 21.8841C46.5629 22.4431 46.7136 23.5826 46.0893 24.3566Z"})]})]})]})};var G=function(){var e=O(),t=Object(d.a)(e,2),n=t[0].quiz.step,c=t[1];return Object(l.jsx)(H,{onSubmit:function(e){c({type:"setPlan",newPlan:e}),c({type:"setStep",newStep:n+1})},eventName:"quiz_checkout"})};n(26);var U=function(e){var t=e.eventName;return Object(c.useEffect)((function(){t&&C(t)}),[t]),Object(l.jsxs)("div",{className:"thank-you",children:[Object(l.jsxs)("h1",{className:"thank-you__title",children:["Dear Friend,",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"We're building ",Object(l.jsx)("b",{children:"LUMOS"})," - a mobile app which helps getting"," ",Object(l.jsx)("b",{children:"sticky habits"})," and transforming ",Object(l.jsx)("b",{children:"your behavior"})," for the better"]}),Object(l.jsxs)("h2",{className:"thank-you__subtitle",children:["No worries - you will not be charged, our app is still in progress. Still, we are grateful you came here and we would like to provide you with ",Object(l.jsx)("b",{children:"personal plan"})," in our application for special"," ",Object(l.jsx)("b",{children:"discounted price"}),".",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"We will contact you by email once it's ready!"]})]})};var R=function(){return Object(l.jsx)(U,{eventName:"quiz_thank_you"})},Z={1:Object(l.jsx)(w,{}),2:Object(l.jsx)(x,{}),3:Object(l.jsx)(y,{}),4:Object(l.jsx)(L,{}),5:Object(l.jsx)(M,{}),6:Object(l.jsx)(F,{}),7:Object(l.jsx)(W,{}),8:Object(l.jsx)(I,{}),9:Object(l.jsx)(A,{}),10:Object(l.jsx)(B,{}),11:Object(l.jsx)(E,{}),12:Object(l.jsx)(S,{}),13:Object(l.jsx)(T,{}),14:Object(l.jsx)(g,{}),15:Object(l.jsx)(P,{}),16:Object(l.jsx)(G,{}),17:Object(l.jsx)(R,{})};var Q=function(){var e=O(),t=Object(d.a)(e,2)[0].quiz.step,n=18===t;return Object(l.jsx)("div",{className:n?"quizCheckout":"quizQuestion",children:Object(l.jsxs)("div",{className:"container",children:[Z[t]," "]})})};var Y=function(){return Object(l.jsx)("div",{className:"app",children:Object(l.jsx)(Q,{})})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(b,{initialState:r,reducer:o,children:Object(l.jsx)(Y,{})})}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.fa4de398.chunk.js.map