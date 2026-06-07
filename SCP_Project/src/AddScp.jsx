import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabase";
import Scp_Form from "./Scp_Form";

function AddScp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    item: "",
    class: "",
    description: "",
    containment: "",
    image: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase.from("scps").insert([formData]);

    if (error) {
      alert("Error adding SCP record");
      console.log(error.message);
    } else {
      alert("SCP record added successfully");
      navigate("/");
    }
  }

  return (
    <main className="form-page">
      <h1>Add New SCP Record</h1>

      <Scp_Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Add SCP"
      />
    </main>
  );
}

export default AddScp;