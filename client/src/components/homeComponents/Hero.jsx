import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video
        className="hero-video"
        src="/Hero-vid2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <img
        className="hero-image"
        src="/Hero-img.jpg"
        alt="Hero Background"
      />

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          Capturing Moments with
          <span> M&M Studio</span>
        </h1>

        <p>
          Professional Photography & Videography for Weddings,
          Events, and Brands.
        </p>

        <div className="hero-buttons">
          <button className="hero-btn-portfolio">
            View Portfolio
          </button>

          <button className="hero-btn-book">
            Book a Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;