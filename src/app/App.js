import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <Switch>
                {Routes.map(route => {
                    return (
                        <Route
                            exact
                            path={route.path}
                            component={route.component}
                            key={route.path}
                        />
                    );
                })}
            </Switch>
        );
    }
}

export default App;
