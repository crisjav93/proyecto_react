import styles from './navbar.module.scss';
import 'bulma/css/bulma.min.css';

const Navbar = () => {
return <div className={styles.container} role="navigation" aria-label="main navigation">
        <div class="navbar_brand">
            <a class="navbar_item" href="">
                <img src="../img/logo-infinity.png" width="112" height="28"></img>
            </a>
        </div>
        <div class="navbar_menu">
            <a className='button'>Categories</a>
            <a className='button'>Offers</a>
            <a className='button'>History</a>
        </div>
        <div class="navbar_end">
            <div class="navbar_item">
                <div class="buttons">
                    <a class="navbar_item" href="">
                        <img className='Cartwidget' src="../img/bag-icon.png" width="33" height="35"></img>
                    </a><p>(2)</p>
                    <a class="button is-primary"><strong>Sign up</strong></a>
                    <a class="button is-dark">Log in</a>
                </div>
            </div>
        </div>    
    </div>
}

export default Navbar;