import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);

  return (
    <div>
      <h1>Toggle Switch Examples</h1>

      <div>
        <h3>Power Switch</h3>
        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? 'ON' : 'OFF'}
        </button>
      </div>

      <div>
        <h3>Theme Toggle</h3>
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </label>
      </div>

      <div>
        <h3>Notifications</h3>
        <button onClick={() => setNotifications(!notifications)}>
          {notifications ? 'Enabled' : 'Disabled'}
        </button>
      </div>
    </div>
  );
}

export default ToggleSwitch;
