import { useState } from 'react'
import './Dashboard.css'

/* ══════════════════════════════════════
   EXACT FUD ICONS
══════════════════════════════════════ */
const I = ({ children, size = 18, viewBox = "0 0 24 24", ...p }) => (
  <svg viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" width={size} height={size} {...p}>
    {children}
  </svg>
)

const IcHome = () => (
  <I size={18}>
    <path d="M3 10.5L12 3.5l9 7v9.5a1 1 0 0 1-1 1h-5v-6h-4v6H4a1 1 0 0 1-1-1v-9.5z" />
  </I>
)

const IcAnnounce = () => (
  <I size={18}>
    <path d="M3 11v2a1 1 0 0 0 1 1h2l4 3.5V6.5L6 10H4a1 1 0 0 0-1 1z" />
    <path d="M14 9.5a4 4 0 0 1 0 5" />
    <path d="M16.5 7a7.5 7.5 0 0 1 0 10" />
  </I>
)

const IcBiodata = () => (
  <I size={18}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
    <circle cx="12" cy="12" r="2.5" />
  </I>
)

const IcCash = () => (
  <I size={18}>
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <line x1="12" y1="10.5" x2="12" y2="13.5" />
  </I>
)

const IcClinic = () => (
  <I size={18}>
    <path d="M4.5 4v4.5a4.5 4.5 0 0 0 9 0V4" />
    <path d="M9 13v4a3 3 0 0 0 6 0v-1" />
    <circle cx="15" cy="15" r="1.5" />
  </I>
)

const IcHostel = () => (
  <I size={18}>
    <path d="M2 5v14M2 9h18a2 2 0 0 1 2 2v8M2 17h20" />
    <rect x="5" y="8" width="5" height="4" rx="1" />
  </I>
)

const IcCourses = () => (
  <I size={18}>
    <path d="M4 4h10l4 4v12a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V5.5A1.5 1.5 0 0 1 4 4z" />
    <path d="M8 2h10l4 4v12" />
    <line x1="6.5" y1="13" x2="13.5" y2="13" />
    <line x1="6.5" y1="16.5" x2="11.5" y2="16.5" />
  </I>
)

const IcResults = () => (
  <I size={18}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </I>
)

const IcMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" width="22" height="22">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
)

const IcUserTie = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <circle cx="12" cy="6" r="4" fill="#000" />
    <path d="M12 11c-4.4 0-8 2.6-8 6v3h16v-3c0-3.4-3.6-6-8-6zm-1 3.5l1 1 1-1v4l-1 2-1-2v-4z" fill="#000" />
  </svg>
)

const IcChevDown = ({ size = 12 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width={size} height={size}>
    <polyline points="6 9 12 15 18 9"/>
  </svg>
)

const IcChevLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
)

const IcDoc = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
  </svg>
)

const IcUpload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
    <polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/>
  </svg>
)

/* ══════════════════════════════════════
   NAV DATA
══════════════════════════════════════ */
const NAV = [
  { id: 'home',         label: 'Home',                icon: <IcHome />,        },
  { id: 'announce',     label: 'Announcements',        icon: <IcAnnounce />,    },
  { id: 'biodata',      label: 'Biodata',              icon: <IcBiodata />,     },
  { id: 'fees',         label: 'School Fees',          icon: <IcCash />,        },
  { id: 'summer',       label: 'Summer',               icon: <IcCash />,
    children: ['Register Summer', 'View Summer Registered Courses', 'Summer Exam Card'] },
  { id: 'scholarship',  label: 'Scholarship/NELFUI',   icon: <IcCash />, },
  { id: 'clinic',       label: 'Clinic',               icon: <IcClinic />,      },
  { id: 'hostel',       label: 'Hostel',               icon: <IcHostel />,      },
  { id: 'courses',      label: 'Course\nRegistration', icon: <IcCourses />,
    children: ['Register Courses', 'Registered Courses', 'Course Add/Drop'] },
  { id: 'results',      label: 'My Results',           icon: <IcResults />,
    children: ['View Results', 'Print Result Slip'] },
]

