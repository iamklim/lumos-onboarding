const reducer = (state, action) => {
  switch (action.type) {
    case "setStep":
      return {
        ...state,
        quiz: { ...state.quiz, step: action.newStep },
      };
    case "setName":
      return {
        ...state,
        quiz: { ...state.quiz, name: action.newName },
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
    case "setWakeUp":
      return {
        ...state,
        quiz: { ...state.quiz, wakeUp: action.newWakeUp },
      };
    case "setEmail":
      return {
        ...state,
        quiz: { ...state.quiz, email: action.newEmail },
      };

    default:
      return state;
  }
};

export default reducer;
