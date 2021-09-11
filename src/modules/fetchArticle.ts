import React from "react";

const fetchArticle = (source : string, __previousSource : string, component: React.Component) => {
    if (source === __previousSource) {
        // don't fetch again if the source hasn't changed
        return;
    }

    let url = require(`../articles/${source}`);

    component.setState({
        markdown: null,
    });

    fetch(url)
        .then(resp => resp.text())
        .then(text => {
            component.setState({
                markdown: text,
                __previousSource: source,
            });
        });
}

export default fetchArticle;