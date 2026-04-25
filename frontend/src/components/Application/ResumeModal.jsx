import React from "react";

const ResumeModal = ({ imageUrl, onClose }) => {
  return (
    <div className="resume-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <iframe
          src={imageUrl}
          title="Resume PDF"
          style={{
            width: "90%",
            maxWidth: "800px",
            height: "85vh",
            border: "none",
            borderRadius: "10px",
            background: "#fff",
          }}
        />
        <a
          href={imageUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: "12px",
            color: "#fff",
            background: "#7c3aed",
            padding: "10px 24px",
            borderRadius: "25px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default ResumeModal;
