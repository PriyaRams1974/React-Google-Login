import React, { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, googleLogout } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
function Login() {
    let clientID = "xxxxxxx";
    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);

    const onLoginSuccess = (res) => {
        console.log('Login Success:', res);
        console.log("token",res.credential)
        let token = res.credential;
        const user = jwt_decode(token);
        console.log("user details:",user)
       
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

     const logout = () => {
            googleLogout()
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return(
        <div>

{ showloginButton ?
                <GoogleOAuthProvider clientId={clientID}>
                <GoogleLogin
                  onSuccess={onLoginSuccess}
                  onError={onLoginFailure}
                />
                </GoogleOAuthProvider> : null}

            { showlogoutButton ?
                <button onClick={logout}>Logout</button> : null
            }

{/* <GoogleOAuthProvider clientId={clientId}>
<GoogleLogin
  onSuccess={onLoginSuccess}
  onError={onLoginFailure}
/>
</GoogleOAuthProvider> */}


</div>
    )
}


export default Login;
