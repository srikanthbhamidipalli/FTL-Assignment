import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Modal from ".";

interface Props {
  show: boolean;
  onClose: () => void;
}

describe("Modal component tes cases", () => {
  const renderModal = (props: Props) =>
    render(
      <Modal onClose={props.onClose} show={props.show}>
        <>Content inside Modal</>
      </Modal>
    );

  it("should test if we can see close icon and check for the onClose callback when clicked on close icon", () => {
    const onClose = jest.fn();
    const { getByTestId } = renderModal({ onClose, show: true });
    getByTestId("modal-close-icon");
    fireEvent.click(getByTestId("modal-close-icon"));
    expect(onClose).toBeCalled();
  });

  it("should test for the content renderes inside the modal when the modal is opened", () => {
    const onClose = jest.fn();
    const { getByText } = renderModal({ onClose, show: true });
    getByText("Content inside Modal");
  });

  it("should test for content inside the modal should not be rendered on the screen when the modal is closed", () => {
    const onClose = jest.fn();
    const { queryByText } = renderModal({ onClose, show: false });
    expect(queryByText("Content inside Modal")).toBe(null);
  });
});
