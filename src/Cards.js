import React from "react";
import { Card } from "semantic-ui-react";
const Cards = ({ data }) => {
  console.log(data);
  return (
    <Card
      image={data.mapValue.fields.media_url}
      header={data.mapValue.fields.username}
      description={data.mapValue.fields.caption}
    />
  );
};

export default Cards;
