
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

const categories = [
  "All",
  "Movie",
  "Book",
  "Restaurant",
  "Food & Drink",
  "Music",
  "Video Game",
  "Product",
  "Other",
];

const filteredRatings =
  selectedCategory === "All"
    ? ratings
    : ratings.filter(
        (rating) => rating.category === selectedCategory
      );

  async function fetchRatings() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/ratings");

      if (!response.ok) {
        throw new Error("Could not load ratings.");
      }

      const data = await response.json();
      setRatings(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRatings();
  }, []);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);

    if (seconds < 60) return "Just now";
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`;
    if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`;
    if (seconds < 604800) return `${Math.floor(seconds / 86400)}d ago`;

    return date.toLocaleDateString();
  }

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
          <div className="welcome-text">
            <span className="eyebrow">YOUR WORLD, YOUR RATINGS</span>
            <h1>Discover what everyone loves.</h1>
            <p>
              Movies, books, restaurants, music, and everything in between.
              Keep track of what you love and discover your next favorite.
            </p>

            <Link to="/add" className="primary-button">
              + Add a Rating
            </Link>
          </div>

          <div className="welcome-decoration">
            <div className="decoration-circle">
              <span>10</span>
              <small>OUT OF 10</small>
            </div>
            <span className="decoration-caption">
              Everything is worth rating.
            </span>
          </div>
        </section>

        <section className="feed" id="explore">
          <div className="feed-heading">
            <div>
              <span className="eyebrow">THE COMMUNITY</span>
              <h2>Recent Activity</h2>
              <p>See what's being rated lately.</p>
            </div>

            <button
              className="refresh-button"
              onClick={fetchRatings}
              disabled={loading}
            >
              ↻ Refresh
            </button>
          </div>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-filter ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "All" ? "All Ratings" : category}
              </button>
            ))}
          </div>  

          {loading && (
            <div className="feed-message">
              Loading ratings...
            </div>
          )}

          {error && (
            <div className="feed-message error-message">
              {error}
              <button onClick={fetchRatings}>Try again</button>
            </div>
          )}

          {!loading && !error && ratings.length === 0 && (
            <div className="empty-feed">
              <div className="empty-icon">✦</div>
              <h3>Your feed is waiting.</h3>
              <p>
                Be the first to share something you've watched,
                read, eaten, played, or experienced.
              </p>
              <Link to="/add" className="primary-button">
                Add Your First Rating
              </Link>
            </div>
          )}

          {!loading && !error && filteredRatings.length === 0 && ratings.length > 0 && (
            <div className="feed-message">
              No ratings found in this category yet.
            </div>
          )}

          {!loading && !error && filteredRatings.length > 0 && (
            <div className="rating-list">
              {filteredRatings.map((rating) => (
                <article className="rating-card" key={rating.id}>
                  <div className="rating-card-top">
                    <div className="user-avatar">
                      {rating.username?.charAt(0).toUpperCase() || "?"}
                    </div>

                    <div className="rating-user">
                      <strong>{rating.username}</strong>
                      <span>{formatDate(rating.created_at)}</span>
                    </div>

                    <span className="category-tag">
                      {rating.category}
                    </span>
                  </div>

                  <div className="rating-card-body">
                    <div>
                      <h3>{rating.item_title}</h3>
                      {rating.review && (
                        <p className="rating-review">
                          "{rating.review}"
                        </p>
                      )}
                    </div>

                    <div className="rating-score">
                      <strong>{Number(rating.score).toFixed(1)}</strong>
                      <span>/ 10</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

      </main>

      <footer className="site-footer">
        <Link to="/" className="logo">EVERYTHING.</Link>
        <span>A place for everything worth rating.</span>
      </footer>
    </div>
  );
}

export default Home;
