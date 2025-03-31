import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import App from "./App.jsx";
import { SocketProvider } from "./context/SocketContext.jsx";
createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <SocketProvider>
        <App />
      </SocketProvider>
    </BrowserRouter>
  </AuthProvider>
);
