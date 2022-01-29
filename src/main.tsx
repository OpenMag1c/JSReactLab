import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/components/pages/home";
import Products from "@/components/products/products";
import About from "@/components/pages/about";
import Layout from "@/components/layout";

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
                <Route path="/" element={<Home title="Home PAGE hello" />} />
                <Route path="/products" element={<Products title="Products" />} />
                <Route path="/about" element={<About title="About" />} />
                <Route path="*" element={<Home title="Home PAGE hello" />} />
              </Routes>
            ) : (
              <Home title="Home PAGE hello" />
            )}
          </Layout>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
