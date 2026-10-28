import { useState, useRef, useEffect } from 'react'
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

const IcFolderCards = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M5 4.5h5l2 2h8a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5" />
    <path d="M2.5 9.5a1.5 1.5 0 0 1 1.5-1.5h4.5l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5h-16A1.5 1.5 0 0 1 2.5 19.5v-10z" />
    <line x1="2.5" y1="12.5" x2="20" y2="12.5" />
    <line x1="12" y1="15" x2="13" y2="15" strokeWidth="2.5" />
    <line x1="14.5" y1="15" x2="17.5" y2="15" strokeWidth="1.8" />
    <line x1="12" y1="17.5" x2="13" y2="17.5" strokeWidth="2.5" />
    <line x1="14.5" y1="17.5" x2="17.5" y2="17.5" strokeWidth="1.8" />
  </svg>
)

const IcDocLines = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
       strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M14 2H6a1.5 1.5 0 0 0-1.5 1.5v17A1.5 1.5 0 0 0 6 22h12a1.5 1.5 0 0 0 1.5-1.5V7.5L14 2z" />
    <polyline points="14 2 14 7.5 19.5 7.5" />
    <line x1="8" y1="8" x2="11" y2="8" />
    <line x1="8" y1="11.5" x2="16" y2="11.5" />
    <line x1="8" y1="14.5" x2="16" y2="14.5" />
    <line x1="8" y1="17.5" x2="16" y2="17.5" />
    <line x1="8" y1="20" x2="16" y2="20" />
  </svg>
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
  { id: 'courses',      label: 'Course\nRegistration', icon: <IcFolderCards />,
    children: ['Register Courses', 'Registered Courses', 'Course Add/Drop'] },
  { id: 'results',      label: 'My Results',           icon: <IcDocLines />,
    children: ['View Results', 'Transcript'] },
  { id: 'siwes',        label: 'SIWES',                icon: <IcDocLines />,
    children: ['SIWES Details', 'SIWES Downloads', 'SIWES Complaints'] },
  { id: 'examcard',     label: 'Exam Card',            icon: <IcFolderCards />, },
  { id: 'complaint',    label: 'Submit\nComplaint',    icon: <IcFolderCards />,
    children: ['Submit Complaint', 'MyComplaints'] },
]

