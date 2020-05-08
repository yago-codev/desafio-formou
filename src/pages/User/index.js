import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { RiUserLine } from 'react-icons/ri';

import api from '../../services/api';

import { Container } from './styles';

export default function User() {
  const [user, setUser] = useState('');
  const [tasks, setTasks] = useState(0);

  const { params } = useRouteMatch();

  useEffect(() => {
    api.get(`/users/${params.id}`).then((response) => setUser(response.data));

    api.get(`/todos?userId=${params.id}`).then((response) => {
      const allTasks = response.data;

      setTasks(allTasks.filter((task) => task.completed === false).length);
    });
  }, [params]);

  return (
    <Container className="animated fadeInUp">
      <div>
        <RiUserLine size={50} />
      </div>

      <ul key={user.id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>
          <Link to={`/usertasks/${user.id}`}>{tasks} Tarefas Pendentes</Link>
        </li>
      </ul>
    </Container>
  );
}
