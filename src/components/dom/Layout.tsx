'use client';

import {useRef} from 'react';
import dynamic from 'next/dynamic';
const Scene = dynamic(() => import('@/components/canvas/Scene'), {ssr: false});

const Layout = ({children}) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: ' 100%',
        height: '100%',
        overflow: 'auto',
        touchAction: 'auto',
        // background: 'linear-gradient(blue, aquamarine)',
      }}
    >
      <Scene
        className='pointer-events-none fixed left-0 top-0 h-full w-full'
        eventSource={ref}
        eventPrefix='client'
        shadows
      />
      {children}
    </div>
  );
};

export {Layout};
