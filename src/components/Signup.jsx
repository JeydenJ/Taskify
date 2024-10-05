import React, { useState, useEffect } from "react";
import { auth } from "../firebase"; // Import the Firebase auth object
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // useEffect to check Firebase connection
  useEffect(() => {
    console.log(auth);
    if (auth) {
      console.log("Firebase is connected");
    } else {
      console.log("Firebase connection failed");
    }
  }, []); // This runs when the component mounts

  // Handle sign-up function using Firebase
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent form default behavior
    setError(""); // Reset errors

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Sign up the user with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess("Account created successfully!");
      setError(""); // Clear any existing errors
    } catch (err) {
      setError(err.message); // Display Firebase error message
    }
  };

    return (
      <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-bold mb-4">Sign Up</h1>

        {/* Sign-up Form */}
        <form onSubmit={handleSignup}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-white font-medium">
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

          {/* Password input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm text-white font-medium">
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

          {/* Confirm password input */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm text-white font-medium"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Error message */}
          {error && <p className="text-red-500">{error}</p>}

          {/* Success message */}
          {success && <p className="text-green-500">{success}</p>}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  };
export default Signup;
