import styles from "./BookingHelper.module.css";

export const BookingHelper = () => {
    return (
        <section className={styles.bar}>
            <div className={styles.container}>
                <div className={styles.priceWrap}>
                    <span className={styles.priceLabel}>Starting from:</span>
                    <span className={styles.priceValue}>120€ / night</span>
                </div>
                <button className={styles.button}>Book now</button>
            </div>
        </section>
    );
};