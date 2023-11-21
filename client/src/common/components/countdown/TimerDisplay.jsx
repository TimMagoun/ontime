import { formatDisplay } from 'common/utils/dateConfig';
import PropTypes from 'prop-types';
import { memo } from 'react';

import './TimerDisplay.scss';

const TimerDisplay = ({ time, small, isWrapUp, isNegative, hideZeroHours }) => {

  const display =
    (time === null || typeof time === 'undefined' || isNaN(time))
      ? '-- : -- : --'
      : formatDisplay(time, hideZeroHours);

  const classes = `timer ${small ? 'timer--small' : ''}  ${isNegative ? 'timer--finished' : ''} ${isWrapUp ? 'timer--wrapup' : ''}`;

  return <div className={classes}>{display}</div>;
};

export default memo(TimerDisplay);

TimerDisplay.propTypes = {
  time: PropTypes.number,
  small: PropTypes.bool,
  isWrapUp: PropTypes.bool,
  isNegative: PropTypes.bool,
  hideZeroHours: PropTypes.bool,
};
