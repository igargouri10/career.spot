import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Wall Street CareerSpot</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <div className="english">English</div>
          <Link className="change" to="/register">
          {!currentUser?.isSeller && <span><Link className="change" to="/register">Become a Seller</Link></span>}
          </Link>
          {currentUser ? (
            <div className="user" onClick={()=>setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        My job offers
                      </Link>
                      <Link className="link" to="/add">
                        Add New Job offer
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Proposals
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
                )}
            </div>
          ) : (
            <>
              <Link to="/login" className="link">Log in</Link>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/gigs/?Inside20Sales">
              Inside Sales
            </Link>
            <Link className="link menuLink" to="/gigs/?Outside20Sales">
              Outside Sales
            </Link>
            <Link className="link menuLink" to="/gigs/?Retail20Sales">
              Retail Sales
            </Link>
            <Link className="link menuLink" to="/gigs/?Business-to-Business">
              Business-to-Business
            </Link>
            <Link className="link menuLink" to="/gigs/?Business-to-Customer">
              Business-to-Customer
            </Link>
            <Link className="link menuLink" to="/gigs/?Direct20Sales">
              Direct Sales
            </Link>
            <Link className="link menuLink" to="/gigs/?Account20Management">
              Account Management
            </Link>
            <Link className="link menuLink" to="/gigs/?Sales20Operations">
              Sales Operations
            </Link>
            <Link className="link menuLink" to="/gigs/?Sales20Management">
              Sales Management
            </Link>
            <Link className="link menuLink" to="/gigs/?Telemarketing">
              Telemarketing
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;