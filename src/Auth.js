/* eslint no-restricted-globals:0 */
import auth0 from 'auth0-js';

const SUCCESS="/private";
const FAIL = "/";


class Auth {
  auth0 = new auth0.WebAuth({
    domain:"burak-react.auth0.com",
    clientID: "cleHZdXehv4QepOD1V9nWcpMjamV3feU",
    redirectUri:"http://localhost:3000/callback",
    audience:"https://burak-react.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor(){
    this.login=this.login.bind(this);
  }
  login(){
    this.auth0.authorize();
  }
handleAuthentication(){
  this.auth0.parseHash((err, authResults)=>{
    if(authResults && authResults.accessToken && authResults.idToken){
        let expiresAt=JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
        localStorage.setItem("acces_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expries_at", expiresAt);
        location.hash="";
        location.pathname=SUCCESS;
    }else if(err){
      location.pathname=FAIL;
      console.log(err);
    }
  })
}

isAuthenticated() {
  let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return new Date().getTime() < expiresAt;
}

}



export default Auth;