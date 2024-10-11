import { Client } from 'npm:seyfert';

const client = new Client();

console.log(await client.getRC());
