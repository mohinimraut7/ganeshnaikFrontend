// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/panvellogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//            background: linear-gradient(135deg,#32376b 0%,#3d4280 100%);
//                     //  background: linear-gradient(135deg, #187484 0%, #114e59 100%);

//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2px solid rgba(202,157,40,0.5);
//           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — large protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg,#32376b 0%, #3d4280 100%);
//           border: 2.5px solid rgba(202,157,40,0.75);
//           border-radius: 100px;
//           /* big protrusion top and bottom */
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.4),
//             0 0 0 5px rgba(202,157,40,0.1),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg,#32376b 0%,#3d4280 100%);
//           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
//           transform: translateY(-2px);
//         }

//         /* ── Logo — VERY BIG ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(202,157,40,0.2),
//             0 0 0 8px rgba(202,157,40,0.07),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 66px;
//           height: 66px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         /* "जन संवाद" — large bold golden */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5C030;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color:#E0B455;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
          
//         .cn-link:hover { rgba(202, 157, 40,0.7); background: rgba(255,255,255,0.07); }
//         .cn-link.active {
//           background: #CA9D28;
//           color:#3d4280;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #E0B455 100%);
//           color: #3d4280;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(224, 180, 85,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #E0B455;
//           background: transparent;
//           color:#E0B455;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { opacity:0.8; transform: translateY(-2px); }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1.5px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               {/* <img src={logo} alt="VVCMC" /> */}
//             </div>
//             <div className="cn-brand-text">
//               {/* <span className="cn-brand-name">पनवेल महानगरपालिका</span> */}
//               <span className="cn-brand-name"></span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }


// ===========================================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/panvellogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #1a1a3e 0%, #2c1810 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2px solid rgba(255, 107, 0, 0.5);
//           box-shadow: 0 10px 36px rgba(0,0,0,0.3);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — large protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1a1a3e 0%, #2c1810 100%);
//           border: 2.5px solid rgba(255, 107, 0, 0.75);
//           border-radius: 100px;
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.4),
//             0 0 0 5px rgba(255, 107, 0, 0.1),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #1a1a3e 0%, #2c1810 100%);
//           box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(255, 107, 0, 0.22);
//           transform: translateY(-2px);
//         }

//         /* ── Logo — VERY BIG ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #FF6B00;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(255, 107, 0, 0.2),
//             0 0 0 8px rgba(255, 107, 0, 0.07),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 66px;
//           height: 66px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — very large bold */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         /* "जन संवाद" — large bold saffron/orange */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #FF8C00;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: #FFAA55;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover { background: rgba(255, 107, 0, 0.12); }
//         .cn-link.active {
//           background: #FF6B00;
//           color: #ffffff;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(255, 107, 0, 0.4);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #FFD4A8;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #FF6B00 0%, #FF8C00 100%);
//           color: #ffffff;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(255, 107, 0, 0.35);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(255, 107, 0, 0.55);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #FF8C00;
//           background: transparent;
//           color: #FF8C00;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { opacity:0.8; transform: translateY(-2px); }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255, 107, 0, 0.1);
//           border: 1.5px solid #FF6B00;
//           color: #FF6B00;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: linear-gradient(135deg, #1a1a3e 0%, #2c1810 100%);
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #FF6B00;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #FFD4A8;
//           background: rgba(255, 107, 0, 0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255, 107, 0, 0.12); }
//         .cn-mobile-link.active { background: #FF6B00; color: #ffffff; font-weight: 800; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               {/* <img src={logo} alt="VVCMC" /> */}
//             </div>
//             <div className="cn-brand-text">
//               {/* <span className="cn-brand-name">पनवेल महानगरपालिका</span> */}
//               <span className="cn-brand-name"></span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#FF8C00" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }


// ==========================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/panvellogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//           background: transparent;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar — BJP warm saffron golden ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #F5A623 0%, #E8941A 40%, #D4800F 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2.5px solid rgba(255, 255, 255, 0.4);
//           box-shadow:
//             0 10px 36px rgba(213, 128, 15, 0.45),
//             0 2px 0 rgba(255,255,255,0.3) inset,
//             0 -2px 0 rgba(0,0,0,0.15) inset;
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//           position: relative;
//         }

