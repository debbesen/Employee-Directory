import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <button type="button" class="btn btn-secondary">Secondary</button>
  );
}

export default Button;
