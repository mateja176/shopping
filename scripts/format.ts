#!/usr/bin/env ts-node

import path from 'path';
import prettier from 'prettier';
import unidecode from 'unidecode';
import yamljs from 'yamljs';
import readOrder from '../utils/readOrder';

(async () => {
  const order = await readOrder();

  const items = order.items.map((item) => {
    const itemPath = item.title
      .toLowerCase()
      .replace(/-/g, ' ')
      .replace(/ +/g, '-');
    return {
      Naslov: item.title,
      Kolicina: item.quantity,
      Link: path.join(
        order.baseUrl,
        unidecode(itemPath),
        'oglas',
        item.id.toString(),
      ),
    };
  });

  const yaml = yamljs.stringify(items);
  console.log(prettier.format(yaml, { parser: 'yaml' }));
})();