/* ══════════════════════════════════════
   SIDEBAR
══════════════════════════════════════ */
function Sidebar({ open, close, active, setActive }) {
  const [expanded, setExpanded] = useState({ summer: false, courses: false, results: false })

  const toggle = id => setExpanded(p => ({ ...p, [id]: !p[id] }))

  return (
    <>
      <div className={`db-overlay${open ? ' show' : ''}`} onClick={close} />
      <aside className={`db-sidebar${open ? ' open' : ''}`}>

        {/* Logo */}
        <div className="db-logo">
          <img src="/fud-logo.png" alt="Federal University Dutse" />
          <span className="db-logo-name">FUD myPortal</span>
        </div>

        {/* Nav List */}
        <ul className="db-nav">
          {NAV.map(item => (
            <li key={item.id} className="db-nav-li">
              <button
                className={`db-nav-btn${active === item.id ? ' active' : ''}`}
                onClick={() => {
                  if (item.children) { toggle(item.id) }
                  else { setActive(item.id); close() }
                }}
              >
                <span className="db-nav-icon-box">{item.icon}</span>
                <span className="db-nav-label">
                  {item.label.split('\n').map((line, idx) => (
                    <span key={idx} className="db-nav-line">{line}</span>
                  ))}
                </span>
                {item.children && (
                  <span className="db-nav-arrow">
                    {expanded[item.id] ? <IcChevDown size={11}/> : <IcChevLeft />}
                  </span>
                )}
              </button>
              {item.children && expanded[item.id] && (
                <ul className="db-sub">
                  {item.children.map(c => (
                    <li key={c}>
                      <a href="#" className="db-sub-a" onClick={e => { e.preventDefault(); close() }}>{c}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

/* ══════════════════════════════════════
   TOPBAR
══════════════════════════════════════ */
function TopBar({ toggle }) {
  return (
    <div className="db-top-wrapper">
      <header className="db-top">
        <div className="db-top-left">
          <button className="db-top-burger" onClick={toggle} aria-label="Menu">
            <IcMenu />
          </button>
          <span className="db-top-title">Student</span>
        </div>
        <div className="db-top-user">
          <span className="db-top-avatar">
            <IcUserTie />
          </span>
          <span className="db-top-regno">FCP/CIT/24/2001</span>
          <IcChevDown size={12} />
        </div>
      </header>
    </div>
  )
}

/* ══════════════════════════════════════
   DASHBOARD BODY
══════════════════════════════════════ */
function Body({ onOpenDataForm }) {
  return (
    <div className="db-body">
      {/* ── Main column ── */}
      <div className="db-col">

        {/* Welcome Card */}
        <div className="card wc-card">
          <p className="wc-name">
            Welcome, <em className="wc-name-em">Abubakar Hamza Rahama (FCP/CIT/24/2001)</em>
          </p>
          <div className="wc-row">
            <div className="wc-status">
              Student Status: <strong className="wc-status-val">Active</strong>
            </div>
            <a
              href="#"
              className="wc-form"
              id="fud-open-dataform"
              onClick={e => {
                e.preventDefault()
                if (onOpenDataForm) onOpenDataForm()
              }}
            >
              <IcDoc /> <span>Student Data Form</span>
            </a>
          </div>
        </div>

        {/* Passport + Overview Card */}
        <div className="card po-card">
          <h3 className="po-title">UPDATE PASSPORT PHOTOGRAPH</h3>
          <div className="po-file-row">
            <span className="po-file-label">Select file:</span>
            <input type="file" accept="image/*" />
            <button className="po-upload"><IcUpload /> Upload</button>
          </div>

          {/* Overview */}
          <p className="ov-hdr">
            Student Overview <span className="ov-session">Session: 2025/2026</span>
          </p>

          <div className="ov-grid">
            {/* School Fees */}
            <div className="ov-card ov-fees">
              <div className="ov-lbl">SCHOOL FEES (2025/2026)</div>
              <div className="ov-paid">Paid</div>
              <div className="ov-amt">
                Amount due: <strong>₦129,000</strong><br />
                Amount paid: <strong>₦129,000</strong>
              </div>
            </div>

            {/* Courses */}
            <div className="ov-card ov-courses">
              <div className="ov-lbl">COURSES REGISTERED (2025/2026)</div>
              <div className="ov-count">
                <span className="ov-count-val">14</span>
                <span className="ov-count-sub">courses</span>
              </div>
              <div className="ov-csub">
                First semester: <strong>7</strong> (16 units)<br />
                Second semester: <strong>7</strong> (18 units)
              </div>
            </div>

            {/* CGPA */}
            <div className="ov-card ov-cgpa">
              <div className="ov-lbl">LATEST PUBLISHED RESULT</div>
              <div className="ov-cgpa-row">
                <span className="ov-cgpa-val">4.45</span>
                <span className="ov-cgpa-badge">CGPA</span>
              </div>
              <div className="ov-cgpa-sub">
                First Semester, 2025/2026<br />
                GPA: <strong>2.31</strong> · Units earned: <strong>16</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Profile card (Right column) ── */}
      <div className="db-profile-card">
        <img
          src="/student-passport.png"
          alt="Abubakar Hamza Rahama"
          className="db-profile-img"
        />
        <h4 className="db-profile-name">Abubakar Hamza Rahama</h4>
        <div className="db-profile-rows">
          <div className="db-p-row">
            <span className="db-p-label">Department:</span>
            <strong className="db-p-val">INFORMATION TECHNOLOGY</strong>
          </div>
          <div className="db-p-row">
            <span className="db-p-label">Level:</span>
            <strong className="db-p-val">300</strong>
          </div>
          <div className="db-p-row">
            <span className="db-p-label">Gender:</span>
            <strong className="db-p-val">M</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════
   FOOTER
══════════════════════════════════════ */
function Footer() {
  return (
    <footer className="db-footer">
      FUD ICT © 2023 v2.0 All rights reserved.
    </footer>
  )
}

/* ══════════════════════════════════════
   DASHBOARD ROOT
══════════════════════════════════════ */
export default function Dashboard({ onLogout, onOpenDataForm }) {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('home')

  return (
    <div className="db">
      <Sidebar
        open={open}
        close={() => setOpen(false)}
        active={active}
        setActive={setActive}
      />
      <div className="db-main">
        <TopBar toggle={() => setOpen(v => !v)} />
        <Body onOpenDataForm={onOpenDataForm} />
        <Footer />
      </div>
    </div>
  )
}
