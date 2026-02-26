import { useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";

function AddCoordinator() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.department) {
      alert("Please fill all fields");
      return;
    }

    console.log("Coordinator Data:", form);
    alert("Coordinator Added Successfully ✅");

    setForm({
      name: "",
      email: "",
      phone: "",
      department: "",
    });
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Add Coordinator</h2>

          <form onSubmit={handleSubmit} style={styles.form}>

            <input
              type="text"
              name="name"
              placeholder="Coordinator Name"
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

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={form.department}
              onChange={handleChange}
              style={styles.input}
            />

            <Button text="Add Coordinator" type="submit" />
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
    height: "90vh",
    background: "#f4f6f9",
  },
  card: {
    background: "white",
    padding: "30px",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
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
};

export default AddCoordinator;