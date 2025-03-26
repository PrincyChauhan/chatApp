import "./App.css";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Logout from "./home/left1/Logout";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <Logout />
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
