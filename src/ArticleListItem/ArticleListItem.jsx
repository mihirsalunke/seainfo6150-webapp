import React from "react";

const ArticleListItem = (props) => {
    return (
        <li>
            <h1>{props.article.title}</h1>
            <time dateTime={props.article.timeStamp}>{props.article.displayDate}</time>
            <p>{props.article.shortText}</p>
        </li>
    )
};

export default ArticleListItem;