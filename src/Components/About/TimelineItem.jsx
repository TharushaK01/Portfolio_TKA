import React, { useRef, useState, useEffect } from 'react';
import './Experience.css';

const TimelineItem = ({ title, date, details, skills, isCollapsed, onToggle }) => {
  const titleRef = useRef(null);
  const [collapsedHeight, setCollapsedHeight] = useState('auto');

  // Calculate title height for collapsed state
  useEffect(() => {
    if (titleRef.current) {
      const titleHeight = titleRef.current.offsetHeight;
      const padding = 20 * 2; // top + bottom padding of timeline-item
      setCollapsedHeight(titleHeight + padding);
    }
  }, []);

  return (
    <div
      className={`timeline-item ${isCollapsed ? 'collapsed' : ''}`}
      style={isCollapsed ? { height: collapsedHeight } : { height: 'auto' }}
    >
      <div className="header">
        <div className="title" ref={titleRef}>{title}</div>
        <div className="right-section">
          <span className="date">{date}</span>
          <span className={`toggle-btn ${isCollapsed ? 'open' : ''}`} onClick={onToggle}>
            <svg
              fill="#000000"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color"
            >
              <polyline
                points="5 8.5 12 15.5 19 8.5"
                style={{
                  fill: "none",
                  stroke: "rgb(44, 169, 188)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <polyline
                points="19 14 12 21 5 14"
                style={{
                  fill: "none",
                  stroke: "rgb(44, 169, 188)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
              <polyline
                points="5 3 12 10 19 3"
                style={{
                  fill: "none",
                  stroke: "rgb(44, 169, 188)",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                }}
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="details">
        {details.map((detail, index) => (
          <div key={index}>&bull; {detail}</div>
        ))}
      </div>

      <div className="skills">
        {skills.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
