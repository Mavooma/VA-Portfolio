import React from 'react';
import './Toolkit.css';

const Toolkit = () => {
  const tools = [
    { name: 'Google Suite', icon: '/assets/images/google.png' },
    { name: 'Skype', icon: '/assets/images/skype.png' },
    { name: 'Zoom', icon: '/assets/images/zoom.png' },
    { name: 'Microsoft Teams', icon: '/assets/images/business.png' },
    { name: 'Slack', icon: '/assets/images/slack.png' },
    { name: 'Dropbox', icon: '/assets/images/dropbox.png' },
    { name: 'Trello', icon: '/assets/images/trello.png' },
    { name: 'Web Development', icon: '/assets/images/app-development.png' },
    { name: 'Video Editing', icon: '/assets/images/editing.png' },
  ];  

  return (
    <section className="toolkit-section">
      <h2 className="title">IN MY TOOLKIT</h2>

      <div className="toolkit-grid">
        {tools.map((tool, index) => (
          <div className="tool-item" key={index}>
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
