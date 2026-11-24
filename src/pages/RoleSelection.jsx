import '../App.css'

function RoleSelection() {
  return (
    <div className="role-page">

      <h1>LABCORE</h1>

      <h2>Smart Lab Management System</h2>

      <p>Select your role to continue</p>

      <div className="role-container">

        <div className="role-card">
          <div className="role-icon">🎓</div>
          <h3>Student</h3>
          <p>Mark attendance and view your records.</p>
          <button>Student Login →</button>
        </div>

        <div className="role-card">
          <div className="role-icon">👨‍🏫</div>
          <h3>Teacher</h3>
          <p>Manage lab sessions and attendance.</p>
          <button>Teacher Login →</button>
        </div>

        <div className="role-card">
          <div className="role-icon">⚙️</div>
          <h3>Admin</h3>
          <p>Manage computers, users and laboratories.</p>
          <button>Admin Login →</button>
        </div>

      </div>

      <a href="/" className="back-link">← Back to Home</a>

    </div>
  )
}

export default RoleSelection