const { Header, Footer, ResearchArea } = window;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#00356B",
  "font": "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif"
}/*EDITMODE-END*/;

// const projectLinks = [
//   { theme: 'privacy', title: 'ZKSMT: A VM for Proving SMT Theorems in Zero Knowledge', url: '#', desc: 'A virtual machine that lets a prover convince a verifier an SMT formula is unsatisfiable without revealing the formula or the proof. (USENIX Security 2024)' },
//   { theme: 'privacy', title: 'Coinductive ZK Proofs for Program Equivalence', url: '#', desc: 'A proof system that uses coinductive reasoning to demonstrate, in zero knowledge, that two regular expressions are equivalent. (OOPSLA 2025)' },
//   { theme: 'privacy', title: 'Privacy-Preserving SAT and MaxSAT', url: '#', desc: 'Solvers that not only return an answer but produce cryptographic evidence of correctness, enabling third-party verification without re-running the solver. (SAT 2025, CP 2025 invited talks; ASE 2025)' },
//   { theme: 'privacy', title: 'Verifiable AI: Zero-Knowledge Proofs for Private Models', url: '#', desc: 'Custom ZK protocols that prove fairness, robustness, or non-memorization of proprietary AI models without exposing their weights.' },
//   { theme: 'mlai', title: 'Learning Randomized Reductions', url: '#', desc: 'The first ML framework for automatically discovering randomized reductions, a foundational primitive underlying self-correction, average-case hardness, and side-channel resilience. (with Shafi Goldwasser; arXiv:2412.18134)' },
//   { theme: 'mlai', title: 'Learning How to Cube SAT', url: '#', desc: 'A reinforcement-learning approach to cubing, partitioning a SAT instance into parallel subproblems, that outperforms fixed heuristics on industrial-scale workloads. (with Amazon Trusted Solvers)' },
//   { theme: 'neuro', title: 'Agentic Data Proxy Discovery for the Environmental Performance Index', url: '#', desc: 'An agentic AI framework that proposes, tests, and produces verifiable arguments for environmental data proxies, applied to the Yale EPI.' },
//   { theme: 'neuro', title: 'Formal Methods for Cancer Cell Modeling', url: '#', desc: 'Program synthesis and reachability analysis applied to cancer-cell models, giving biologists simulations they can mathematically trust.' },
//   { theme: 'law', title: 'soid: Legal Accountability for Automated Decision Making', url: '#', desc: 'An SMT-based oracle that answers counterfactual questions about automated decisions in a form admissible to courts and regulators. (CAV 2024)' },
//   { theme: 'law', title: 'CourtReasoner: Can LLM Agents Reason Like Judges?', url: '#', desc: 'A benchmark for whether LLM agents can produce the structured legal reasoning that legitimizes judicial rulings, with Yale Law and Yale CS co-authors. (EMNLP 2025)' },
// ];

