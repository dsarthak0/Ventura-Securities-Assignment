import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ipoData } from '../data/ipoData';
import './ipolistpage.css';

const IPOListPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const getFilteredIPOs = () => {
    if (filter === 'All') return ipoData;
    return ipoData.filter(ipo => ipo.status === filter);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return '#22c55e';
      case 'Closed':
        return '#ef4444';
      case 'Upcoming':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  const handleIPOClick = (id) => {
    navigate(`/ipo/${id}`);
  };

  return (
    <div className="ipo-list-page">
      <div className="container">
        <header className="page-header">
          <h1>IPO List</h1>
          <p className="subtitle">Explore and invest in upcoming and ongoing IPOs</p>
        </header>

        <div className="filter-tabs">
          {['All', 'Open', 'Upcoming', 'Closed'].map((status) => (
            <button
              key={status}
              className={`filter-tab ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="ipo-grid">
          {getFilteredIPOs().map((ipo) => (
            <div
              key={ipo.id}
              className="ipo-card"
              onClick={() => handleIPOClick(ipo.id)}
            >
              <div className="ipo-card-header">
                <div className="company-info">
                  <img src={ipo.companyLogo} alt={ipo.companyName} className="company-logo" />
                  <div>
                    <h3 className="company-name">{ipo.companyName}</h3>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(ipo.status) }}
                    >
                      {ipo.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="ipo-card-body">
                <div className="info-row">
                  <div className="info-item">
                    <span className="label">Issue Size</span>
                    <span className="value">{ipo.issueSize}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Price Range</span>
                    <span className="value">{ipo.priceRange}</span>
                  </div>
                </div>

                <div className="info-row">
                  <div className="info-item">
                    <span className="label">Min Investment</span>
                    <span className="value">{ipo.minInvestment}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">Lot Size</span>
                    <span className="value">{ipo.lotSize} shares</span>
                  </div>
                </div>

                <div className="date-info">
                  <svg className="calendar-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.6667 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.33333 1.33333V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 6.66667H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="date-text">{ipo.issueDate}</span>
                </div>
              </div>

              <div className="ipo-card-footer">
                <button className="view-details-btn">
                  View Details
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3.33333L10.6667 8L6 12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IPOListPage;