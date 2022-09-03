import Contact from "../components/ContactForm";

function HomePage() {
  return (
    <div className="Home">
      <section className="Hero-home">
        <div className="Hero-text">
          <h1>THEODORE FRAZIER</h1>
          <h3>FRONT-END DEVELOPER!</h3>
          <p>With a passion for designing and building beauitful products.</p>
          <img src="/images/headshot.jpeg" alt="headshot" />
        </div>
      </section>
      <section className="intro">
        <div className="intro-text">
          <h1>Welcome! I'm Theo.</h1>
          <p>
            I am a . I am passionate about combining the extensive cusomter
            service and project management skills I’ve obtained during my
            administrative support career with designing and creating beautiful
            interfaces. I build websites with HTML, CSS and JavasScript. My
            library of choice is React. I also have skills utilizing design
            software such as Sketch and Figma. While my passion is front-end, I
            am also skilled in backend technologies such as Express.{" "}
          </p>
        </div>
        <div className="what-i-do">
          <div className="column">
            <div className="column-text">
              <h2>Design</h2>
              <p>I am passionate about color, layout and typography.</p>
              <br />
              <h2>Tools</h2>
              <p>Sketch</p>
              <p>Figma</p>
            </div>
          </div>
          <div className="column">
            <div className="column-text">
              <h2>Frontend Development</h2>
              <p>I enjoy building applications from scratch.</p>
              <br />
              <h2>Languages</h2>
              <p> HTML, CSS, JavaScript</p>
              <br />
              <h2>Tools</h2>
              <p> Visual Studio Code GitHub Material ui BootStrap React</p>
            </div>
          </div>
          <div className="column">
            <div className="column-text">
              <h2>Client Services & Colllaboration</h2>
              <p> My experience </p>
            </div>
          </div>
        </div>
        <br />
        <p> </p>
      </section>

      <section className="tech-stack">
        <h3>Technologies</h3>
        <p>
          I know several technologies essential to designing and developing
          engaging and scaleable applictions.{" "}
        </p>
        <div className="stack-list">
          <div className="stack-category">
            <h3>Client-side</h3>
          </div>
          <div className="stack-row">
            <p> HTML, CSS, JavaScript, React, </p>
          </div>
          <br />
          <br />
          <br />
          <div className="stack-category">
            <h3>Back-end</h3>
          </div>
          <div className="stack-row">
            <img src="/images/nodejs.png" alt="nodejs-logo" />
            <img src="/images/postgresql.png" alt="postgres-logo" />
          </div>
          <br />
          <br />
          <br />
          <div className="stack-category">
            <h3>Other essentials</h3>
          </div>
          <div className="stack-row">
            <img src="/images/git.png" alt="git-logo" />
            <img src="/images/github.png" alt="github-logo" />
            <img src="/images/netlify.png" alt="netlify-logo" />
            <img src="/images/npm.png" alt="npm-logo" />
            <img src="/images/postman.png" alt="postman-logo" />
          </div>
        </div>
      </section>
      <section className="projects">
        <h3>Projects will go here</h3>
        <div className="what-i-do">
          <div className="column">
            <div className="column-text">
              <h2>EDUK</h2>
              <p>I am passionate about color, layout and typography.</p>
              <br />
              <h2>Tools</h2>
              <p>Sketch</p>
              <p>Figma</p>
            </div>
          </div>
          <div className="column">
            <div className="column-text">
              <h2>Porsche 911 Dealership</h2>
              <p>I enjoy building applications from scratch.</p>
              <br />
              <h2>Languages</h2>
              <p> HTML, CSS, JavaScript</p>
              <br />
              <h2>Tools</h2>
              <p> Visual Studio Code GitHub Material ui BootStrap React</p>
            </div>
          </div>
          <div className="column">
            <div className="column-text">
              <h2>Personal Website</h2>
              <p> My experience </p>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-me">
        Want to Chat?
        <Contact />
      </section>
      <section className="footer">Footer here</section>
    </div>
  );
}

export default HomePage;
