import styles from './styles.module.css'

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <nav >
                <img src='../../assets/logo.svg' />
                <h3 >ReactFacts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
    )
}