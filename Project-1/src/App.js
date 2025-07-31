import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News key="general" pageSize={9} country="in" />}
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pageSize={9}
                  category="business"
                  country="in"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={9}
                  category="entertainment"
                  country="in"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News
                  key="general"
                  pageSize={9}
                  category="general"
                  country="in"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={9}
                  category="health"
                  country="in"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={9}
                  category="science"
                  country="in"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={9}
                  category="sports"
                  country="in"
                />
              }
            />
            <Route
              path="/techonology"
              element={
                <News
                  key="techonology"
                  pageSize={9}
                  category="techonology"
                  country="in"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}