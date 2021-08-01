import React, { useEffect, useState } from "react";
import '../Api/api';
import MyCard from "../components/Scores/MyCard";
import { getMatches } from "../Api/api";
import { Container, Grid } from "@material-ui/core";

const Score = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="temp">
      <div className="App">
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div> 
    </div>
  );
};

export default Score;


