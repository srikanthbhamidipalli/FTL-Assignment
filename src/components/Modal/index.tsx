import React, { useEffect, ReactNode } from "react";

import CloseIcon from "../../Icons/CloseIcon";

import {
  ModalContainer,
  OverLayContainer,
  ContentContainer,
  DialogContainer,
  IconContainer,
  ChildrenContainer,
} from "./styledComponents";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = (props: ModalProps) => {
  useEffect(() => {
    window.addEventListener("keydown", listenKeyboard);
    const { show } = props;
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", listenKeyboard);
      document.body.style.overflow = "unset";
    };
  });

  const listenKeyboard = (event: any): void => {
    const { onClose } = props;
    if (event.key === "Escape" || event.keyCode === 27) {
      onClose();
    }
  };

  const onOverlayClick = (): void => {
    const { onClose } = props;
    onClose();
  };

  const onDialogClick = (event: any): any => {
    event.stopPropagation();
  };

  const { show, children, onClose } = props;
  return show ? (
    <ModalContainer>
      <OverLayContainer />
      <ContentContainer onClick={onOverlayClick}>
        <DialogContainer onClick={onDialogClick}>
          <ChildrenContainer>{children}</ChildrenContainer>
          <IconContainer onClick={onClose} data-testid={`modal-close-icon`}>
            <CloseIcon />
          </IconContainer>
        </DialogContainer>
      </ContentContainer>
    </ModalContainer>
  ) : null;
};

export default Modal;
