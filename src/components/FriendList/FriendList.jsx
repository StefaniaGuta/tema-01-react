import styles from './FriendList.module.css';
import PropTypes from "prop-types";

function FriendList ({friends}) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
            <li key={friend.id} className={styles.item}>
                <span className={friend.isOnline ? styles.true : styles.false} >{friend.isOnline}</span>
                <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
      ))}
        </ul>
    )
}

FriendList.prototype = {
    friends: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool,
    }).isRequired,
}

export default FriendList;
