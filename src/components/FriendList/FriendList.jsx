import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export function FriendList(data) {
  return (
    <ul className={css.friendList}>
      {data.friends.map(friend => {
        return (
          <li key={friend.id}>
            <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
