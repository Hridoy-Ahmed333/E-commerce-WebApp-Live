import { useEffect, useState } from "react";
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

  useEffect(() => {
    const use = JSON.parse(localStorage.getItem("users"));
    if (!use) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);
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
      const users = JSON.parse(localStorage.getItem("users"));

      if (!users) {
        throw new Error("Email check failed");
      }

      const checkResult = users;

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

      // const submitResponse = await fetch("http://localhost:5050/users", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     id: Date.now().toString(),
      //     firstName: formData.firstName,
      //     lastName: formData.lastName,
      //     email: formData.email,
      //     password: formData.password,
      //   }),
      // });

      // if (!submitResponse.ok) {
      //   throw new Error("Submission failed");
      // }

      // const result = await submitResponse.json();

      // Retrieve the existing users array from localStorage
      let allusers = JSON.parse(localStorage.getItem("users")) || [];

      // Create the new user object
      const newUser = {
        id: Date.now().toString(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };

      // Simulate the POST request by adding the new user to the users array
      allusers.push(newUser);

      // Save the updated users array back to localStorage
      localStorage.setItem("users", JSON.stringify(allusers));

      // Simulate the API response check
      if (!newUser) {
        throw new Error("Submission failed");
      }

      // Now, the result will be equivalent to the newUser
      const result = newUser;

      // Continue with your logic using result

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
