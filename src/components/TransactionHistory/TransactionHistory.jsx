import styles from './TransactionHistory.module.css';
import PropTypes from "prop-types";

function TransactionHistory ({items}) {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tabelHead}>
                <tr>
                <th className={styles.tabelTitle}>Type</th>
                <th className={styles.tabelTitle}>Amount</th>
                <th className={styles.tabelTitle}>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.tableBody}>
            {items.map(item => (
                <tr key={item.id}>
                    <td>{(item.type).charAt(0).toUpperCase() + (item.type).slice(1)}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory;