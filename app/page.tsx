'use client';

import dynamic from 'next/dynamic';
import {Suspense} from 'react';

const App = dynamic(() => import('@/simulation/App'), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Page() {
  return (
    <div className='fixed inset-0 h-full w-full font-sans'>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </div>
  );
}

const Loading = () => {
  return (
    <div
      className='flex h-full w-full flex-col items-center justify-center font-mono text-xl text-white'
      style={{background: 'linear-gradient(blue, aquamarine)'}}
    >
      <div className='flex items-center justify-center'>
        loading simulation
        <div className='flex items-center justify-center'>
          <div className='ml-4 origin-[50%_20.7px] animate-spin font-mono text-5xl'>📀</div>
          <div className='z-10 -ml-5 rotate-6 text-5xl'>/</div>
        </div>
      </div>
      <div className='w-72'>
        <div className='loading origin-left text-3xl font-bold'>_</div>
      </div>
    </div>
  );
};