//         /* subtle texture overlay */
//         .cn-nav::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           border-radius: 100px;
//           background: repeating-linear-gradient(
//             45deg,
//             transparent,
//             transparent 10px,
//             rgba(255,255,255,0.03) 10px,
//             rgba(255,255,255,0.03) 20px
//           );
//           pointer-events: none;
//         }

//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — protruding left section ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
//           border: 2.5px solid rgba(245, 166, 35, 0.9);
//           border-radius: 100px;
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.5),
//             0 0 0 5px rgba(245, 166, 35, 0.15),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           box-shadow: 0 14px 40px rgba(0,0,0,0.55), 0 0 0 6px rgba(245, 166, 35, 0.3);
//           transform: translateY(-2px);
//         }

//         /* ── Logo ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #F5A623;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(245, 166, 35, 0.25),
//             0 0 0 9px rgba(245, 166, 35, 0.08),
//             0 6px 20px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-logo-wrap { width: 66px; height: 66px; }
//         .cn-logo-wrap img {
//           width: 100%; height: 100%;
//           object-fit: cover; display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.5);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5A623;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 4px rgba(0,0,0,0.4);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: #1a1a2e;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//         }
//         .cn-link:hover {
//           background: rgba(26, 26, 46, 0.12);
//           color: #0f3460;
//         }
//         .cn-link.active {
//           background: #1a1a2e;
//           color: #F5A623;
//           font-weight: 800;
//           box-shadow: 0 4px 14px rgba(26, 26, 46, 0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #1a1a2e;
//           font-weight: 800;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Solid button — dark navy ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%);
//           color: #F5A623;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(15, 52, 96, 0.4);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.6px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 22px rgba(15, 52, 96, 0.5);
//           background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
//           color: #FFD166;
//         }

//         /* ── Outline button ── */
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 2px solid #1a1a2e;
//           background: transparent;
//           color: #1a1a2e;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover {
//           background: #1a1a2e;
//           color: #F5A623;
//           transform: translateY(-2px);
//         }

//         /* ── Danger/Logout button ── */
//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 2px solid rgba(26, 26, 46, 0.35);
//           background: rgba(26, 26, 46, 0.1);
//           color: #1a1a2e;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(26, 26, 46, 0.12);
//           border: 2px solid #1a1a2e;
//           color: #1a1a2e;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//           font-weight: 700;
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: linear-gradient(135deg, #F5A623 0%, #E8941A 100%);
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(213, 128, 15, 0.5);
//           flex-direction: column;
//           gap: 8px;
//           border: 2px solid rgba(255,255,255,0.35);
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }

//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 700;
//           color: #1a1a2e;
//           background: rgba(255,255,255,0.2);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.35); }
//         .cn-mobile-link.active {
//           background: #1a1a2e;
//           color: #F5A623;
//           font-weight: 800;
//         }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               {/* <img src={logo} alt="VVCMC" /> */}
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name"></span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ background: 'rgba(15,52,96,0.15)', color: '#0f3460', fontWeight: 800 }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#7f1d1d", background: 'rgba(220,38,38,0.12)' }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// =========================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/panvellogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 10px 20px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//           background: transparent;
//         }
//         .cn-outer.scrolled { padding: 6px 20px; }

//         /* ── Main pill navbar — BJP solid orange ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #F05A22 0%, #E8510A 60%, #D44A08 100%);
//           padding: 0 16px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 90px;
//           border-radius: 100px;
//           width: 97%;
//           max-width: 1300px;
//           border: 2.5px solid rgba(255, 255, 255, 0.3);
//           box-shadow:
//             0 10px 36px rgba(232, 81, 10, 0.5),
//             0 2px 0 rgba(255,255,255,0.25) inset,
//             0 -2px 0 rgba(0,0,0,0.12) inset;
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//           position: relative;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 70px;
//           width: 93%;
//         }

