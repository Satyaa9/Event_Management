function Button({ text, type = "button", onClick }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
      }}
    >
      {text}
    </button>
  );
}

export default Button;