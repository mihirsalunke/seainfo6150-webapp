import React, { useState } from "react";
import PropTypes from "prop-types";
import ArticleTextToggleButton from "../ArticleTextToggleButton/ArticleTextToggleButton.jsx";
import styles from "./ArticleListItem.module.css";

const ArticleListItem = (props) => {

  const [hidden, setHidden] = useState(true);

  const onClick = () => {
    setHidden(!hidden);
  };

  return (
    <li className={styles.item}>
      <article className={styles.article}>
        <h2 className={styles.title}>{props.article.title}</h2>
        <p className={`${hidden ? styles.hidden : "shortText"}`}>{props.article.shortText}</p>
        <time className={`${styles.dateTime} ${hidden ? styles.hidden : ""}`.trim()} dateTime={props.article.timeStamp}>
          {props.article.displayDate}
        </time>
      </article>
      <ArticleTextToggleButton buttonText={hidden ? "Show more" : "Show less"} onClick={onClick} />
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
