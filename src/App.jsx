import React, { Fragment } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import TeachingMethod from "./teaching_method/teaching-method.component.jsx";
import Event from "./event_page/event.component.jsx";
import Landing from "./landing-page/landing.component.jsx";
import Route from "react-router-dom/Route";

import GlobalStyles from "./globalStyles.jsx";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Route path="/teaching-method">
        <TeachingMethod />
      </Route>
      <Route path="/events">
        <Event />
      </Route>
      <Route path="/landing">
        <Landing />
      </Route>
      <Footer className="text-white" />
    </Fragment>
  );
}

export default App;
