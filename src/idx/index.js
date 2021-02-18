import Grid from "./DiverseSolutions/Grid/DivSolGrid";
import Hero from "../elements/Hero/Hero";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export const IDXWrap = styled(Container)`
  padding: 2rem;
  .featured {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const IDXGrid = Grid;
export const IDXHero = Hero;
