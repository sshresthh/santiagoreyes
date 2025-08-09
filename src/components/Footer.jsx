import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.content} title="santiagoreyes.tech">
                <span style={{ color: 'red' }}>❤</span> Santiago Reyes
            </p>
        </div>
    );
}
