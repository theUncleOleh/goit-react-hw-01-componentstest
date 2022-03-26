import React from "react";
import FriendListItem from "./FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
