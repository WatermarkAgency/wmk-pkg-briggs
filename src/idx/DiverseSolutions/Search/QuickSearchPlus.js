import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";
import { colors } from "../../../util/palette";
import { baseUrl } from "../Grid/GridItem";
import CityList from "./CityList";

const ButtonWrap = styled(Button)`
  background-color: ${colors.hex("primary")};
  border-color: ${colors.hex("primary")};
  padding: 5px 30px;
  &:hover {
    background-color: ${colors.hover("primary")};
    border-color: ${colors.hex("primary")};
  }
`;

const QuickSearchPlus = () => {
  const [activeCity, setActiveCity] = useState("");
  const [maxPrice, setMaxPrice] = useState(600000);
  const validateInputs = (active, max) => {
    if (active) {
      if (max) {
        const args =
          active !== "Any"
            ? {
                MinPrice: "0",
                MinBeds: "1",
                MinBaths: "1",
                MinImprovedSqFt: "1",
                MaxPrice: max ? parseInt(max) : "600000",
                Locations: active,
              }
            : {
                MinPrice: "0",
                MinBeds: "1",
                MinBaths: "1",
                MinImprovedSqFt: "1",
                MaxPrice: max ? parseInt(max) : "600000",
              };
        return args;
      }
    }
    return false;
  };

  const handleMax = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateInputs(activeCity, maxPrice);
    if (isValid) {
      const argArr = Object.keys(isValid);
      const argStr = argArr.reduce((acc, val) => {
        return acc + "&" + val + "=" + isValid[val];
      }, "#&PerformSearch");
      window.location.href = baseUrl + argStr;
    }
  };
  return (
    <Form style={{ display: "flex" }}>
      <CityList setActiveCity={setActiveCity} />
      <div style={{ width: "20px" }}></div>
      <Form.Control
        type="input"
        placeholder="Max Price"
        style={{ maxWidth: "400px" }}
        onBlur={handleMax}
      />
      <div style={{ width: "20px" }}></div>
      <div className="submit-advanced-wrap">
        <ButtonWrap onClick={handleSubmit}>Submit</ButtonWrap>
        {/* <WMKLink
          className="advanced"
          to={baseUrl}
          target="blank"
          style={{
            color: colors.hex("white"),
            textDecoration: "underline",
            marginTop: "15px",
            fontSize: "1.2rem",
          }}
        >
          Map Search
        </WMKLink> */}
      </div>
    </Form>
  );
};

export default QuickSearchPlus;
