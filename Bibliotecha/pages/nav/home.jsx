import styles from "./home.module.css";

const Homepage = () => {
    return (
      <div className= {styles.maincontainer}>
        {/* left container */}
      <div className= {styles.leftcontainer}>
      <div className= {styles.righttab}>Top Creators</div>
        <div className= {styles.profilepic}></div>
        
        <div className= {styles.becomecreatorbtn}>Become a creator</div>

      </div>
      {/* right container */}
      <form className= {styles.rightcontainer}>
      <div className= {styles.righttab}> Top Questions</div>
      <input className= {styles.searchtags}/>
      <input className= {styles.title}/>
      <input className= {styles.textbox}/>
      
      </form>
    </div>
    );
}

export default Homepage ;