import React, { useRef, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import IDX from "./EmbedScript";
import styled from "styled-components";
import { useStaticQuery } from "gatsby";
import { WMKLink } from "wmk-lib";
import Theme from "../util/ThemeOptions";
import { colors } from "../util/palette";

const SearchWrap = styled(Row)`
margin-right: -30px;
margin-left: -35px;
  form {
    width: 100%;
  }
  .search {
    width: 100%;
    appearance: none;
    background: none;
    border: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.8);
    color: white;
    ::placeholder {
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
    }
  }
  button.reverse {
    appearance: none;
    background: none;
    border: none;
    :hover {
      color: ${colors.hex("primary")};
    }
  }
  .rec-wrap {
    position: relative;
    .recs {
      position: absolute;
    }
  }
  .button-row {
    white-space: nowrap;
    & > div {
      padding: 0;
    }
  }
  .submit-advanced-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px
  }
`;

const FormWrap = styled(Form)`
  select {

  }
  input::placeholder {
    color: #4A5057;
  }
  input[type="input"] {
    width: 107%;
  }
`;

const ButtonWrap = styled(Button)`
  background-color: ${colors.hex("primary")};
  border-color: ${colors.hex("primary")};  
  padding: 5px 30px;
  &:hover {
    background-color: ${colors.hover("primary")};
    border-color: ${colors.hex("primary")};
  }
`;

const selCity = "-Select a City-";
// const selMore = "-More Options-";

const IDXSearch = ({query}) => {
  const [cityList, setCityList] = useState();
  const [stopLoop, setStopLoop] = useState(true);
  const idxRef = useRef();
  const selRef = useRef();
  const priceRef = useRef();

  const { communities } = useStaticQuery(query);

  useEffect(() => {
    if (!stopLoop) setStopLoop(true);
    let idxTimer = setTimeout(() => {
      const searchBox = idxRef.current;
      const citySelect = searchBox.querySelectorAll("select")[1];
      const options = citySelect.querySelectorAll("option");
      const cities = [];
      options.forEach((opt) => {
        cities.push({ value: opt.value, name: opt.innerHTML });
      });
      cities.shift();
      setCityList(cities);
    }, 5000);
    return () => clearTimeout(idxTimer);
  }, [stopLoop]);

  const citySearch = (value) => {
    let found = false;
    cityList.forEach((city) => {
      if (city.name === value) {
        found = city.value;
      }
    });
    return found;
  };

  const handleSelectCity = (event) => {
    const { value } = event.target;
    switch (true) {
      case value === selCity:
        break;
      // case value === selMore:
      //   if (link && link.url) window.location = link.url;
      //   break;
      default:
        const city = idxRef.current.querySelector("select[id^=IDX-qsCityList]");
        city.value = citySearch(value);
      //form.submit();
    }
  };

  const handleMaxPrice = (event) => {
    const { value } = event.target;
    switch (true) {
      case value === null:
        break;
      default:
        const maxPrice = idxRef.current.querySelector("input[id^=IDX-qsMaxPrice]");
        maxPrice.value = value;
      //form.submit();
    }
  };

  const handleSubmit = () => {
    const form = idxRef.current.querySelector("form");
    if (form) {
      if (selRef.current.value !== selCity) form.submit();
    }
  };

  return (
    <SearchWrap className="flex-column">
      <Col className="button-col">
        <Row className="button-row">
          <Col>
            <FormWrap style={{ display: "flex", justifyContent: "center" }}>
              <Form.Control
                as="select"
                custom
                ref={selRef}
                onBlur={(e) => handleSelectCity(e)}
                style={{ maxWidth: "400px" }}
              >
                <option>{selCity}</option>
                {communities &&
                  communities.edges &&
                  communities.edges.length &&
                  communities.edges.map((edge,i) => {
                    const { title } = edge.node;
                    return <option key={title+i}>{title}</option>;
                  })}
                {/* <option>{selMore}</option> */}
              </Form.Control>
              <div style={{width: '40px'}} />
              <Form.Control
                type="input"
                placeholder="Max Price"
                maxPrice
                ref={priceRef}
                onBlur={(e) => handleMaxPrice(e)}
                style={{ maxWidth: "400px" }}
              />              
            </FormWrap>
            <div className="submit-advanced-wrap">
              <ButtonWrap onClick={handleSubmit}>Submit</ButtonWrap>
              <WMKLink className="advanced" to={Theme.paths.idx+`search/advanced`} target="blank" style={{color: colors.hex("white"), textDecoration: 'underline', marginTop: '15px', fontSize: '1.2rem'}} >Advanced Search</WMKLink>
            </div>            
          </Col>
        </Row>
      </Col>
      <Col className="hidden">
        <IDX id={18242} type="quicksearchjs" ref={idxRef} />
      </Col>
    </SearchWrap>
  );
};

export default IDXSearch;
