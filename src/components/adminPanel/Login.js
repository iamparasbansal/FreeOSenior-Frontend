import React from 'react';
import '../../styles/login.css';

const Login =(props)=>{
    
    const{ 
        ID, 
        setID, 
        handleLogin,
        IDError,
        setIDError
    }= props;

    const handleOnChange = (e) =>{
        setID(e.target.value);
        setIDError("");
    }

    return(
        <section className="login">
        <div className="loginContainer">
        <div className="login-container-heading">
            <h2>Welcome to Admin Login</h2>
        </div>

            <label>Enter your ID</label>
            <input
                type="ID"
                required
                placeholder="(case sensitive)" 
                value={ID}
                onChange={(e)=>handleOnChange(e)}
            />
            <p className="errorMsg">{IDError}</p>
            <div className="btnContainer">
                <>
                <button className="login-page-button" onClick={handleLogin}>Sign in</button>
                </>
            </div>
        </div>
        </section>
    );
};

export default Login;
