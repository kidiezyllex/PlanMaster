"use client";
import React, { useState } from 'react';
import TaskCompleteRow from '../../component/TaskCompleteRow';  
import TaskProcessRow from '../../component/TaskProcessRow';  
import TaskToDoRow from '../../component/TaskToDoRow';  
import AddTaskButton from '../../component/AddTaskButton'; 

const TaskManagementUI = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', subtasks: 1, status: 'TO DO', completed: true },
    { id: 2, name: 'Task 2', subtasks: 3, status: 'COMPLETE', completed: false },
    { id: 3, name: 'Task 3', subtasks: 4, status: 'IN PROGRESS', completed: true },
    { id: 4, name: 'Task 4', subtasks: 2, status: 'COMPLETE', completed: true }
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white text-gray-800">
      {/* ... Toolbar ... */}
      <div className="flex items-center p-3 border-b border-gray-200 gap-3">
        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: layout-grid */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-grid w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
          </svg>
          Group: Status
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: list */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l11 0" />
            <path d="M9 12l11 0" />
            <path d="M9 18l11 0" />
            <path d="M5 6l0 .01" />
            <path d="M5 12l0 .01" />
            <path d="M5 18l0 .01" />
          </svg>
          Subtasks
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: layout-columns */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-columns w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M12 4l0 16" />
          </svg>
          Columns
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: filter */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 4h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v7l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227z" />
          </svg>
          Filter
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
           {/* Tabler Icon: target */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-target w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
             <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
             <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          </svg>
          Me mode
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: user-circle */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
             <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
             <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
          Assignee
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: circle-check */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle-check w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
             <path d="M9 12l2 2l4 -4" />
          </svg>
          Closed
        </div>

        {/* ADDED: Users Button */}
        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          {/* Tabler Icon: users */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users w-4 h-4" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
          </svg>
          Users
        </div>

        {/* Search */}
        <div className="flex items-center ml-auto border border-gray-200 rounded px-3 py-1.5">
          {/* Tabler Icon: search */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search w-4 h-4 text-gray-400 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
             <path d="M21 21l-6 -6" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none text-sm w-48"
          />
        </div>

        <div className="flex items-center justify-center p-1.5 rounded hover:bg-gray-100 cursor-pointer">
          {/* Tabler Icon: dots */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots w-4 h-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
             <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
             <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
             <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
             <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
        </div>
      </div>


      {/* Status Group - Complete*/}
      <div className="mt-2">
        <div className="flex items-center px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 mr-2">
            {/* Tabler Icon: check */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check w-3 h-3 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <div className="text-xs font-bold uppercase">Complete</div>
          <div className="ml-2 text-xs text-gray-500">{tasks.filter(task => task.status === 'COMPLETE').length}</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">
            <AddTaskButton
              setTasks={setTasks}
              tasks={tasks}
              defaultStatus="COMPLETE"
            />
          </div>
          <div className="ml-auto cursor-pointer">
            {/* Tabler Icon: plus */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M12 5l0 14" />
               <path d="M5 12l14 0" />
            </svg>
          </div>
        </div>

        {/* Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="w-10 px-4 py-3"></th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3">Due date</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Comments</th>
              <th className="w-10 px-4 py-3"></th>
              <th className="w-10 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.filter(task => task.status === 'COMPLETE').map(task => (
              <TaskCompleteRow key={task.id} task={task} />
            ))}
            <tr className="border-b border-gray-200 hover:bg-gray-50 text-gray-500 cursor-pointer">
              <td colSpan={9} className="px-4 py-3">
                <div className="flex items-center pl-10">
                  {/* Tabler Icon: plus */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                     <path d="M12 5l0 14" />
                     <path d="M5 12l14 0" />
                  </svg>
                  <AddTaskButton
                    setTasks={setTasks}
                    tasks={tasks}
                    defaultStatus="COMPLETE"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status Group - IN PROGRESS */}
      <div className="mt-6">
        <div className="flex items-center px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500 mr-2">
            {/* Tabler Icon: progress */}
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-progress w-3 h-3 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
               <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
               <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
               <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
               <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
            </svg>
          </div>
          <div className="text-xs font-bold uppercase">In Progress</div>
          <div className="ml-2 text-xs text-gray-500">{tasks.filter(task => task.status === 'IN PROGRESS').length}</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">
            <AddTaskButton
              setTasks={setTasks}
              tasks={tasks}
              defaultStatus="IN PROGRESS"
            />
          </div>
          <div className="ml-auto cursor-pointer">
             {/* Tabler Icon: plus */}
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
             </svg>
          </div>
        </div>

        {/* IN PROGRESS Tasks Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="w-10 px-4 py-3"></th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3">Due date</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Comments</th>
              <th className="w-10 px-4 py-3"></th>
              <th className="w-10 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.filter(task => task.status === 'IN PROGRESS').map(task => (
              <TaskProcessRow key={task.id} task={task} />
            ))}
            <tr className="border-b border-gray-200 hover:bg-gray-50 text-gray-500 cursor-pointer">
              <td colSpan={9} className="px-4 py-3">
                <div className="flex items-center pl-10">
                   {/* Tabler Icon: plus */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                   </svg>
                  <AddTaskButton
                    setTasks={setTasks}
                    tasks={tasks}
                    defaultStatus="IN PROGRESS"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Status Group - TO DO */}
      <div className="mt-6">
        <div className="flex items-center px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-300 mr-2">
             {/* Tabler Icon: circle */}
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-circle w-3 h-3 text-white" width="24" height="24" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
             </svg>
          </div>
          <div className="text-xs font-bold uppercase">To Do</div>
          <div className="ml-2 text-xs text-gray-500">{tasks.filter(task => task.status === 'TO DO').length}</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">
            <AddTaskButton
              setTasks={setTasks}
              tasks={tasks}
              defaultStatus="TO DO"
            />
          </div>
          <div className="ml-auto cursor-pointer">
             {/* Tabler Icon: plus */}
             <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
             </svg>
          </div>
        </div>

        {/* TO DO Tasks Table */}
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="w-10 px-4 py-3"></th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Assignee</th>
              <th className="px-4 py-3">Due date</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Comments</th>
              <th className="w-10 px-4 py-3"></th>
              <th className="w-10 px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.filter(task => task.status === 'TO DO').map(task => (
              <TaskToDoRow key={task.id} task={task} />
            ))}
            <tr className="border-b border-gray-200 hover:bg-gray-50 text-gray-500 cursor-pointer">
              <td colSpan={9} className="px-4 py-3">
                <div className="flex items-center pl-10">
                   {/* Tabler Icon: plus */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus w-4 h-4 mr-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 5l0 14" />
                      <path d="M5 12l14 0" />
                   </svg>
                  <AddTaskButton
                    setTasks={setTasks}
                    tasks={tasks}
                    defaultStatus="TO DO"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </div>
  );
};

export default TaskManagementUI;
