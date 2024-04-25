const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    textAlign: "center",
  };
  return <div style={cardStyle}>{children}</div>;
};

export default Card;
