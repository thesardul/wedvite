"use client";

import React from "react";
import QRCodeGenerator from "../QRCodeGenerator";

const Contact: React.FC = () => {
  return (
    <div>
      <section id="contact" className="gallery">
        <QRCodeGenerator />
        </section>
    </div>
  );
};

export default Contact;
