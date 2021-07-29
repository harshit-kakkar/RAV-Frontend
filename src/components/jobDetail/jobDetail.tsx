import React from 'react';
import './jobDetailStyles.css'

interface jobInterface{
    job: {
        company_name: string, 
        role: string,
        start_date: string,
        end_date: string
    }
}

function JobDetail(props:jobInterface) {
    const {company_name, role, start_date, end_date} = props.job
    let startDate = new Date(start_date)
    let endDate = new Date(end_date)
    let startDateFormatted = startDate.toLocaleString('default', { month: 'short' }) + " " + startDate.getFullYear()
    let endDateFormatted = endDate.toLocaleString('default', { month: 'short' }) + " " + endDate.getFullYear()

  return (
    <div className="job-detail-container">
      <p className="job-detail-desc"><span className="job-role">{role}</span> at <span className="job-company-name">{company_name}</span></p>
      <p className="job-detail-time">{startDateFormatted} - {endDateFormatted}</p>
    </div>
  );
}

export default JobDetail;