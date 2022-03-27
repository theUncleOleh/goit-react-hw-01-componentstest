import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import s from './Profile.module.css';

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.description}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className={s.avatar}
        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}> Followers </span>
          <span className={s.percentage}> {stats.followers} </span>
        </li>
        <li>
          <span className={s.label}> Views </span>
          <span className={s.percentage}> {stats.views} </span>
        </li>
        <li>
          <span className={s.label}> Likes </span>
          <span className={s.percentage}> {stats.likes} </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.number.isRequired),
};
