import React from 'react';
import './Experience.css';

const TimelineItem = ({ title, date, details, skills, isCollapsed, onToggle }) => (
<div className={`timeline-item ${isCollapsed ? 'collapsed' : ''}`}>
  <div className="header">
    <div className="title">{title}</div>
    <div className="right-section">
      <span className="date">{date}</span>
      <span className="toggle-btn" onClick={onToggle}>^</span>
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

const Timeline = () => {
  const [items] = React.useState([
    { title: 'Senior Frontend Developer', date: '10.2022–Present', details: ['Lead React projects', 'Mentor juniors', 'Architect scalable apps'], skills: ['React', 'TypeScript', 'Next.js'] },
    { title: 'UI Design Lead', date: '10.2022–Present', details: ['UI/UX consistency', 'Design intuitive interfaces', 'Define style guide'], skills: ['Creativity', 'Figma', 'UX Design'] },
    { title: 'Frontend Developer', date: '03.2021–09.2022', details: ['Built web apps', 'Optimized performance', 'Agile collaboration'], skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML'] },
  ]);
  const [collapsedStates, setCollapsedStates] = React.useState([false, false, false]);

  const handleToggle = (index) => {
    const newCollapsedStates = [...collapsedStates];
    newCollapsedStates[index] = !newCollapsedStates[index];
    setCollapsedStates(newCollapsedStates);
  };

  return (
    <div className="timeline">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          details={item.details}
          skills={item.skills}
          isCollapsed={collapsedStates[index]}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Timeline;
