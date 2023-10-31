import React, { useState } from "react";
import "./Featured.scss";
import { Link, useNavigate } from "react-router-dom";

function Featured() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        navigate(`/gigs?search=${input}`);
    };

    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>
                        Find the perfect <span>sales</span> opportunity for your career
                    </h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <input
                                type="text"
                                placeholder='Try "Business-to-Business"'
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='Type a country'
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder='Type a city'
                                onChange={(e) => setInput(e.target.value)}
                            />

                    {input === "Inside Sales" && (
                        <div className="searchInput">
                            <img src="./img/search.png" alt="" />
                            <select>
                                <option value="">Select a role</option>
                                <option value="Account Development Representative (ADR)">
                                    Account Development Representative
                                </option>
                                <option value="Inbound Sales Representative">
                                    Inbound Sales Representative
                                </option>
                                <option value="Outbound Sales Representative">
                                    Outbound Sales Representative
                                </option>
                                <option value="Lead Generation Specialist">
                                    Lead Generation Specialist
                                </option>
                                <option value="Sales Development Representative (SDR)">
                                    Sales Development Representative
                                </option>
                            </select>
                        </div>
                    )}

                            {input === "Outside Sales" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Account Executive">Account Executive</option>
                                        <option value="Territory Sales Representative">
                                            Territory Sales Representative
                                        </option>
                                        <option value="Regional Sales Manager">Regional Sales Manager</option>
                                        <option value="Sales Engineer">Sales Engineer</option>
                                        <option value="Sales Director">Sales Director</option>
                                    </select>
                                </div>
                            )}

                            {input === "Retail Sales" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Sales Associate">Sales Associate</option>
                                        <option value="Department Manager">Department Manager</option>
                                        <option value="Store Manager">Store Manager</option>
                                        <option value="Visual Merchandiser">Visual Merchandiser</option>
                                        <option value="Retail Buyer">Retail Buyer</option>
                                    </select>
                                </div>
                            )}

                            {input === "Business-to-Business" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Enterprise Sales">Enterprise Sales</option>
                                        <option value="Corporate Sales">Corporate Sales</option>
                                        <option value="Channel Sales">Channel Sales</option>
                                        <option value="Partner Sales">Partner Sales</option>
                                        <option value="Key Account Manager">Key Account Manager</option>
                                    </select>
                                </div>
                            )}

                            {input === "Business-to-Customer" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Retail Sales Associate">Retail Sales Associate</option>
                                        <option value="E-commerce Sales Representative">
                                            E-commerce Sales Representative
                                        </option>
                                        <option value="Direct Sales Representative">
                                            Direct Sales Representative
                                        </option>
                                        <option value="Customer Service Representative">
                                            Customer Service Representative
                                        </option>
                                        <option value="Brand Ambassador">Brand Ambassador</option>
                                    </select>
                                </div>
                            )}

                            {input === "Direct Sales" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Door-to-Door Sales Representative">
                                            Door-to-Door Sales Representative
                                        </option>
                                        <option value="Party Plan Sales Representative">
                                            Party Plan Sales Representative
                                        </option>
                                        <option value="Multi-Level Marketing (MLM) Representative">
                                            Multi-Level Marketing (MLM Representative
                                        </option>
                                        <option value="Host/Hostess">Host/Hostess</option>
                                        <option value="Personal Shopper">Personal Shopper</option>
                                    </select>
                                </div>
                            )}

                            {input === "Account Management" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Customer Success Manager">Customer Success Manager</option>
                                        <option value="Strategic Account Manager">Strategic Account Manager</option>
                                        <option value="Technical Account Manager">Technical Account Manager</option>
                                        <option value="Global Account Manager">Global Account Manager</option>
                                        <option value="Customer Support Specialist">Customer Support Specialist</option>
                                    </select>
                                </div>
                            )}

                            {input === "Sales Operations" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Sales Analyst">Sales Analyst</option>
                                        <option value="Sales Operations Coordinator">Sales Operations Coordinator</option>
                                        <option value="Sales Enablement Specialist">Sales Enablement Specialist</option>
                                        <option value="Sales Training Manager">Sales Training Manager</option>
                                        <option value="Sales Operations Manager">Sales Operations Manager</option>
                                    </select>
                                </div>
                            )}

                            {input === "Sales Management" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Sales Supervisor">Sales Supervisor</option>
                                        <option value="Sales Team Leader">Sales Team Leader</option>
                                        <option value="Sales Manager">Sales Manager</option>
                                        <option value="Regional Sales Manager">Regional Sales Manager</option>
                                        <option value="Vice President of Sales">Vice President of Sales</option>
                                    </select>
                                </div>
                            )}

                            {input === "Telemarketing" && (
                                <div className="searchInput">
                                    <img src="./img/search.png" alt="" />
                                    <select>
                                        <option value="">Select a role</option>
                                        <option value="Inbound Telesales Representative">
                                            Inbound Telesales Representative
                                        </option>
                                        <option value="Outbound Telesales Representative">
                                            Outbound Telesales Representative
                                        </option>
                                        <option value="Call Center Agent">Call Center Agent</option>
                                        <option value="Telemarketing Manager">Telemarketing Manager</option>
                                    </select>
                                </div>
                            )}
                        </div>
                            <button onClick={handleSubmit}>Search</button>
                        
                        </div>
                        <div className="popular">
            <span>Popular:</span>
            <button>Bunisess-to-Business</button>
            <button>Bunisess-to-Customer</button>
            <button>Telemarketing</button>
            <button>Account Management</button>
          </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt=""/>    
                </div>
            </div>
        </div>
    );
}

export default Featured;
