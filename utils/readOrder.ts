import { promises as fs } from 'fs';
import path from 'path';
import { Order } from '../models/order';

const [orderPath] = process.argv.slice(2);

if (!orderPath) {
  throw new Error(
    'The first argument is required and represents the path to a json file containing the order',
  );
}

const readOrder = async (): Promise<Order> => {
  try {
  } catch {
    console.log('Failed to parse file as JSON: ', orderPath);
  }
  const order: Order = JSON.parse(
    await fs.readFile(path.join(process.cwd(), orderPath), {
      encoding: 'utf8',
    }),
  );

  return order;
};

export default readOrder;
