import React from "react";
import { Card } from "semantic-ui-react";

const Cards = ({ data }) => {
  return <Card image={data.mapValue.fields.media_url.stringValue} />;
};

export default Cards;
