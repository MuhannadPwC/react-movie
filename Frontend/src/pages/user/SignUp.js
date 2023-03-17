import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useSignup } from "../../hooks/useSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  if (user) {
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="signup-error">{error}</div>}
    </form>
  );
};

export default SignUp;
