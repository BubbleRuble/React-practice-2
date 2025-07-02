import { Component } from "react";
import { GlobalStyle } from './GlobalStyle';
import { LoginForm } from "./Components/LoginForm";
import {ProductReviewForm} from './Components/ProductReviewForm/ProductReviewForm'

export class App extends Component {
  state = {

  }
  render() {
    return (
      <>
      {/* <GlobalStyle /> */}
      {/* <LoginForm/> */}
      <ProductReviewForm/>
      </>
    )
  }
}

export default App;