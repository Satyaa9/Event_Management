import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function ShowParticipants() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events } = useContext(EventContext);

  const event = events.find((e) => e.id === Number(id));

  // Temporary mock participants (replace with backend data later)
  const participants = [
    { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com" },
    { id: 2, name: "Sneha Patil", email: "sneha@gmail.com" },
    { id: 3, name: "Amit Joshi", email: "amit@gmail.com" },
  ];

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
          <h2 style={styles.title}>
            Participants - {event.title}
          </h2>

          {participants.length === 0 ? (
            <p>No participants registered.</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>#</th>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                </tr>
              </thead>
              <tbody>
                {participants.map((participant, index) => (
                  <tr key={participant.id}>
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>{participant.name}</td>
                    <td style={styles.td}>{participant.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <div style={styles.buttonContainer}>
            <Button
              text="Back to Events"
              onClick={() => navigate("/admin/events")}
            />
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
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    borderBottom: "2px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f0f0f0",
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
};

export default ShowParticipants;