import React from 'react';
import { useState, useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { dispatchForCountStore, useCountStore } from '../store';

const Component: React.FC = () => {
  const countStore = useCountStore((state) => state.count);

  const [count, setCount] = useState(0);

  useEffect(() => console.log('componentDidMount and count-Update'), [count]);
  console.log(import.meta.env.VITE_APP_TITLE);

  return (
    <div>
      <h2>Home</h2>

      <div className="flex h-1/6 flex-col items-center justify-between">
        <button className="btn btn-secondary" type="button" onClick={() => setCount((count) => count + 1)}>
          Add + 1: state count is: {count}
        </button>

        <button className="btn btn-primary" type="button" onClick={() => dispatchForCountStore({ type: 'INCREASE' })}>
          Add + 1
        </button>

        <button className="btn btn-primary" type="button" onClick={() => dispatchForCountStore({ type: 'DECREASE' })}>
          Add - 1
        </button>

        <p>Zustand count is: {countStore}</p>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/')({
  component: Component,
});
