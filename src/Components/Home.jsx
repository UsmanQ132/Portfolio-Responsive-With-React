import React, { useEffect, useState } from "react";
import "./Styles/Home.css";

function Home() {
  const roles = ["Software Engineer", "Web Developer", "Mobile App Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, index, isDeleting]);

  return (
    <section className="home">
      <div className="home-info">
        <h2>I'm Usman Khalid</h2>
        <h2>I am {text} |</h2>
        <div className="btn-sci">
        <a href="" className="btn">Download Resume</a>
          <div className="sci">
            <a href="" target="_blank"><i class="bx bxl-github"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="" target="_blank"><i class="bx bxl-linkedin"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="" target="_blank"><i class="bx bxl-twitter"></i></a>&nbsp;&nbsp;&nbsp;
            <a href="" target="_blank"><i class="bx bxl-instagram"></i></a>
          </div>
          
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            <img src="./user.png" alt="" />
          </div>
        </div>
      </div>



    </section>
  );
}

export default Home;
