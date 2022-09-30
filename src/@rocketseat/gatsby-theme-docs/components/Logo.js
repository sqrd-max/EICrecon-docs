import React from 'react';

// Path to the logo file on your project
import rocketseatLogo from '../../../../static/banner.png';

const Logo = () => {
    return (<img src={rocketseatLogo} alt="Rocketseat logo" style={{ width: 180 }} />);
};

export default Logo;