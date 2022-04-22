import "./App.css";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { useEffect } from "react";

function App() {
  // just testing api
  // works fine
  useEffect(() => {
    const hitApi = async () => {
      fetch("http://localhost:5000/now")
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    };

    hitApi();
  }, []);

  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}

export default App;
