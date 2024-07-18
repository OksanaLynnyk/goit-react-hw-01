import css from './Profile.module.css'

const Profile = ({username, tag,location,avatar,stats}) => {
   return ( 
   <div className={css.profile}>
        <div className={css.wrapper}>
            <img className={css.photo} src={avatar}
            alt="User avatar"/>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li className={css.stats_item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li className={css.stats_item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{stats.views}</span>
            </li>
            <li className={css.stats_item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
</div> );
}

export default Profile;