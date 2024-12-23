import React, { useState } from "react";
import "../App.css"; // Ensure proper styling
import heroImage from "../assets/heroImage.jpg"; 
import Logo from '../assets/Logo.png';
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebaseConfig";

function NavBar() {
    const [showSignIn, setShowSignIn] = useState(false);

  const handleLogin = async () => {
    try {
      setShowSignIn(true); // Optional: Add a loading spinner or overlay
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully!");
    } catch (error) {
      console.error("Error signing in:", error);
    } finally {
      setShowSignIn(false); // Hide spinner or overlay
    }
  };


  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <nav className="navbar">
         
        <div className="logo">
            <img src={Logo} className="logoImage" alt="Logo"/>
        </div>
        <div className="floatingContainer">
        <ul className="nav-links">
          <li>home</li>
          <li>about</li>
          <li>segments</li>
          <li>newsletter</li>
        </ul>
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
        {/* {showSignIn && (
          <div className="sign-in-modal">
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          </div>
        )} */}
      </nav>
      <div className="hero-content">
        <h1>The hero section </h1>
        <button className="join-button">Join now →</button>
      </div>
    </div>
  );
}

export default NavBar;

