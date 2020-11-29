import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button type="button" className="btn btn-secondary">Add New</button>
  );
}

export default Button;
