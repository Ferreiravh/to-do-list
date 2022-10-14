import React from "react";
import { Card } from "react-bootstrap";

const { Body, Title, Text } = Card;

export default function Task({ title, description }) {
  return (
    <Card className="Task">
      <Body>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Body>
    </Card>
  );
}
