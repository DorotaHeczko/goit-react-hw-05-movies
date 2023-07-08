import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 400px;
  background-color: black;
  margin-bottom: 44px;
  text-decoration: none;

`;

export const FilmList = styled('div')`
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

`;

export const MovieTitle = styled('h2')`
  font-size: 20px;
  color: rgb(255, 255, 255);
  text-align: center;
  
`;

export const TrendingTitle = styled('h1')`
  text-align: center;
  font-weight: 900;
  font-size: 40px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`;

export const LinkButtonStyle = styled(Link)`
  display: inline-block;
  padding: 8px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 8px;
`;

export const MoviesContainer = styled('form')`
  display: flex;
  gap: 25px;
  padding: 25px;
`;



export const MoviesSearchBtn = styled('button')`
  font-size: 20px;
  background-color: #382d2d;
  color: white;
  cursor: pointer;
  border-radius: 8px;
`;



export const MoviesInput = styled('input')`
  padding: 10px;
  font-size: 20px;
  border-radius: 8px;
  outline: none;
`;

export const ExtraMovieTitle = styled('h3')`
  margin-top: 0;
  font-size: 25px;
`;

export const ExtendedMovieDetails = styled('div')`
  padding: 50px;
`;




export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 15px;
  text-decoration: none;
  font-size: 25px;
  color: #000000d8;
  border-radius: 8px;
`;

export const LinkBox = styled('div')`
  padding: 30px;
`;

export const NotMatchBlock = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NotMatchLink = styled(Link)``;
export const NotMatchText = styled('p')`
  font-size: 40px;
`;



