import React, { useEffect, useState } from "react";
import { db } from "./Config";
import styled from "styled-components";
import { Grid, Card } from "semantic-ui-react";
import Cards from "./Cards";

const renderCard = data => {
  return (
    <Grid>
      <Cards data={data} />
    </Grid>
  );
};

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
      {(() => {
        if (data) {
          return (
            <Grid columns={4} divided>
              {Object.keys(data).map((key, item) => {
                return (
                  <Grid.Column>
                    <StyledCard
                      image={data[key].mapValue.fields.media_url.stringValue}
                      header={data[key].mapValue.fields.username.stringValue}
                      description={
                        data[key].mapValue.fields.caption.stringValue
                      }
                    />
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

const StyledCard = styled(Card)`
  width: 0.05em;
  height: 20em;
`;
