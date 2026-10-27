import './Transcript.css'

export default function Transcript({ onBack }) {
  const handlePrint = () => {
    window.print()
  }

  const firstSemesterCourses = [
    { sn: 1, code: 'COS 201', title: 'COMPUTER PROGRAMMING I', cu: 3, score: 45, g: 'D', gp: 2, wgp: 6 },
    { sn: 2, code: 'FUD CIT 201', title: 'INTRO. TO SOFTWARE ENGINEERING', cu: 3, score: 51, g: 'C', gp: 3, wgp: 9 },
    { sn: 3, code: 'FUD CIT 209', title: 'COMPUTER HARDWARE REPAIRS/MAINTENANCE', cu: 2, score: 60, g: 'B', gp: 4, wgp: 8 },
    { sn: 4, code: 'GST212', title: 'PHILOSOPHY, LOGIC AND HUMAN EXISTENCE', cu: 2, score: 43, g: 'E', gp: 1, wgp: 2 },
    { sn: 5, code: 'IFT 203', title: 'INTRO. TO WEB TECHNOLOGIES', cu: 2, score: 57, g: 'C', gp: 3, wgp: 6 },
    { sn: 6, code: 'IFT 205', title: 'INTRO. TO INFORMATION TECHNOLOGY', cu: 2, score: 45, g: 'D', gp: 2, wgp: 4 },
    { sn: 7, code: 'IFT 211', title: 'DIGITAL LOGIC DESIGN', cu: 2, score: 40, g: 'E', gp: 1, wgp: 2 },
  ]

  const secondSemesterCourses = [
    { sn: 1, code: 'COS 202', title: 'COMPUTER PROGRAMMING II', cu: 3, score: 60, g: 'B', gp: 4, wgp: 12 },
    { sn: 2, code: 'FUD CIT 206', title: 'DIGITAL FORENSICS', cu: 3, score: 53, g: 'C', gp: 3, wgp: 9 },
    { sn: 3, code: 'FUD CIT 208', title: 'BUSINESS DATA ANALYSIS', cu: 3, score: 57, g: 'C', gp: 3, wgp: 9 },
    { sn: 4, code: 'FUD CIT 210', title: 'SYSTEM ANALYSIS & DESIGN', cu: 3, score: 50, g: 'C', gp: 3, wgp: 9 },
    { sn: 5, code: 'GST 223', title: 'INTRODUCTION TO ENTREPRENEURSHIP STUDIES', cu: 2, score: 45, g: 'D', gp: 2, wgp: 4 },
    { sn: 6, code: 'IFT 212', title: 'COMPUTER ARCHITECTURE & ORGANIZATION', cu: 2, score: 48, g: 'D', gp: 2, wgp: 4 },
    { sn: 7, code: 'INS-202', title: 'HUMAN COMPUTER INTERACTION', cu: 2, score: 46, g: 'D', gp: 2, wgp: 4 },
  ]

  return (
    <div className="tr-wrapper">
      {/* ── Action Buttons ── */}
      <div className="tr-actions">
        <button className="tr-btn tr-btn-print" onClick={handlePrint}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          Print / Save as PDF
        </button>
        <button className="tr-btn tr-btn-back" onClick={onBack}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to Dashboard
        </button>
      </div>

      {/* ── Official Document Sheet ── */}
      <div className="tr-sheet">
        {/* Header */}
        <header className="tr-header">
          <img src="/fud-logo.png" alt="Federal University Dutse" className="tr-logo" />
          <h1 className="tr-title-main">FEDERAL UNIVERSITY DUTSE</h1>
          <p className="tr-title-sub">(OFFICE OF THE REGISTRAR)</p>
          <p className="tr-title-record">TRANSCRIPTS OF ACADEMIC RECORD</p>
        </header>

        {/* Student Details Box */}
        <section className="tr-bio-box">
          <div className="tr-bio-col">
            <div className="tr-bio-row">
              <span className="tr-bio-label">FULLNAME:</span>
              <span className="tr-bio-val">ABUBAKAR HAMZA RAHAMA</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">FACULTY:</span>
              <span className="tr-bio-val">FACULTY OF COMPUTING</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">PROGRAM:</span>
              <span className="tr-bio-val">B.SC. INFORMATION TECHNOLOGY</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">YEAR OF ENTRY:</span>
              <span className="tr-bio-val">2025/2026</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">YEAR OF GRADUATION:</span>
              <span className="tr-bio-val"></span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">MODE OF ENTRY:</span>
              <span className="tr-bio-val">DE</span>
            </div>
          </div>

          <div className="tr-bio-col">
            <div className="tr-bio-row">
              <span className="tr-bio-label">REGISTRATION NO.:</span>
              <span className="tr-bio-val">FCP/CIT/25/2001</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">DEPARTMENT:</span>
              <span className="tr-bio-val">INFORMATION TECHNOLOGY</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">DATE OF BIRTH:</span>
              <span className="tr-bio-val">2002-10-12</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">GENDER:</span>
              <span className="tr-bio-val">M</span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">NATIONALITY:</span>
              <span className="tr-bio-val"></span>
            </div>
            <div className="tr-bio-row">
              <span className="tr-bio-label">JAMB NO.:</span>
              <span className="tr-bio-val">202590058282EA</span>
            </div>
          </div>
        </section>

        {/* ── Side-by-Side Semesters ── */}
        <section className="tr-semesters-grid">
          {/* First Semester */}
          <div className="tr-semester-col">
            <div className="tr-level-label">LEVEL:200</div>
            <div className="tr-sem-bar">
              <span>SESSION: 2025/2026</span>
              <span>SEMESTER: First Semester</span>
            </div>
            <table className="tr-table">
              <thead>
                <tr>
                  <th className="tr-c-sn">S/N</th>
                  <th className="tr-c-code">Course<br/>Code</th>
                  <th className="tr-c-title">Course Title</th>
                  <th className="tr-c-num">CU</th>
                  <th className="tr-c-num">Score</th>
                  <th className="tr-c-num">G</th>
                  <th className="tr-c-num">GP</th>
                  <th className="tr-c-num">WGP</th>
                </tr>
              </thead>
              <tbody>
                {firstSemesterCourses.map(c => (
                  <tr key={c.sn}>
                    <td className="tr-c-center">{c.sn}</td>
                    <td>{c.code}</td>
                    <td>{c.title}</td>
                    <td className="tr-c-center">{c.cu}</td>
                    <td className="tr-c-center">{c.score}</td>
                    <td className="tr-c-center">{c.g}</td>
                    <td className="tr-c-center">{c.gp}</td>
                    <td className="tr-c-center">{c.wgp}</td>
                  </tr>
                ))}
                <tr className="tr-total-row">
                  <td colSpan="3" className="tr-total-label">Total:</td>
                  <td className="tr-c-center">16</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="tr-c-center">37</td>
                </tr>
              </tbody>
            </table>
            <div className="tr-gpa-box">
              <span>GPA: 2.31</span>
              <span>CGPA: 2.31</span>
            </div>
          </div>

          {/* Second Semester */}
          <div className="tr-semester-col">
            <div className="tr-level-label">LEVEL:200</div>
            <div className="tr-sem-bar">
              <span>SESSION: 2025/2026</span>
              <span>SEMESTER: Second Semester</span>
            </div>
            <table className="tr-table">
              <thead>
                <tr>
                  <th className="tr-c-sn">S/N</th>
                  <th className="tr-c-code">Course<br/>Code</th>
                  <th className="tr-c-title">Course Title</th>
                  <th className="tr-c-num">CU</th>
                  <th className="tr-c-num">Score</th>
                  <th className="tr-c-num">G</th>
                  <th className="tr-c-num">GP</th>
                  <th className="tr-c-num">WGP</th>
                </tr>
              </thead>
              <tbody>
                {secondSemesterCourses.map(c => (
                  <tr key={c.sn}>
                    <td className="tr-c-center">{c.sn}</td>
                    <td>{c.code}</td>
                    <td>{c.title}</td>
                    <td className="tr-c-center">{c.cu}</td>
                    <td className="tr-c-center">{c.score}</td>
                    <td className="tr-c-center">{c.g}</td>
                    <td className="tr-c-center">{c.gp}</td>
                    <td className="tr-c-center">{c.wgp}</td>
                  </tr>
                ))}
                <tr className="tr-total-row">
                  <td colSpan="3" className="tr-total-label">Total:</td>
                  <td className="tr-c-center">18</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="tr-c-center">51</td>
                </tr>
              </tbody>
            </table>
            <div className="tr-gpa-box">
              <span>GPA: 2.83</span>
              <span>CGPA: 2.56</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="tr-footer">
          <span className="tr-footer-url">https://www.myportal.fud.edu.ng/dashboard/hod/print.php</span>
          <span className="tr-footer-page">1/2</span>
        </footer>
      </div>
    </div>
  )
}
