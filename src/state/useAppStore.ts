import {create} from 'zustand';
import {devtools} from 'zustand/middleware';

interface AppState {
  debug: boolean;
  altDebug: () => void;
  paused: boolean;
  altPaused: () => void;
  cameraEnabled: boolean;
  setCameraEnabled: (f: boolean) => void;
  perf: boolean;
  altPerf: () => void;
  physicsKey: number;
  resetPhysics: () => void;
}

export const useAppStore = create<AppState>()(
  devtools(set => ({
    debug: true as boolean,
    altDebug: () => set(state => ({debug: !state.debug})),
    paused: false,
    altPaused: () => set(state => ({paused: !state.paused})),
    cameraEnabled: true,
    setCameraEnabled: f => set({cameraEnabled: f}),
    perf: true,
    altPerf: () => set(state => ({perf: !state.perf})),
    physicsKey: 0,
    resetPhysics: () => set(state => ({physicsKey: state.physicsKey + 1})),
  })),
);
