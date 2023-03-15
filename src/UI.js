 import {SignupForm} from "./SignupForm.js";

class UI {
  constructor() {
    this.target = document.getElementById("app");
    this.signup = new SignupForm();
    this.signup.render(this.target);
  }
}

 export {UI};





