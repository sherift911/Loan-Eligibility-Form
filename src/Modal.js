import "./FormStyles.css";

export default function Modal({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div className="modal-content">
          <h1 style={{ color: errorMessage ? "red" : "green" }}>
            {errorMessage !== null
              ? errorMessage
              : "The form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    <></>;
  }
}
