import React from "react";

const fetchMarkdown = (source : string, __previousSource : string, component: React.Component) => {
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

// For use inside functional components.
const fnFetchMarkdown = (
    source : string, 
    __previousSource : string, 
    setmd: React.Dispatch<React.SetStateAction<string>>, 
    setPrev: React.Dispatch<React.SetStateAction<string>>) => {
    if (source === __previousSource) {
        // don't fetch again if the source hasn't changed
        return;
    }

    let url = require(`../articles/${source}`);

    setmd("");

    fetch(url)
        .then(resp => resp.text())
        .then(text => {
            setmd(text);
            setPrev(source);
        });
}

export {fetchMarkdown, fnFetchMarkdown};