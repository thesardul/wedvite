import React from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator: React.FC = () => {
  const weddingURL = "https://wedvite.lazymunk.com/"; // Fixed URL for the QR code

  return (
    <div style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
      <h2>Wedding QR Code</h2>
      <p>Scan the QR code below to access our wedding invitation!</p>
      <div style={{ marginTop: "20px" }}>
        <QRCode
          value={weddingURL} // Fixed URL for the QR code
          size={200} // Size of the QR code in pixels
          bgColor="#ffffff" // Background color
          fgColor="#E5BDA7" // Foreground (QR code) color
        />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
