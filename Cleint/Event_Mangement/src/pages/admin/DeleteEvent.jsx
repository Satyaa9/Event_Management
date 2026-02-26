import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function DeleteEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, deleteEvent } = useContext(EventContext);

  const event = events.find((e) => e.id === Number(id));

  const handleDelete = () => {
    deleteEvent(Number(id));
    alert("Event Deleted Successfully ❌");
    navigate("/admin/events");
  };

  if (!event) {
    return (
      <>
        <Navbar />
        <div style={styles.container}>
          <h2>Event Not Found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Delete Event</h2>

          <p><strong>Title:</strong> {event.title}</p>
          <p><strong>Description:</strong> {event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Location:</strong> {event.location}</p>
          <p><strong>Category:</strong> {event.category}</p>

          <p style={styles.warning}>
            ⚠ Are you sure you want to delete this event?
          </p>

          <div style={styles.buttonGroup}>
            <Button
              text="Cancel"
              onClick={() => navigate("/admin/events")}
            />
            <Button
              text="Delete"
              onClick={handleDelete}
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
    marginBottom: "20px",
    textAlign: "center",
  },
  warning: {
    marginTop: "20px",
    color: "red",
    fontWeight: "bold",
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default DeleteEvent;