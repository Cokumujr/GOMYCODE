
import Header from './header';
import Footer from './footer';
import styles from '../styles/theme.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
