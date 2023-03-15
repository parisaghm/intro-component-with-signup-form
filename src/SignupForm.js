class SignupForm {
    constructor() {
      this.formMain = document.createElement('main');
      this.form = this.formMain.querySelector('form');
      this.formMain.classList.add('hero__container');
      this.formMain.innerHTML = `
        <div class="hero__main">
          <div class="hero__left">
            <h3 class="hero__text">Learn to code by watching others</h3>
            <p class="hero__paratext">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>
          <div class="hero__right">
            <div class="hero__banner">
              <p class="hero__banner-text"><b>Try it free 7 days</b> then 120/mo. thereafter</p>
            </div>
            <div class="hero__Form">
              <form method="post">
                <input type="text" id="firstname" class="hero__information" name="firstname" placeholder="First Name" required>
                <br>

                <input type="text" id="lastname" class="hero__information" name="lastname" placeholder="Last Name" required>
                <br>
               
                <input type="email" id="email" class="hero__information" name="email" placeholder="Email" required>
                <br>
            
                <input type="password" id="password"  name="password" placeholder="Password" required>
                <div class="icon-password">
                <img  id="show-password"  src="./images/eye.svg">
                <img  id="hide-password" src="./images/eye-blocked.svg" style="display: none;">
                </div>
                <div class="hero__validPassword">Valid password contains 8 or more characters.</div>
                <div class="hero__password-length">
                 Password length:
                 <span class="js-passwordLength">0</span>
                 </div>
                <br>
                <input type="submit" class="hero__submitSignup" value="Claim your free trial">
                <p class="hero__terms">By clicking the button, you are agreeing to our <a href="/" class="hero__linkTerms">Terms and Services</a></p>
              </form>
            </div>
          </div>
        </div>

        <footer class="footer--form">
        <p class="footer--attribution">
          Challenge by
          <a class="footer--attribution-link" href="https://www.frontendmentor.io/">Frontend Mentor</a>
          . Coded by
          <a class="footer--attribution-link" href="https://github.com/vanzasetia">Vanza Setia</a>
        </p>
      </footer>
      `;
    }


    attachListeners(){
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input =>{
        const label = input.previousElementSibling;
         input.addEventListener('input',()=>{
            if(input.value){
              label.classList.add('sr-only');
            }
         });
          input.addEventListener('keydown', e =>{
             if(e.key === 'Backspace' && input.value === ''){
              label.classList.remove('sr-only');
             }
          });
      })
    }

    togglePasswordIcon(){
      const password = document.getElementById("password");
      const hidePassword = document.getElementById("hide-password");
      const showPassword = document.getElementById("show-password");
      showPassword.addEventListener("click", function() {
        password.type = "text";
        showPassword.style.display = "none";
        hidePassword.style.display = "block";
      });
      hidePassword.addEventListener("click", function() {
        password.type = "password";
        hidePassword.style.display = "none";
        showPassword.style.display = "block";
      });
    }

    validatePassword(){
      const passwordInput = document.getElementById("password");
      const passwordLength = document.querySelector(".js-passwordLength");
       passwordInput.addEventListener("input", function() {
        passwordLength.textContent = passwordInput.value.length;
      });
    }

    SubmitEmail(){
     form.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = event.target.querySelector('#email');
        const email = emailInput.value;
        window.location.href = `https://example.com/submit-email?email=${email}`;
      });
    }

    render() {
      document.body.appendChild(this.formMain);
      this.attachListeners();
      this.togglePasswordIcon();
      this.validatePassword();
      this.SubmitEmail();
    }

  }

 export {SignupForm};

