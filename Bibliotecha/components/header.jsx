import styles from "./header.module.css";

const Header = () => {
    return (
        <div className={styles.header}>
        <a href="#default" >CompanyLogo</a>
        {/* <div className ="header-right">
          <a className ="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div> */}
      </div>
    );
}

export default Header;