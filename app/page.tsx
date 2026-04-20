export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      textAlign: "center",
      background: "#f8fafc",
      minHeight: "100vh"
    }}>
      <h1 style={{
        fontSize: "48px",
        fontWeight: "bold"
      }}>
        <span style={{color:"#1d4ed8"}}>Join</span>
        <span style={{color:"#f97316"}}>HireRank</span>
      </h1>

      <p style={{
        fontSize: "20px",
        marginTop: "10px",
        color:"#475569"
      }}>
        Get Hired Faster. Hire Smarter.
      </p>

      <button style={{
        marginTop:"30px",
        padding:"14px 28px",
        background:"#1d4ed8",
        color:"white",
        border:"none",
        borderRadius:"10px",
        fontSize:"18px"
      }}>
        Join Free
      </button>
    </main>
  )
}
