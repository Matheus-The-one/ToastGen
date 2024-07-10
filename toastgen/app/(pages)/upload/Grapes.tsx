import React from 'react';

interface GrapesProps {
  className?: string;
}

const Grapes: React.FC<GrapesProps> = ({ className }) => (
  <img src="/grp.png" alt="" />
);

export default Grapes;
