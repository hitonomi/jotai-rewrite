import { useAtom } from "../lib";

import { readWriteAtom } from "../atoms";

export const ReadWriteAtomComponent = () => {
  return (
    <div>
      <ReadWriteAtomState />

      <ReadWriteAtomControl />

      <hr />
    </div>
  );
};

const ReadWriteAtomControl = () => {
  const [price, setPrice] = useAtom(readWriteAtom);

  return <button onClick={() => setPrice(price + 1)}>Increase</button>;
};

const ReadWriteAtomState = () => {
  const [price] = useAtom(readWriteAtom);

  return <p>Price: ${price}</p>;
};
