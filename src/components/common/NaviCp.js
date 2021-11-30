import React from 'react';
import { Link } from 'react-router-dom';

const NaviCp = ({ type, link }) => {
  return <Link to={link}>{type === 'instagram' ? 'icon' : type}</Link>;
};

export default NaviCp;
