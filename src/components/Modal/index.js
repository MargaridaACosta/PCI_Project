import React, { useState } from 'react';
import './../../styles/components/modal.scss';

const ModalAdd = ({ hideModal, toggleModal, children }) => {
    if (hideModal) return null;

    return [
        <div className="modalOverlay" onClick={() => toggleModal()} />,
        <div className="modalWrap">
            <div className="modal">
                {children}
            </div>
        </div>
    ];
}

export default ModalAdd;