import React, { useState, useEffect, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Loader from "../../../util/Loader";
import DivSolEmbed from "../DivSolEmbed";
import GridItem, { baseUrl } from "./GridItem";

const DivSolGrid = ({ ssid, city, state }) => {
  const [gridData, setGridData] = useState({});
  const gridRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      const doNav = () => {
        const next = gridRef.current.querySelector(
          ".dsidx-zw-ss-listing-nav-next"
        );
        if (next) next.click();
      };
      const doCur = () => {
        const curProperty = {};
        const wrapper = gridRef.current.querySelector(
          ".ds-slideshow-widget .dsidx-zw-ss-listing"
        );

        const photo = wrapper && wrapper.querySelector("img");
        const mls_ = wrapper ? photo.id.split("-") : [];
        const mls = mls_ ? mls_[mls_.length - 1] : "";
        const text =
          wrapper && wrapper.querySelector(".dsidx-zw-ss-text-container");
        const texts = wrapper
          ? text.querySelectorAll("div")
          : [{ innerHTML: "" }];
        const addr = wrapper
          ? texts[1].querySelectorAll("a")[0].childNodes
          : [{ data: "" }];
        const info = wrapper
          ? texts[2].querySelectorAll("li")
          : [
              { innerHTML: "" },
              { innerHTML: "" },
              { innerHTML: "" },
              { innerHTML: "" },
            ];
        const csz = wrapper ? addr[2].data.split(" ") : ["", "", ""];
        curProperty.photo = photo;
        curProperty.mls = mls;
        curProperty.specs = {
          type: texts[0].innerHTML,
          street: addr[0].data,
          city: csz[0],
          state: csz[1],
          zip: csz[2],
          beds: parseInt(info[0].innerHTML.split(" ")[0]),
          baths: parseInt(info[1].innerHTML.split(" ")[0]),
          sqft: parseInt(info[2].innerHTML.split(" ")[0].replace(",", "")),
          pix: parseInt(info[3].innerHTML.split(" ")[0]),
          price: wrapper
            ? parseInt(
                wrapper
                  .querySelector(".dsidx-zw-ss-price")
                  .innerHTML.replace(",", "")
                  .replace("$", "")
              )
            : 0,
          agent: wrapper ? texts[3].querySelector("li").innerHTML : "",
        };
        setGridData((old) => {
          const newObj = { ...old };
          newObj[
            curProperty.specs.street + "-" + curProperty.specs.zip
          ] = curProperty;
          return newObj;
        });
      };
      for (let i = 0; i < 11; i++) {
        setTimeout(() => {
          if (!i) {
            doCur();
          }
          doNav();
          doCur();
        }, 100);
      }
    }, 4000);
  }, [setGridData]);
  const grids = Object.keys(gridData).map((key) => gridData[key]);
  return (
    <React.Fragment>
      <div style={{ display: "none" }}>
        <DivSolEmbed
          ref={gridRef}
          id="divLocal9ba4d_"
          type="widgetTLM"
          args={{
            curWidth: 306,
            curHeight: 350,
            type: "slideshow",
            targetDomain: "WIFa+2zv4AP9hAnn4vLL1Q==",
            aid: "1515644",
            ssid, //: "87",
            productType: "1",
            muteStyles: "false",
            horzCount: "",
            city, //: "Waxhaw",
            state, //: "NC",
            maxPrice: "1000000",
            zip: "",
            currentURL: `${baseUrl}&modernView=true`,
          }}
        />
      </div>
      {grids &&
      grids.length > 0 &&
      Object.keys(gridData) &&
      Object.keys(gridData).length > 0 ? (
        <Container>
          <Row>
            {grids.map((grid, i) => {
              return (
                <Col key={"grid" + i} xs={12} sm={6} lg={4}>
                  <GridItem grid={grid} />
                </Col>
              );
            })}
          </Row>
        </Container>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default DivSolGrid;
