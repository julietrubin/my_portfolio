import React from "react"
import PropTypes from "prop-types"
import {isMobile} from 'react-device-detect';
import classNames from 'classnames/bind';

const DeviceWrapper = ({ children, styles, tag: Tag }) => {
  let cx = classNames.bind(styles);
  let container = cx({
    mobile: isMobile, 
    desktop: !isMobile,
    container: true,
  });

  return (
    <Tag className={container}>
        {children}
    </Tag>
  )
}

DeviceWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

DeviceWrapper.defaultProps = {
    tag: "div",   
}
export default DeviceWrapper