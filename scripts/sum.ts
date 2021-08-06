#!/usr/bin/env ts-node

import readOrder from '../utils/readOrder';

(async () => {
  const order = await readOrder();

  const total: number = order.items.reduce(
    (totalSum, item) => totalSum + item.price * item.quantity,
    0,
  );

  console.log(total);
})();
