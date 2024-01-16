// actions.js

// eslint-disable-next-line
const setUsername = (username) => {{
  localStorage.setItem('username', username);
  return{
    type: 'SET_USERNAME',
    payload: username,
  };
    
  };
};


// eslint-disable-next-line  
const setEmail = (email) => {{
  localStorage.setItem('email', email);
  return{
    type: 'SET_EMAIL',
    payload: email,
  }
    
  }};
  
  module.exports = { setUsername, setEmail };