
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddRating() {
  const navigate = useNavigate();

  const [item, setItem] = useState("");
  const [category, setCategory] = useState("Movie");
  const [rating, setRating] = useState(8.0);
  const [review, setReview] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Temporary: we'll connect this to our database later.
    console.log({ item, category, rating, review });

    navigate("/");
  }

  return (
    <div className="rating-page">
      <header className="rating-header">
        <Link to="/" className="logo">EVERYTHING.</Link>
        <Link to="/" className="back-link">← Back to Home</Link>
      </header>

      <main className="rating-container">
        <h1>Add a Rating</h1>
        <p className="subtitle">
          What did you think?
        </p>

        <form onSubmit={handleSubmit} className="rating-form">
          <label>What are you rating?</label>
          <input
            type="text"
            placeholder="Search for a movie, book, restaurant..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
            required
          />

          <label>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Movie</option>
            <option>Book</option>
            <option>Restaurant</option>
            <option>Food & Drink</option>
            <option>Music</option>
            <option>Video Game</option>
            <option>Other</option>
          </select>

          <div className="rating-label">
            <label>Your Rating</label>
            <strong>{Number(rating).toFixed(1)} / 10</strong>
          </div>

          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />

          <label>Your Thoughts (Optional)</label>
          <textarea
            placeholder="Write a review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="5"
          />

          <button type="submit" className="primary-button">
            Publish Rating
          </button>
        </form>
      </main>
    </div>
  );
}

export default AddRating;
