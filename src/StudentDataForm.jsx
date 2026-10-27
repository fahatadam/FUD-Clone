import './StudentDataForm.css'

export default function StudentDataForm({ onBack }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="sdf-wrapper">
      {/* ── Action Buttons ── */}
      <div className="sdf-actions">
        <button className="sdf-btn sdf-btn-print" onClick={handlePrint}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print / Save as PDF
        </button>
        <button className="sdf-btn sdf-btn-back" onClick={onBack}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Dashboard
        </button>
      </div>

      {/* ── Official Document Sheet ── */}
      <div className="sdf-sheet">
        {/* Header */}
        <header className="sdf-header">
          <img src="/fud-logo.png" alt="FUD Crest" className="sdf-logo" />
          <div className="sdf-header-center">
            <h1 className="sdf-title-main">FEDERAL UNIVERSITY DUTSE</h1>
            <p className="sdf-title-sub">(OFFICE OF THE REGISTRAR)</p>
            <p className="sdf-title-dir">DIRECTORATE OF ACADEMIC AFFAIRS</p>
            <p className="sdf-title-form">STUDENT REGISTRATION FORM</p>
            <p className="sdf-title-note">(Submit White copy to Examination and Record Unit)</p>
          </div>
          <div className="sdf-passport-box">
            <img src="/student-passport.png" alt="Abubakar Hamza Rahama" className="sdf-passport-img" />
          </div>
        </header>

        {/* ── A. STUDENT DATA ── */}
        <div className="sdf-section-bar">A. STUDENT DATA</div>
        <table className="sdf-table">
          <tbody>
            <tr>
              <td className="sdf-lbl" style={{ width: '18%' }}>First Name:</td>
              <td className="sdf-val" style={{ width: '32%' }}>Abubakar</td>
              <td className="sdf-lbl" style={{ width: '22%' }}>Middle Name:</td>
              <td className="sdf-val" style={{ width: '28%' }}>Hamza</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Last Name:</td>
              <td className="sdf-val">Rahama</td>
              <td className="sdf-lbl">Registration Number:</td>
              <td className="sdf-val sdf-val-bold">FCP/CIT/24/2001</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Date of Birth:</td>
              <td className="sdf-val">2002-10-12</td>
              <td className="sdf-lbl">Gender:</td>
              <td className="sdf-val">Male</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Marital Status:</td>
              <td className="sdf-val">Single</td>
              <td className="sdf-lbl">Religion:</td>
              <td className="sdf-val">Islam</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Nationality:</td>
              <td className="sdf-val">Nigerian</td>
              <td className="sdf-lbl">State of Origin:</td>
              <td className="sdf-val">Bauchi</td>
            </tr>
            <tr>
              <td className="sdf-lbl">L.G.A.:</td>
              <td className="sdf-val">Toro</td>
              <td className="sdf-lbl">Faculty:</td>
              <td className="sdf-val">FACULTY OF COMPUTING</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Department:</td>
              <td className="sdf-val">INFORMATION TECHNOLOGY</td>
              <td className="sdf-lbl">Programme:</td>
              <td className="sdf-val">B.Sc. Information Technology</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Level:</td>
              <td className="sdf-val">200</td>
              <td className="sdf-lbl">Session:</td>
              <td className="sdf-val">2025/2026</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Mode of Study (Full-Time/Part-Time):</td>
              <td className="sdf-val">Full-Time</td>
              <td className="sdf-lbl">Mode of Entry (DE/UTME/TRANSFER):</td>
              <td className="sdf-val">DE</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Year of Admission:</td>
              <td className="sdf-val">2025/2026</td>
              <td className="sdf-lbl">Phone Number:</td>
              <td className="sdf-val">09156534485</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Email:</td>
              <td className="sdf-val" colSpan="3">abubakar.hamza@gmail.com</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Permanent Home Address:</td>
              <td className="sdf-val" colSpan="3">Unguwar Rimi, Tilden Fulani, Toro Local Government Area, Bauchi State</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Contact Address:</td>
              <td className="sdf-val" colSpan="3">Unguwar Rimi, Tilden Fulani, Toro Local Government Area, Bauchi State</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Last School Attended and Date:</td>
              <td className="sdf-val" colSpan="3">Abubakar Tatari Ali Polytechnic, Bauchi (2024)</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Highest Qualification, where obtained and Date:</td>
              <td className="sdf-val" colSpan="3">National Diploma in Computer Science (2024)</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Name of Next of Kin:</td>
              <td className="sdf-val">Nasir Hamza</td>
              <td className="sdf-lbl">Next of Kin Phone:</td>
              <td className="sdf-val">09156534485</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Next of Kin Address:</td>
              <td className="sdf-val">Unguwar Rimi, Tilden Fulani, Toro Local Government Area, Bauchi State</td>
              <td className="sdf-lbl">Next of Kin Email:</td>
              <td className="sdf-val">nasirhamza573@gmail.com</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Name of Sponsor:</td>
              <td className="sdf-val">Adamu Abdullahi</td>
              <td className="sdf-lbl">Sponsor's Phone Number:</td>
              <td className="sdf-val">08062722871</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Sponsor Address:</td>
              <td className="sdf-val" colSpan="3">Unguwar Rimi, Tilden Fulani, Toro Local Government Area, Bauchi State</td>
            </tr>
          </tbody>
        </table>

        {/* ── HEALTH INFORMATION ── */}
        <div className="sdf-section-bar">HEALTH INFORMATION</div>
        <table className="sdf-table">
          <tbody>
            <tr>
              <td className="sdf-lbl" style={{ width: '25%' }}>Health Status:</td>
              <td className="sdf-val" style={{ width: '25%' }}>Normal</td>
              <td className="sdf-lbl" style={{ width: '25%' }}>Physically Challenged (Specify):</td>
              <td className="sdf-val" style={{ width: '25%' }}>None</td>
            </tr>
            <tr>
              <td className="sdf-lbl">If Physically Challenged, Specify any Medical Requirement:</td>
              <td className="sdf-val">None</td>
              <td className="sdf-lbl">Blood Group:</td>
              <td className="sdf-val">O+</td>
            </tr>
            <tr>
              <td className="sdf-lbl">Any other information (indicate where necessary):</td>
              <td className="sdf-val" colSpan="3">None</td>
            </tr>
          </tbody>
        </table>

        {/* ── B. COURSE REGISTRATION SCHEDULE ── */}
        <div className="sdf-section-bar">B. COURSE REGISTRATION SCHEDULE</div>

        {/* First Semester */}
        <div className="sdf-course-subhdr">First Semester</div>
        <table className="sdf-course-table">
          <thead>
            <tr>
              <th style={{ width: '18%' }}>COURSE CODE</th>
              <th style={{ width: '54%' }}>COURSE TITLE</th>
              <th style={{ width: '14%' }} className="sdf-c-center">CREDIT UNIT</th>
              <th style={{ width: '14%' }} className="sdf-c-center">SIGNATURE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>COS 201</td>
              <td>Computer Programming I</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>FUD CIT 201</td>
              <td>Intro. to Software Engineering</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>FUD CIT 209</td>
              <td>Computer Hardware Repairs/Maintenance</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>GST212</td>
              <td>Philosophy, Logic and Human Existence</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>IFT 203</td>
              <td>Intro. to Web Technologies</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>IFT 205</td>
              <td>Intro. to Information Technology</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>IFT 211</td>
              <td>Digital Logic Design</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr className="sdf-total-row">
              <td colSpan="2" style={{ textAlign: 'right' }}>Total Credit Units</td>
              <td className="sdf-c-center">16</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* Second Semester */}
        <div className="sdf-course-subhdr">Second Semester</div>
        <table className="sdf-course-table">
          <thead>
            <tr>
              <th style={{ width: '18%' }}>COURSE CODE</th>
              <th style={{ width: '54%' }}>COURSE TITLE</th>
              <th style={{ width: '14%' }} className="sdf-c-center">CREDIT UNIT</th>
              <th style={{ width: '14%' }} className="sdf-c-center">SIGNATURE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>COS 202</td>
              <td>Computer Programming II</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>FUD CIT 206</td>
              <td>Digital Forensics</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>FUD CIT 208</td>
              <td>Business Data Analysis</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>FUD CIT 210</td>
              <td>System Analysis &amp; Design</td>
              <td className="sdf-c-center">3</td>
              <td></td>
            </tr>
            <tr>
              <td>GST 223</td>
              <td>Introduction to Entrepreneurship Studies</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>IFT 212</td>
              <td>Computer Architecture &amp; Organization</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr>
              <td>INS-202</td>
              <td>Human Computer Interaction</td>
              <td className="sdf-c-center">2</td>
              <td></td>
            </tr>
            <tr className="sdf-total-row">
              <td colSpan="2" style={{ textAlign: 'right' }}>Total Credit Units</td>
              <td className="sdf-c-center">18</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        {/* ── C. DECLARATION ── */}
        <div className="sdf-section-bar">C. DECLARATION</div>
        <p className="sdf-decl-text">
          I, <strong>Abubakar Hamza Rahama</strong>, declare that the information given above is, to the best of my knowledge, correct.
        </p>
        <p className="sdf-decl-sig-line">
          Student's Signature and Date: __________________________________________________
        </p>

        <div className="sdf-signoff-box">
          <div className="sdf-signoff-row">
            Head of Department's/Coordinator's Signature and Date: __________________________________________________
          </div>
          <div className="sdf-signoff-row">
            Signature and Date of Final Registration/Submission in Exam &amp; Record Unit: _______________________________
          </div>
          <div className="sdf-signoff-note">
            Note: Any change in the information given should be reported to the Academic Division.
          </div>
        </div>
      </div>
    </div>
  )
}
