function Scp_Form({ formData, handleChange, handleSubmit, buttonText }) {
  return (
    <form className="scp-form" onSubmit={handleSubmit}>
      <label>SCP Item</label>
      <input
        type="text"
        name="item"
        value={formData.item}
        onChange={handleChange}
        placeholder="Example: SCP-002"
        required
      />

      <label>Class</label>
      <input
        type="text"
        name="class"
        value={formData.class}
        onChange={handleChange}
        placeholder="Example: Safe, Euclid, Keter"
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter SCP description"
        required
      ></textarea>

      <label>Containment</label>
      <textarea
        name="containment"
        value={formData.containment}
        onChange={handleChange}
        placeholder="Enter containment procedure"
        required
      ></textarea>

      <label>Image URL</label>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Paste image URL here"
      />

      <button type="submit" className="submit-btn">
        {buttonText}
      </button>
    </form>
  );
}

export default Scp_Form;