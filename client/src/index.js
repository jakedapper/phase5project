import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from "react-router-dom";
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import App from './App';
import reportWebVitals from './reportWebVitals';


{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBf0C3pSeGhmIl2eEuNZ6vVSsXnEYlRRmY&libraries=places&callback=initMap"async></script> */}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
