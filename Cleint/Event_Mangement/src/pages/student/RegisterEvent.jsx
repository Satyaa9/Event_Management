import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";
import { AuthContext } from "../../context/AuthContext";

function RegisterEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useContext(EventContext);
  const { user } = useContext(AuthContext);

  const event = events.find((e) => e.id === Number(id));

  const handleRegister = () => {
    alert(`Successfully Registered for ${event.title} 🎉`);
    navigate("/student/events");
  };

  if (!event) {
    return (
      <>
        <Navbar />
        <div style={styles.container}>
          <h2>Event Not Found ❌</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Register for Event</h2>

          <div style={styles.eventInfo}>
            <p><strong>Event:</strong> {event.title}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>

          <div style={styles.studentInfo}>
            <h4>Your Details</h4>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>

          <div style={styles.buttonGroup}>
            <Button
              text="Cancel"
              onClick={() => navigate("/student/events")}
            />
            <Button
              text="Confirm Registration"
              onClick={handleRegister}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#f4f6f9",
  },
  card: {
    width: "500px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  eventInfo: {
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  studentInfo: {
    marginBottom: "25px",
    padding: "10px",
    backgroundColor: "#f0f4ff",
    borderRadius: "6px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default RegisterEvent;