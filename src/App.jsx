
import './App.css'

function App() {
  return (
    <div className="home-page">

      <nav className="navbar">
        <h2 className="brand">LAB<span>CORE</span></h2>
        <a href="/login" className="login-button">Login</a>
      </nav>

      <main className="hero-section">
        <p className="welcome">WELCOME TO LABCORE</p>

        <h1>
          Smart Lab<br />
          Management System
        </h1>

        <p className="description">
          Manage laboratory computers, practical sessions
          and student attendance in one place.
        </p>

        <a href="/login" className="start-button">
          Get Started →
        </a>
      </main>

      <footer>
        LABCORE © 2026 | Smart Lab Management System
      </footer>

    </div>
  )
}

export default App
