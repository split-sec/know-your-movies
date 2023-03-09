import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <div className={ styles.navbar }>
            <div className={ styles.header }>
                Know Your Movies
            </div>

            <div className={ styles.rightSection }>
                <div>Docs</div>
                <div>About</div>
            </div>
        </div>
    );
}