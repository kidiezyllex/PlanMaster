"use client";

import { useState, useEffect } from 'react';
import TaskList from '@/component/PERTComponents/TaskList';
import PertDiagram from '@/component/PERTComponents/PertDiagram';
import { DndContext, DragOverlay, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import TaskCard from '@/component/PERTComponents/TaskCard';

interface Task {
  id: string;
  name: string;
  duration: number;
  dependencies: string[];
  priority: 'high' | 'medium' | 'low';
  position?: { x: number; y: number };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  type?: string;
  animated?: boolean;
  style?: React.CSSProperties;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [pertTasks, setPertTasks] = useState<Task[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [edges, setEdges] = useState<Edge[]>([]);

  // Use dynamic import to load the tasks JSON
  useEffect(() => {
    const loadTasks = async () => {
      const tasksModule = await import('../../mocks/PERTData.json');
      const loadedTasks = tasksModule.default.map((task: { id: string; name: string; duration: number; dependencies: string[]; priority: string }) => {
        // Kiểm tra và ép kiểu priority
        const priority = task.priority === 'high' || task.priority === 'medium' || task.priority === 'low' ? task.priority : 'low';
        return {
          ...task,
          priority: priority as 'high' | 'medium' | 'low',
        };
      });
      setTasks(loadedTasks);
    };
    loadTasks();
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    debugger;
    if (over && over.id === 'pert-drop-area') {
      const draggedTask = tasks.find(task => task.id === active.id);
      if (draggedTask && !pertTasks.some(pertTask => pertTask.id === draggedTask.id)) {
        setPertTasks([...pertTasks, { ...draggedTask, position: { x: 100, y: 100 } }]);
        console.log(pertTasks);
      }
    }
  };

  const onEdgesChange = (newEdges: Edge[]) => {
    setEdges(newEdges);
  };

  return (
    <div className="flex h-screen">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="w-1/3 border-r border-gray-200 p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Danh sách Task</h2>
          <TaskList tasks={tasks} />
        </div>
        <div className="w-2/3 p-4">
          <h2 className="text-xl font-bold mb-4">Sơ đồ PERT</h2>
          <PertDiagram tasks={pertTasks} edges={edges} onEdgesChange={onEdgesChange} />
        </div>
        <DragOverlay>
          {activeId ? <TaskCard task={tasks.find(task => task.id === activeId)} isDragging={true} /> : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}
