'use client';

import {forwardRef, Suspense, useImperativeHandle, useRef} from 'react';
import {Environment, OrbitControls, PerspectiveCamera, View as ViewImpl} from '@react-three/drei';
import {Three} from '@/helpers/components/Three';
import {ColorRepresentation} from 'three';
import {vec3} from '@react-three/rapier';

export const Common = ({color}: {color?: ColorRepresentation}) => (
  <Suspense fallback={null}>
    {color && <color attach='background' args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color='blue' />
    <directionalLight
      castShadow
      position={[10, 10, 10]}
      shadow-camera-bottom={-40}
      shadow-camera-top={40}
      shadow-camera-left={-40}
      shadow-camera-right={40}
      shadow-mapSize-width={1024}
      shadow-bias={-0.0001}
    />
    <Environment
      // preset="city"
      files='img/potsdamer_platz_1k.hdr'
    />
  </Suspense>
);

interface ViewProps {
  children: React.ReactNode;
  orbit?: boolean;
  className?: string;
}

const vec = vec3({x: -40.13634585899792, y: -3.3371161519005126, z: 13.222374925235437});

const View = forwardRef<unknown, ViewProps>(({children, orbit, ...props}, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} style={{height: '100%', width: '100%'}} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls target={vec} />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = 'View';

export {View};
