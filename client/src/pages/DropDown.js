import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './css/DropDown.css';

function Dropdown() {
  const data = [{ id: 0, label: '2010 WC' }];
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  const toggleDropdown = () => setOpen(!isOpen);

  function handleItemClick(label) {
    if (label === '2010 WC') {
      window.location.href = '/servicepage';
    }
  }

  return (
    <div className="dropdown" style={{ position: 'absolute' }}>
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item) => item.id == selectedItem).label
          : 'Select WC ▾'}
        <i className={`fa fa-chevron-right icon ${isOpen && 'open'}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map((item) => (
          <div
            className="dropdown-item"
            onClick={(e) => handleItemClick(item.label)}
            id={item.id}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default withRouter(Dropdown);