//         /* ── Brand pill — dark orange/brown contrast pill ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 18px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #8B2500 0%, #A33200 50%, #7A1F00 100%);
//           border: 2.5px solid rgba(255, 200, 150, 0.6);
//           border-radius: 100px;
//           padding: 10px 32px 10px 10px;
//           margin-left: -3px;
//           height: 110px;
//           box-shadow:
//             0 10px 30px rgba(0,0,0,0.45),
//             0 0 0 5px rgba(255, 180, 120, 0.15),
//             inset 0 1px 0 rgba(255,255,255,0.15);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 86px;
//           padding: 8px 26px 8px 8px;
//           gap: 14px;
//         }
//         .cn-brand:hover {
//           box-shadow: 0 14px 40px rgba(0,0,0,0.5), 0 0 0 6px rgba(255, 180, 120, 0.25);
//           transform: translateY(-2px);
//         }

//         /* ── Logo ── */
//         .cn-logo-wrap {
//           width: 86px;
//           height: 86px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3.5px solid #FF8C42;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 5px rgba(255, 140, 66, 0.25),
//             0 0 0 9px rgba(255, 140, 66, 0.08),
//             0 6px 20px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-logo-wrap { width: 66px; height: 66px; }
//         .cn-logo-wrap img {
//           width: 100%; height: 100%;
//           object-fit: cover; display: block;
//         }

//         /* ── Brand text ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 5px;
//         }
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 24px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.5);
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #FFD4A8;
//           line-height: 1.2;
//           letter-spacing: 0.5px;
//           text-shadow: 0 1px 4px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 4px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: #fff;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//           text-shadow: 0 1px 3px rgba(0,0,0,0.2);
//         }
//         .cn-link:hover {
//           background: rgba(255,255,255,0.18);
//           color: #fff;
//         }
//         .cn-link.active {
//           background: rgba(255,255,255,0.25);
//           color: #fff;
//           font-weight: 800;
//           box-shadow: 0 4px 14px rgba(0,0,0,0.15);
//           border: 1.5px solid rgba(255,255,255,0.5);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #fff;
//           font-weight: 800;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//           text-shadow: 0 1px 3px rgba(0,0,0,0.2);
//         }

//         /* ── Solid button — white with orange text ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: #ffffff;
//           color: #E8510A;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.6px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 22px rgba(0,0,0,0.25);
//           background: #FFF5F0;
//         }

//         /* ── Outline button — white border ── */
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 2px solid rgba(255,255,255,0.85);
//           background: transparent;
//           color: #fff;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover {
//           background: rgba(255,255,255,0.2);
//           border-color: #fff;
//           transform: translateY(-2px);
//         }

//         /* ── Danger/Logout button ── */
//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 2px solid rgba(255,255,255,0.5);
//           background: rgba(255,255,255,0.15);
//           color: #fff;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.15);
//           border: 2px solid rgba(255,255,255,0.7);
//           color: #fff;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 14px;
//           border-radius: 50px;
//           margin-right: 4px;
//           flex-shrink: 0;
//           font-weight: 700;
//         }
//         .cn-ham:hover {
//           background: rgba(255,255,255,0.25);
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 112px;
//           left: 16px;
//           right: 16px;
//           background: linear-gradient(135deg, #F05A22 0%, #D44A08 100%);
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(232, 81, 10, 0.5);
//           flex-direction: column;
//           gap: 8px;
//           border: 2px solid rgba(255,255,255,0.3);
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }

//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 700;
//           color: #fff;
//           background: rgba(255,255,255,0.15);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.25); }
//         .cn-mobile-link.active {
//           background: rgba(255,255,255,0.3);
//           color: #fff;
//           font-weight: 800;
//           border: 1.5px solid rgba(255,255,255,0.5);
//         }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 19px; }
//           .cn-brand-sub { font-size: 16px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 14px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               {/* <img src={logo} alt="VVCMC" /> */}
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name"></span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ background: 'rgba(255,255,255,0.25)', fontWeight: 800 }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ background: 'rgba(220,38,38,0.25)', color: '#FFD4D4' }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }


// =======================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/panvellogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

//         /* ─── Outer wrapper ─── */
//         .cn-outer {
//           padding: 12px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.5s ease;
//         }

//         /* ─── SCROLLED: transparent / glass ─── */
//         .cn-outer.scrolled {
//           padding: 6px 24px;
//           background: transparent;
//         }

