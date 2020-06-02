import React, { useState, useEffect } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import TeachingMethod from "./teaching_method/teaching-method.component.jsx";
import Event from "./event_page/event.component.jsx";
import Landing from "./landing-page/landing.component.jsx";
import Home from "./home/home.component.jsx";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./globalStyles.jsx";


import { ThemeProvider } from "@material-ui/styles";
import theme from "./header/Theme";


function App() {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
     <GlobalStyles />
    <BrowserRouter>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <div style={{ minHeight: "100vh" }}><Landing /></div>}
        />  
        <Route
          exact
          path="/teaching-method"
          component={() => (
            <div style={{ minHeight: "100vh" }}><TeachingMethod /></div>
          )}
        />
        <Route
          exact
          path="/events"
          component={() => <div style={{ minHeight: "100vh" }}> <Event /></div>}
        />
      </Switch>

      <Footer className="text-white" />
    </BrowserRouter>
  </ThemeProvider>


    // <Fragment>
    //   <GlobalStyles />
    //   <Header />
    //   {/* <Route exact path="/">
    //     <Home />
    //   </Route> */}
    //   <Route exact path="/">
    //     <Landing />
    //   </Route>
    //   <Route exact path="/teaching-method">
    //     <TeachingMethod />
    //   </Route>
    //   <Route  exact path="/events">
    //     <Event />
    //   </Route>
    //   <Footer className="text-white" />
    // </Fragment>
  );
}

export default App;
