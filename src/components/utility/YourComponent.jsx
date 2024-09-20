'use client'
import React, { useState } from 'react';
import DraggableDiv from './DraggableDiv';
import Menuicons from '../Menuicons';

export default function YourComponent() {
  const [draggableInstances, setDraggableInstances] = useState([]);

  function generateUniqueId() {
    // Improved unique ID generation using Math.random() and Date.now()
    return Math.random().toString(36).substring(2, 15) + Math.abs(Date.now()).toString(36).substring(2, 7);
  }

  function handleCreateInstance() {
    const newId = generateUniqueId();
    setDraggableInstances((prevInstances) => [
      ...prevInstances,
      <DraggableDiv key={newId} id={newId} handleExplorer={''} onDelete={() => handleDeleteInstance(newId)} />,
    ]);
    console.log(newId)
  }

  function handleDeleteInstance(id) {
    setDraggableInstances((prevInstances) =>
      prevInstances.filter((instance) => instance.props.id !== id)
    );
  }

  return (
    <div>
      {draggableInstances.map((instance) => (
        <DraggableDiv key={instance.props.id} {...instance.props} />
      ))}
      {/* <button onClick={handleCreateInstance}>Create Instance</button> */}
      <Menuicons handleExplorer={handleCreateInstance} />
    </div>
  );
}