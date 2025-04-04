import "dotenv/config";
import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { keypair } from "./load-keypair";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
console.log("Connected to Solana Devnet");

const publicKey = new PublicKey(keypair.publicKey.toBase58());
const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance for the wallet at address ${publicKey} is ${balanceInSol} SOL`);