import React, { useState } from 'react';
import useList from '../hooks/useList';

const TaskComponent = () => {
  const tasks = useList([]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.length > 0) {
      tasks.push(newTask);
      setNewTask('');
    } else {
      alert('Please, write your first task! ')
    }
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleReset = (e) => {
    e.preventDefault();
    tasks.clear();
  };

  const handleSort = (e) => {
    e.preventDefault();
    tasks.sortList();
  };

  const handleReverse = (e) => {
    e.preventDefault();
    tasks.reverseList();
  };

  return (
    <div>
      <h2>
        Custom Hook, useList. <br /> Your Task list:
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="New Task"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          className='form-control'
          style={{width:'40%', margin:'2rem auto'}}
        />
        <button className='btn btn-success m-2' type="submit"> Create Task </button>
        {!tasks.isEmpty() ? (
          <button className='btn btn-danger m-2'  onClick={handleReset}> Reset List </button>
        ) : null}
        {!tasks.isEmpty() ? (
          <button className='btn btn-info m-2' onClick={handleSort}> Sort List </button>
        ) : null}
        {!tasks.isEmpty() ? (
          <button className='btn btn-info m-2' onClick={handleReverse}> reverse List </button>
        ) : null}
      </form>

      {tasks.isEmpty() ? (
        <p>Task List is Empty</p>
      ) : (
        <table
          style={{ width: '90%', margin: '2rem auto' }}
          className="table table-striped"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title </th>
              <th scope="col"> Delete </th>
            </tr>
          </thead>
          <tbody>
            {tasks.value.map((task, index) => (
              <tr key={index}>
                <th scope="row"> {index + 1} </th>
                <td>{task}</td>
                <td>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => tasks.remove(index)}
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskComponent;

// {/* <div>
//           {tasks.value.map((task, index) => (
//             <p key={index}>{task}</p>
//           ))}
//         </div> */}
