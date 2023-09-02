import React, { FC, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FormControlProps } from "react-bootstrap/FormControl";
import { UserDto } from "../../api/dto";

interface UserSelectionDialogProps {
  show: boolean;
  onClose: () => void;
  users: UserDto[];
  onUserSelect: (user?: UserDto | null) => void;
}

const UserSelectionDialog: FC<UserSelectionDialogProps> = (props) => {
  const [selectedUser, setSelectedUser] = useState<UserDto | null>();

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userId = e.target.value;
    const user = props.users.find((u) => u.id!.toString() === userId) || null;
    setSelectedUser(user);
  };

  const handleOK = () => {
    props.onUserSelect(selectedUser);
    props.onClose();
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="userSelection">
            <Form.Label>Select a User to transfer the key:</Form.Label>
            <Form.Control
              as="select"
              onChange={handleUserChange}
              value={selectedUser?.id || ""}
            >
              <option value="">-- Select User --</option>
              {props.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleOK}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserSelectionDialog;
