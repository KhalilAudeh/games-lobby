import React from "react";
import { Col, Card, Image, Badge } from "react-bootstrap";

const GameCard = ({ game, index }) => {
  return (
    <Col sm={6} md={3}>
      <Card className="mb-5 pb-2 text-center" bg="light" border="info">
        <Card.Header className="text-uppercase">
          {game.status} game - {index + 1}
        </Card.Header>
        <Card.Body>
          <Image alt="game-icon-img" src={game.icon_2} rounded />
          <Card.Title className="fw-bold mt-3">{game.name}</Card.Title>
          <Card.Text className="fst-italic">
            <Card.Title className="text-muted text-capitalize">
              more details <Badge bg="warning">2</Badge>
            </Card.Title>
            {game.front_game_id} ID & {game.provider_title}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default GameCard;
