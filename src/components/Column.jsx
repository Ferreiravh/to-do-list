import React from "react";
import { Card } from "react-bootstrap";
import Task from "./Task";

const { Body, Title } = Card;

export default function Column({ tasks, title }) {
  return (
    <Card className="Column">
      <Body>
        <Title>{title}</Title>
        {tasks.map(({ title, description }) => (
          <Task title={title} description={description} />
        ))}
      </Body>
    </Card>
  );
}
