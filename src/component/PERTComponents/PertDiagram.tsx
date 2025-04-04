"use client";

import { useDroppable } from '@dnd-kit/core';
import PertCanvas from './PertCanvas';
import React, { memo } from 'react'; 

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

interface PertDiagramProps {
  tasks: Task[];
  edges: Edge[];
  onEdgesChange: (edges: Edge[]) => void;
}

const PertDiagram = memo(({ tasks, edges, onEdgesChange }: PertDiagramProps) => { // Use memo
  const { setNodeRef } = useDroppable({
    id: 'pert-drop-area',
  });

  return (
    <div
      ref={setNodeRef}
      className="w-full h-[calc(100vh-120px)] bg-gray-50 rounded-lg border border-dashed border-gray-300"
    >
      <PertCanvas tasks={tasks} edges={edges} onEdgesChange={onEdgesChange} />
    </div>
  );
});

PertDiagram.displayName = 'PertDiagram';

export default PertDiagram;