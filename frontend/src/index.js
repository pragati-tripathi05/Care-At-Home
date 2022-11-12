import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import { store } from "./Redux/store";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#212121",
    },
  },
  button: {
    _hover: {
      backgroundColor: "RGBA(0, 0, 0, 0.80)",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(store.getState())
root.render(

    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
