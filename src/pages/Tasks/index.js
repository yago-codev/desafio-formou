import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Table } from './styles';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getDataAPI() {
      const responseTasks = await api.get('/todos');
      setTasks(responseTasks.data);

      const responseUsers = await api.get('/users');
      setUsers(responseUsers.data);
    }

    getDataAPI();
  }, []);

  function completeTask(id) {
    api.put(`/todos/${id}`, { completed: true }).then(() => {
      const completedTasks = [...tasks];

      completedTasks
        .filter((task) => task.id === id)
        .map((task) => (task.completed = true));

      setTasks(completedTasks);
    });
  }

  return (
    <Table className="animated fadeInUp">
      <thead>
        <tr>
          <td>TAREFA</td>
          <td>RESPONSÁVEL</td>
          <td>STATUS</td>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>

            {users.map(
              (user) =>
                user.id === task.userId && (
                  <td key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                  </td>
                )
            )}

            {task.completed ? (
              <td>
                <span className="done">Feito</span>
              </td>
            ) : (
              <td onClick={() => completeTask(task.id)}>
                <span className="pending">Pendente</span>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
