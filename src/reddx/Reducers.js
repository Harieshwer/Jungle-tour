
const initialState = {
  username: localStorage.getItem('username') || '',
  email: localStorage.getItem('email') || '',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERNAME':
        return {username: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  