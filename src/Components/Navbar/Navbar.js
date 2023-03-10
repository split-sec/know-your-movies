import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <div className={ styles.navbar }>
            <h1 className={ styles.header }>
                KNOW YOUR MOVIES
            </h1>

            <div className={ styles.rightSection }>
                <div>Docs</div>
                <div>About</div>
            </div>
        </div>
    );
}