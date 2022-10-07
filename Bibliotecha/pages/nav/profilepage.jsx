import styles from "./profilepage.module.css";

const Profile = () => {
    return (
      <div className= {styles.maincontainer}>
        {/* left container */}
      <div className= {styles.leftcontainer}>
      <div className= {styles.profilepic}></div>
      
      </div>

      
      {/* right container */}
      <div className= {styles.rightcontainer}>
      <div className= {styles.righttab}>Creator Hub</div>
      </div>
    </div>
  
    );
}

export default Profile ;