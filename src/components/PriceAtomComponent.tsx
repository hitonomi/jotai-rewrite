import { useAtom } from "../lib";

import { priceAtom } from "../atoms";

export const PriceAtomComponent = () => {
  return (
    <div>
      <PriceAtomState />

      <PriceAtomControl />

      <hr />
    </div>
  );
};

const PriceAtomControl = () => {
  const [price, setPrice] = useAtom(priceAtom);

  return <button onClick={() => setPrice(price + 1)}>Increase</button>;
};

const PriceAtomState = () => {
  const [price] = useAtom(priceAtom);

  return <p>Price: ${price}</p>;
};
