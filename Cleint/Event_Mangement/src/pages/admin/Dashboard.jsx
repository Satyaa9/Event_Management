import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";
import { AuthContext } from "../../context/AuthContext";

function Dashboard() {
  const { events } = useContext(EventContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.welcome}>
          Welcome {user?.name || "Admin"} 👋
        </h2>

        <div style={styles.statsContainer}>
          <div style={styles.card}>
            <h3>Total Events</h3>
            <p style={styles.statNumber}>{events.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Quick Actions</h3>
            <div style={styles.buttonGroup}>
              <Button
                text="Add Event"
                onClick={() => navigate("/admin/add-event")}
              />
              <Button
                text="View Events"
                onClick={() => navigate("/admin/events")}
              />
              <Button
                text="Add Coordinator"
                onClick={() => navigate("/admin/add-coordinator")}
              />
            </div>
          </div>
        </div>
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
  welcome: {
    marginBottom: "25px",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "20px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  statNumber: {
    fontSize: "32px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  },
};

export default Dashboard;