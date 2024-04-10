import styles from './Statistics.module.css';
import PropTypes from "prop-types";

function Statistics ({stats}) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title}>Upload stats</h2>

            <ul className={styles.statList}>
                <li className={styles.item} style={{backgroundColor: "rgb(89, 153, 223)"}}>
                    <span className={styles.label}>{stats[0].label}</span>
                    <span className={styles.percentage}>{stats[0].percentage}%</span>
                </li>
                <li className={styles.item} style={{backgroundColor: "rgb(138, 44, 226)"}}>
                    <span className={styles.label}>{stats[2].label}</span>
                    <span className={styles.percentage}>{stats[2].percentage}%</span>
                </li>
                <li className={styles.item} style={{backgroundColor: "rgb(226, 44, 117)"}}>
                    <span className={styles.label}>{stats[1].label}</span>
                    <span className={styles.percentage}>{stats[1].percentage}%</span>
                </li>
                <li className={styles.item} style={{backgroundColor: "rgb(42, 147, 112)"}}>
                    <span className={styles.label}>{stats[3].label}</span>
                    <span className={styles.percentage}>{stats[3].percentage}%</span>
                </li>
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    title : PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
}

export default Statistics;