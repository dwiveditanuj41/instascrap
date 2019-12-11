import React, { useEffect, useState } from "react";
import { db } from "./Config";
import { Grid } from "semantic-ui-react";
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
  useEffect(() => {
    db.collection("users")
      .doc(props.match.params.user)
      .get()
      .then(postData => {
        console.log(postData);
        setData(postData._document.proto.fields);
      });
  }, [props]);

  if (data) {
    Object.keys(data).map((key, item) => {
      renderCard(data[key]);
    });
  }

  return <div>null</div>;
};

export default Website;
