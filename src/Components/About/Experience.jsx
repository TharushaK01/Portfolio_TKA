import React, { useState } from 'react';
import TimelineItem from './TimelineItem';
import './Experience.css';

const Timeline = () => {
  const [items] = useState([
    { 
      title: <>Web Development Intern<br /> (Remote)</>, 
      date: '10.2022–Present', 
      details: ['UI/UX consistency', 'Design intuitive interfaces', 'Define style guide'], 
      skills: ['Creativity', 'Figma', 'UX Design'] 
    },
    { 
      title: <>Brand Designer & <br /> Social Media Coordinator</>, 
      date: '10.2022–Present', 
      details: ['UI/UX consistency', 'Design intuitive interfaces', 'Define style guide'], 
      skills: ['Creativity', 'Figma', 'UX Design'] 
    },
    { 
      title: 'Computer Science Degree', 
      date: '2020–2025', 
      details: ['Built web apps', 'Optimized performance', 'Agile collaboration'], 
      skills: ['Vue.js', 'JavaScript', 'CSS', 'HTML'] 
    },
  ]);

  const [collapsedStates, setCollapsedStates] = useState(Array(items.length).fill(false));

  const handleToggle = (index) => {
    const newStates = [...collapsedStates];
    newStates[index] = !newStates[index];
    setCollapsedStates(newStates);
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
