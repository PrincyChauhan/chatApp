import "./App.css";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <Left />
        <Right />
      </div>
    </>
  );
}

export default App;
