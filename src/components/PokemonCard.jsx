import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const PokemonCard = ({ pokemon }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card>
        <CardMedia
          component="img"
          alt={pokemon.name}
          height="140"
          image={pokemon.sprites.front_default}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {pokemon.types.map((type) => type.type.name).join(', ')}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PokemonCard;
