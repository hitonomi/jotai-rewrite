import { useAtom } from "../lib";

import { readOnlyAtom } from "../atoms";

export const ReadOnlyAtomComponent = () => {
  const [readOnlyValue] = useAtom(readOnlyAtom);

  return (
    <p>
      This state is readOnly: {readOnlyValue} <hr />
    </p>
  );
};
