import React from 'react';
import './../../../styles/components/modal.scss';

const ModalEdit = ({ key, children }) => {
    return (
        <div className="modalOverlay" key={key} />,
        <div className="modalWrap">
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export default ModalEdit;