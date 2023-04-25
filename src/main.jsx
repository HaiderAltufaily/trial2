import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme";
import { Provider } from "react-redux";
import store from "./store";
// import Fonts from "./styles/Fonts";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
