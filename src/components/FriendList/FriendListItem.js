import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function FriendListItem({ friend }) {
  return (
    <Fragment>
      <span class="status">{friend.isOnline ? "Online" : "Offline"}</span>
      <img class="avatar" src={friend.avatar} alt={friend.name} width="48" />
      <p class="name">{friend.name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
