import Header from "./header";
import Footer from "./footer"


export default function Layout({ children }) {
    return (
      <>
        {/* <Navbar /> */}
        <Header/>
        <main>{children}</main>
        <Footer />
      </>
    )
  }

