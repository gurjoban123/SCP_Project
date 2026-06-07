import { Link } from "react-router-dom";

function Scp_Item({ scp, deleteScp }) {
  return (
    <article className="scp-card">
      <img
        src={scp.image || "https://via.placeholder.com/500x300?text=SCP+Image"}
        alt={scp.item}
        className="scp-img"
      />

      <div className="scp-content">
        <h2>{scp.item}</h2>
        <h3>Class: {scp.class}</h3>

        <p>
          <strong>Description:</strong> {scp.description}
        </p>

        <p>
          <strong>Containment:</strong> {scp.containment}
        </p>

        <div className="card-buttons">
          <Link to={`/edit/${scp.id}`} className="btn edit-btn">
            Edit
          </Link>

          <button onClick={() => deleteScp(scp.id)} className="btn delete-btn">
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default Scp_Item;