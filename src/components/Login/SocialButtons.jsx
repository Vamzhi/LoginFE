import React from "react";

const SocialButtons = () => {
  return (
    <div className="social-buttons">
      <button className="social-login facebook">
            <img src="https://www.google.com/favicon.ico" alt="Google" />
            Login with Google
          </button>
      <button className="social-login facebook"> <img src="https://www.facebook.com/favicon.ico" alt="Facebook" />Login with Facebook</button>
    </div>
  );
};

export default SocialButtons;