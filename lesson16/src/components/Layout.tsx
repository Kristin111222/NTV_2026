import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function navButtonClassName(isActive: boolean) {
  return [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary text-primary-foreground"
      : "text-muted-foreground hover:bg-muted hover:text-foreground",
  ].join(" ");
}

export function Layout() {
  const navigate = useNavigate();
  const location = useLocation();


const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("user")
);

useEffect(() => {
  const checkLogin = () => {
    setIsLoggedIn(!!localStorage.getItem("user"));
  };

  window.addEventListener("storage", checkLogin);

  return () => {
    window.removeEventListener("storage", checkLogin);
  };
}, []);

  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card/50 border-b backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <p className="text-foreground text-sm font-semibold tracking-tight">
            Lesson 16
          </p>

          <nav className="flex flex-wrap gap-2">
            {/* Home */}
            <button
              className={navButtonClassName(location.pathname === "/")}
              onClick={() => navigate("/")}
            >
              Home
            </button>

            {/* About */}
            <button
              className={navButtonClassName(location.pathname === "/about")}
              onClick={() => navigate("/about")}
            >
              About
            </button>

            {/* Logout (bara ef loggaður) */}
            {isLoggedIn && (
              <button
                className="rounded-md px-3 py-2 text-sm font-medium text-red-500"
                onClick={() => {
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}