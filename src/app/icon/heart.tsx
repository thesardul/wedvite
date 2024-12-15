'use client';

import React, { useEffect, useRef } from 'react';
import './App.css'; // You can add your custom CSS here
import { Player } from '@lordicon/react';

// Import the icon JSON file
const ICON = require('./lock.json');

export default function App() {
  // Ref to the Player component
  const playerRef = useRef(null);

  useEffect(() => {
    // Play the animation from the beginning when component mounts
    //playerRef.current?.playFromBeginning();
  }, []);

  return (
    <div className="container">
      <Player
        ref={playerRef}
        size={96}
        icon={ICON}
        // onComplete={() => playerRef.current?.playFromBeginning()}
      />
    </div>
  );
}