/* ══════════════════════════════════════
   SIDEBAR
══════════════════════════════════════ */
function Sidebar({ open, close, active, setActive, onOpenTranscript }) {
  const [expanded, setExpanded] = useState({
    summer: false,
    courses: false,
    results: false,
    siwes: false,
    complaint: false,
  })
  const [activeSub, setActiveSub] = useState(null)

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
          {NAV.map(item => {
            const hasChildren = Boolean(item.children && item.children.length > 0)
            const isExpanded = Boolean(expanded[item.id])
            const isActive = active === item.id

            return (
              <li key={item.id} className="db-nav-li">
                <button
                  className={`db-nav-btn${isActive ? ' active' : ''}${hasChildren ? ' has-children' : ''}${isExpanded ? ' expanded' : ''}`}
                  onClick={() => {
                    if (hasChildren) {
                      toggle(item.id)
                      setActive(item.id)
                    } else {
                      setActive(item.id)
                      close()
                    }
                  }}
                >
                  <span className="db-nav-icon-box">{item.icon}</span>
                  <span className="db-nav-label">
                    {item.label.split('\n').map((line, idx) => (
                      <span key={idx} className="db-nav-line">{line}</span>
                    ))}
                  </span>
                  {hasChildren && (
                    <span className="db-nav-arrow">
                      {isExpanded ? <IcChevDown size={11}/> : <IcChevLeft />}
                    </span>
                  )}
                </button>
                {hasChildren && isExpanded && (
                  <ul className="db-sub">
                    {item.children.map(c => (
                      <li key={c}>
                        <a
                          href="#"
                          className={`db-sub-a${activeSub === c ? ' active' : ''}`}
                          onClick={e => {
                            e.preventDefault()
                            setActiveSub(c)
                            close()
                            if (c === 'Transcript' && onOpenTranscript) {
                              onOpenTranscript()
                            }
                          }}
                        >
                          {c}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

/* ══════════════════════════════════════
   TOPBAR
══════════════════════════════════════ */
function TopBar({ toggle, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passData, setPassData] = useState({ current: '', next: '', confirm: '' })
  const [passMsg, setPassMsg] = useState(null)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  return (
    <div className="db-top-wrapper">
      <header className="db-top">
        <div className="db-top-left">
          <button className="db-top-burger" onClick={toggle} aria-label="Menu">
            <IcMenu />
          </button>
          <span className="db-top-title">Student</span>
        </div>
        <div className="db-top-user-wrap" ref={menuRef}>
          <div
            className="db-top-user"
            onClick={() => setDropdownOpen(v => !v)}
            role="button"
            tabIndex={0}
          >
            <span className="db-top-avatar">
              <IcUserTie />
            </span>
            <span className="db-top-regno">FCP/CIT/25/2001</span>
            <IcChevDown size={12} />
          </div>

          {dropdownOpen && (
            <div className="db-user-dropdown">
              <button
                type="button"
                className="db-user-dropdown-item"
                onClick={() => {
                  setDropdownOpen(false)
                  setShowPasswordModal(true)
                }}
              >
                Change Password
              </button>
              <button
                type="button"
                className="db-user-dropdown-item"
                onClick={() => {
                  setDropdownOpen(false)
                  if (onLogout) onLogout()
                }}
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Change Password Modal */}
      {showPasswordModal && (
        <div className="db-modal-overlay" onClick={() => setShowPasswordModal(false)}>
          <div className="db-modal-card" onClick={e => e.stopPropagation()}>
            <div className="db-modal-header">
              <h3>Change Password</h3>
              <button
                type="button"
                className="db-modal-close"
                onClick={() => setShowPasswordModal(false)}
              >
                ×
              </button>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault()
                if (!passData.current || !passData.next || !passData.confirm) {
                  setPassMsg({ type: 'error', text: 'All fields are required' })
                  return
                }
                if (passData.next !== passData.confirm) {
                  setPassMsg({ type: 'error', text: 'New passwords do not match' })
                  return
                }
                setPassMsg({ type: 'success', text: 'Password changed successfully!' })
                setTimeout(() => {
                  setShowPasswordModal(false)
                  setPassMsg(null)
                  setPassData({ current: '', next: '', confirm: '' })
                }, 1200)
              }}
            >
              {passMsg && (
                <div className={`db-modal-alert ${passMsg.type}`}>
                  {passMsg.text}
                </div>
              )}
              <div className="db-modal-field">
                <label>Current Password</label>
                <input
                  type="password"
                  value={passData.current}
                  onChange={e => setPassData(p => ({ ...p, current: e.target.value }))}
                  placeholder="Enter current password"
                />
              </div>
              <div className="db-modal-field">
                <label>New Password</label>
                <input
                  type="password"
                  value={passData.next}
                  onChange={e => setPassData(p => ({ ...p, next: e.target.value }))}
                  placeholder="Enter new password"
                />
              </div>
              <div className="db-modal-field">
                <label>Confirm New Password</label>
                <input
                  type="password"
                  value={passData.confirm}
                  onChange={e => setPassData(p => ({ ...p, confirm: e.target.value }))}
                  placeholder="Confirm new password"
                />
              </div>
              <div className="db-modal-actions">
                <button
                  type="button"
                  className="db-btn-cancel"
                  onClick={() => setShowPasswordModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="db-btn-submit">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
            Welcome, <em className="wc-name-em">Abubakar Hamza Rahama (FCP/CIT/25/2001)</em>
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
                <span className="ov-cgpa-val">2.31</span>
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
export default function Dashboard({ onLogout, onOpenDataForm, onOpenTranscript }) {
  const [open, setOpen]     = useState(false)
  const [active, setActive] = useState('home')

  return (
    <div className="db">
      <Sidebar
        open={open}
        close={() => setOpen(false)}
        active={active}
        setActive={setActive}
        onOpenTranscript={onOpenTranscript}
      />
      <div className="db-main">
        <TopBar toggle={() => setOpen(v => !v)} onLogout={onLogout} />
        <Body onOpenDataForm={onOpenDataForm} />
        <Footer />
      </div>
    </div>
  )
}
