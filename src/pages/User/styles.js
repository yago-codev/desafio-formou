import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  margin: 1.8rem 2rem;
  padding: 2.22rem;

  div {
    width: 7.33rem;
    height: 7.33rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  ul {
    margin-left: 2.66rem;

    li:first-child {
      font-size: 18px;
      font-weight: bold;
    }

    li {
      font-size: 16px;
      padding: 0.4rem 0;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.font_primary
          : props.theme.colors.font_secondary};

      a {
        text-decoration: underline;

        color: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors.font_secondary
            : props.theme.colors.font_primary};
      }
    }
  }
`;
