import React, { useState, useEffect, useRef } from "react";
import ErrorMessage from "./ErrorMessage";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(true);
  const [hasBlurredUsername, setHasBlurredUsername] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false); // To track input focus
  const [hasBlurredEmail, setHasBlurredEmail] = useState(false);
  const [hasEmailTyped, setHasEmailTyped] = useState(false); // Track if the user has typed
  const [emailError, setEmailError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const USERNAME_MIN = 1;
  const USERNAME_MAX = 20;

  const isUsernameValid =
    username.length >= USERNAME_MIN && username.length <= USERNAME_MAX;

  const usernameInputRef = useRef(null); // Create ref for username input

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus(); // Set focus
    }
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call signup API (to be implemented)
    console.log("Submitting", { username, email, password });
    // Clear form after submission
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const handleUsernameBlur = () => {
    setIsUsernameFocused(false);
    setHasBlurredUsername(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value.trim());
    setHasEmailTyped(true);
    if (hasBlurredEmail) {
      validateEmail(e.target.value);
    }
  };
  const handleEmailBlur = () => {
    setIsEmailFocused(false);
    setHasBlurredEmail(true);
    validateEmail(email); // Trigger validation on blur
  };
  const validateUsername = () => {
    if (username.length < USERNAME_MIN) {
      setUsernameError(`Username must be at least ${USERNAME_MIN} character`);
    } else if (username.length > USERNAME_MAX) {
      setUsernameError(`Username must be at most ${USERNAME_MAX} characters`);
    } else {
      setUsernameError(""); // Clear error if no conditions are met
    }
  };

  const validateEmail = (emailValue) => {
    if (!emailRegex.test(emailValue) && emailValue.length > 0) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-white text-2xl font-bold mb-4">Sign Up</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="text-white block text-sm font-medium"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            ref={usernameInputRef}
            value={username}
            onChange={handleUsernameChange}
            onFocus={() => setIsUsernameFocused(true)} // Set focus state to true
            onBlur={handleUsernameBlur} // Set focus state to false
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        {/* Error messages for username validation */}
  {username.length < USERNAME_MIN && (
    <p className="text-red-500">Username needs to be at least 1 character</p>
  )}

  {/* Valid message when the username is correct */}
  {username.length >= USERNAME_MIN && username.length <= USERNAME_MAX && !usernameError && isUsernameFocused && (
    <p className="text-green-500">Username needs to be at least 1 character</p>
  )}
        
        <div>
          <label
            htmlFor="email"
            className="text-white block text-sm font-medium"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={handleEmailBlur}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
          {/* Show error if email is invalid and user has typed */}
          {emailError && hasBlurredEmail && (
            <ErrorMessage
              condition={true}
              message={emailError}
              className="text-red-500"
            />
          )}
          {/* Show valid message when the email is correct */}
          {emailRegex.test(email) && isEmailFocused && hasEmailTyped && (
            <ErrorMessage
              condition={true}
              message="Email format is valid"
              className="text-green-500"
            />
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-white block text-sm font-medium"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="text-white block text-sm font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white rounded-md p-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
