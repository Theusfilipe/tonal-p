import React from 'react';

interface CardProps {
  patientName: string;
  appointmentTime: string;
}

const FilledCard: React.FC<CardProps> = ({ patientName, appointmentTime }) => {
  return (
    <div className="card">
      <h3>{patientName}</h3>
      <p>Appointment Time: {appointmentTime}</p>
      {/* Add more information or components here */}
    </div>
  );
};

export default FilledCard;