import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";
import { EventContext } from "../../context/EventContext";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const { events } = useContext(EventContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <h2 style={styles.welcome}>
          Welcome {user?.name || "Student"} 👋
        </h2>

        <div style={styles.statsContainer}>
          <div style={styles.card}>
            <h3>Total Available Events</h3>
            <p style={styles.statNumber}>{events.length}</p>
          </div>

          <div style={styles.card}>
            <h3>Quick Actions</h3>

            <div style={styles.buttonGroup}>
              <Button
                text="View All Events"
                onClick={() => navigate("/student/events")}
              />

              <Button
                text="My Profile"
                onClick={() => navigate("/student/profile")}
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
    color: "#007bff",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
  },
};

export default Dashboard;