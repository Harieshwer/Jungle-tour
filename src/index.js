import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './reddx/Store';
import App from './App';
// import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';


// export default function index() {
//   return (
//     <BrowserRouter>
//       {/* <Routes>
//         <Route path="/" element={<Home />}>
//           <Route index element={<Home />} />
//           <Route path="/Abouts" element={<About />} />
//           <Route path="/contact" element={<Contact />} />

//         </Route>
//       </Routes> */}
//       <App />
//     </BrowserRouter>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //   <App />
  //   </BrowserRouter>


  //   </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
