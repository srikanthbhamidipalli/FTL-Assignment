import React from "react";
import { action } from "@storybook/addon-actions";

import Modal from ".";

export default {
  component: Modal,
  title: "Modal component",
};

export const BaseModal = () => (
  <Modal show={true} onClose={action("Clicked CloseIcon")}>
    <div>This is a Sample data inside the modal</div>
  </Modal>
);
