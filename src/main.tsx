import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Layout from "@/components/layout";
import Products from "@/pages/products";
import Home from "@/pages/home";
import About from "@/pages/about";

interface AppProps {
  nothing: boolean;
}

interface IAppErrorState {
  hasError: boolean;
}

class AppContainer extends Component<AppProps, IAppErrorState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount() {
    console.log(this.state.hasError);
    setTimeout(() => {
      axios.get(`http://localhost:8082/api/search/o`).then((res) => {
        const someData = res.data;
        console.log(someData);
      });
    }, 5000);
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Layout>
            {!this.state.hasError ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about" element={<About title="About" />} />
                <Route path="*" element={<Home />} />
              </Routes>
            ) : (
              <Home />
            )}
          </Layout>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
