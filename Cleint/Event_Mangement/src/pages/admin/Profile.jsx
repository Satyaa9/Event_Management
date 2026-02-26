import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <>
        <Navbar />
        <div style={styles.container}>
          <h2>User not found</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Admin Profile</h2>

          <div style={styles.info}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Role:</strong> {user.role}</p>
          </div>

          <div style={styles.buttonGroup}>
            <Button
              text="Update Profile"
              onClick={() => navigate("/admin/update-profile")}
            />
            <Button
              text="Back to Dashboard"
              onClick={() => navigate("/admin/dashboard")}
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
    width: "450px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  info: {
    fontSize: "16px",
    lineHeight: "1.8",
  },
  buttonGroup: {
    marginTop: "25px",
    display: "flex",
    justifyContent: "space-between",
  },
};

export default Profile;