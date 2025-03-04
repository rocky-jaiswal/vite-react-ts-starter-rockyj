import React from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { useCountStore } from '/@/store';

const Component: React.FC = () => {
  const zustandCount = useCountStore((state) => state.count);

  return (
    <>
      <h2>About</h2>
      <h2>
        <span>zustand count: </span>
        <span>{zustandCount}</span>
      </h2>
    </>
  );
};

export const Route = createFileRoute('/about')({
  component: Component,
});
