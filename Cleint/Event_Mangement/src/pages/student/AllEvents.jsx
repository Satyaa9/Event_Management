import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function AllEvents() {
  const { events } = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.heading}>Available Events</h2>

        {events.length === 0 ? (
          <p style={styles.noEvent}>No events available right now.</p>
        ) : (
          <div style={styles.grid}>
            {events.map((event) => (
              <div key={event.id} style={styles.card}>
                <h3>{event.title}</h3>
                <p style={styles.category}>{event.category}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>

                <div style={styles.buttonGroup}>
                  <Button
                    text="View Details"
                    onClick={() => navigate(`/student/event/${event.id}`)}
                  />
                  <Button
                    text="Register"
                    onClick={() => navigate(`/student/register/${event.id}`)}
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
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  category: {
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "10px",
  },
  buttonGroup: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
};

export default AllEvents;