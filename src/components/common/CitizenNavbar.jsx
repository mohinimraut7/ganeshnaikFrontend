


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
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400;700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        /* ─── Outer wrapper ─── */
        .cn-outer {
          padding: 20px 24px;
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
          padding: 14px 24px;
          background: transparent;
        }

        /* ─── Main pill navbar ─── */
        .cn-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 97%;
          max-width: 1300px;
          height: 88px;
          border-radius: 100px;
          padding: 7px 18px 7px 0;
          overflow: visible;
          position: relative;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

          background: linear-gradient(120deg, #F87B00 0%, #F87B00 50%, #F97316 100%);
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

        /* ─── Brand pill (protruding left) ─── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 16px;
          cursor: pointer;
          background: linear-gradient(135deg, #fff 0%, #FED7AA 55%, #FED7AA 100%);
          border: 2px solid rgba(250, 219, 155, 0.5);
          border-radius: 40px;
          padding: 10px 40px 10px 40px;
          margin-left: 20px;
          height: 58px;
          box-shadow:
            0 8px 28px rgba(100, 40, 0, 0.4),
            0 2px 0 rgba(255,255,255,0.12) inset;
          transition: all 0.4s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 64px;
          padding: 8px 34px 8px 34px;
          margin-left: 20px;
          gap: 13px;
        }
        .cn-brand:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(100, 40, 0, 0.5);
          background: linear-gradient(135deg, #F7801A 0%, #F7801A 55%, #F36523 100%);
        }

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
          font-size: 25px;
          font-weight: 700;
          color:#68413F;
          line-height: 1.2;
          letter-spacing: 0.3px;
          transition: font-size 0.4s ease;
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

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
          color:#B49A88;
        }
        .cn-link.active {
          background: #FED7AA;
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

        /* ─── Solid CTA ─── */
        .cn-btn-solid {
          padding: 9px 22px;
          border-radius: 50px;
          border: none;
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
        }

        /* ─── Outline btn ─── */
        .cn-btn-outline {
          padding: 8px 20px;
          border-radius: 50px;
          border: 2px solid rgba(100, 50, 0, 0.4);
            background: #FED7AA;
          color: #68413F;
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
          .cn-brand { height: 76px; padding: 8px 34px 8px 34px; gap: 13px; margin-left: 20px; }
          .cn-brand-name { font-size: 18px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 16px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 66px; padding: 7px 30px 7px 30px; gap: 11px; margin-left: 12px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 58px; padding: 6px 25px 6px 25px; gap: 9px; margin-left: 8px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 13px; }
        }
      `}</style>

      <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
        <nav className="cn-nav">

          {/* ── Brand pill ── */}
          <div className="cn-brand" onClick={() => navigate("/")}>
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
                <button
                  className="cn-btn-solid"
                  style={{ backgroundColor: '#F7801A', color: '#68413F' }}
                  onClick={() => navigate("/book-appointment")}
                >+ Book</button>
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
                <button
                  className="cn-btn-solid"
                  style={{ backgroundColor: '#FED7AA', color: '#68413F' }}
                  onClick={() => navigate("/register")}
                >Register</button>
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