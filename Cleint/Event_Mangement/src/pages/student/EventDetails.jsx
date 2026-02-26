import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useContext(EventContext);

  const event = events.find((e) => e.id === Number(id));

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
          <h2 style={styles.title}>{event.title}</h2>

          <p style={styles.category}>{event.category}</p>

          <div style={styles.details}>
            <p><strong>Description:</strong></p>
            <p>{event.description}</p>

            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
          </div>

          <div style={styles.buttonGroup}>
            <Button
              text="Back"
              onClick={() => navigate("/student/events")}
            />
            <Button
              text="Register Now"
              onClick={() => navigate(`/student/register/${event.id}`)}
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
    width: "600px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "10px",
  },
  category: {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "20px",
  },
  details: {
    marginBottom: "25px",
    lineHeight: "1.6",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default EventDetails;