// import username from './App';


export default function Validation(){
    const {username , email} = require('./App')
    const errors ={}
    //eslint-disable-next-line
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if(username === " "){
        errors.username = "name is required!";
        
    }

    if(email === ""){
        errors.email = "email is required!";
    }

    else if(!email_pattern.test(email)){
        errors.email = "Email is not correct"
    }

    // if(userInfo.password === ""){
    //     errors.password = 'Password Required'
    // }else if(!password_pattern.test(userInfo.email)){
    //     errors.password = "Email is not correct"
    // }

    return errors;
}