//         /* ─── Main pill ─── */
//         .cn-nav {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           width: 97%;
//           max-width: 1300px;
//           height: 88px;
//           border-radius: 100px;
//           padding: 0 18px 0 0;
//           overflow: visible;
//           position: relative;
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

//           /* Default: solid dark BJP-style */
//           background: linear-gradient(100deg, #1C1C2E 0%, #2A2040 50%, #1C1C2E 100%);
//           border: 1.5px solid rgba(240, 90, 34, 0.35);
//           box-shadow:
//             0 8px 32px rgba(0, 0, 0, 0.35),
//             0 1px 0 rgba(255,255,255,0.06) inset;
//         }

//         /* SCROLLED pill: frosted glass */
//         .cn-outer.scrolled .cn-nav {
//           height: 68px;
//           width: 92%;
//           background: rgba(28, 28, 46, 0.45);
//           backdrop-filter: blur(18px);
//           -webkit-backdrop-filter: blur(18px);
//           border: 1.5px solid rgba(240, 90, 34, 0.2);
//           box-shadow:
//             0 4px 24px rgba(0, 0, 0, 0.2),
//             0 1px 0 rgba(255,255,255,0.05) inset;
//         }

//         /* ─── Brand pill (protruding left) ─── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #F05A22 0%, #E8510A 60%, #C94000 100%);
//           border: 2px solid rgba(255, 200, 150, 0.3);
//           border-radius: 100px;
//           padding: 10px 30px 10px 10px;
//           margin-left: -2px;
//           height: 108px;
//           box-shadow:
//             0 8px 28px rgba(240, 90, 34, 0.45),
//             0 2px 0 rgba(255,255,255,0.15) inset;
//           transition: all 0.4s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 84px;
//           padding: 8px 24px 8px 8px;
//           gap: 13px;
//           box-shadow: 0 6px 20px rgba(240, 90, 34, 0.35);
//         }
//         .cn-brand:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 12px 35px rgba(240, 90, 34, 0.55);
//           background: linear-gradient(135deg, #FF6A30 0%, #F05A22 60%, #D44A08 100%);
//         }

//         /* ─── Logo ring ─── */
//         .cn-logo-wrap {
//           width: 84px;
//           height: 84px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3px solid rgba(255, 255, 255, 0.8);
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.4s ease;
//           box-shadow:
//             0 0 0 4px rgba(255, 255, 255, 0.2),
//             0 4px 16px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-logo-wrap { width: 64px; height: 64px; }
//         .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

//         /* ─── Brand text ─── */
//         .cn-brand-text { display: flex; flex-direction: column; gap: 4px; }

//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 22px;
//           font-weight: 700;
//           color: #ffffff;
//           line-height: 1.2;
//           white-space: nowrap;
//           text-shadow: 0 2px 8px rgba(0,0,0,0.4);
//           transition: font-size 0.4s ease;
//         }
//         .cn-outer.scrolled .cn-brand-name { font-size: 17px; }

//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 18px;
//           font-weight: 400;
//           color: rgba(255,255,255,0.88);
//           line-height: 1.2;
//           letter-spacing: 0.3px;
//           transition: font-size 0.4s ease;
//         }
//         .cn-outer.scrolled .cn-brand-sub { font-size: 14px; }

//         /* ─── Nav links ─── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//         }

//         .cn-link {
//           padding: 8px 18px;
//           border-radius: 50px;
//           font-size: 13.5px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.25s ease;
//           border: none;
//           background: transparent;
//           color: rgba(255, 255, 255, 0.82);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//           letter-spacing: 0.3px;
//         }
//         .cn-link:hover {
//           background: rgba(255, 255, 255, 0.08);
//           color: #fff;
//         }
//         .cn-link.active {
//           color: #F05A22;
//           font-weight: 700;
//           background: rgba(240, 90, 34, 0.12);
//         }

