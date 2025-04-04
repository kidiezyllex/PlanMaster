"use client";
import React, { useState } from 'react';
import { IconLayoutGrid, IconList, IconColumns, IconFilter, IconCircleDot, IconUser, IconCheck, IconSearch, IconDots, IconPlus, IconCircleCheck, IconCircleDashed, IconCircle, IconUsers } from '@tabler/icons-react';
import TaskCompleteRow from '@/component/TaskCompleteRow'; 
import TaskProcessRow from '@/component/TaskProcessRow'; 
import TaskToDoRow from '@/component/TaskToDoRow'; 
import AddTaskButton from '@/component/AddTaskButton';
import Link from 'next/link';

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
          <IconLayoutGrid className="w-4 h-4" />
          Group: Status
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconList className="w-4 h-4" />
          Subtasks
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconColumns className="w-4 h-4" />
          Columns
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconFilter className="w-4 h-4" />
          Filter
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconCircleDot className="w-4 h-4" />
          Me mode
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconUser className="w-4 h-4" />
          Assignee
        </div>

        <div className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconCheck className="w-4 h-4" />
          Closed
        </div>
        
        <Link href="/users" className="flex items-center gap-2 text-gray-500 px-3 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm">
          <IconUsers className="w-4 h-4" />
          Users
        </Link>

        <div className="flex items-center ml-auto border border-gray-200 rounded px-3 py-1.5">
          <IconSearch className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="border-none outline-none text-sm w-48"
          />
        </div>

        <div className="flex items-center justify-center p-1.5 rounded hover:bg-gray-100 cursor-pointer">
          <IconDots className="w-4 h-4 text-gray-500" />
        </div>
      </div>


      {/* Status Group - Complete*/}
      <div className="mt-2">
        <div className="flex items-center px-4 py-2 border-b border-gray-200">
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500 mr-2">
            <IconCheck className="w-3 h-3 text-white" />
          </div>
          <div className="text-xs font-bold uppercase">Complete</div>
          <div className="ml-2 text-xs text-gray-500">1</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">
            <AddTaskButton 
              setTasks={setTasks}
              tasks={tasks}
            />
          </div>
          <div className="ml-auto cursor-pointer">
            <IconPlus className="w-4 h-4 text-gray-500" />
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
                  <IconPlus className="w-4 h-4 mr-2" />
                  <AddTaskButton 
                    setTasks={setTasks}
                    tasks={tasks}
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
            <IconCircleCheck className="w-3 h-3 text-white" />
          </div>
          <div className="text-xs font-bold uppercase">In Progress</div>
          <div className="ml-2 text-xs text-gray-500">1</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">+ Add Task</div>
          <div className="ml-auto cursor-pointer">
            <IconPlus className="w-4 h-4 text-gray-500" />
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
                  <IconPlus className="w-4 h-4 mr-2" />
                  Add Task
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
            <IconCircle className="w-3 h-3 text-white" />
          </div>
          <div className="text-xs font-bold uppercase">To Do</div>
          <div className="ml-2 text-xs text-gray-500">0</div>
          <div className="ml-4 text-sm text-gray-500 cursor-pointer">+ Add Task</div>
          <div className="ml-auto cursor-pointer">
            <IconPlus className="w-4 h-4 text-gray-500" />
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
                  <IconPlus className="w-4 h-4 mr-2" />
                  Add Task
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
