import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';

import api from '../../services/api';

import { Table } from './styles';

export default function UserTasks() {
  const [tasks, setTasks] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    api
      .get(`/todos?userId=${params.id}`)
      .then((response) => setTasks(response.data));
  }, [params]);

  async function completeTask(id) {
    api.put(`/todos/${id}`, { completed: true });

    const completedTasks = [...tasks];

    completedTasks
      .filter((task) => task.id === id)
      .map((task) => (task.completed = true));

    setTasks(completedTasks);
  }

  return (
    <Table className="animated fadeInUp">
      <thead>
        <tr>
          <td>TAREFAS PENDENTES</td>
          <td>STATUS</td>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
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
