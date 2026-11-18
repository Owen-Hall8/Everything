
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">EVERYTHING.</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#explore">Explore</a>
          <a href="#friends">Friends</a>
          <a href="#profile">Profile</a>
        </div>

        <Link to="/add" className="add-button">
          + Add Rating
        </Link>
      </nav>

      <main className="home-content">
        <section className="welcome">
          <h1>Discover what everyone loves.</h1>
          <p>
            Your world of ratings, reviews, and recommendations.
          </p>
          <Link to="/add" className="primary-button">
            Add Your First Rating
          </Link>
        </section>

        <section className="feed">
          <h2>Recent Activity</h2>

          <div className="review-card">
            <div className="review-header">
              <strong>Alex</strong>
              <span>2 hours ago</span>
            </div>
            <h3>Interstellar</h3>
            <p className="category">Movie</p>
            <div className="score">9.5 <span>/ 10</span></div>
            <p>A fantastic movie. The soundtrack is incredible.</p>
          </div>

          <div className="review-card">
            <div className="review-header">
              <strong>Jordan</strong>
              <span>Yesterday</span>
            </div>
            <h3>The Lord of the Rings</h3>
            <p className="category">Book</p>
            <div className="score">9.0 <span>/ 10</span></div>
            <p>One of the best fantasy stories ever written.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
