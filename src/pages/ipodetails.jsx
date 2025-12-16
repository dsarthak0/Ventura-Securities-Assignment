import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ipoData } from '../data/ipoData';
import './ipodetails.css';

const IPODetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const ipo = ipoData.find(item => item.id === parseInt(id));

  if (!ipo) {
    return (
      <div className="error-page">
        <h2>IPO Not Found</h2>
        <button onClick={() => navigate('/')}>Back to List</button>
      </div>
    );
  }

  const handleDownload = () => {
    alert('Downloading IPO prospectus...');

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

  return (
    <div className="ipo-details-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <button className="back-btn" onClick={() => navigate('/')}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Back</span>
          </button>
          <div className="nav-placeholder">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Home</span>
          </div>
        </div>
      </nav>

      <div className="details-container">
        {/* Header Section */}
        <div className="details-header">
          <div className="header-content">
            <img src={ipo.companyLogo} alt={ipo.companyName} className="company-logo-large" />
            <div className="header-info">
              <h1 className="company-title">{ipo.companyName}</h1>
              <span
                className="status-badge-large"
                style={{ backgroundColor: getStatusColor(ipo.status) }}
              >
                {ipo.status}
              </span>
            </div>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.83333 8.33333L10 12.5L14.1667 8.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5V2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Download</span>
          </button>
        </div>

        {/* IPO Details Grid */}
        <div className="details-grid">
          <div className="detail-card">
            <span className="detail-label">Issue Size</span>
            <span className="detail-value">{ipo.issueSize}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Price Range</span>
            <span className="detail-value">{ipo.priceRange}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Minimum Investment</span>
            <span className="detail-value">{ipo.minInvestment}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Lot Size</span>
            <span className="detail-value">{ipo.lotSize} shares</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Issue Date</span>
            <span className="detail-value">{ipo.issueDate}</span>
          </div>
          <div className="detail-card">
            <span className="detail-label">Listing Date</span>
            <span className="detail-value">{ipo.listingDate}</span>
          </div>
        </div>

        {/* IPO Timeline */}
        <div className="timeline-section">
          <h2 className="section-title">IPO Timeline</h2>
          <div className="timeline">
            {ipo.timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < ipo.timeline.length - 1 && <div className="timeline-line"></div>}
                </div>
                <div className="timeline-content">
                  <h4 className="timeline-label">{item.label}</h4>
                  <p className="timeline-date">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Company */}
        <div className="about-section">
          <h2 className="section-title">About the Company</h2>
          <p className="about-text">{ipo.about}</p>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="apply-btn">Apply Now</button>
          <button className="info-btn">More Information</button>
        </div>
      </div>
    </div>
  );
};

export default IPODetailsPage;