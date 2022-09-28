import styles from "./header.module.css";
import Link from 'next/link';

const Header = () => {
  fetch ("/api/test").then(
    function (response) {
      return response.json().then(console.log)
    }
  )
    return (
        <div className = {styles.header}>
        <a href="#default" >BiblioTECHa</a>
        <div className = {styles.box}>
    <input type="search" id = {styles.search} placeholder="Search" />
</div>
        <div className ={styles.headerright}>
        <div className="topnav">
        
</div>
          <a className ="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <Link href="/nav/loginpage">Login</Link>
        </div>
      </div>
    );
}

export default Header;