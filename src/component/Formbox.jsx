import { useState } from "react";
import "./Formbox.css";

const Formbox = ({ setCng, cng }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isClick, setIsClick] = useState(false);
  const [emailExists, setEmailExists] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick2 = () => {
    if (isChecked === true) {
      setIsChecked(false);
    }
    if (isChecked === false) {
      setIsChecked(true);
    }
    console.log(isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailExists(null);
    setIsLoading(true);

    try {
      // Check if email exists
      const checkResponse = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!checkResponse.ok) {
        throw new Error("Email check failed");
      }

      const checkResult = await checkResponse.json();

      const existingUser = checkResult.find((user) => {
        return user.email.toLowerCase() === formData.email.toLowerCase();
      });

      if (existingUser) {
        alert("This email has already been used");
        return;
      }

      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !isChecked
      ) {
        alert("Please fill up the full form");
        return;
      }

      const submitResponse = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!submitResponse.ok) {
        throw new Error("Submission failed");
      }

      const result = await submitResponse.json();
      console.log("Data written successfully:", result);
      alert("Signup successful!");
      setCng(!cng);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      setIsChecked(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="name-container">
        <div>
          <input
            className="input-name"
            type="text"
            id="firstName"
            name="firstName"
            placeholder=" "
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="First Name">First Name (Optional)</label>
        </div>
        <div>
          <input
            className="input-name"
            type="text"
            id="lastName"
            name="lastName"
            placeholder=" "
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="Last">Last Name (Optional)</label>
        </div>
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder=" "
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="email">Email Address</label>
      </div>

      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" "
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="agree">
        <div className="tick" onClick={handleClick2}>
          <div>{isChecked ? "✔" : ""}</div>
        </div>
        I agree to the term and policy
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
};

export default Formbox;
