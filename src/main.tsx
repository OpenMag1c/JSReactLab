import "./styles/main.css";
import "./styles/main.scss";
import { Component, StrictMode, Suspense } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Layout from "@/components/layout/layout";
import Home from "@/pages/home/home";
import PrivateRoute from "@/components/privateRoute/privateRoute";
import store from "@/store";
import { AboutPage, OrderPage, ProductsPage, UserProfilePage } from "@/environment/lazyPages";
import Spinner from "@/components/elements/spinner/spinner";

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
            <Suspense fallback={<Spinner />}>
              {!this.state.hasError ? (
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<PrivateRoute />}>
                      <Route path="products">
                        <Route path=":category" element={<ProductsPage />} />
                        <Route path="" element={<ProductsPage />} />
                      </Route>
                      <Route path="about" element={<AboutPage />} />
                      <Route path="user" element={<UserProfilePage />} />
                      <Route path="order" element={<OrderPage />} />
                    </Route>
                    <Route path=":login" element={<Home />} />
                  </Route>
                </Routes>
              ) : (
                <Home />
              )}
            </Suspense>
          </BrowserRouter>
        </Provider>
      </StrictMode>
    );
  }
}

ReactDom.render(<AppContainer nothing={false} />, document.getElementById("app"));
