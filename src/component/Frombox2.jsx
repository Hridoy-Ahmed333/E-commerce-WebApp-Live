import { useNavigate } from "react-router-dom";
import { UserProvider, UserContext } from "../Context API/userContext";
import "./Frombox2.css";
import { useContext, useState } from "react";
const Frombox2 = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { setUserData } = useContext(UserContext);

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
    if (!isChecked) {
      alert("Please agree to the term and conditions");
      return;
    }
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

    // Check if email exists in the result
    const existingUser = checkResult.find((user) => {
      return user.email.toLowerCase() === formData.email.toLowerCase();
    });

    if (!existingUser) {
      alert("This email does not exist");
      return;
    }
    if (existingUser.password === formData.password) {
      const userDataString = JSON.stringify({
        ...existingUser,
        status: "logged in",
      });

      setUserData(existingUser);

      navigate("/store");
    } else {
      alert("Wrong Password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <div className="frg">Forget password?</div>
        <div className="tick" onClick={handleClick2}>
          <div>{isChecked ? "✔" : ""}</div>
        </div>
        I agree to the term and policy
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Frombox2;
