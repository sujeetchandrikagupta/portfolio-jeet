import React from "react";
import './ContactMe.css';

const ContactMe = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "589ea76e-15b5-4aa6-bf9e-974e8ba1fd72");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      // setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className="contact-me-container py-2" >
          <h1 id="contact" className="contact-heading my-2">Contact Me</h1>
      
      <div className="contact-me-card bg-secondary bg-opacity-10 px-4 py-2 my-2">
        <div className="contact-me-left">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="text-dark">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-dark">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-dark">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button class="submit-btn" type="submit">Send</button>
          </form>
        </div>
        <div className="contact-me-right">
          <h2 className="contact-subheading">Get in Touch</h2>
          <p className="contact-paragraph">
            <strong className="text-dark">Phone:</strong> +918291060219
          </p>
          <p className="contact-paragraph">
            <strong className="text-dark">Email:</strong> sujeetgupta48348@gmail.com
          </p>
          <p className="contact-paragraph">
            <strong className="text-dark">Address:</strong> Flat no: 2003, Shiv Prerana Society,
            Bharni Naka, Antop Hill, Wadala, Mumbai 400037
          </p>
          <div className="contact-me-extra">
            <h3 className="text-dark">Follow Me</h3>
            <p className="contact-paragraph">
              <a
                href="https://www.linkedin.com/in/sujeet-gupta-6748a2238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="contact-paragraph">
              <a
                href="https://github.com/sujeetchandrikagupta"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub{" "}
              </a>
            </p>

            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/profile.php?id=100036627517115&mibextid=ZbWKwL">
                <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/mr_sujeet_04_?igsh=MWNvMWR0ejcwOWk3aA==">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.youtube.com/@SujeetGupta_">
                <i class="bi bi-youtube"></i>
                </a>
                <a href="https://x.com/sujeetg18052003?t=RJPNg7V4Y--1G913vW-D1Q&s=08">
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
