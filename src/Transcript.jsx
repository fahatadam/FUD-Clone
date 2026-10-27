import './Transcript.css'

export default function Transcript({ onBack }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="tr-wrapper">
      {/* ── Top Action Buttons (Hidden on Print) ── */}
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
                <tr>
                  <td className="tr-c-center">1</td>
                  <td>COS 201</td>
                  <td>COMPUTER PROGRAMMING I</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">45</td>
                  <td className="tr-c-center">D</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">6</td>
                </tr>
                <tr>
                  <td className="tr-c-center">2</td>
                  <td>FUD CIT<br/>201</td>
                  <td>INTRO. TO SOFTWARE ENGINEERING</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">51</td>
                  <td className="tr-c-center">C</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">9</td>
                </tr>
                <tr>
                  <td className="tr-c-center">3</td>
                  <td>FUD CIT<br/>209</td>
                  <td>COMPUTER HARDWARE<br/>REPAIRS/MAINTENANCE</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">60</td>
                  <td className="tr-c-center">B</td>
                  <td className="tr-c-center">4</td>
                  <td className="tr-c-center">8</td>
                </tr>
                <tr>
                  <td className="tr-c-center">4</td>
                  <td>GST212</td>
                  <td>PHILOSOPHY, LOGIC AND HUMAN<br/>EXISTENCE</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">43</td>
                  <td className="tr-c-center">E</td>
                  <td className="tr-c-center">1</td>
                  <td className="tr-c-center">2</td>
                </tr>
                <tr>
                  <td className="tr-c-center">5</td>
                  <td>IFT 203</td>
                  <td>INTRO. TO WEB TECHNOLOGIES</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">57</td>
                  <td className="tr-c-center">C</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">6</td>
                </tr>
                <tr>
                  <td className="tr-c-center">6</td>
                  <td>IFT 205</td>
                  <td>INTRO. TO INFORMATION TECHNOLOGY</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">45</td>
                  <td className="tr-c-center">D</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">4</td>
                </tr>
                <tr>
                  <td className="tr-c-center">7</td>
                  <td>IFT 211</td>
                  <td>DIGITAL LOGIC DESIGN</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">40</td>
                  <td className="tr-c-center">E</td>
                  <td className="tr-c-center">1</td>
                  <td className="tr-c-center">2</td>
                </tr>
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
                <tr>
                  <td className="tr-c-center">1</td>
                  <td>COS 202</td>
                  <td>COMPUTER PROGRAMMING II</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">60</td>
                  <td className="tr-c-center">B</td>
                  <td className="tr-c-center">4</td>
                  <td className="tr-c-center">12</td>
                </tr>
                <tr>
                  <td className="tr-c-center">2</td>
                  <td>FUD CIT<br/>206</td>
                  <td>DIGITAL FORENSICS</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">50</td>
                  <td className="tr-c-center">C</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">9</td>
                </tr>
                <tr>
                  <td className="tr-c-center">3</td>
                  <td>FUD CIT<br/>208</td>
                  <td>BUSINESS DATA ANALYSIS</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">50</td>
                  <td className="tr-c-center">C</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">9</td>
                </tr>
                <tr>
                  <td className="tr-c-center">4</td>
                  <td>FUD CIT<br/>210</td>
                  <td>SYSTEM ANALYSIS &amp; DESIGN</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">50</td>
                  <td className="tr-c-center">C</td>
                  <td className="tr-c-center">3</td>
                  <td className="tr-c-center">9</td>
                </tr>
                <tr>
                  <td className="tr-c-center">5</td>
                  <td>GST 223</td>
                  <td>INTRODUCTION TO ENTREPRENEURSHIP<br/>STUDIES</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">45</td>
                  <td className="tr-c-center">D</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">4</td>
                </tr>
                <tr>
                  <td className="tr-c-center">6</td>
                  <td>IFT 212</td>
                  <td>COMPUTER ARCHITECTURE &amp;<br/>ORGANIZATION</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">45</td>
                  <td className="tr-c-center">D</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">4</td>
                </tr>
                <tr>
                  <td className="tr-c-center">7</td>
                  <td>INS-202</td>
                  <td>HUMAN COMPUTER INTERACTION</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">50</td>
                  <td className="tr-c-center">D</td>
                  <td className="tr-c-center">2</td>
                  <td className="tr-c-center">4</td>
                </tr>
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
              <span>CGPA: 2.59</span>
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
