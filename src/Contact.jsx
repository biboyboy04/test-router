// Contact.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  // You can replace the content of this component with your desired content or component
  return (
    <div>
      <h2>Contact</h2>
      <p>This is the contact page. Add your content here.</p>
      {/* Your new site content goes here */}
      <Link to="/test-router/">Home</Link>
    </div>
  );
}

export default Contact;
