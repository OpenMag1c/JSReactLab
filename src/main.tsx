import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/layout";
import Products from "@/pages/products/products";
import Home from "@/pages/home/home";
import About from "@/pages/about/about";
import PrivateRoute from "@/components/privateRoute/privateRoute";
import { authType } from "@/types/types";
import UserProfile from "@/pages/userprofile/userProfile";

interface AppProps {
  nothing: boolean;
}

interface IAppStates {
  hasError: boolean;
  isAuth: boolean;
  userName?: string;
}

class AppContainer extends Component<AppProps, IAppStates> {
  ["constructor"]: typeof AppContainer;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      hasError: false,
      isAuth: false,
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

  auth = (props: authType) => {
    this.setState({
      isAuth: props.isAuth,
      userName: props.name,
    });
  };

  render() {
    return (
      <StrictMode>
        <BrowserRouter>
          <Layout setAuth={this.auth} isAuth={this.state.isAuth} userName={this.state.userName}>
            {!this.state.hasError ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products">
                  <Route
                    path=":category"
                    element={
                      <PrivateRoute isAuth={this.state.isAuth}>
                        <Products />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path=""
                    element={
                      <PrivateRoute isAuth={this.state.isAuth}>
                        <Products />
                      </PrivateRoute>
                    }
                  />
                </Route>
                <Route
                  path="/about"
                  element={
                    <PrivateRoute isAuth={this.state.isAuth}>
                      <About />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/user"
                  element={
                    <PrivateRoute isAuth={this.state.isAuth}>
                      <UserProfile />
                    </PrivateRoute>
                  }
                />
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
