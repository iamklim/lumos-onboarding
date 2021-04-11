const reducer = (state, action) => {
  switch (action.type) {
    case "setStep":
      return {
        ...state,
        quiz: { ...state.quiz, step: action.newStep },
      };
    case "setGender":
      return {
        ...state,
        quiz: { ...state.quiz, gender: action.newGender },
      };
    case "setAge":
      return {
        ...state,
        quiz: { ...state.quiz, age: action.newAge },
      };

    default:
      return state;
  }
};

export default reducer;
