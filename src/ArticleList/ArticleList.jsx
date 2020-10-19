import React from "react";
import ArticleListItem from "../ArticleListItem/ArticleListItem.jsx";

const ArticleList = (props) => {
    return (!props.articles.length) ? <div>You have no data!</div> : (
        <ul>
            {props.articles.map((article) => (<ArticleListItem article={article}></ArticleListItem>))}
        </ul>
      );
};

export default ArticleList;