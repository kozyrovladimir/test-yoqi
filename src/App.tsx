import React from 'react';
import './App.css';
import SearchBar from "./components/searchBar";
import AppBar from "./components/appBar";
import {theme} from './components/appTheme';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@mui/material';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <AppBar />
                <SearchBar />
            </div>
        </ThemeProvider>
    );
}

export default App;
