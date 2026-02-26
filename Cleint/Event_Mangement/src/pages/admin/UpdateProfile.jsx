import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { AuthContext } from "../../context/AuthContext";

function UpdateProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        name: user.name || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Please fill all fields ❗");
      return;
    }

    const updatedUser = {
      ...user,
      name: form.name,
      email: form.email,
    };

    // Update localStorage
    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("Profile Updated Successfully ✅");

    navigate("/admin/profile");
  };

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
          <h2 style={styles.title}>Update Profile</h2>

          <form onSubmit={handleUpdate} style={styles.form}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />

            <div style={styles.buttonGroup}>
              <Button
                text="Cancel"
                onClick={() => navigate("/admin/profile")}
              />
              <Button
                text="Update Profile"
                type="submit"
              />
            </div>

          </form>
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
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
};

export default UpdateProfile;