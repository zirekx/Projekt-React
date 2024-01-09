
import React from 'react';
import './styles/Header.css'; 
import { useNavigate } from 'react-router-dom';


interface HeaderProps {
 
}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('user'); 
    navigate('/login'); 
  };
  return (
    <div className="header">
      <div className="logo">Gym4BOLON</div>
      <div className="search-input"><input placeholder="Search People, Pages, Groups Etc" type="text"></input></div>
      <div onClick={handleLogout} className="options"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_3_160)"><path d="M9.25 22L8.85 18.8C8.63333 18.7167 8.429 18.6167 8.237 18.5C8.045 18.3833 7.85766 18.2583 7.675 18.125L4.7 19.375L1.95 14.625L4.525 12.675C4.50833 12.5583 4.5 12.4457 4.5 12.337V11.663C4.5 11.5543 4.50833 11.4417 4.525 11.325L1.95 9.375L4.7 4.625L7.675 5.875C7.85833 5.74167 8.05 5.61667 8.25 5.5C8.45 5.38333 8.65 5.28333 8.85 5.2L9.25 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.955 5.61667 16.1423 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5543 19.5 11.663V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.562 9.525C8.88666 10.2083 8.54933 11.0333 8.55 12C8.55 12.9667 8.88733 13.7917 9.562 14.475C10.2367 15.1583 11.066 15.5 12.05 15.5Z" fill="#D9D9D9"/></g><defs><clipPath id="clip0_3_160"><rect width="24" height="24" fill="white"/></clipPath></defs></svg></div></div>
  );
};

export default Header;
