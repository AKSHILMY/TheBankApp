import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Conformation({ data, result }) {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  const handleClick = (val) => {
    handleClose();
    result(val);
  };

  return (
    <>
      <Modal
        size="sm"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>{`Are you sure to delete ${data} ?`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClick(false)}>
            No
          </Button>
          <Button variant="secondary" onClick={() => handleClick(true)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Conformation;
