import React from "react";
import styled from "styled-components";
import { colors } from "../../../../vars/palette";
import get from "lodash/get";
import { Row, Col } from "react-bootstrap";
import { FaBath, FaBed } from "react-icons/fa";

export const baseUrl = "https://briggsamerican.com/map";

const StyledGrid = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  margin: 0.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  .specs {
    opacity: 0;
    left: -50%;
    transition: all 0.3s ease;
  }
  :hover {
    box-shadow: 0px 3px 10px ${colors.rgba("black", 0.45)};
    transition: all 0.3s ease;
    .specs {
      opacity: 1;
      left: 0;
      transition: all 0.3s ease;
      :hover {
        cursor: pointer;
      }
    }
  }
`;

const MapSearchLink = styled.a`
  position: absolute;
  padding: 0.5rem;
  background: black;
  color: ${colors.hex("white")};
  :hover {
    color: ${colors.hover("tertiary")};
    text-decoration: none;
  }
  font-size: 0.8rem;
  bottom: 0;
`;

const GridItem = ({ grid }) => {
  const src = get(grid, "photo.src");
  const street = get(grid, "specs.street");
  const city = get(grid, "specs.city");
  const state = get(grid, "specs.state");
  const zip = get(grid, "specs.zip").slice(0, 5);

  const beds = get(grid, "specs.beds");
  const baths = get(grid, "specs.baths");
  const agent = get(grid, "specs.agent");
  const sqft = get(grid, "specs.sqft");
  const price = get(grid, "specs.price");
  const mls = get(grid, "mls");
  return (
    <StyledGrid>
      <img
        src={src}
        alt={street + ", " + city + ", " + grid.specs.state}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <h6
        style={{
          position: "absolute",
          padding: ".5rem",
          background: colors.hover("secondary"),
          color: "white",
        }}
      >
        ${price.toLocaleString()}
      </h6>
      <MapSearchLink
        className="specs"
        href={`${baseUrl}#&MLSNumber=${mls}&PerformSearch`}
      >
        <Row className="flex-column">
          <Col>
            <span
              style={{
                color: colors.hex("primary"),
                fontSize: "1.1rem",
              }}
            >
              {grid.specs.street}
            </span>
          </Col>
          <Col>
            {city}, {state} {zip}
          </Col>
          <Col>
            {beds} <FaBed aria-label="beds" title="bedrooms" /> | {baths}{" "}
            <FaBath aria-label="baths" title="bathrooms" /> | {sqft.toLocaleString()} sqft
          </Col>
          <Col style={{ color: "#ccc", fontSize: ".7rem" }}>{agent}</Col>
        </Row>
      </MapSearchLink>
    </StyledGrid>
  );
};

export default GridItem;
