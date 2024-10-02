import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [usernameSuccess, setUsernameSuccess] = useState("");
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);


  const USERNAME_MIN = 1;
  const USERNAME_MAX = 20;

  const usernameError = username.length < USERNAME_MIN && isUsernameFocused
    ? `Username must be at least ${USERNAME_MIN} characters`
    : username.length > USERNAME_MAX && isUsernameFocused
    ? `Username must be at most ${USERNAME_MAX} characters`
    : '';

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setIsUsernameFocused(true)}  // Set focus state to true
            onBlur={() => setIsUsernameFocused(false)}  // Set focus state to false
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
          {/* Using the ErrorMessage component for username validation */}
          <ErrorMessage 
            condition={usernameError !== ''}
            message={usernameError}
            className="text-red-500"
          />
          <ErrorMessage 
            condition={username.length >= USERNAME_MIN && username.length <= USERNAME_MAX && isUsernameFocused}
            message= {`Username must be at least ${USERNAME_MIN} characters`}
            className="text-green-500"
          />
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
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
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
