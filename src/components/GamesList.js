import React from "react";
import { Row, Alert } from "react-bootstrap";
import GameCard from "./GameCard";

const GamesList = ({ gamesList }) => {
  return (
    <Row>
      {gamesList.length > 0 ? (
        gamesList.map((game, index) => (
          <GameCard game={game} gameNumber={index} />
        ))
      ) : (
        <Alert variant="warning" className="col-6 mx-3">
          No results found for your search, try another search!
        </Alert>
      )}
    </Row>
  );
};

export default GamesList;
