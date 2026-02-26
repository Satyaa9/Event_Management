import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { EventContext } from "../../context/EventContext";

function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { events, addEvent, deleteEvent } = useContext(EventContext);

  const existingEvent = events.find((e) => e.id === Number(id));

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    category: "",
  });

  useEffect(() => {
    if (existingEvent) {
      setForm(existingEvent);
    }
  }, [existingEvent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
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

    // Remove old event
    deleteEvent(Number(id));

    // Add updated event
    addEvent({
      id: Number(id),
      ...form,
    });

    alert("Event Updated Successfully ✅");
    navigate("/admin/events");
  };

  if (!existingEvent) {
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
          <h2 style={styles.title}>Update Event</h2>

          <form onSubmit={handleUpdate} style={styles.form}>

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

            <div style={styles.buttonGroup}>
              <Button text="Cancel" onClick={() => navigate("/admin/events")} />
              <Button text="Update Event" type="submit" />
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
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
};

export default UpdateEvent;