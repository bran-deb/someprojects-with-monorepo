import styles from './styles.module.css'

export const MainScreen = () => {
    return (
        <div className={styles.container}>
            <h1>Fun facts about React</h1>
            <br />
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originality created by Jordan Walke</li>
                <li>Has well over 100k stars onGgitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
};
