import About from "./components/about";
import CardPage from "./components/card-page";
import Feedback from "./components/feedback/Index";
import Footer from "./components/footer";
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
      <div id="iphone">
        <Informations />
      </div>
      <CardPage />
      <div id="help">
        <About />
      </div>
      <div id="android">
        <YourPhone />
      </div>
      <Insights />
      <div id="company">
        <Footer />
      </div>
    </div>
  );
}

export default App;
