import "../../styles/footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Invoice Generator
      </p>
      <p>Made By Devesh Chauhan with ☕︎</p>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=deveshchauhan1.2.3.1@gmail.com">
        Email me ✉
      </a>

    </footer>
  );
}

export default Footer;
