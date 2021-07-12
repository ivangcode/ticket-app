// Analog to createElement.
import React from 'react';
// Analog to appendChild.
import ReactDOM from 'react-dom';
import Badge from './components/Badge'


const container = document.getElementById('app');

// ReactDOM.render(__what__, __where__); 
ReactDOM.render(<Badge />, container)




