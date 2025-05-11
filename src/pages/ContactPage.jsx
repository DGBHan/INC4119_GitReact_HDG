import React from "react";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <h2>연락처</h2>
      <h3>나의 정보</h3>
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default ContactPage; 