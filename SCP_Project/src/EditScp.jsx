import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "./supabase";
import Scp_Form from "./Scp_Form";

function EditScp() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    item: "",
    class: "",
    description: "",
    containment: "",
    image: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    fetchSingleScp();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchSingleScp() {
    const { data, error } = await supabase
      .from("scps")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      alert("Error loading SCP record");
      console.log(error.message);
    } else {
      setFormData(data);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { error } = await supabase
      .from("scps")
      .update(formData)
      .eq("id", id);

    if (error) {
      alert("Error updating SCP record");
      console.log(error.message);
    } else {
      alert("SCP record updated successfully");
      navigate("/");
    }
  }

  return (
    <main className="form-page">
      <h1>Edit SCP Record</h1>

      <Scp_Form
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonText="Update SCP"
      />
    </main>
  );
}

export default EditScp;