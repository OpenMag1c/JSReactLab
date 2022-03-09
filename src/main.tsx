import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import Products from "@/pages/products/products";
import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import PrivateRoute from "@/components/privateRoute/privateRoute";
import UserProfile from "@/pages/userprofile/userProfile";
import store from "@/store";
import Order from "@/pages/order/order";

interface AppProps {
  nothing: boolean;
}

interface IAppStates {
  hasError: boolean;
}

class AppContainer extends Component<AppProps, IAppStates> {
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
        <Provider store={store}>
          <BrowserRouter>
            {!this.state.hasError ? (
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route element={<PrivateRoute />}>
                    <Route path="products">
                      <Route path=":category" element={<Products />} />
                      <Route path="" element={<Products />} />
                    </Route>
                    <Route path="about" element={<About />} />
                    <Route path="user" element={<UserProfile />} />
                    <Route path="order" element={<Order />} />
                  </Route>
                  <Route path=":login" element={<Home />} />
                </Route>
              </Routes>
            ) : (
              <Home />
            )}
          </BrowserRouter>
        </Provider>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
