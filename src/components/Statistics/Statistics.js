import React from "react";
import PropTypes from "prop-types";

export default function Statistics(props) {
  return (
    <section class="statistics">
      {props.title && <h2 class="title">{props.title}</h2>}
      <ul class="stat-list">
        {props.stats.map((stat) => (
          <li key={stat.id} class="item">
            <span class="label"> {stat.label} </span>
            <span class="percentage"> {stat.percentage} </span>
          </li>
        ))}
        {/* <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li> */}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};