//         .cn-citizen-name {
//           font-size: 13px;
//           color: rgba(255,255,255,0.75);
//           font-weight: 600;
//           padding: 0 6px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ─── Solid CTA — BJP orange ─── */
//         .cn-btn-solid {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: none;
//           background: #F05A22;
//           color: #ffffff;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 3px 12px rgba(240, 90, 34, 0.4);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.6px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           background: #FF6A30;
//           box-shadow: 0 6px 18px rgba(240, 90, 34, 0.5);
//         }

//         /* ─── Outline — white border, calm ─── */
//         .cn-btn-outline {
//           padding: 8px 20px;
//           border-radius: 50px;
//           border: 1.5px solid rgba(255, 255, 255, 0.45);
//           background: transparent;
//           color: rgba(255,255,255,0.85);
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover {
//           border-color: rgba(255,255,255,0.8);
//           background: rgba(255,255,255,0.08);
//           color: #fff;
//           transform: translateY(-2px);
//         }

//         /* ─── Logout icon btn ─── */
//         .cn-btn-danger {
//           width: 38px;
//           height: 38px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(255, 255, 255, 0.2);
//           background: rgba(255, 255, 255, 0.06);
//           color: rgba(255,255,255,0.65);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ─── Hamburger ─── */
//         .cn-ham {
//           display: none;
//           background: rgba(255, 255, 255, 0.07);
//           border: 1.5px solid rgba(255, 255, 255, 0.3);
//           color: rgba(255,255,255,0.85);
//           font-size: 18px;
//           cursor: pointer;
//           padding: 7px 15px;
//           border-radius: 50px;
//           margin-right: 2px;
//           flex-shrink: 0;
//           transition: all 0.2s ease;
//         }
//         .cn-ham:hover { background: rgba(255,255,255,0.12); }

//         /* ─── Mobile menu ─── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 110px;
//           left: 16px;
//           right: 16px;
//           background: rgba(28, 28, 46, 0.96);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           z-index: 999;
//           padding: 12px;
//           border-radius: 22px;
//           box-shadow: 0 16px 48px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 6px;
//           border: 1.5px solid rgba(240, 90, 34, 0.25);
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(8px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }

//         .cn-mobile-link {
//           padding: 12px 18px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: rgba(255,255,255,0.82);
//           background: rgba(255,255,255,0.04);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.09); color: #fff; }
//         .cn-mobile-link.active {
//           background: rgba(240, 90, 34, 0.15);
//           color: #F05A22;
//           font-weight: 700;
//         }

//         /* ─── Divider ─── */
//         .cn-mobile-divider {
//           height: 1px;
//           background: rgba(255,255,255,0.08);
//           margin: 4px 0;
//           border: none;
//         }

//         /* ─── Responsive ─── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 96%; height: 80px; }
//           .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 13px; }
//           .cn-logo-wrap { width: 72px; height: 72px; }
//           .cn-brand-name { font-size: 18px; }
//           .cn-brand-sub { font-size: 15px; }
//         }
//         @media(max-width:640px){
//           .cn-outer { padding: 8px 10px; }
//           .cn-nav { width: 100%; height: 72px; }
//           .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 11px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 13px; }
//         }
//         @media(max-width:420px){
//           .cn-brand { height: 78px; padding: 6px 15px 6px 6px; gap: 9px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 14px; }
//           .cn-brand-sub { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               {/* <img src={logo} alt="VVCMC" /> */}
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name"></span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <hr className="cn-mobile-divider" />
//             <button
//               className="cn-mobile-link"
//               style={{ color: '#F05A22', fontWeight: 700 }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >🚀 Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: 'rgba(248,113,113,0.85)' }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <hr className="cn-mobile-divider" />
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: '#F05A22', fontWeight: 700 }}
//               onClick={() => { navigate("/register"); setMenu(false); }}
//             >📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// =================
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/panvellogo.jpg";

