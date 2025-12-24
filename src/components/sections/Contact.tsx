export default function Contact() {
  const copy = () => {
    navigator.clipboard.writeText("hhai98940@gmail.com");
    alert("Email copied!");
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h3>Contact</h3>
        <p onClick={copy} style={{ cursor: "pointer" }}>
          📧 hhai98940@gmail.com
        </p>
      </div>
    </section>
  );
}
