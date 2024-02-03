import React from "react";
import { Row, Col } from "react-bootstrap";
import Select from "react-select";

const FilterByProvider = ({
  providerOptions,
  setSelectedProvider,
  selectedProvider,
}) => {
  return (
    <Row className="mb-5">
      <Col sm={6} md={3}>
        <Select
          options={providerOptions}
          isClearable
          placeholder="Filter by provider title..."
          onChange={(selectProvider) => {
            setSelectedProvider(selectProvider);
          }}
          value={selectedProvider}
        />
      </Col>
    </Row>
  );
};

export default FilterByProvider;
