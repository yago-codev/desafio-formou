import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1rem 0 1rem 3.4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  position: relative;

  .logo {
    margin-right: 116px;
    color: ${(props) => props.theme.title === 'dark' && '#FFFFFF'};

    text-shadow: ${(props) =>
      props.theme.title === 'dark' &&
      `0 0 10px #FFFFFF,
      0 0 50px #FFFFFF,
      0 0 100px #FFFFFF,
      0 0 300px #FFFFFF`};
  }

  h1 {
    font-size: 20px;
  }

  .first-link {
    margin: 0;
    position: relative;

    &:after {
      content: '';
      width: 1px;
      height: 40px;
      background-color: ${(props) => props.theme.colors.border};
      position: absolute;
      top: 0;
      right: -21px;
    }
  }

  a {
    margin-left: 69px;
  }

  .normal {
    padding: 8px 26.5px;
    border-radius: 8px;
    transition: all 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.btn_bg_tertiary};

      box-shadow: ${(props) =>
        props.theme.title === 'dark' &&
        `0 0 5px ${props.theme.colors.btn_bg_tertiary},
      0 0 25px ${props.theme.colors.btn_bg_tertiary},
      0 0 50px ${props.theme.colors.btn_bg_tertiary},
      0 0 100px ${props.theme.colors.btn_bg_tertiary}`};

      h1 {
        color: ${(props) =>
          props.theme.title === 'dark' && props.theme.colors.primary};
      }
    }
  }

  .active {
    background-color: ${(props) => props.theme.colors.btn_bg_tertiary};
    border-radius: 8px;
    box-shadow: ${(props) =>
      props.theme.title === 'dark' &&
      `0 0 5px ${props.theme.colors.btn_bg_tertiary},
      0 0 25px ${props.theme.colors.btn_bg_tertiary},
      0 0 50px ${props.theme.colors.btn_bg_tertiary},
      0 0 100px ${props.theme.colors.btn_bg_tertiary}`};

    h1 {
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.font_secondary
          : props.theme.colors.primary};
      margin: 0;
    }
  }

  .switcher {
    position: absolute !important;
    right: 3.4rem;

    .react-switch-bg {
      box-shadow: ${(props) =>
        props.theme.title === 'dark' &&
        `0 0 5px ${props.theme.colors.btn_bg_tertiary},
      0 0 25px ${props.theme.colors.btn_bg_tertiary},
      0 0 50px ${props.theme.colors.btn_bg_tertiary},
      0 0 100px ${props.theme.colors.btn_bg_tertiary}`};
    }

    .react-switch-handle {
      box-shadow: none !important;
    }
  }
`;
