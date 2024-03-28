import About from "./components/about";
import CardPage from "./components/card-page";
import Feedback from "./components/feedback/Index";
import Informations from "./components/informations";
import Insights from "./components/insights";
import Main from "./components/main/index";
import Nav from "./components/nav";
import YourPhone from "./components/yourPhone";



function App() {
  return (
    <div className="App">
        <Nav />
        <Main />
        <Feedback />
        <Informations />
        <CardPage />
        <About />
        <YourPhone />
        <Insights />
    </div>
  );
}

export default App;
