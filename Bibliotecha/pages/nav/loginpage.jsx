import styles from "./loginpage.module.css";

const LoginForm = () => {
    return (
      <div className= {styles.maincontainer}>
        {/* left container */}
      <div className= {styles.leftcontainer}>
      <div className= {styles.topcontainer}></div>
      <div className= {styles.bottomcontainer}></div>
      </div>
      {/* right container */}
      <div className= {styles.rightcontainer}>
      <div className= {styles.loginpage}>
  <div className= {styles.form}>
    <form className= {styles.registerform}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className= {styles.message}>Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className= {styles.loginform}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p className= {styles.message}>Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
      </div>
    </div>
  
    );
}

export default LoginForm ;