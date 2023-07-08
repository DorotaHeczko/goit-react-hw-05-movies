import { NavList, ListItem } from './AppMenu.styled';
import React from 'react';

export const AppMenu = () => {
  return (
    <ListItem>
      <NavList to="/">Home</NavList>
      <NavList to="/movies">Movies</NavList>
    </ListItem>
  );
};
