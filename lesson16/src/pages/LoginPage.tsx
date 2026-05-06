import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("user", "true");
     window.dispatchEvent(new Event("storage"));
   window.location.href = "/";
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}