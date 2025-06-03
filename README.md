# Hathor Headless Wallet & Full Node Quick Start

This guide provides the essential commands to run a Hathor full node and headless wallet, start a wallet session, generate addresses, send transactions, and check balances using Docker and curl.

---

## 1. Run Hathor Full Node (Testnet)

docker run -d --name hathor-core -p 8080:8080 hathornetwork/hathor-core --testnet

- Exposes the full node API on port 8080.
- For mainnet, remove `--testnet`.

---

## 2. Run Hathor Headless Wallet (Testnet)

docker run -it -p 8000:8000 hathornetwork/hathor-wallet-headless --seed_default "your seed" --wallet-id yourwallet --network testnet --server https://node.nano.testnet.hathor.network/v1a/

- Replace `"your seed"` with your 24-word seed phrase (space-separated, in quotes).
- Change `yourwallet` to your desired wallet session ID.

---

## 3. Start Wallet Session

curl -X POST http://localhost:8000/start -H "Content-Type: application/json" -d "{"seed":"yourseed", "wallet-id":"yourwallet"}"

- Replace the seed phrase with your own.

---

## 4. Get a Wallet Address

curl -H "X-Wallet-Id: yourwallet" http://localhost:8000/wallet/address


---

## 5. Check Wallet Balance

curl -H "X-Wallet-Id: yourwallet" http://localhost:8000/wallet/balance


---

## 6. Send HTR Transaction

curl -X POST -H "X-Wallet-Id: yourwallet" -H "Content-Type: application/json" -d "{"address":"RECIPIENT_ADDRESS","value":AMOUNT_IN_CENTS,"token":"00"}" http://localhost:8000/wallet/simple-send-tx

- Replace `RECIPIENT_ADDRESS` with the receiver's address.
- Replace `AMOUNT_IN_CENTS` (e.g., `1000` for 10 HTR).

---

## 7. View Transaction History

curl -H "X-Wallet-Id: yourwallet" http://localhost:8000/wallet/transactions


---

## 8. Create a New Token

curl -X POST -H "X-Wallet-Id: yourwallet" -H "Content-Type: application/json" -d "{"name":"Test Coin","symbol":"TSC","amount":100}" http://localhost:8000/wallet/create-token

- Change name, symbol, and amount as needed.

---

## 9. Stop the Wallet Session

curl -X POST http://localhost:8000/stop -H "Content-Type: application/json" -d "{"id":"yourwallet"}"


---

## Notes

- **Network Selection:** For mainnet, remove `--testnet` and use mainnet nodes.
- **Seed Security:** Never share your seed phrase. Treat it like your password.
- **Token UID:** `"token":"00"` refers to HTR. For custom tokens, use their UID.

---

## References

- [Hathor Docs - Headless Wallet](https://docs.hathor.network/pathways/components/headless-wallet/)
- [Hathor Docs - Full Node](https://docs.hathor.network/pathways/components/core/)
- [Hathor Headless Wallet HTTP API](https://wallet-headless-api.docs.hathor.network/)
