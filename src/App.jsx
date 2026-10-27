import { useState } from 'react'
import './index.css'
import Dashboard from './Dashboard.jsx'
import StudentDataForm from './StudentDataForm.jsx'
import Transcript from './Transcript.jsx'

/* ─── Inline SVG Icons ─── */
const IconUser = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
)

const IconLock = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
  </svg>
)

const IconEye = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const IconEyeOff = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
)

const IconInfoCircle = () => (
  <svg className="fud-alert-icon" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
  </svg>
)

const IconGradCap = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const IconLogin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
    <polyline points="10 17 15 12 10 7"/>
    <line x1="15" y1="12" x2="3" y2="12"/>
  </svg>
)

const IconSmallAlert = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
)

/* ─── Registration steps ─── */
const guideSteps = [
  <>All School Fees registration must be done through this Portal and <b>NOT through the Remita website.</b></>,
  <>Once verified by the Head of Department, log on to this portal with your <b>JAMB Registration Number</b> as Username and <b>STATE OF ORIGIN</b> (in <b>CAPITAL</b> letters) as Password.</>,
  <>Click <b>School Fees</b> to generate a payment invoice, then click the Remita logo to pay online with a debit card, or print the invoice to pay at FUD Microfinance or any commercial bank.</>,
  <>Proceed to the respective <b>Faculty Accountant Office</b> to submit a copy of the Remita payment receipt for stamping and verification.</>,
  <>After payment, click <b>Generate Registration Number</b> to generate your registration number.</>,
  <>Click <b>Go To School</b> to log out, then use your newly generated <b>Registration Number</b> as both Username and Password to log back in.</>,
  <>The system will prompt you to change your password — make sure it&apos;s strong (a combination of letters, numbers and a special character).</>,
  <>Upload your passport photograph and select Biodata to update your bio-data.</>,
  <>Print the Clinic form and proceed to the University Clinic for a lab test.</>,
  <>Select Course Registration to register your courses. Students are strongly advised to seek guidance from their level coordinators on the courses they should register.</>,
  <>To apply for accommodation, click Hostel to reserve a bed space.</>,
]

/* ─── Left Brand Panel ─── */
function BrandPanel() {
  return (
    <aside className="fud-brand-panel">

      {/* Logo banner */}
      <div className="fud-brand-top">
        <img
          src="/fudbanner.png"
          alt="Federal University Dutse"
          className="fud-banner-img"
        />
      </div>

      {/* Headline */}
      <h1>Welcome to the FUD MyPortal</h1>

      {/* Lead */}
      <p className="fud-lead">
        All services on this portal are restricted — only authenticated users
        can access them. Please sign in with your credentials to continue.
      </p>

      {/* Support */}
      <p className="fud-support">
        For enquiries or complaints regarding registration, email{' '}
        <a href="mailto:ictsupport@fud.edu.ng">ictsupport@fud.edu.ng</a>
      </p>

      {/* Guide card */}
      <div className="fud-guide">
        <h2 className="fud-guide-heading">
          <IconGradCap />
          Fresh Student Registration Guidelines
        </h2>
        <div className="fud-guide-body">
          <ol>
            {guideSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          <p className="fud-guide-note">
            Only fresh and final-year students are eligible for accommodation.
            Bed space allocation in both male and female hostels is on a first-come, first-served basis.
          </p>
        </div>
      </div>
    </aside>
  )
}

/* ─── Right Login Card ─── */
function LoginCard({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState(null)

  const validate = () => {
    const e = {}
    if (!username.trim()) e.username = 'Username / Registration number is required'
    if (!password.trim()) e.password = 'Password is required'
    return e
  }

  const showToast = (msg) => {
    setToast(msg)
    setTimeout(() => setToast(null), 3500)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    // Navigate to dashboard
    onLogin()
  }

  return (
    <div className="fud-login-card">
      <h2 className="fud-card-title">Sign in to your account</h2>
      <p className="fud-card-sub">Enter your username and password to continue</p>

      {/* Info alert — matches original exactly */}
      <div className="fud-alert">
        <IconInfoCircle />
        <span>
          Students should use their <strong>Registration Number</strong> as both username and password when logging in for the first time.
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>

        {/* Username */}
        <div className="fud-form-group">
          <label className="fud-label" htmlFor="fud-username">Username</label>
          <div className="fud-input-wrap">
            <span className="fud-input-icon"><IconUser /></span>
            <input
              id="fud-username"
              className={`fud-input${errors.username ? ' fud-input-error' : ''}`}
              type="text"
              placeholder="Registration / staff number"
              value={username}
              onChange={e => { setUsername(e.target.value); setErrors(p => ({ ...p, username: '' })) }}
              autoComplete="username"
              disabled={loading}
            />
          </div>
          {errors.username && (
            <span className="fud-error-msg"><IconSmallAlert /> {errors.username}</span>
          )}
        </div>

        {/* Password */}
        <div className="fud-form-group">
          <label className="fud-label" htmlFor="fud-password">Password</label>
          <div className="fud-input-wrap">
            <span className="fud-input-icon"><IconLock /></span>
            <input
              id="fud-password"
              className={`fud-input has-toggle${errors.password ? ' fud-input-error' : ''}`}
              type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              value={password}
              onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })) }}
              autoComplete="current-password"
              disabled={loading}
            />
            <button
              type="button"
              className="fud-toggle-btn"
              onClick={() => setShowPass(v => !v)}
              aria-label={showPass ? 'Hide password' : 'Show password'}
            >
              {showPass ? <IconEyeOff /> : <IconEye />}
            </button>
          </div>
          {errors.password && (
            <span className="fud-error-msg"><IconSmallAlert /> {errors.password}</span>
          )}
        </div>

        {/* Forgot password */}
        <div className="fud-forgot-row">
          <a href="#" className="fud-forgot" onClick={e => e.preventDefault()}>
            Forgot password?
          </a>
        </div>

        {/* Login button */}
        <button
          id="fud-login-btn"
          type="submit"
          className="fud-btn-login"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner" />
              Signing in…
            </>
          ) : (
            <>
              <IconLogin />
              Login
            </>
          )}
        </button>
      </form>

      <hr className="fud-divider" />

      {/* Check admission */}
      <a
        href="https://www.myportal.fud.edu.ng"
        target="_blank"
        rel="noopener noreferrer"
        className="fud-admission-link"
        id="fud-admission-check"
      >
        <IconGradCap />
        Check your admission status
      </a>

      {/* Toast notification */}
      {toast && (
        <div className="fud-toast" role="alert">
          <IconSmallAlert />
          {toast}
        </div>
      )}
    </div>
  )
}

/* ─── Root App ─── */
export default function App() {
  const [page, setPage] = useState('login')

  if (page === 'dashboard') {
    return (
      <Dashboard
        onLogout={() => setPage('login')}
        onOpenDataForm={() => setPage('student-data-form')}
        onOpenTranscript={() => setPage('transcript')}
      />
    )
  }

  if (page === 'student-data-form') {
    return <StudentDataForm onBack={() => setPage('dashboard')} />
  }

  if (page === 'transcript') {
    return <Transcript onBack={() => setPage('dashboard')} />
  }

  return (
    <div className="fud-shell">
      <BrandPanel />
      <main className="fud-login-panel">
        <LoginCard onLogin={() => setPage('dashboard')} />
      </main>
    </div>
  )
}
