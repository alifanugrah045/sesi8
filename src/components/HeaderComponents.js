import React from "react";

const HeaderComponents = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white border">
        <div className="container">
            
          <h1 className="navbar-brand" href="#">
            My First React App
          </h1>
          
          <div className="collapse navbar-collapse"  id="navbarNav">
            <input className="form-control me-2 w-25 ms-auto"  type="search" placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponents;
