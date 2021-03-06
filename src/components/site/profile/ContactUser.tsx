import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton/IconButton';

type Props = {
    profileInfo: any,
    contactModalOff: () => void,
    contactModal: boolean
}

const ContactUser = (props: Props) => {
    return (
        <>
            <Modal className="create-pet-modal" isOpen={true}>
                <ModalHeader>Contact Info<IconButton className="exit-btn-contact" onClick={props.contactModalOff}><ClearIcon /></IconButton></ModalHeader>
                <ModalBody>
                    <h4>
                        {props.profileInfo.contact}
                    </h4>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ContactUser;
