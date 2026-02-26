import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

function AllEvents() {
  const { events, deleteEvent } = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.heading}>All Events</h2>

        {events.length === 0 ? (
          <p style={styles.noEvent}>No events available.</p>
        ) : (
          <div style={styles.grid}>
            {events.map((event) => (
              <div key={event.id} style={styles.card}>
                <h3>{event.title}</h3>
                <p><strong>Description:</strong> {event.description}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
                <p><strong>Category:</strong> {event.category}</p>

                <div style={styles.buttonGroup}>
                  <Button
                    text="Update"
                    onClick={() => navigate(`/admin/update-event/${event.id}`)}
                  />
                  <Button
                    text="Delete"
                    onClick={() => deleteEvent(event.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#f4f6f9",
    minHeight: "90vh",
  },
  heading: {
    marginBottom: "20px",
  },
  noEvent: {
    fontSize: "16px",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  buttonGroup: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },
};

export default AllEvents;