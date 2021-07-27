import React from 'react';
import './mentorSignupStyles.css'
import AvailabilitySchedule from '../availabilitySchedule/availabilitySchedule';

function MentorSignup() {
  return (
    <div className="mentor-signup-container">
        <div className="domain-select-container">
            <label className="domain-label">Domain - </label>
            <select className="domain-select">
                <option value="Backend">Backend</option>
                <option value="Backend">Backend</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Mobile App Development">Mobile App Development</option>
            </select>
        </div>
        <div>
            <h4 className="availability-schedule-signup-header">Tell us about your availability to take calls</h4>
            <AvailabilitySchedule />
        </div>
    </div>
  );
}

export default MentorSignup;