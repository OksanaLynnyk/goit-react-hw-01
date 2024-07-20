import FriendListItem from "../FriendListItem/FriendListItem"
import css from './FriendList.module.css'



const FriendList = ({friends}) => {
    return (<ul className={css.friend_list}>
        {friends.map(({avatar, name, isOnline, id}) => {
            return <li key={id} className={css.item}> <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}/></li>
        })}
    </ul>)
}

export default FriendList