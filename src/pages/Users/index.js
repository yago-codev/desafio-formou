import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Table } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <Table className="animated fadeInUp">
      <thead>
        <tr>
          <td>NOME</td>
          <td>EMAIL</td>
          <td>TAREFAS PENDENTES</td>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link className="btn-tasks" to={`/user/${user.id}`}>
                Ver
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
