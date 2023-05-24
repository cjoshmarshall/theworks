import { Fragment } from "react";
import Home from "./pages/Home";
import MailingList from "./components/MailingList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Home />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
