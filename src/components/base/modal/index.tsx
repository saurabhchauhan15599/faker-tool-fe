import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { IModalProps } from './modal.types';
import { ModalClose } from '@mui/joy';

const BasicModalDialog: React.FC<IModalProps> = ({ children, open, setOpen, title, subtitle, setEdit, width = 800, isClose = true }) => {
  return (
    <React.Fragment>
      <Modal open={open} onClose={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setOpen(false);
        setEdit && setEdit(false);
      }}>

        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{ width: width, height: "fit-content" }}
        >
          {isClose && <ModalClose variant="outlined" />}
          {title && <Typography id="basic-modal-dialog-title" component="h2">
            {title}
          </Typography>}
          {subtitle && <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            {subtitle}
          </Typography>}
          {children}
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default BasicModalDialog