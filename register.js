import React, { useState } from "react";

function SimpleLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpass, setcPassword] = useState("");
    const [error, setError] = useState("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex=/^[a-zA-Z0-9._%+-]{8,}$/;
    e.preventDefault();
    let newErrors = {};
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,password,error)
        if(!email){
            console.log("Error: Email is required");
            newErrors.email = "Email is Required";
        }
        else if(!emailRegex.test(email)){
            newErrors.emailRegex = "Not Vaild Email"
        }
         if(!password){
            console.log("Error: Password is required");
            setError("Password is required");
            newErrors.password = "Password is Required";
        }
        else if(password.length<5) newErrors.passwordLenght = "Enter atleast 6 digit password";
        if(password!=cpass) newErrors.conformpassword = "Password Doesn't Match";
        setError(newErrors);
        console.log(newErrors);
        console.log(error);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login Form</h2>

            <input
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
         {error && <p style={{color:'red'}}>{error.email}</p>}<br></br>
         {error && <p style={{color:'red'}}>{error.emailRegex}</p>}<br></br>
            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{color:'red'}}>{error.password}</p>}<br></br>
            {error && <p style={{color:'red'}}>{error.passwordLenght}</p>}<br></br>
            <input
                type="password"
                placeholder="Confirm Password"
                value={cpass}
                onChange={(e) => setcPassword(e.target.value)}
            />
            {error && <p style={{color:'red'}}>{error.conformpassword}</p>}
            <br/>
            <button type="submit">Login</button>
        </form>
    );
}

export default SimpleLogin;
