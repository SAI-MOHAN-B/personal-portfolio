import React from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const Icon = dynamic(() => import('@iconify/react').then(mod => mod.Icon), {
  ssr: false,
});

// ----------------------------------------------------------------------

export default function Iconify({ classes, icon }) {
  return <Icon className={classes} icon={icon} />;
}

Iconify.propTypes = {
  classes: PropTypes.string,
  icon: PropTypes.string,
};
