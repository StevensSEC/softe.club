import React from "react";

const UxContext = React.createContext({
	headerCompact: false,
	headerVisible: true,
	footerVisible: true,
});

/**
 * Provides react contexts to make some tasks easier.
 *
 * See https://reactjs.org/docs/context.html
 */
export { UxContext };
