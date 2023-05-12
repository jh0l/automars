import {Environment, OrbitControls, OrthographicCamera} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import {Physics, Vector3Array} from '@react-three/rapier';
import {Perf} from 'r3f-perf';
import {StrictMode, useEffect, useState} from 'react';
import Level from './Level';
import {useAppStore} from '@/state/useAppStore';
import BlocklyEditor from '@/BlocklyEditor/BlocklyEditor';

export default function App() {
  return (
    <div className='h-full w-full' style={{background: 'linear-gradient(blue, aquamarine)'}}>
      <Simulation />
      <InteractionBuffer>
        <BlocklyEditor />
      </InteractionBuffer>
    </div>
  );
}

const InteractionBuffer = ({children}: {children: React.ReactNode}) => {
  const [interacted, setInteracted] = useState(false);
  if (interacted) return <>{children}</>;
  return (
    <div
      className='absolute bottom-0 z-50 flex h-1/2 w-full cursor-pointer items-center justify-center'
      onClick={() => setInteracted(true)}
    >
      <div className='flex items-center justify-center'>Interact</div>
    </div>
  );
};

const CAM_LOC: Vector3Array = [33.99355661923482, 55.6466792737373, 26.384645127537574];
const TARG_LOC: Vector3Array = [-43.24, -5, -0.94];
const CAM_ZOOM = 13;

const Simulation = () => {
  const {paused, physicsKey, perf, resetPhysics, debug, altDebug, altPaused, altPerf, cameraEnabled} = useAppStore();

  useEffect(() => {
    setTimeout(() => resetPhysics(), 1000);
  }, [resetPhysics]);
  return (
    <div className='h-1/2 w-full'>
      <Canvas shadows>
        <OrbitControls enabled={cameraEnabled} target={TARG_LOC} />
        <OrthographicCamera position={CAM_LOC} zoom={CAM_ZOOM} makeDefault />
        <StrictMode>
          <Physics paused={paused} key={physicsKey} gravity={[0, -200, 0]} debug>
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

            <Level />
            {perf && <Perf />}
          </Physics>
        </StrictMode>
      </Canvas>
      <div className='absolute right-1 z-50 flex max-w-xl flex-wrap gap-3 bg-black/20' style={{bottom: '50.5%'}}>
        <ToggleButton label='Debug' value={debug} onClick={altDebug} />
        <ToggleButton label='Paused' value={paused} onClick={altPaused} />
        <ToggleButton label='Perf' value={perf} onClick={altPerf} />
        <ToggleButton label='Reset' value={false} onClick={resetPhysics} />
      </div>
    </div>
  );
};

const ToggleButton = ({label, value, onClick}: {label: string; value: boolean; onClick(): void}) => (
  <button
    style={{
      background: value ? 'red' : 'transparent',
      border: '2px solid red',
      color: value ? 'white' : 'red',
      borderRadius: 4,
    }}
    className='select-none px-2'
    onClick={onClick}
  >
    {label}
  </button>
);
