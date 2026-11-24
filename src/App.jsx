```jsx
import logo from './assets/labcore-logo.jpg'
import './App.css'

function App() {
  return (
    <div className="home-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <img src={logo} alt="LABCORE Logo" className="logo" />

        <a href="/login" className="login-link">
          Login
        </a>
      </nav>

      {/* Home Page Content */}
      <main className="hero-section">

        <p className="welcome-text">WELCOME TO LABCORE</p>

        <h1>
          Smart Lab
          <br />
          Management System
        </h1>

        <p className="description">
          A smarter way to manage laboratory computers,
          practical sessions and student attendance.
        </p>

        <a href="/login" className="get-started">
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
```