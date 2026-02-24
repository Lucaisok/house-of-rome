
import styles from './SkeletonLoader.module.css';

export default function SkeletonLoader() {
    return (
        <div className={styles.skeletonWrapper}>
            <div className={styles.skelHeader} />
            <div className={styles.skelRow}>
                <div className={styles.skelAvatar} />
                <div className={styles.skelTitleBlock}>
                    <div className={styles.skelTitle} />
                    <div className={styles.skelSubtitle} />
                </div>
            </div>
            <div className={styles.skelContentBlock}>
                <div className={styles.skelContentLine} />
                <div className={styles.skelContentLine} />
                <div className={styles.skelContentLineShort} />
            </div>
            <div className={styles.skelCardRow}>
                <div className={styles.skelCard} />
                <div className={styles.skelCard} />
                <div className={styles.skelCard} />
            </div>
        </div>
    );
}
