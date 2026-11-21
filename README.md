# EVERYTHING. — Universal Rating Platform

A platform for rating, reviewing, and discovering anything.

EVERYTHING. is a web-based universal rating platform designed to bring ratings across different categories into one place. Whether it's movies, books, restaurants, music, video games, or everyday products, users can keep track of what they enjoy and discover what others think.

The goal is to create one unified rating system that makes it easy to compare interests, share opinions, and explore new things.

## Features

### Currently Implemented
- Universal rating system using a 0–10 scale with decimal precision.
- Multiple rating categories, including:
  - Movies
  - Books
  - Restaurants
  - Food & Drink
  - Music
  - Video Games
  - Products
  - Other
- Optional written reviews accompanying ratings.
- Persistent storage using PostgreSQL.
- REST API built with FastAPI.
- Dynamic homepage activity feed displaying submitted ratings.
- Category filtering on the activity feed.
- Responsive frontend interface.
- Separate page for submitting new ratings.

### Planned Features
- User registration and authentication.
- Individual user profiles and rating histories.
- Friends, following, and social activity feeds.
- Item search and duplicate detection.
- Community ratings and average scores.
- Explore page for discovering popular items.
- Importing ratings from other platforms.
- Personalized recommendations and taste comparisons.

## Technology Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development environment |
| JavaScript | Frontend functionality |
| CSS | Styling and responsive layouts |
| Python | Backend development |
| FastAPI | REST API |
| SQLAlchemy | Database connectivity |
| PostgreSQL | Relational database |
| Git & GitHub | Version control |

## Project Structure

```text
Rate Everything/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── AddRating.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   └── database.py
│   ├── .env
│   └── .venv/
│
├── .gitignore
└── README.md
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Install the following:
- Node.js (LTS)
- Python 3
- PostgreSQL
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/Owen-Hall8/EVERYTHING.git
cd everything-reviews
```

### 2. Configure the Database

Create a PostgreSQL database named:

```sql
CREATE DATABASE everything_reviews;
```

Create the required database tables using the SQL schema established for the project.

### 3. Configure the Backend

Navigate to the backend directory:

```powershell
cd backend
```

Create a Python virtual environment:

```powershell
python -m venv .venv
```

Activate it:

```powershell
.\.venv\Scripts\Activate.ps1
```

Install the dependencies:

```powershell
pip install fastapi uvicorn sqlalchemy "psycopg[binary]" python-dotenv
```

Create a `.env` file inside the backend directory:

```env
DATABASE_URL=postgresql+psycopg://postgres:YOUR_PASSWORD@localhost:5432/everything_reviews
```

Replace `YOUR_PASSWORD` with your local PostgreSQL password.

### 4. Start the Backend

From the backend directory, run:

```powershell
uvicorn app.main:app --reload
```

The backend will be available at:

- API: http://127.0.0.1:8000
- Interactive API documentation: http://127.0.0.1:8000/docs

### 5. Start the Frontend

Open a second terminal and navigate to the frontend directory:

```powershell
cd frontend
```

Install dependencies:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

The website will be available at:

http://localhost:5173

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | API welcome message |
| GET | `/health` | Backend health check |
| GET | `/ratings` | Retrieve recent ratings |
| POST | `/ratings` | Create a new rating |

Interactive API testing is available through FastAPI's Swagger documentation at `/docs`.

## Rating System

EVERYTHING. uses a universal 0–10 rating scale, allowing users to rate items across different categories using the same system.

Each rating is associated with:
- A user
- An item
- A category (through the item)
- A numerical score
- An optional written review
- A creation timestamp

This structure allows multiple users to rate the same item while maintaining individual ratings.

## Development Goals

The long-term vision is to build a universal platform for organizing and comparing personal ratings across virtually any category.

Rather than maintaining separate rating systems for movies, books, restaurants, and other interests, EVERYTHING. aims to bring them together into one connected experience.

The project is being developed incrementally, beginning with the core rating system and expanding toward user accounts, social features, discovery, and personalized recommendations.

---

**Project Status:** Early Development

**Repository:** everything-reviews