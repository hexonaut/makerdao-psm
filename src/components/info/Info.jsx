import React from 'react';
import PropTypes from 'prop-types';
import '../input/Input.scss';
import './Info.scss';

const Info = ({ value, img }) => (
  <div className={`Input Info ${img ? 'HasImg' : ''}`}>
    {img && <img className="Img" src={img} alt="Icon" />}
    {value}
  </div>
);

Info.propTypes = {
  value: PropTypes.string,
  img: PropTypes.string,
};

Info.defaultProps = {
  value: '',
  img: '',
};

export default Info;
