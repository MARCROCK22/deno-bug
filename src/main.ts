import { Client } from 'npm:seyfert';

const client = new Client();

console.log(await client.getRC()); // never resolves??

/*
    TL;DR: getRC reads seyfert.config.mjs file
    
    getRC source code: https://github.com/tiramisulabs/seyfert/blob/27d2fa000cabe434fd81b45cb1d28b23aa68cac9/src/client/base.ts#L395
*/
