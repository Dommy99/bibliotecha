import styles from "../components/header.css"

const Header = () => {
    return (
        <div className = {styles.header}>
        <a href="#default" className ={styles.logo}>CompanyLogo</a>
        {/* <div className ="header-right">
          <a className ="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
      </div>
    );
}

export default Header;