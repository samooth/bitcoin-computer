import { ChessContractHelper } from '@bitcoin-computer/chess-contracts';
import { Computer } from '@bitcoin-computer/lib';
import { crypto } from '@bitcoin-computer/nakamotojs';
import { expect } from 'chai';
import { db } from '../db/db.js';
import { deploy } from '../scripts/lib.js';
import axios from 'axios';
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
dotenv.config();
const chain = 'LTC';
const network = 'regtest';
const url = 'http://localhost:1031';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const chessContractDirectory = `${__dirname}/../../chess-contracts`;
describe('Route /hash', () => {
    it('Should create a post request', async () => {
        const { data } = await axios.get('http://127.0.0.1:4000/hash');
        expect(typeof data).eq('string');
        const { secret } = await db.one(`SELECT secret FROM "Secrets" WHERE "hash"=$1;`, [data]);
        const hash = crypto.sha256(crypto.sha256(Buffer.from(secret))).toString('hex');
        expect(hash).eq(data);
    });
});
describe('Route /secret', () => {
    let computerW;
    let computerB;
    let chessContractHelperW;
    let chessContractHelperB;
    const amount = 1e6;
    beforeEach(async () => {
        computerW = new Computer({ chain, network, url });
        computerB = new Computer({ chain, network, url });
        const { data: secretHashW } = await axios.get(`http://127.0.0.1:4000/hash`);
        const { data: secretHashB } = await axios.get(`http://127.0.0.1:4000/hash`);
        await computerW.faucet(1e8);
        await computerB.faucet(1e8);
        chessContractHelperW = new ChessContractHelper({
            computer: computerW,
            amount,
            nameW: 'nameW',
            nameB: 'nameB',
            publicKeyW: computerW.getPublicKey(),
            publicKeyB: computerB.getPublicKey(),
            secretHashW,
            secretHashB
        });
        chessContractHelperB = new ChessContractHelper({
            computer: computerB,
            amount,
            nameW: 'nameW',
            nameB: 'nameB',
            publicKeyW: computerW.getPublicKey(),
            publicKeyB: computerB.getPublicKey(),
            secretHashW,
            secretHashB
        });
        chessContractHelperW.mod = await deploy(computerW, chessContractDirectory);
        chessContractHelperB.mod = chessContractHelperW.mod;
    }, 20000);
    it('Should deploy a the chess contract module', () => {
        expect(typeof chessContractHelperW.mod).eq('string');
        expect(typeof chessContractHelperB.mod).eq('string');
    });
    it('Should reveal the winners secret', async () => {
        const tx = await chessContractHelperW.makeTx();
        const txId = await chessContractHelperB.completeTx(tx);
        let game = await computerW.sync(`${txId}:0`);
        await game.move('f2', 'f3');
        const [rev1] = await computerB.query({ ids: [game._id] });
        game = await computerB.sync(rev1);
        await game.move('e7', 'e5');
        const [rev2] = await computerW.query({ ids: [game._id] });
        game = await computerW.sync(rev2);
        await game.move('g2', 'g4');
        const [rev3] = await computerB.query({ ids: [game._id] });
        game = await computerB.sync(rev3);
        await game.move('d8', 'h4');
        const { data } = await axios.get(`http://127.0.0.1:4000/secret/${game._id}`);
        const spendingTxId = await chessContractHelperB.spendWithSecret(game._id, data, 1);
        expect(typeof spendingTxId).eq('string');
    });
});
//# sourceMappingURL=app.test.js.map