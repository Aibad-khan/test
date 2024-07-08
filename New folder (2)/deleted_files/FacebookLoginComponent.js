import React from 'react';
import { LoginSocialFacebook } from 'reactjs-social-login'; // Correct import for Facebook login

const FacebookLoginComponent = () => {
  const handleSocialLogin = (user) => {
    console.log(user);
    // Handle the response and send the data to your server for further processing
  };

  const handleSocialLoginFailure = (err) => {
    console.error(err);
    // Handle login failure, e.g., show error message to the user
  };

  return (
    <div>
      <button style={{ /* Add your button styles here */ }}>
        <LoginSocialFacebook
          appId='YOUR_APP_ID' // Replace with your actual Facebook App ID
          onLoginSuccess={handleSocialLogin}
          onLoginFailure={handleSocialLoginFailure}
        >
          Login with Facebook
        </LoginSocialFacebook>
      </button>
    </div>
  );
};

export default FacebookLoginComponent;
