
// // import FacebookLoginComponent from './FacebookLoginComponent';
// import React from 'react';
// import {FacebookLoginButton} from 'react-social-login-buttons'
// import{LoginSocialFacebook} from 'reactjs-social-login';
// function App() {
//   return (
//     <div className="App">
//       <LoginSocialFacebook
//       appid="876350021191519"
//       onResolve={(res)=>{
//         console.log(res);
//       }}
//       onReject={(err)=>{
//         console.log('err',err);
//       }}
//       >
//         <FacebookLoginButton/> 
//       </LoginSocialFacebook>
      
      
      
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { LoginSocialFacebook } from 'reactjs-social-login';

function App() {
  const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;
  return (
    <div className="App">
      <LoginSocialFacebook
        appId={facebookAppId}
        onResolve={(res) => {
          console.log(res);
        }}
        onReject={(err) => {
          console.log('err', err);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook>
    </div>
  );
}

export default App;