export default function CitizenNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const citizen = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("citizenUser");
    navigate("/login");
    setMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        /* ─── Outer wrapper ─── */
        .cn-outer {
          padding: 12px 24px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease;
          background: transparent;
        }
        .cn-outer.scrolled {
          padding: 6px 24px;
          background: transparent;
        }

        /* ─── Main pill navbar — warm cream #FADB9B ─── */
        .cn-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 97%;
          max-width: 1300px;
          height: 88px;
          border-radius: 100px;
          padding: 0 18px 0 0;
          overflow: visible;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

          background: linear-gradient(120deg, #FADB9B 0%, #F7E5C5 50%, #FADB9B 100%);
          border: 2px solid rgba(200, 130, 30, 0.3);
          box-shadow:
            0 8px 32px rgba(200, 130, 30, 0.2),
            0 2px 0 rgba(255,255,255,0.7) inset,
            0 -1px 0 rgba(180, 110, 10, 0.15) inset;
        }

        /* SCROLLED: frosted glass cream */
        .cn-outer.scrolled .cn-nav {
          height: 68px;
          width: 92%;
          background: rgba(250, 219, 155, 0.55);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(200, 130, 30, 0.2);
          box-shadow:
            0 4px 20px rgba(180, 110, 10, 0.15),
            0 1px 0 rgba(255,255,255,0.5) inset;
        }

        /* ─── Brand pill (protruding left) — dark warm brown ─── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          background: linear-gradient(135deg, #F7801A 0%, #F7801A 55%, #F36523 100%);
          border: 2px solid rgba(250, 219, 155, 0.5);
          border-radius: 100px;
          padding: 10px 30px 10px 10px;
          margin-left: -2px;
          height: 108px;
          box-shadow:
            0 8px 28px rgba(100, 40, 0, 0.4),
            0 2px 0 rgba(255,255,255,0.12) inset;
          transition: all 0.4s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 84px;
          padding: 8px 24px 8px 8px;
          gap: 13px;
        }
        .cn-brand:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(100, 40, 0, 0.5);
          // background: linear-gradient(135deg, #8B3D00 0%, #AD5000 55%, #8B3D00 100%);

                    background: linear-gradient(135deg, #F7801A 0%, #F7801A 55%, #F36523 100%);

        }

        /* ─── Logo ring ─── */
        .cn-logo-wrap {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FADB9B;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.4s ease;
          box-shadow:
            0 0 0 4px rgba(250, 219, 155, 0.3),
            0 4px 16px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-logo-wrap { width: 64px; height: 64px; }
        .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; display: block; }

        /* ─── Brand text ─── */
        .cn-brand-text { display: flex; flex-direction: column; gap: 4px; }

        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 22px;
          font-weight: 700;
          color: #FADB9B;
          line-height: 1.2;
          white-space: nowrap;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          transition: font-size 0.4s ease;
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 17px; }

        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 18px;
          font-weight: 400;
          color: #F7E5C5;
          line-height: 1.2;
          letter-spacing: 0.3px;
          transition: font-size 0.4s ease;
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 14px; }

        /* ─── Nav links ─── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .cn-link {
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          border: none;
          background: transparent;
          color: #68413F;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
          letter-spacing: 0.3px;
        }
        .cn-link:hover {
          background: #F7801A;
          color: #68413F;
        }
        .cn-link.active {
          background: #F7801A;
          color: #68413F;
          font-weight: 800;
          box-shadow: 0 3px 12px rgba(100, 40, 0, 0.25);
        }

        .cn-citizen-name {
          font-size: 13px;
          color: #6B3300;
          font-weight: 700;
          padding: 0 6px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ─── Solid CTA — warm brown ─── */
        .cn-btn-solid {
          padding: 9px 22px;
          border-radius: 50px;
          border: none;
          // background: linear-gradient(135deg, #9B4500 0%, #7A3500 100%);
          backgroundColor:'#F7801A'
          color: #FADB9B;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 3px 14px rgba(100, 40, 0, 0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          // box-shadow: 0 6px 20px rgba(100, 40, 0, 0.4);
          // background: linear-gradient(135deg, #AD5000 0%, #8B3D00 100%);
        }

        /* ─── Outline btn ─── */
        .cn-btn-outline {
          padding: 8px 20px;
          border-radius: 50px;
          border: 2px solid rgba(100, 50, 0, 0.4);
          background: transparent;
          color: #6B3300;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover {
          border-color: #9B4500;
          background: rgba(120, 60, 0, 0.08);
          color: #5C2E00;
          transform: translateY(-2px);
        }

        /* ─── Logout icon btn ─── */
        .cn-btn-danger {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1.5px solid rgba(100, 50, 0, 0.25);
          background: rgba(100, 50, 0, 0.08);
          color: #7A3500;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover {
          background: #dc2626;
          color: #fff;
          border-color: #dc2626;
          transform: rotate(90deg);
        }

        /* ─── Hamburger ─── */
        .cn-ham {
          display: none;
          background: rgba(100, 50, 0, 0.08);
          border: 1.5px solid rgba(100, 50, 0, 0.3);
          color: #6B3300;
          font-size: 18px;
          cursor: pointer;
          padding: 7px 15px;
          border-radius: 50px;
          margin-right: 2px;
          flex-shrink: 0;
          transition: all 0.2s ease;
          font-weight: 700;
        }
        .cn-ham:hover { background: rgba(100, 50, 0, 0.14); }

        /* ─── Mobile menu ─── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 110px;
          left: 16px;
          right: 16px;
          background: rgba(250, 235, 195, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          z-index: 999;
          padding: 12px;
          border-radius: 22px;
          box-shadow: 0 16px 48px rgba(150, 80, 0, 0.2);
          flex-direction: column;
          gap: 6px;
          border: 1.5px solid rgba(200, 130, 30, 0.3);
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }

        .cn-mobile-link {
          padding: 12px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #5C2E00;
          background: rgba(120, 60, 0, 0.06);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(120, 60, 0, 0.12); color: #3D1A00; }
        .cn-mobile-link.active {
          background: #9B4500;
          color: #FADB9B;
          font-weight: 700;
        }

        .cn-mobile-divider {
          height: 1px;
          background: rgba(150, 80, 0, 0.12);
          margin: 4px 0;
          border: none;
        }

        /* ─── Responsive ─── */
        @media(max-width:960px){
          .cn-links { display: none; }
          .cn-ham { display: block; }
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 13px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 18px; }
          .cn-brand-sub { font-size: 15px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 11px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 13px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 78px; padding: 6px 15px 6px 6px; gap: 9px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }
      `}</style>

      <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
        <nav className="cn-nav">

          {/* ── Brand pill ── */}
          <div className="cn-brand" onClick={() => navigate("/")}>
            <div className="cn-logo-wrap">
              {/* <img src={logo} alt="VVCMC" /> */}
            </div>
            <div className="cn-brand-text">
              <span className="cn-brand-name"></span>
              <span className="cn-brand-sub">जन संवाद</span>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <div className="cn-links">
            <button
              className={`cn-link${isActive("/") ? " active" : ""}`}
              onClick={() => navigate("/")}
            >Home</button>

            {citizen && (
              <button
                className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
                onClick={() => navigate("/my-appointments")}
              >My Appointments</button>
            )}

            {citizen ? (
              <>
                <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
                <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
                <button className="cn-btn-danger" onClick={logout} title="Logout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
                    <line x1="12" y1="2" x2="12" y2="12"/>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
                <button style={{backgroundColor:'#F7801A',color:'#68413F'}} className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
              </>
            )}
          </div>

          <button className="cn-ham" onClick={() => setMenu(m => !m)}>
            {menu ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
        <button
          className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
          onClick={() => { navigate("/"); setMenu(false); }}
        >🏠 Home</button>

        {citizen && (
          <button
            className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
            onClick={() => { navigate("/my-appointments"); setMenu(false); }}
          >📅 My Appointments</button>
        )}

        {citizen ? (
          <>
            <hr className="cn-mobile-divider" />
            <button
              className="cn-mobile-link"
              style={{ color: '#9B4500', fontWeight: 700 }}
              onClick={() => { navigate("/book-appointment"); setMenu(false); }}
            >🚀 Book Appointment</button>
            <button
              className="cn-mobile-link"
              style={{ color: '#b91c1c' }}
              onClick={logout}
            >🚪 Logout</button>
          </>
        ) : (
          <>
            <hr className="cn-mobile-divider" />
            <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
            <button
              className="cn-mobile-link"
              style={{ color: '#9B4500', fontWeight: 700 }}
              onClick={() => { navigate("/register"); setMenu(false); }}
            >📝 Register</button>
          </>
        )}
      </div>
    </>
  );
}