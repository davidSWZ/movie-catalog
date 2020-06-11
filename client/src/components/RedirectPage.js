import React from "react";
// @todo Redirect not used but Link doesn't work if deleted?
import { BrowserRouter as Redirect, Link } from "react-router-dom";

/**
 * Return page with a button to be redirected to the search page
 * @param id id parameter in url
 */
const RedirectPage = ({ id }) => {
    return (
        <div>
          {id === "new" ? (
            <h1 className="page-name">
              Movie added successfully! Please come back to the landing page
            </h1>
          ) : (
            <h1 className="page-name">
              Movie modified successfully! Please come back to the landing page
            </h1>
          )}

          <Link to="/">
            <button>Back to search</button>
          </Link>
        </div>
    )
}

export default RedirectPage;
