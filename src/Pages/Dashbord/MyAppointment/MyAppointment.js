import React from 'react'

export default function MyAppointment({i, appointment}) {
  return (
    <tbody>
      <tr className="hover">
        <th>{i+1}</th>
        <td>{appointment.patientName}</td>
        <td>{appointment.treatment}</td>
        <td>{appointment.appointmentDate}</td>
        <td>{appointment.slot}</td>
      </tr>
    </tbody>
  )
}
