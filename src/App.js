import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button, Container, Navbar, NavbarBrand } from "react-bootstrap";
import { v4 as uuid } from "uuid";

import "./App.css";
import Column from "./components/Column";
import EditTaskModal from "./components/EditTaskModal";

function App() {
  const [columns, setColumns] = useState([
    {
      title: "Upcoming",
      tasks: [
        {
          title: "Titulo1",
          description: "Text1",
        },
        {
          title: "Titulo2",
          description: "Text2",
        },
      ],
    },
    {
      title: "Ongoing",
      tasks: [
        {
          title: "Titulo1",
          description: "Text1",
        },
        {
          title: "Titulo2",
          description: "Text2",
        },
      ],
    },
    {
      title: "Done",
      tasks: [
        {
          title: "Titulo1",
          description: "Text1",
        },
        {
          title: "Titulo2",
          description: "Text2",
        },
      ],
    },
  ]);

  const statuses = columns.map(({ title }) => title); // statuses = [Upcoming, Ongoing, Done]
  const [modalShow, setModalShow] = useState();

  return (
    <div className="App">
      <Navbar>
        <Container>
          <Navbar.Brand>ToDo List</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Button
              onClick={() => {
                setModalShow(true);
              }}
            >
              Add Task
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <EditTaskModal
        show={modalShow}
        statuses={statuses}
        onSave={(task) => {
          setColumns(
            columns.map(({ title, tasks }) =>
              title === task.status
                ? { title, tasks: [...tasks, task] }
                : { title, tasks }
            )
          );
          setModalShow(false);
        }}
        onClose={() => {
          setModalShow(false);
        }}
      />
      <div className="Columns">
        {columns.map(({ title, tasks }) => (
          <Column title={title} tasks={tasks} />
        ))}
      </div>
    </div>
  );
}

export default App;
