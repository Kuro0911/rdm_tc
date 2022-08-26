import "./App.css";
import { Wraper } from "./App.styled";
import { InputContainer } from "./components/input-container/input";
import { OutputContainer } from "./components/output-container/output";

function App() {
  return (
    <Wraper>
      <InputContainer />
      <OutputContainer />
    </Wraper>
  );
}

export default App;