// Pages
const HomePage = ({ tweaks }) => {
  return (
    <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48, alignItems: 'flex-start' }}>
      <main style={{ flex: 1, minWidth: 0 }}>
        {/* Lab intro */}
        <p style={{ fontSize: 18, color: '#3a3a38', lineHeight: 1.65, marginBottom: 28 }}>
          The ROSE group is part of the{' '}
          <a href="#">Computer Science Department</a> at{' '}
          <a href="#">Yale University</a>.
          We use <strong>formal methods and automated reasoning</strong> (SAT/SMT, symbolic execution, theorem proving, and cryptography) to analyze systems of every kind, from software and networks to machine-learning and AI models, so that they can be shown to be correct, understood clearly, and held within trustworthy, private, and accountable bounds.
        </p>

        {/* Lab Vision */}
        <div style={{ marginBottom: 28, padding: '20px 24px', background: '#f4f3ef' }}>
          <h2 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 24, fontWeight: 500, color: '#1a1a1a', margin: '0 0 10px' }}>Lab Vision</h2>
          <p style={{ fontSize: 17, color: '#3a3a38', lineHeight: 1.65, margin: '0 0 12px' }}>
            ROSE builds the frameworks, languages, and tools needed to analyze systems: to guarantee they are <strong>correct</strong>, to <strong>understand and reason</strong> about them clearly, and to <strong>appropriately constrain</strong> how they behave. These systems are often software, but also include networks and AI models, and the analysis often has to preserve privacy along the way.
          </p>
          <p style={{ fontSize: 17, color: '#3a3a38', lineHeight: 1.65, margin: 0 }}>
            Two commitments run through everything we do: formal reasoning as the lens we bring to every problem, and privacy as a value the field too often overlooks. The interdisciplinary group works across Yale with colleagues in law, environmental policy, biomedical data science, and beyond.
          </p>
        </div>
        <hr style={{ marginBottom: 28 }} />

        {/* Research Themes */}
        <div>
          <h2 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 28, fontWeight: 500, color: '#1a1a1a', margin: '0 0 20px' }}>Research Themes</h2>
          <ResearchArea title="Privacy-Preserving Formal Methods" url="#" thumb="" projects={allPubs.filter(p => (p.themes || []).includes('privacy') && p.pdf && p.pdf !== '#').sort((a, b) => b.year - a.year).slice(0, 4).map(p => ({ title: p.title, url: p.pdf && p.pdf !== '#' ? p.pdf : '#' }))}>
            Cryptographic and formal techniques, zero-knowledge proofs and secure multi-party computation, that let one party prove a computation was carried out correctly without revealing the inputs, the program, or any private data. Roughly half of this thread is multi-party computation rather than zero-knowledge alone. Recent work includes <em>ZKSMT</em> (USENIX Security 2024), <em>Coinductive Proofs of Regex Equivalence in Zero Knowledge</em> (OOPSLA 2025), <em>Privacy-Preserving SAT Solving</em> (invited talks at SAT 2025 and CP 2025), and custom protocols for verifying private AI models without exposing their weights. Lab members on this thread: Youwei Zhong, Jordan Schmerge.
          </ResearchArea>

          <ResearchArea title="ML/AI + Formal Methods" url="#" thumb="" projects={allPubs.filter(p => (p.themes || []).includes('mlai') && p.pdf && p.pdf !== '#').sort((a, b) => b.year - a.year).slice(0, 4).map(p => ({ title: p.title, url: p.pdf }))}>
            Using machine learning to make automated reasoning faster and more powerful, and using formal guarantees to make learning trustworthy. SAT/SMT solvers underpin verification, security, and scientific computing, so treating them as targets for learning opens new performance frontiers. Active projects include <em>Learning Randomized Reductions</em> (with Shafi Goldwasser), <em>Learning How to Cube SAT</em> (with Amazon Trusted Solvers), transformer-based SAT solving, and <em>Blaise</em>. Lab members: Sam Kouteili, Thanos Typaldos.
          </ResearchArea>

          <ResearchArea title="Neurosymbolic AI" url="#" thumb="" projects={allPubs.filter(p => (p.themes || []).includes('neuro') && p.pdf && p.pdf !== '#').sort((a, b) => b.year - a.year).slice(0, 4).map(p => ({ title: p.title, url: p.pdf && p.pdf !== '#' ? p.pdf : '#' }))}>
            Combining learning with symbolic reasoning to attack problems that neither approach handles well alone, across very different disciplines. Current work spans agentic discovery and verification of environmental data proxies for the Yale Environmental Performance Index, formal methods for biology (program synthesis and reachability analysis for cancer-cell models that biologists can mathematically trust), and reasoning systems that bring this lens to law. <em>NeuroStrata</em> for autonomous cyber-physical systems (FSE 2025, with Miroslav Pajic) sits here too. Lab members: Katie Brady, Sam Kouteili, Stephen Miner.
          </ResearchArea>

          <ResearchArea title="Formal Methods for Accountable Decision-Making" url="#" thumb="" projects={allPubs.filter(p => (p.themes || []).includes('law') && p.pdf && p.pdf !== '#').sort((a, b) => b.year - a.year).slice(0, 4).map(p => ({ title: p.title, url: p.pdf && p.pdf !== '#' ? p.pdf : '#' }))}>
            Using automated reasoning to make algorithmic decisions, whether by AI systems, by autonomous vehicles, or by software in regulated settings, legally inspectable and accountable. In a multi-year collaboration with Prof. Scott Shapiro (Yale Law School), we build SMT-based oracles and autoformalization tools that let courts and regulators interrogate software the way they interrogate witnesses. Recent papers: <em>soid</em> (CAV 2024), <em>"Put the Car on the Stand": SMT-based Oracles for Investigating Decisions</em> (CSLAW 2024), <em>Scheherazade</em>, and <em>CourtReasoner: Can LLM Agents Reason Like Judges?</em> (EMNLP 2025).
          </ResearchArea>
        </div>

        {/* Lab News */}
        <div style={{ marginBottom: 36 }}>
          <h2 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 28, fontWeight: 500, color: '#1a1a1a', margin: '0 0 6px' }}>Lab News</h2>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#767674', marginBottom: 20 }}>Last updated {fmtNewsDate(newsItems.reduce((a, b) => (a.date > b.date ? a : b)).date)}</div>
          {newsItems.map((it, i) => (
            <div key={i} className="news-entry" style={{ display: 'flex', gap: 20, paddingBottom: 18, marginBottom: 18, borderBottom: '1px solid #e8e8e4' }}>
              <div className="news-date" style={{ width: 120, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#767674', lineHeight: 1.5, paddingTop: 3 }}>{fmtNewsDate(it.date)}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'inline-block', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: newsTagColor[it.tag] || '#286DC0', border: '1px solid ' + (newsTagColor[it.tag] || '#286DC0'), borderRadius: 2, padding: '1px 6px', marginBottom: 8 }}>{it.tag}</span>
                <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 20, fontWeight: 500, color: '#1a1a1a', lineHeight: 1.3, marginBottom: 5 }}>{it.title}</div>
                <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 17, color: '#3a3a38', lineHeight: 1.6 }}>{it.body}</div>
              </div>
            </div>
          ))}
        </div>

        <hr style={{ marginBottom: 28 }} />

        {/* Collaborators */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 12 }}>
            <h6 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#767674', margin: 0 }}>Collaborators &amp; Partners</h6>
          </div>
          <p style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: '#3a3a38', lineHeight: 1.65, marginBottom: 14 }}>
            A defining feature of ROSE is how widely it reaches across Yale. The group partners with the Law School, environmental policy through the Yale Environmental Performance Index, Biomedical Informatics and Data Science (BIDS), and the School of Management, alongside longstanding external collaborators.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '10px 24px' }}>
            {[
              ['Scott J. Shapiro', 'Yale Law School'],
              ['Hyunghoon Cho', 'Yale BIDS'],
              ['Zhong Shao', 'Yale CS'],
              ['Mariana Raykova', 'Google'],
              ['Xiao Wang', 'Northwestern'],
              ['Eran Tromer', 'Boston University'],
              ['Duc-Hiep Chu', 'Cogent Security'],
              ['Jakub Szefer', 'Northwestern (CASLAB)'],
              ['Bettina Könighofer', 'TU Graz'],
              ['Shafi Goldwasser', 'UC Berkeley / MIT'],
              ['Byron Cook', 'AWS Automated Reasoning'],
              ['Dana Angluin', 'Yale CS'],
              ['Bernd Finkbeiner', 'CISPA & Saarland Universit'],
              ['Ranjit Jhala', 'UC San Diego'],
              ['Dan Esty', 'Yale EPI'],
              ['Zach Wendling', 'Yale EPI'],
              ['Kyle Jensen', 'Yale SOM'],
            ].map(([name, inst]) => (
              <div key={name} style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 17, lineHeight: 1.4, marginBottom: 4 }}>
                <div style={{ color: '#1a1a1a' }}>{name}</div>
                <div style={{ color: '#767674', fontSize: 14 }}>{inst}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ marginBottom: 28 }} />

        {/* Teaching */}
        <div style={{ marginBottom: 36 }}>
          <h6 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#767674', margin: '0 0 14px' }}>Teaching</h6>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              [['CPSC 4540 / 5540'], 'Software Analysis and Verification', 'Ruzica Piskac'],
              [['CPSC 4150 / 5150'], 'Law and Large Language Models', 'Ruzica Piskac & Scott Shapiro'],
              [['CPSC 4390 / 5390'], 'Software Engineering', 'Timos Antonopoulos'],
              [['CPSC 4391 / 5391', 'MGT 697'], 'Advanced Software Engineering', 'Timos Antonopoulos'],
            ].map(([nums, ctitle, who]) => (
              <div key={nums[0]} style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 600, color: '#286DC0', flexShrink: 0, width: 170, lineHeight: 1.5 }}>
                  {nums.map(n => <div key={n}>{n}</div>)}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 18, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.35 }}>{ctitle}</div>
                  <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 15, color: '#767674', marginTop: 2 }}>{who}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ marginBottom: 28 }} />

        {/* Department line, relocated from sidebar */}
        <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: '#767674', lineHeight: 1.6 }}>
          ROSE is a research group in the{' '}
          <a href="https://engineering.yale.edu/academic-study/departments/computer-science" style={{ color: '#286DC0', textDecoration: 'none' }}>Department of Computer Science</a>
          {' '}at{' '}
          <a href="https://www.yale.edu" style={{ color: '#286DC0', textDecoration: 'none' }}>Yale University</a>.
        </div>

      </main>
    </div>
  );
};

// const ResearchPage = ({ tweaks }) => {
//   return (
//     <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48 }}>
//       <main style={{ flex: 1, minWidth: 0 }}>
//         <div style={{ marginBottom: 8 }}>
//           <h1 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 38, fontWeight: 400, margin: 0, color: '#1a1a1a' }}>Publications</h1>
//         </div>
//         <p style={{ fontSize: 18, color: '#3a3a38', lineHeight: 1.65, marginBottom: 28 }}>
//           ROSE focuses on foundational research in formal methods, program synthesis, and automated verification with real-world impact.
//         </p>
//         <hr style={{ marginBottom: 28 }} />
//         {projectLinks.map(p => (
//           <div key={p.title} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #e8e8e4' }}>
//             <a href={p.url} style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 18, fontWeight: 600, color: '#286DC0' }}>{p.title}</a>
//             <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 17, color: '#3a3a38', lineHeight: 1.6, marginTop: 4 }}>{p.desc}</div>
//           </div>
//         ))}
//       </main>
//     </div>
//   );
// };

