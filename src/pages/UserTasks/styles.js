import styled from 'styled-components';

export const Table = styled.table`
  width: calc(100% - 4rem);
  margin: 1.8rem 2rem;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.16rem 2.44rem;
  border-spacing: 0;
  animation-delay: 0.3s;
  border-radius: 4px;

  td:first-child {
    width: 90%;
  }

  td:nth-child(2) {
    width: 10%;
  }

  thead {
    td {
      font-size: 14px;
      font-weight: bold;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.font_secondary
          : props.theme.colors.border};
    }
  }

  tbody {
    td:first-child {
      font-size: 16px;
      text-transform: capitalize;
      color: ${(props) =>
        props.theme.title === 'light'
          ? props.theme.colors.font_primary
          : props.theme.colors.font_secondary};
    }

    td {
      font-size: 14px;
      padding-top: 2.05rem;
      padding-bottom: 1.11rem;
      border-bottom: 1px solid ${(props) => props.theme.colors.border};
    }

    td:nth-child(2) {
      a {
        text-decoration: underline;
        color: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors.font_secondary
            : props.theme.colors.font_primary};
      }
    }

    td:last-child {
      .done,
      .pending {
        width: 4.66rem;
        height: 1.88rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 0.22rem;
      }

      .done {
        background-color: ${(props) => props.theme.colors.btn_bg_primary};
        color: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors.btn_font_primary
            : props.theme.colors.primary};

        box-shadow: ${(props) =>
          props.theme.title === 'dark' &&
          `0 0 5px ${props.theme.colors.btn_bg_primary},
            0 0 10px ${props.theme.colors.btn_bg_primary},
            0 0 20px ${props.theme.colors.btn_bg_primary},
            0 0 30px ${props.theme.colors.btn_bg_primary}`};
      }

      .pending {
        background-color: ${(props) => props.theme.colors.btn_bg_secondary};

        color: ${(props) =>
          props.theme.title === 'light'
            ? props.theme.colors.btn_font_secondary
            : props.theme.colors.primary};

        box-shadow: ${(props) =>
          props.theme.title === 'dark' &&
          `0 0 5px ${props.theme.colors.btn_bg_secondary},
            0 0 10px ${props.theme.colors.btn_bg_secondary},
            0 0 20px ${props.theme.colors.btn_bg_secondary},
            0 0 30px ${props.theme.colors.btn_bg_secondary}`};

        cursor: pointer;
      }
    }
  }
`;
