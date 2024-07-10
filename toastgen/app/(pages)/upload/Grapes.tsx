import React from 'react';

interface GrapesProps {
  className?: string;
}

const Grapes: React.FC<GrapesProps> = ({ className }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="5" r="5" />
    <circle cx="23" cy="12" r="5" />
    <circle cx="41" cy="12" r="5" />
    <circle cx="32" cy="19" r="5" />
    <circle cx="23" cy="26" r="5" />
    <circle cx="41" cy="26" r="5" />
    <circle cx="32" cy="33" r="5" />
    <circle cx="23" cy="40" r="5" />
    <circle cx="41" cy="40" r="5" />
    <circle cx="32" cy="47" r="5" />
    <circle cx="32" cy="54" r="5" />
  </svg>
);

export default Grapes;
