import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
                <Route path="/products">
                  <Route path=":category" element={<Products />} />
                  <Route path="" element={<Products />} />
                </Route>
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
