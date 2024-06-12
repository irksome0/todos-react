import { Provider } from "react-redux";
import { ApplicationWindow } from "./components/ApplicationWindow.tsx";
import React from "react";
import store from "./storage/store.ts";

export default function App(){
    
    return(
        <Provider store={store}>
            <ApplicationWindow></ApplicationWindow>
        </Provider>
    );
};