const pubLink = (label, url) => url && url !== '#'
  ? <a href={url} target="_blank" rel="noopener noreferrer" style={{color:'#286DC0',textDecoration:'none',marginRight:6}} onMouseEnter={e=>{e.currentTarget.style.textDecoration='underline'}} onMouseLeave={e=>{e.currentTarget.style.textDecoration='none'}}>[{label}]</a>
  : null;

const pubThemes = {
  1:'neuro', 2:'privacy', 3:'mlai', 4:'mlai', 5:'mlai', 6:'privacy', 7:'law', 8:'privacy', 9:'privacy', 10:'neuro',
  11:'mlai', 12:'privacy', 13:'law', 14:'law', 15:'privacy', 16:'privacy', 17:'privacy', 18:'neuro', 19:'mlai', 20:'mlai',
  21:'mlai', 22:'privacy', 23:'law', 24:'privacy', 25:'mlai', 26:'mlai',
};
const themeTagMeta = {
  privacy: { label: 'Privacy-Preserving', color: '#286DC0' },
  mlai:    { label: 'ML/AI + FM',    color: '#2a7a3b' },
  neuro:   { label: 'Neurosymbolic AI',  color: '#6b3fa0' },
  law:     { label: 'Accountability',    color: '#8a6000' },
  verification: { label: 'Verification', color: '#0f766e' },
  security:     { label: 'Security',     color: '#a03030' },
  networks:     { label: 'Network Verification', color: '#b45309' },
  synthesis: { label: 'Program Synthesis', color: '#7c5295' },
  education: { label: 'CS Education', color: '#557a8a' },
};

