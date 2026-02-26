import { useState, useContext } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function AddEvent() {
  const { addEvent } = useContext(EventContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.title ||
      !form.description ||
      !form.date ||
      !form.location ||
      !form.category
    ) {
      alert("Please fill all fields ❗");
      return;
    }

    addEvent({
      id: Date.now(),
      ...form,
    });

    alert("Event Added Successfully ✅");

    setForm({
      title: "",
      description: "",
      date: "",
      location: "",
      category: "",
    });
  };

  return (
    <>
      <Navbar />

      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Add New Event</h2>

          <form onSubmit={handleSubmit} style={styles.form}>

            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={form.title}
              onChange={handleChange}
              style={styles.input}
            />

            <textarea
              name="description"
              placeholder="Event Description"
              value={form.description}
              onChange={handleChange}
              style={styles.textarea}
            />

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              style={styles.input}
            />

            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={form.location}
              onChange={handleChange}
              style={styles.input}
            />

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">Select Category</option>
              <option value="Technical">Technical</option>
              <option value="Cultural">Cultural</option>
              <option value="Sports">Sports</option>
              <option value="Workshop">Workshop</option>
            </select>

            <Button text="Add Event" type="submit" />
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
    width: "500px",
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
  textarea: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
    minHeight: "80px",
    resize: "none",
  },
};

export default AddEvent;