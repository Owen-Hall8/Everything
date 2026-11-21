
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRating() {
  const navigate = useNavigate();

  const [item, setItem] = useState("");
  const [category, setCategory] = useState("Movie");
  const [rating, setRating] = useState(8.0);
  const [review, setReview] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!item.trim()) {
      setError("Please enter something to rate.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/ratings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: item.trim(),
          category,
          score: Number(rating),
          review: review.trim() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Could not save your rating.");
      }

      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/" className="logo">EVERYTHING.</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="/#explore">Explore</a>
          <a href="/#friends">Friends</a>
          <a href="/#profile">Profile</a>
        </div>

        <Link to="/" className="add-button">
          Cancel
        </Link>
      </nav>

      <main className="add-page">
        <div className="add-page-heading">
          <span className="eyebrow">MAKE IT COUNT</span>
          <h1>What did you think?</h1>
          <p>
            Give something a rating. Anything is fair game.
          </p>
        </div>

        <form className="rating-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <label htmlFor="item">What are you rating?</label>
            <input
              id="item"
              type="text"
              placeholder="e.g. Interstellar, The Great Gatsby, ..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            />
          </div>

          <div className="form-section">
            <label htmlFor="category">Choose a category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Movie</option>
              <option>Book</option>
              <option>Restaurant</option>
              <option>Food & Drink</option>
              <option>Music</option>
              <option>Video Game</option>
              <option>Product</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-section score-section">
            <div className="score-heading">
              <label htmlFor="rating">Your rating</label>
              <div className="large-score">
                {Number(rating).toFixed(1)}
                <span> / 10</span>
              </div>
            </div>

            <input
              id="rating"
              className="rating-slider"
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />

            <div className="slider-labels">
              <span>Not for me</span>
              <span>Absolutely loved it</span>
            </div>
          </div>

          <div className="form-section">
            <label htmlFor="review">
              Write a review <span className="optional">(optional)</span>
            </label>
            <textarea
              id="review"
              placeholder="What stood out? What did you love or dislike?"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows="4"
            />
          </div>

          {error && (
            <div className="form-error">{error}</div>
          )}

          <button
            type="submit"
            className="publish-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Publishing..." : "Publish Rating"}
            {!isSubmitting && <span>→</span>}
          </button>

          <p className="form-note">
            Your rating will be added to the community activity feed.
          </p>
        </form>
      </main>
    </div>
  );
}

export default AddRating;