const PubEntry = ({ n, authors, title, venue, year, bib, doi, http, arxiv, pdf, themes }) => {
  const tags = (Array.isArray(themes) ? themes : [themes]).filter(Boolean).map(t => themeTagMeta[t]).filter(Boolean);
  const hasBib = bib && bib !== '#';
  return (
  <tr>
    <td style={{verticalAlign:'top',paddingRight:12,paddingBottom:14,color:'#767674',fontFamily:"'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",fontSize:16,whiteSpace:'nowrap',width:32}}>[{n}]</td>
    <td style={{verticalAlign:'top',paddingBottom:14,fontFamily:"'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif",fontSize:17,lineHeight:1.55,color:'#1a1a1a'}}>
      <span style={{fontWeight:600}}>{title}</span><br/>
      {authors}<br/>
      <span style={{color:'#3a3a38',fontStyle:'italic'}}>{venue}{year ? ' ' + year : ''}</span>
      {(pdf||hasBib||doi||http||arxiv) && <span style={{marginLeft:4}}>
        {pdf && pubLink('pdf', pdf)}
        {hasBib && pubLink('bib', bib)}
        {doi && pubLink('DOI', doi)}
        {/* {(http||arxiv) && pubLink('http', http||arxiv)} */}
      </span>}
      {tags.length > 0 && <div style={{marginTop:7,display:'flex',flexWrap:'wrap',gap:6}}>
        {tags.map((theme, i) => (
          <span key={i} style={{display:'inline-block',whiteSpace:'nowrap',fontFamily:"'JetBrains Mono', monospace",fontSize:10,fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',color:theme.color,border:'1px solid '+theme.color,borderRadius:2,padding:'1px 6px'}}>{theme.label}</span>
        ))}
      </div>}
    </td>
  </tr>
  );
};


const allPubs = [
  { authors: 'Timos Antonopoulos, Ning Luo, Ruzica Piskac', title: 'Towards Privacy-Preserving Verification', venue:'FM', year: 2026, pdf: '', bib:'https://dblp.org/rec/conf/fm/AntonopoulosLP26.html?view=bibtex', themes:['privacy'] },
  { authors:'Ferhat Erata, Orr Paradise, Thanos Typaldos, Timos Antonopoulos, ThanhVu Nguyen, Shafi Goldwasser, Ruzica Piskac', title:'Learning Randomized Reductions', venue:'ICML', year:2026, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/ICML-2026.pdf', bib:'#', themes:['mlai', 'neuro'] },
  { authors:'Haris Smajlović, Kyle Sheng, Timos Antonopoulos, Ruzica Piskac, Hyunghoon Cho', title:'Decor: Delegated Computation on Randomness for Secure Evaluation of Nonlinear Functions', venue:'IEEE S&P', year:2026, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/SP-2026.pdf', bib:'https://dblp.org/rec/conf/sp/SmajlovicSAPC26.html?view=bibtex', themes:['privacy'] },
  { authors:'Zhaoxiang Liu, Samuel Judson, Raj Dutta, Mark Santolucito, Xiaolong Guo, Ning Luo', title:'BlindMarket: Enabling Verifiable, Confidential, and Traceable IP Core Distribution in Zero-Trust Settings', venue:'HOST', year:2026, pdf:'https://sjudson.com/docs/blindmarket_host2026.pdf', doi:'https://ieeexplore.ieee.org/document/11604624', arxiv:'https://arxiv.org/abs/2603.22685', bib:'#', themes:['privacy'] },
  { authors:'Raoul van Doren, Timos Antonopoulos, Ruzica Piskac', title:'Efficient and Verifiable Proof Logging for MaxSAT Solving', venue:'ASE', year:2025, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/ASE-2025.pdf', bib:'https://dblp.org/rec/conf/kbse/DorenAP25.html?view=bibtex', themes:['verification'] },
  { authors:'John C. Kolesar, Shan Ali, Timos Antonopoulos, Ruzica Piskac', title:'Coinductive Proofs of Regular Expression Equivalence in Zero Knowledge', venue:'OOPSLA', year:2025, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/OOPSLA-2025.pdf', bib:'https://dblp.org/rec/journals/pacmpl/KolesarAAP25.html?view=bibtex', themes:['privacy', 'verification'] },
  { authors:'Samuel Judson, Joan Feigenbaum', title:'On Heuristic Models, Assumptions, and Parameters', venue:'JRC', year:2025, pdf:'https://sjudson.com/docs/hmaps_jrc2025.pdf', doi:'https://dl.acm.org/doi/10.1145/3735562', arxiv:'https://arxiv.org/abs/2201.07413', bib:'#', themes:['law'] },
  { authors:'Ferhat Erata, TingHung Chiu, Anthony Etim, Srilalith Nampally, Tejas Raju, Rajashree Ramu, Ruzica Piskac, Timos Antonopoulos, Wenjie Xiong, Jakub Szefer', title:'Systematic Use of Random Self-Reducibility in Cryptographic Code against Physical Attacks', venue:'ICCAD', year:2024, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/ICCAD-2024.pdf', bib:'https://dblp.org/rec/conf/iccad/ErataCENRRPA0S24.html?view=bibtex', themes:['security'] },
  { authors:'Samuel Judson, Matthew Elacqua, Filip Cano, Timos Antonopoulos, Bettina Könighofer, Scott J. Shapiro, Ruzica Piskac', title:'soid: A Tool for Legal Accountability for Automated Decision Making', venue:'CAV', year:2024, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CAV-2024.pdf', bib:'https://dblp.org/rec/conf/cav/JudsonECAKSP24.html?view=bibtex', themes:['law'] },
  { authors:'Daniel Luick, John C. Kolesar, Timos Antonopoulos, William R. Harris, James Parker, Ruzica Piskac, Eran Tromer, Xiao Wang, Ning Luo', title:'ZKSMT: A VM for Proving SMT Theorems in Zero Knowledge', venue:'USENIX Security', year:2024, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/USENIX-Security-2024.pdf', bib:'https://dblp.org/rec/conf/uss/LuickKAHPPT0L24.html?view=bibtex', themes:['privacy', 'verification'] },
  { authors:'Samuel Judson, Matthew Elacqua, Filip Cano, Timos Antonopoulos, Bettina Könighofer, Scott J. Shapiro, Ruzica Piskac', title:'\'Put the Car on the Stand\': SMT-based Oracles for Investigating Decisions', venue:'CSLAW', year:2024, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CSLAW-2024.pdf', bib:'https://dblp.org/rec/conf/cslaw/JudsonECAKSP24.html?view=bibtex', themes:['law'] },
  { authors:'Filip Cano Córdoba, Samuel Judson, Timos Antonopoulos, Katrine Bjørner, Nicholas Shoemaker, Scott J. Shapiro, Ruzica Piskac, Bettina Könighofer', title:'Analyzing Intentional Behavior in Autonomous Agents Under Uncertainty', venue:'IJCAI', year:2023, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/IJCAI-2023.pdf', bib:'https://dblp.org/rec/conf/ijcai/CordobaJABSSPK23.html?view=bibtex', themes:['law'] },
  { authors:'Yuyang Sang, Ning Luo, Samuel Judson, Ben Chaimberg, Timos Antonopoulos, Xiao Wang, Ruzica Piskac, Zhong Shao', title:'Ou: Automating the Parallelization of Zero-Knowledge Protocols', venue:'CCS', year:2023, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CCS-2023.pdf', bib:'https://dblp.org/rec/conf/ccs/SangLJCAWPS23.html?view=bibtex', themes:['privacy'] },
  { authors:'Timos Antonopoulos, Eric Koskinen, Ton Chanh Le, Ramana Nagasamudram, David A. Naumann, Minh Ngo', title:'An Algebra of Alignment for Relational Verification', venue:'POPL', year:2023, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/POPL-2023.pdf', bib:'https://dblp.org/rec/journals/pacmpl/AntonopoulosKLNNN23.html?view=bibtex', themes:['verification'] },
  { authors:'Ning Luo, Timos Antonopoulos, William R. Harris, Ruzica Piskac, Eran Tromer, Xiao Wang', title:'Proving UNSAT in Zero Knowledge', venue:'CCS', year:2022, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CCS-2022.pdf', bib:'https://dblp.org/rec/conf/ccs/LuoAHPTW22.html?view=bibtex', themes:['privacy', 'verification'] },
  { authors:'Dana Angluin, Timos Antonopoulos, Dana Fisman, Nevin George', title:'Representing Regular Languages of Infinite Words Using Mod 2 Multiplicity Automata', venue:'FoSSaCS', year:2022, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/FoSSaCS-2022.pdf', bib:'https://dblp.org/rec/conf/fossacs/AngluinAFG22.html?view=bibtex', themes:['mlai'] },
  { authors:'Ning Luo, Samuel Judson, Timos Antonopoulos, Ruzica Piskac, Xiao Wang', title:'ppSAT: Towards Two-Party Private SAT Solving', venue:'USENIX Security', year:2022, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/USENIX-Security-2022.pdf', bib:'https://dblp.org/rec/conf/uss/LuoJAPW22.html?view=bibtex', themes:['privacy'] },
  { authors:'Yichao Cheng, Ning Luo, Jingxuan Zhang, Timos Antonopoulos, Ruzica Piskac, Qiao Xiang', title:'Looking for the Maximum Independent Set: A New Perspective on the Stable Path Problem', venue:'INFOCOM', year:2021, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/INFOCOM-2021.pdf', bib:'https://dblp.org/rec/conf/infocom/ChengLZAPX21.html?view=bibtex', themes:['networks'] },
  { authors:'Tachio Terauchi, Timos Antonopoulos', title:'Bucketing and Information Flow Analysis for Provable Timing Attack Mitigation', venue:'JCS 28(6)', year:2020, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/JCS-2020.pdf', bib:'https://dblp.org/rec/journals/jcs/TerauchiA20.html?view=bibtex', themes:['security'] },
  { authors:'Ton Chanh Le, Timos Antonopoulos, Parisa Fathololumi, Eric Koskinen, ThanhVu Nguyen', title:'DynamiTe: Dynamic Termination and Non-termination Proofs', venue:'OOPSLA', year:2020, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/OOPSLA-2020.pdf', bib:'https://dblp.org/rec/journals/pacmpl/LeAFKN20.html?view=bibtex', themes:['verification', 'mlai'] },
  { authors:'ThanhVu Nguyen, Didier Ishimwe, Alexey Malyshev, Timos Antonopoulos, Quoc-Sang Phan', title:'Using Dynamically Inferred Invariants to Analyze Program Runtime Complexity', venue:'SEAD', year:2020, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/SEAD-2020.pdf', bib:'#', themes:['mlai', 'verification'] },
  { authors:'Samuel Judson, Ning Luo, Timos Antonopoulos, Ruzica Piskac', title:'Privacy Preserving CTL Model Checking through Oblivious Graph Algorithms', venue:'WPES', year:2020, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/WPES-2020.pdf', bib:'https://dblp.org/rec/conf/wpes/JudsonLAP20.html?view=bibtex', themes: ['privacy', 'verification'] },
  { authors:'Dana Angluin, Timos Antonopoulos, Dana Fisman', title:'Strongly Unambiguous Büchi Automata Are Polynomially Predictable with Membership Queries', venue:'CSL', year:2020, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CSL-2020.pdf', bib:'https://dblp.org/rec/conf/csl/AngluinAF20.html?view=bibtex', themes:['mlai'] },
  { authors:'Timos Antonopoulos, Eric Koskinen, Ton Chanh Le', title:'Specification and Inference of Trace Refinement Relations', venue:'OOPSLA', year:2019, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/OOPSLA-2019.pdf', bib:'https://dblp.org/rec/journals/pacmpl/AntonopoulosKL19.html?view=bibtex', themes:['verification', 'mlai'] },
  { authors:'Dana Angluin, Timos Antonopoulos, Dana Fisman', title:'Query Learning of Derived ω-Tree Languages in Polynomial Time', venue:'LMCS 15(3)', year:2019, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/LMCS-2019.pdf', bib:'https://dblp.org/rec/journals/lmcs/AngluinAF19.html?view=bibtex', themes:['mlai'] },
  { authors:'Timos Antonopoulos, Tachio Terauchi', title:'Games for Security under Adaptive Adversaries', venue:'CSF', year:2019, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CSF-2019.pdf', bib:'https://dblp.org/rec/conf/csfw/AntonopoulosT19.html?view=bibtex', themes:['security'] },
  { authors:'Tachio Terauchi, Timos Antonopoulos', title:'A Formal Analysis of Timing Channel Security via Bucketing', venue:'POST', year:2019, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/POST-2019.pdf', bib:'https://dblp.org/rec/conf/post/TerauchiA19.html?view=bibtex', themes:['security'] },
  { authors:'ThanhVu Nguyen, Timos Antonopoulos, Andrew Ruef, Michael Hicks', title:'Counterexample-guided Approach to Finding Numerical Invariants', venue:'FSE', year:2017, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/FSE-2017.pdf', bib:'https://dblp.org/rec/conf/sigsoft/NguyenARH17.html?view=bibtex', themes:['mlai'] },
  { authors:'Dana Angluin, Timos Antonopoulos, Dana Fisman', title:'Query Learning of Derived ω-Tree Languages in Polynomial Time', venue:'CSL', year:2017, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/CSL-2017.pdf', bib:'https://dblp.org/rec/conf/csl/AngluinAF17.html?view=bibtex', themes:['mlai'] },
  { authors:'Timos Antonopoulos, Paul Gazzillo, Michael Hicks, Eric Koskinen, Tachio Terauchi, Shiyi Wei', title:'Decomposition Instead of Self-Composition for Proving the Absence of Timing Channels', venue:'PLDI', year:2017, pdf:'https://www.cs.yale.edu/homes/antonopoulos-timos/PLDI-2017.pdf', bib:'https://dblp.org/rec/conf/pldi/AntonopoulosGHK17.html?view=bibtex', themes:['security'] },
  { authors:'Ferhat Erata, Chuanqi Xu, Ruzica Piskac, Jakub Szefer', title:'Quantum Circuit Reconstruction from Power Side-Channel Attacks on Quantum Computer Controllers', venue:'TCHES', year:2024, pdf:'#', bib:'https://dblp.org/rec/journals/tches/ErataXPS24.html?view=bibtex', themes:['security'] },
  { authors:'Ning Luo, Chenkai Weng, Jaspal Singh, Gefei Tan, Mariana Raykova, Ruzica Piskac', title:'Privacy-Preserving Regular Expression Matching Using TNFA', venue:'ESORICS', year:2024, pdf:'#', bib:'https://dblp.org/rec/conf/esorics/LuoWSTRP24.html?view=bibtex', themes:['privacy'] },
  { authors:'Xi Zheng, Aloysius K. Mok, Ruzica Piskac, Yong Jae Lee, Bhaskar Krishnamachari, Dakai Zhu, Oleg Sokolsky, Insup Lee', title:'Testing Learning-Enabled Cyber-Physical Systems with Large-Language Models: A Formal Approach', venue:'FSE Companion', year:2024, pdf:'#', bib:'https://dblp.org/rec/conf/sigsoft/ZhengMPLKZSL24.html?view=bibtex', themes:['mlai', 'verification'] },
  { authors:'Haoran Ding, Zhaoguo Wang, Yicun Yang, Dexin Zhang, Zhenglin Xu, Haibo Chen, Ruzica Piskac, Jinyang Li', title:'Proving Query Equivalence Using Linear Integer Arithmetic', venue:'SIGMOD', year:2023, pdf:'#', bib:'https://dblp.org/rec/journals/pacmmod/DingWYZXCPL23.html?view=bibtex', themes:['verification'] },
  { authors:'Ferhat Erata, Eren Yildiz, Arda Goknil, Kasim Sinan Yildirim, Jakub Szefer, Ruzica Piskac, Gökçin Sezgin', title:'ETAP: Energy-aware Timing Analysis of Intermittent Programs', venue:'TECS 22(2)', year:2023, pdf:'#', bib:'https://dblp.org/rec/journals/tecs/ErataYGYSPS23.html?view=bibtex', themes:['security'] },
  { authors:'Ferhat Erata, Ruzica Piskac, Víctor Mateu, Jakub Szefer', title:'Towards Automated Detection of Single-Trace Side-Channel Vulnerabilities in Constant-Time Cryptographic Code', venue:'EuroS&P', year:2023, pdf:'#', bib:'https://dblp.org/rec/conf/eurosp/ErataPMS23.html?view=bibtex', themes:['security'] },
  { authors:'Katrine Bjørner, Samuel Judson, Filip Cano, Drew Goldman, Nicholas Shoemaker, Ruzica Piskac, Bettina Könighofer', title:'Formal XAI via Syntax-Guided Synthesis', venue:'AISoLA', year:2023, pdf:'#', bib:'https://dblp.org/rec/conf/vecos/BjornerJCGSPK23.html?view=bibtex', themes:['law', 'synthesis'] },
  { authors:'John C. Kolesar, Ruzica Piskac, William T. Hallahan', title:'Checking equivalence in a non-strict language', venue:'OOPSLA', year:2022, pdf:'#', bib:'https://dblp.org/rec/journals/pacmpl/KolesarPH22.html?view=bibtex', themes:['verification'] },
  { authors:'Jialu Zhang, Todd Mytkowicz, Mike Kaufman, Ruzica Piskac, Shuvendu K. Lahiri', title:'Using pre-trained language models to resolve textual and semantic merge conflicts (experience paper)', venue:'ISSTA', year:2022, pdf:'#', bib:'https://dblp.org/rec/conf/issta/ZhangMKPL22.html?view=bibtex', themes:['mlai'] },
  { authors:'Jialu Zhang, De Li, John C. Kolesar, Hanyuan Shi, Ruzica Piskac', title:'Automated Feedback Generation for Competition-Level Code', venue:'ASE', year:2022, pdf:'#', bib:'https://dblp.org/rec/conf/kbse/0002LKSP22.html?view=bibtex', themes:['mlai'] },
  { authors:'Wonhyuk Choi, Bernd Finkbeiner, Ruzica Piskac, Mark Santolucito', title:'Can reactive synthesis and syntax-guided synthesis be friends?', venue:'PLDI', year:2022, pdf:'#', bib:'https://dblp.org/rec/conf/pldi/ChoiFPS22.html?view=bibtex', themes:['synthesis'] },
  { authors:'Mark Santolucito, Jialu Zhang, Ennan Zhai, Jürgen Cito, Ruzica Piskac', title:'Learning CI Configuration Correctness for Early Build Feedback', venue:'SANER', year:2022, pdf:'#', bib:'https://dblp.org/rec/conf/wcre/SantolucitoZZCP22.html?view=bibtex', themes:['mlai'] },
  { authors:'Jialu Zhang, Ruzica Piskac, Ennan Zhai, Tianyin Xu', title:'Static detection of silent misconfigurations with deep interaction analysis', venue:'OOPSLA', year:2021, pdf:'#', bib:'https://dblp.org/rec/journals/pacmpl/ZhangPZX21.html?view=bibtex', themes:['networks', 'verification'] },
  { authors:'Eric Hayden Campbell, William T. Hallahan, Priya Srikumar, Carmelo Cascone, Jed Liu, Vignesh Ramamurthy, Hossein Hojjat, Ruzica Piskac, Robert Soulé, Nate Foster', title:'Avenir: Managing Data Plane Diversity with Control Plane Synthesis', venue:'NSDI', year:2021, pdf:'#', bib:'https://dblp.org/rec/conf/nsdi/CampbellHSCLRHP21.html?view=bibtex', themes:['networks', 'synthesis'] },
  { authors:'Julien Lepiller, Ruzica Piskac, Martin Schäf, Mark Santolucito', title:'Analyzing Infrastructure as Code to Prevent Intra-update Sniping Vulnerabilities', venue:'TACAS', year:2021, pdf:'#', bib:'https://dblp.org/rec/conf/tacas/LepillerPSS21.html?view=bibtex', themes:['security', 'verification'] },
  { authors:'William T. Hallahan, Ennan Zhai, Ruzica Piskac', title:'Automated repair by example for firewalls', venue:'FMSD 56(1)', year:2020, pdf:'#', bib:'https://dblp.org/rec/journals/fmsd/HallahanZP20.html?view=bibtex', themes:['networks', 'synthesis'] },
  { authors:'Kairo Morton, William T. Hallahan, Elven Shum, Ruzica Piskac, Mark Santolucito', title:'Grammar Filtering for Syntax-Guided Synthesis', venue:'AAAI', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/aaai/MortonHSPS20.html?view=bibtex', themes:['mlai', 'synthesis'] },
  { authors:'Ruzica Piskac', title:'Efficient Automated Reasoning About Sets and Multisets with Cardinality Constraints', venue:'IJCAR', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/cade/Piskac20.html?view=bibtex', themes:['verification'] },
  { authors:'Ennan Zhai, Ang Chen, Ruzica Piskac, Mahesh Balakrishnan, Bingchuan Tian, Bo Song, Haoliang Zhang', title:'Check before You Change: Preventing Correlated Failures in Service Updates', venue:'NSDI', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/nsdi/ZhaiCPBTSZ20.html?view=bibtex', themes:['networks'] },
  { authors:'Nicholas Shoemaker, Ruzica Piskac, Mark Santolucito', title:'Towards checkpoint placement for dynamic memory allocation in intermittent computing', venue:'TAPAS', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/oopsla/ShoemakerPS20.html?view=bibtex', themes:['verification'] },
  { authors:'Mark Santolucito, Ruzica Piskac', title:'Formal Methods and Computing Identity-based Mentorship for Early Stage Researchers', venue:'SIGCSE', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/sigcse/SantolucitoP20.html?view=bibtex', themes:['education'] },
  { authors:'Maxwell Levatich, Nikolaj S. Bjørner, Ruzica Piskac, Sharon Shoham', title:'Solving LIA* Using Approximations', venue:'VMCAI', year:2020, pdf:'#', bib:'https://dblp.org/rec/conf/vmcai/LevatichBPS20.html?view=bibtex', themes:['verification'] },
  { authors:'Bernd Finkbeiner, Felix Klein, Ruzica Piskac, Mark Santolucito', title:'Temporal Stream Logic: Synthesis Beyond the Bools', venue:'CAV', year:2019, pdf:'#', bib:'https://dblp.org/rec/conf/cav/Finkbeiner0PS19.html?view=bibtex', themes:['synthesis'] },
  { authors:'Mark Santolucito, William T. Hallahan, Ruzica Piskac', title:'Live Programming By Example', venue:'CHI Extended Abstracts', year:2019, pdf:'#', bib:'https://dblp.org/rec/conf/chi/SantolucitoHP19.html?view=bibtex', themes:['synthesis'] },
  { authors:'William T. Hallahan, Anton Xue, Ruzica Piskac', title:'G2Q: Haskell constraint solving', venue:'Haskell@ICFP', year:2019, pdf:'#', bib:'https://dblp.org/rec/conf/haskell/HallahanXP19.html?view=bibtex', themes:['verification'] },
  { authors:'Bernd Finkbeiner, Felix Klein, Ruzica Piskac, Mark Santolucito', title:'Synthesizing functional reactive programs', venue:'Haskell@ICFP', year:2019, pdf:'#', bib:'https://dblp.org/rec/conf/haskell/Finkbeiner0PS19.html?view=bibtex', themes:['synthesis'] },
  { authors:'William T. Hallahan, Anton Xue, Maxwell Troy Bland, Ranjit Jhala, Ruzica Piskac', title:'Lazy counterfactual symbolic execution', venue:'PLDI', year:2019, pdf:'#', bib:'https://dblp.org/rec/conf/pldi/HallahanXBJP19.html?view=bibtex', themes:['verification'] },
  { authors:'Mark Santolucito, Kate Rogers, Aedan Lombardo, Ruzica Piskac', title:'Programming-by-example for audio: synthesizing digital signal processing programs', venue:'FARM@ICFP', year:2018, pdf:'#', bib:'https://dblp.org/rec/conf/icfp/SantolucitoRLP18.html?view=bibtex', themes:['synthesis'] },
  { authors:'Mark Santolucito, Drew Goldman, Allyson Weseley, Ruzica Piskac', title:'Programming by Example: Efficient, but Not "Helpful"', venue:'PLATEAU@SPLASH', year:2018, pdf:'#', bib:'https://dblp.org/rec/conf/oopsla/SantolucitoGWP18.html?view=bibtex', themes:['synthesis'] },
  { authors:'Ruzica Piskac', title:'New Applications of Software Synthesis: Verification of Configuration Files and Firewall Repair', venue:'SAS', year:2018, pdf:'#', bib:'https://dblp.org/rec/conf/sas/Piskac18.html?view=bibtex', themes:['synthesis'] },
  { authors:'Mark Santolucito, Ennan Zhai, Rahul Dhodapkar, Aaron Shim, Ruzica Piskac', title:'Synthesizing configuration file specifications with association rule learning', venue:'OOPSLA', year:2017, pdf:'#', bib:'https://dblp.org/rec/journals/pacmpl/SantolucitoZDSP17.html?view=bibtex', themes:['synthesis', 'mlai'] },
  { authors:'Ennan Zhai, Ruzica Piskac, Ronghui Gu, Xun Lao, Xi Wang', title:'An auditing language for preventing correlated failures in the cloud', venue:'OOPSLA', year:2017, pdf:'#', bib:'https://dblp.org/rec/journals/pacmpl/ZhaiPGLW17.html?view=bibtex', themes:['networks'] },
  { authors:'Bernd Finkbeiner, Felix Klein, Ruzica Piskac, Mark Santolucito', title:'Vehicle Platooning Simulations with Functional Reactive Programming', venue:'SCAV@CPSWeek', year:2017, pdf:'#', bib:'https://dblp.org/rec/conf/cpsweek/Finkbeiner0PS17.html?view=bibtex', themes:['synthesis'] },
  { authors:'William T. Hallahan, Ennan Zhai, Ruzica Piskac', title:'Automated repair by example for firewalls', venue:'FMCAD', year:2017, pdf:'#', bib:'https://dblp.org/rec/conf/fmcad/HallahanZP17.html?view=bibtex', themes:['networks', 'synthesis'] },
  { authors:'Mark Santolucito, Ennan Zhai, Ruzica Piskac', title:'Probabilistic Automated Language Learning for Configuration Files', venue:'CAV', year:2016, pdf:'#', bib:'https://dblp.org/rec/conf/cav/SantolucitoZP16.html?view=bibtex', themes:['mlai', 'synthesis'] },
  { authors:'Alex Reinking, Ruzica Piskac', title:'A Type-Directed Approach to Program Repair', venue:'CAV', year:2015, pdf:'#', bib:'https://dblp.org/rec/conf/cav/ReinkingP15.html?view=bibtex', themes:['synthesis'] },
  { authors:'Sumit Gulwani, Mikaël Mayer, Filip Niksic, Ruzica Piskac', title:'StriSynth: Synthesis for Live Programming', venue:'ICSE', year:2015, pdf:'#', bib:'https://dblp.org/rec/conf/icse/GulwaniMNP15.html?view=bibtex', themes:['synthesis'] },
  { authors:'Tihomir Gvero, Viktor Kuncak, Ivan Kuraj, Ruzica Piskac', title:'InSynth: A System for Code Completion using Types and Weights', venue:'Software Engineering & Management', year:2015, pdf:'#', bib:'https://dblp.org/rec/conf/se/GveroKKP15.html?view=bibtex', themes:['synthesis'] },
  { authors:'Ruzica Piskac', title:'From Decision Procedures to Synthesis Procedures', venue:'SYNASC', year:2015, pdf:'#', bib:'https://dblp.org/rec/conf/synasc/Piskac15.html?view=bibtex', themes:['synthesis'] },
  { authors:'Ruzica Piskac, Thomas Wies, Damien Zufferey', title:'Automating Separation Logic with Trees and Data', venue:'CAV', year:2014, pdf:'#', bib:'https://dblp.org/rec/conf/cav/PiskacWZ14.html?view=bibtex', themes:['verification'] },
  { authors:'Ruzica Piskac, Thomas Wies, Damien Zufferey', title:'GRASShopper - Complete Heap Verification with Mixed Specifications', venue:'TACAS', year:2014, pdf:'#', bib:'https://dblp.org/rec/conf/tacas/PiskacWZ14.html?view=bibtex', themes:['verification'] },
  { authors:'Stephen Miner, Yoshiki Takashima, Simeng Han, Sam Kouteili, Ferhat Erata, Ruzica Piskac, Scott J. Shapiro', title:'Scheherazade: Evaluating Chain-of-Thought Math Reasoning in LLMs with Chain-of-Problems', venue:'NeurIPS ER Workshop', year:2025, pdf:'https://arxiv.org/pdf/2410.00151', bib:'#', themes:['mlai'] },
];

const PublicationsPage = ({ tweaks }) => {
  const sortedPubs = [...allPubs].sort((a, b) => b.year - a.year);
  return (
    <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48 }}>
      <main style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 38, fontWeight: 400, marginBottom: 8 }}>Publications</h1>
        <p style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: '#767674', marginBottom: 20 }}>
          Entries only from 2013 onwards.
        </p>
        <hr style={{ marginBottom: 20 }} />
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            {sortedPubs.map((p, i) => <PubEntry key={i} n={i + 1} {...p} />)}
          </tbody>
        </table>
        <hr style={{ marginTop: 8, marginBottom: 16 }} />
        <p style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 14, color: '#767674', fontStyle: 'italic' }}>
          This list was generated from rose.yale.edu/publications-0 and updated with publications through April 2026.
        </p>
      </main>
    </div>
  );
};

const TeamPage = ({ tweaks }) => {
  const members = [
    { name: 'Ruzica Piskac', role: 'Principal Investigator · Zhan Tianyou Professor of Computer Science', url: 'https://www.cs.yale.edu/homes/piskac/', research: 'Programming languages, software verification, automated reasoning, code synthesis; recently extending to AI, legal reasoning, and zero-knowledge proofs', url: 'https://www.cs.yale.edu/homes/piskac/', group: 'faculty' },
    { name: 'Timos Antonopoulos', role: 'Research Scientist and Lecturer', research: 'Formal verification, automated reasoning, zero-knowledge proofs, legal accountability, MaxSAT', url: 'https://www.cs.yale.edu/homes/antonopoulos-timos/', group: 'faculty' },
    { name: 'Topher Allen', role: 'Undergraduate Student', research: 'Formal methods for verifiable AI policy, rigorous proof techniques as evidentiary foundation for AI governance.', url: '', group: 'student' },
    { name: 'Katie Brady', role: 'PhD Student', research: 'Automated reasoning, agentic AI systems, data proxy discovery and validation (Environmental Performance Index)', url: '', group: 'student' },
    { name: 'Sam Kouteili', role: 'PhD Student (on leave)', research: 'Neurosymbolic learning, transformers for SAT solving, specification mining, EPI data-proxy pipeline', url: '', group: 'student' },
    { name: 'Daniel Luick', role: 'PhD Student', research: 'Zero-knowledge proofs, SMT verification', url: '#', group: 'student' },
    { name: 'Stephen Miner', role: 'PhD Student', research: 'Formal methods and AI applied to biology, program synthesis and reachability analysis for cancer-cell modeling', url: '', group: 'student' },
    { name: 'Jordan Schmerge', role: 'PhD Student', research: 'Privacy-preserving automated reasoning; MaxSAT for compliance checking', url: '', group: 'student' },
    { name: 'Thanos Typaldos', role: 'PhD Student', research: 'Neurosymbolic programming and program verification, Rust idiomaticity, learning reductions, cubing, Blaise', url: 'https://github.com/actyp', group: 'student' },
    { name: 'Youwei Zhong', role: 'PhD Student', research: 'Custom zero-knowledge protocols for verifying safety and privacy properties of proprietary AI systems', url: 'https://ywzh.org', group: 'student' },
  ];
  const faculty = members.filter(m => m.group === 'faculty');
  const students = members.filter(m => m.group === 'student');
  const renderMember = m => (
    <div key={m.name} style={{ display: 'flex', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #e8e8e4' }}>
      <div style={{ width: 52, height: 52, background: '#dce9f5', border: '1px solid #e8e8e4', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 19, fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: '#286DC0', fontWeight: 500 }}>
        {m.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
      </div>
      <div>
        <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 18, fontWeight: 600, color: '#286DC0', marginBottom: 2 }}>
          {m.url && m.url !== '#'
            ? <a href={m.url} target="_blank" rel="noopener noreferrer" style={{ color: '#286DC0' }}>{m.name}</a>
            : m.name}
        </div>
        <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: '#3a3a38', marginBottom: m.research ? 2 : 0 }}>{m.role}</div>
        {m.research ? <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 14, color: '#767674' }}>{m.research}</div> : null}
      </div>
    </div>
  );

  const alumni = [
    { name: 'Ferhat Erata', dest: 'Applied Scientist, AWS Agentic AI, Automated Reasoning Group \& Kiro Science', year: 'PhD 2025' , url: 'https://ferhat.ai'},
    { name: 'John Kolesar', dest: 'Applied Scientist, AWS Automated Reasoning Group, Bespoke Proofs', year: 'PhD 2026', url: 'https://johnckolesar.github.io'},
    { name: 'Samuel Judson', dest: 'Machine Learning Security Researcher at Trail of Bits', year: 'PhD 2024' , url: 'https://sjudson.com'},
    { name: 'Jialu Zhang', dest: 'Assistant Professor at University of Waterloo', year: 'PhD 2023', url: 'https://jialuzhang.netlify.app'},
    { name: 'Julien Lepiller', dest: 'Security Evaluation Engineer at Thales', year: 'PostDoc 2023' , url: 'https://lepiller.eu/en//'},
    { name: 'Ning Luo', dest: 'Assistant Professor at the University of Illinois Urbana-Champaign', year: 'PhD 2022', url: 'https://ning0luo.github.io'},
    { name: 'Bill Hallahan', dest: 'Assistant Professor at Binghamton University', year: 'PhD 2022', url: 'https://billhallahan.github.io'},
    { name: 'Ennan Zhai', dest: 'Director of AI System Research at Alibaba Group', year: 'PostDoc 2020' , url: 'https://ennanzhai.github.io'},
    { name: 'Mark Santolucito', dest: 'Assistant Professor at Barnard College of Columbia University', year: 'PhD 2020' , url: 'https://www.marksantolucito.com'},
    // { name: 'Alex Reinking', dest: 'UC Berkeley' },
    // { name: 'Anton Xue', dest: 'University of Pennsylvania' },
    // { name: 'Max Levatich', dest: 'Columbia University' },
    // { name: 'Ben Chaimberg', dest: 'PhD Student' },
  ];
  return (
    <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48 }}>
      <main style={{ flex: 1 }}>
        <h1 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 38, fontWeight: 400, marginBottom: 24 }}>Team</h1>
        <hr style={{ marginBottom: 24 }} />

        <h2 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 26, fontWeight: 500, color: '#1a1a1a', marginBottom: 16 }}>Faculty</h2>
        {faculty.map(renderMember)}

        <div style={{ height: 24 }} />

        <h2 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 26, fontWeight: 500, color: '#1a1a1a', marginBottom: 16, marginTop: 8 }}>Current Lab Members</h2>
        {students.map(renderMember)}

        <hr style={{ margin: '8px 0 24px' }} />
        <h6 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#767674', marginBottom: 16 }}>Alumni</h6>
        {alumni.map(a => (
          <div key={a.name} style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 17, marginBottom: 8, color: '#1a1a1a' }}>
            {a.url
              ? <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ color: '#286DC0', textDecoration: 'none' }}>{a.name}</a>
              : a.name}
            {' '}<span style={{ color: '#767674', fontSize: 16 }}>({a.year})</span><span style={{ color: '#767674', fontSize: 16 }}>→ {a.dest}</span>
          </div>
        ))}
      </main>
    </div>
  );
};

const FundingPage = ({ tweaks }) => {
  const grants = [
    //   funder: 'National Science Foundation',
    //   title: 'Collaborative Research: FMitF: Track I: Automating and Synthesizing Parallel Zero-Knowledge Protocols',
    //   pis: 'Ruzica Piskac (PI) and Timos Antonopoulos (coPI)'
    //   year: 'Ongoing',
    // },
  ];
  return (
    <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48 }}>
      <main style={{ flex: 1 }}>
        <h1 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 38, fontWeight: 400, marginBottom: 8 }}>Funding</h1>
        <p style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 18, color: '#767674', marginBottom: 24, fontStyle: 'italic' }}>
          Placeholder, please provide current grant information to complete this page.
        </p>
        <hr style={{ marginBottom: 24 }} />
        {grants.map(g => (
          <div key={g.title} style={{ marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #e8e8e4' }}>
            <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#286DC0', marginBottom: 4 }}>{g.funder} · {g.year}</div>
            <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 18, fontWeight: 600, color: '#1a1a1a', marginBottom: 3 }}>{g.title}</div>
            <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 16, color: '#767674' }}>PI: {g.pis}</div>
          </div>
        ))}
      </main>
    </div>
  );
};

const newsTagColor = { Paper: '#286DC0', Award: '#8a6000', Talk: '#2a7a3b', Service: '#6b3fa0', Member: '#286DC0', Alumni: '#9b1c1c' };
const fmtNewsDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const newsItems = [
  // ╔══ HOW TO POST AN UPDATE ══╗
  // Add a new entry at the TOP of this list. The "Last updated" date shown under
  // the page title refreshes automatically from the most recent item's date,
  // so there is nothing else to change. Keep dates in YYYY-MM-DD format.
  // Tags: Paper | Award | Talk | Service | Member | Alumni
  { date: '2026-05-28', tag: 'Alumni',  title: 'John Kolesar joins AWS', body: 'John Kolesar (PhD 2025) has joined Amazon Web Services as an Applied Scientist.' },
  { date: '2025-07-01', tag: 'Paper',   title: 'Proofs of Regular Expression Equivalence in ZK appears at OOPSLA 2025', body: 'Coinductive Proofs of Regular Expression Equivalence in Zero Knowledge appears at OOPSLA 2025.' },
  { date: '2025-06-20', tag: 'Alumni',  title: 'Ferhat Erata completes his PhD', body: 'Ferhat Erata defended his dissertation and joined the AWS AI Automated Reasoning group as an Applied Scientist.' },
];

const NewsPage = ({ tweaks }) => {
  const fmt = iso => new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const lastUpdated = newsItems.reduce((a, b) => (a.date > b.date ? a : b)).date;
  const tagColor = { Paper: '#286DC0', Award: '#8a6000', Talk: '#2a7a3b', Service: '#6b3fa0', Member: '#286DC0', Alumni: '#9b1c1c' };
  return (
    <div className="page-layout" style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 24px', display: 'block', gap: 48 }}>
      <main style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 38, fontWeight: 400, margin: 0, color: '#1a1a1a' }}>Lab News</h1>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#767674', marginTop: 6, marginBottom: 24 }}>Last updated {fmt(lastUpdated)}</div>
        <hr style={{ marginBottom: 24 }} />
        {newsItems.map((it, i) => (
          <div key={i} className="news-entry" style={{ display: 'flex', gap: 20, paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid #e8e8e4' }}>
            <div className="news-date" style={{ width: 120, flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#767674', lineHeight: 1.5, paddingTop: 3 }}>{fmt(it.date)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: 'inline-block', fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: tagColor[it.tag] || '#286DC0', border: '1px solid ' + (tagColor[it.tag] || '#286DC0'), borderRadius: 2, padding: '1px 6px', marginBottom: 8 }}>{it.tag}</span>
              <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 20, fontWeight: 500, color: '#1a1a1a', lineHeight: 1.3, marginBottom: 5 }}>{it.title}</div>
              <div style={{ fontFamily: "'Mallory', system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif", fontSize: 17, color: '#3a3a38', lineHeight: 1.6 }}>{it.body}</div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

const App = () => {
  const [page, setPage] = React.useState(() => {
    const h = window.location.hash.replace('#', '');
    return ['Home', 'Publications', 'Team'].includes(h) ? h : 'Home';
  });
  const [tweaks, setTweaks] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    window.location.hash = page;
  }, [page]);

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (['Home', 'Publications', 'Team'].includes(h)) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  // Tweaks wiring
  React.useEffect(() => {
    const accent = document.getElementById('tweak-accent');
    const font = document.getElementById('tweak-font');
    const update = () => {
      const next = {
        accent: accent.value,
        font: font.value,
      };
      setTweaks(next);
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: next }, '*');
    };
    accent.addEventListener('input', update);
    font.addEventListener('change', update);
    // Apply initial
    accent.value = tweaks.accent;
    font.value = tweaks.font;
  }, []);

  // Apply accent color CSS var
  React.useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accent);
    document.body.style.fontFamily = tweaks.font;
  }, [tweaks.accent, tweaks.font]);

  // const pages = { Home: HomePage, Research: ResearchPage, Publications: PublicationsPage, Funding: FundingPage, Team: TeamPage };
  // const pages = { Home: HomePage, Research: ResearchPage, Publications: PublicationsPage, Team: TeamPage };
  const pages = { Home: HomePage, Publications: PublicationsPage, Team: TeamPage };
  const PageComp = pages[page] || HomePage;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header activePage={page} onNav={setPage} />
      <div style={{ flex: 1 }}>
        <PageComp tweaks={tweaks} onNav={setPage} />
      </div>
      <Footer />
    </div>
  );
};

// Tweaks toggle
window.addEventListener('message', e => {
  if (e.data?.type === '__activate_edit_mode') document.getElementById('tweaks-panel').classList.add('visible');
  if (e.data?.type === '__deactivate_edit_mode') document.getElementById('tweaks-panel').classList.remove('visible');
});
window.parent.postMessage({ type: '__edit_mode_available' }, '*');

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
