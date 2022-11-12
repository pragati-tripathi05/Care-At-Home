import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const GoogleSignin = () => {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(e){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "366804084827-lp1d0hj8opkaitc969nqqkhgag133c0a.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);
  
  return (
    <div>
      <div id="signInDiv" style={{ marginTop: "5%", alignItems:"center" }} ></div>
      {
        Object.keys(user).length !== 0 && <button onClick={(e) => handleSignOut(e)}>SignOut</button>
      }
        {user && (
          <div>
            <img src={user.picture} />
            <h4>{user.name}</h4>
          </div>
        )}
      
    </div>
  );
};

export default GoogleSignin;
