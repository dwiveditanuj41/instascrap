import React from "react";
import { Card } from "semantic-ui-react";
const Cards = ({ data }) => {
  console.log(data);
  return (
    <Card
      image={data.mapValue.fields.media_url.stringValue}
      header={data.mapValue.fields.username.stringValue}
      description={data.mapValue.fields.caption.stringValue}
    />
  );
};

export default Cards;
