import React from 'react'

export default function ConfirmationModal({title, message, closeModal,modalData,successAction }) {
  return (
    <div>
        {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label htmlFor="confirmation-modal" onClick={()=>successAction(modalData)} className="btn">Yay!</label>
      <label onClick={()=>closeModal()} className="btn">Close</label>
    </div>
  </div>
</div>
    </div>
  )
}
