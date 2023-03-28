import "./styles/styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Counters from "./components/Score";

function App() {
  return (
    <div id="app--container">
      <Header />
      <Main />
      <Footer />
      {/* <Counters /> */}
    </div>
  );
}

export default App;
