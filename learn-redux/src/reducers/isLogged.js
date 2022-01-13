const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return !state;
      break;
    default:
      break;
  }
};

export default loggedReducer;
