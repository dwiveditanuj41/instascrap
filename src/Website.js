import React, { useEffect, useState } from "react";
import { db } from "./Config";
import styled from "styled-components";
import { Grid } from "semantic-ui-react";

import Navbar from "./Navbar";
const Website = props => {
  const [data, setData] = useState(null);

  console.log(data);

  useEffect(() => {
    db.collection("users")
      .doc(props.match.params.user)
      .onSnapshot(snapshot => {
        setData(snapshot._document.proto.fields);
      });
  }, [props]);

  return (
    <React.Fragment>
      <Navbar />
      <br /> <br />
      <br /> <br />
      {(() => {
        if (data) {
          return (
            <Grid columns={8} divided>
              {Object.keys(data).map((key, item) => {
                return (
                  <Grid.Column>
                    <StyledContent>
                      {" "}
                      <b>
                        {data[key].mapValue.fields.username.stringValue}
                      </b>{" "}
                      {data[key].mapValue.fields.caption.stringValue}
                    </StyledContent>
                    <StyledImage
                      src={data[key].mapValue.fields.media_url.stringValue}
                    />
                    <br />
                    <hr />
                  </Grid.Column>
                );
              })}
            </Grid>
          );
        }
        if (!data) {
          return <div>Loading...</div>;
        }
      })()}
    </React.Fragment>
  );
};

export default Website;

const StyledImage = styled.img`
  display: block;
  max-width: 60%;
  height: auto;
  border: 12px solid white;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 3px 4px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledContent = styled.p`
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
  align: center;
`;
