import ScpList from "./ScpList";

function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>SCP Subject Catalogue</h1>
        <p>
          React and Supabase CRUD application for managing SCP records.
        </p>
      </section>

      <ScpList />
    </main>
  );
}

export default Home;