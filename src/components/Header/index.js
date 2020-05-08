import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import PropTypes from 'prop-types';

import { Container } from './style';

export default function Header({ toggleTheme }) {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <h1 className="logo animated zoomIn">LOGO</h1>

      <NavLink
        to="/tasks"
        className="normal first-link animated zoomIn"
        activeClassName="active"
      >
        <h1>Tarefas</h1>
      </NavLink>

      <NavLink
        to="/users"
        className="normal animated zoomIn"
        activeClassName="active"
      >
        <h1>Usuários</h1>
      </NavLink>

      <Switch
        className="switcher"
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={30}
        offHandleColor={shade(0.05, colors.primary)}
        offColor={shade(0.3, colors.primary)}
        onColor={colors.btn_bg_tertiary}
      />
    </Container>
  );
}

Header.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
