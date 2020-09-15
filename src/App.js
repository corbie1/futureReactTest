import React from 'react';
import './App.css';

export const App = ({ children }) => {  
  return (
    <div className="App block">
      <main className="block__inner">{children}</main>
    </div>
  );
};
