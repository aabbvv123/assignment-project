'use client'
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function Home() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome ${result.user.displayName}`);
      console.log(result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Firebase Google Login Demo</h1>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4285F4",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer",
        }}
      >
        Sign in with Google
      </button>
    </main>
  );
}
