import { setTextRange } from "typescript";

type StateAtom<TState extends any> = {
  state: TState;
  get: () => TState;
  set: (prevState: TState) => void;
};
type ReadOnlyStateAtom<
  TState extends any,
  TGetter extends (state: TState) => any
> = {
  state: TState;
  get: TGetter;
};
type ReadWriteStateAtom<
  TState extends any,
  TGetter extends (state: TState) => any,
  TSetter extends (state: TState) => TState
> = {
  state: TState;
  get: TGetter;
  set: TSetter;
};
/**
export function atom<TState extends any>(state: TState): StateAtom<TState>;
export function atom<
  TState extends any,
  TGetter extends (state: TState) => any
>(state: TState, getter: TGetter): ReadOnlyStateAtom<TState, TGetter>;
export function atom<
  TState extends any,
  TGetter extends (state: TState) => any,
  TSetter extends (state: TState) => TState
>(
  state: TState,
  getter: TGetter,
  setter: TSetter
): ReadWriteStateAtom<TState, TGetter, TSetter> {
  return {};
}

 */
export function atom<
  TState extends any,
  TGetter extends (state: TState) => any,
  TSetter extends (state: TState) => TState
>(
  getter: TGetter,
  setter: TSetter
): ReadWriteStateAtom<TState, ReturnType<TGetter>, TSetter>;
export function atom<
  TState extends any,
  TGetter extends (state: TState) => any
>(state: TState | TGetter, setter?: any): ReadOnlyStateAtom<TState, TGetter>;
export function atom<TState extends any>(
  state: TState,
  setter?: any
): StateAtom<TState>;
export function atom<TState extends any>(
  state: unknown,
  setter?: unknown
): StateAtom<TState> {
  if (!(state instanceof function)) {
  }

  return { state: "" };
}

export const useAtom = () => {};
