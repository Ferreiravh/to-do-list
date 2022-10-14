import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function EditTaskModal({
  show = false,
  statuses = [],
  onSave = () => {},
  onClose = () => {},
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const resetState = () => {
    setTitle("");
    setDescription("");
    setStatus(statuses[0] || "");
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Editing a task:</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="My Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Description of your task"
              style={{ minHeight: "75px" }}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              aria-label="Default select example"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              {statuses.map((status) => (
                <option value={status}>{status}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            resetState();
            onClose();
          }}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            resetState();
            onSave({ title, description, status });
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
