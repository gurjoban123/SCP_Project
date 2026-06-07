import { useEffect, useState } from "react";
import { supabase } from "./supabase";
import Scp_Item from "./Scp_Item";

function ScpList() {
  const [scps, setScps] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchScps() {
    setLoading(true);

    const { data, error } = await supabase
      .from("scps")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log(error.message);
      alert("Error loading SCP records");
    } else {
      setScps(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchScps();
  }, []);

  async function deleteScp(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this SCP record?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("scps").delete().eq("id", id);

    if (error) {
      alert("Error deleting SCP record");
    } else {
      alert("SCP deleted successfully");
      fetchScps();
    }
  }

  if (loading) {
    return <h2 className="message">Loading SCP records...</h2>;
  }

  return (
    <section>
      <h2 className="section-title">All SCP Subjects</h2>

      <div className="scp-grid">
        {scps.map((scp) => (
          <Scp_Item key={scp.id} scp={scp} deleteScp={deleteScp} />
        ))}
      </div>
    </section>
  );
}

export default ScpList;