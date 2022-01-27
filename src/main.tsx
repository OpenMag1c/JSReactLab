import "./styles/main.css";
import "./styles/main.scss";
// watch: native intellisense and file-peek for aliases from jsconfig.json and with none-js files doesn't work: https://github.com/microsoft/TypeScript/issues/29334
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

interface AppState {
  title: string;
}

class AppContainer extends Component<AppProps, AppState> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);
    // test class-dead-code
    const goExlcude = true;
    if (!goExlcude) {
      console.warn("class-dead-code doesn't work");
    }
  }

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home title="Home PAGE hello" />} />
              <Route path="/products" element={<Products title="Products" />} />
              <Route path="/about" element={<About title="About" />} />
              <Route path="*" element={<Home title="Home PAGE hello" />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
