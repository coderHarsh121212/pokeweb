import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Container, Grid } from "@material-ui/";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const fetchedPokemon = await Promise.all(
        response.data.results.map(async (p) => {
          const pokeDetails = await axios.get(p.url);
          return pokeDetails.data;
        })
      );
      setPokemon(fetchedPokemon);
    };
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <TextField
        label="Search Pokémon"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Grid container spacing={3}>
        {filteredPokemon.map((p) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
            <PokemonCard pokemon={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;
