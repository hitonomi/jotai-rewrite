import { atom } from "./lib";

// https://jotai.org/docs/basics/primitives

export const priceAtom = atom(10);

export const readOnlyAtom = atom((get) => get(priceAtom) * 2);

export const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2);
  }
);
