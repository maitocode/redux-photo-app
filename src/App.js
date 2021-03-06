import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import "./App.scss";
import NotFound from "./components/NotFound/index.jsx";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ... </div>}>
        <BrowserRouter>
          <ul>
            <li>
              <Link to="/photos">Go to photo page</Link>
            </li>
            <li>
              <Link to="/photos/add">Go to Add new photo page</Link>
            </li>
            <li>
              <Link to="/photos/123">Go to Edit photo page</Link>
            </li>

            <Switch>
              <Redirect exact from="/" to="/photos" />

              <Route path="/photos" components={Photo} />
              <Route component={NotFound} />
            </Switch>
          </ul>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
