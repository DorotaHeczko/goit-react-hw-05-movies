import { NotMatchBlock, NotMatchText, NotMatchLink } from '../Pages.styled';

export const NotFound = () => {
  return (
    <NotMatchBlock>
      <NotMatchText>Sorry, something wrong</NotMatchText>
      <NotMatchLink to="/">Back to main page</NotMatchLink>
    </NotMatchBlock>
  );
};
