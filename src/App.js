import Feedback from "./components/feedback/Index";
import Informations from "./components/informations";
import Main from "./components/main/index";
import Nav from "./components/nav";



function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Feedback />
        <Informations />
    </div>
  );
}

export default App;
