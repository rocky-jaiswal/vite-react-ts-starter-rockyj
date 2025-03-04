import React, { useState } from 'react';
import { createFileRoute, redirect } from '@tanstack/react-router';

import { useCountStore } from '/@/store';
import { useClickOutSide } from '../hooks/useClickOutSide';

import { useAuthenticationStore } from '/@/store';

const Component: React.FC = () => {
  const count = useCountStore((state) => state.count);

  const [text, setText] = useState('undefined');

  const clickRef = useClickOutSide<HTMLDivElement>(
    () => setText(() => 'clickInSide'),
    () => setText(() => 'clickOutSide'),
  );

  return (
    <>
      <h2>Users</h2>
      <h2>
        <span>zustand count: </span>
        <span>{count}</span>
      </h2>

      <div
        ref={clickRef}
        className="rounded-8px mb-5 flex cursor-pointer select-none justify-center p-5 text-5xl text-white"
      >
        click inside
      </div>

      <div className="font-black">{text}</div>
    </>
  );
};

export const Route = createFileRoute('/users')({
  component: Component,
  beforeLoad: async () => {
    const isAuthenticated = useAuthenticationStore.getState().isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: '/',
      });
    }
  },
});
