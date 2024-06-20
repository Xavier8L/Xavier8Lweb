import Styles from '../styles/navbar.module.css';

export default function navbar() {
  return (
    <nav className={Styles.navbar}>
        <div className={Styles.navbarContainer}> 
                <a href="#profiel" >
                    Profiel
                </a>
                <a href="#ervaring">
                    Ervaring
                </a>
                <a href="#vaardigheden">
                    Vaardigheden
                </a>
                <a href="#product">
                    Product
                </a>
                <a href="#gegevens">
                    Persoon gegevens
                </a>
        </div>
        
    </nav>
  );
}