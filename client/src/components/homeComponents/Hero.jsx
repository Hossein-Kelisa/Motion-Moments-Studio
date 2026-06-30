// import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>
          Capturing Moments with
          <span> M&M Studio</span>
        </h1>

        <p>
          Professional Photography & Videography for Weddings, Events, and
          Brands.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-portfolio">View Portfolio</button>

          <button className="hero-btn-book">Book a Session</button>
        </div>
      </div>
      <div className="hero-right">
        <img className="hero-image" src="/Hero-img.jpg" alt="Hero Background" />
      </div>
    </section>
  );
};

export default Hero;
