# Ripple testing setup

A local configuration for testing against XRPL.

Run the Ripple node:

```bash
docker compose up --build
```

Starting the container this way automatically starts `rippled` in standalone mode.

## Shelling into the Ripple node

Start a new terminal and shell into the Ripple node:

```bash
docker exec -it ripple bash
```

## Starting Ripple

(NOTE: This bit happens automatically when you run `docker compose up`).

Start Ripple in standalone mode:

```bash
rippled -a --start --conf=/shared/rippled.cfg
```

## Standalone genesis account

Address: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh

Secret: snoPBrXtMeMyMHUVTgbuqAfg1SUTb ("masterpassphrase")

## Testing the Ripple server

You need to shell into the Ripple node to do this (see above).

Check the server:

```bash
rippled server_info --conf=/shared/rippled.cfg
```

Check the genesis account info:

```bash
rippled account_info rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh validated strict --conf=/shared/rippled.cfg
```

Submit a transaction:

```bash
rippled submit 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb' '{ "Account": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh", "Amount": "1000000000", "Destination": "r9wRwVgL2vWVnKhTPdtxva5vdH7FNw1zPs", "TransactionType": "Payment", "Fee": "10" }' --conf=/shared/rippled.cfg
```

Source: https://xrpl.org/docs/infrastructure/testing-and-auditing/run-private-network-with-docker#perform-a-test-transaction

Manually advance the ledger:

```bash
rippled ledger_accept --conf=/shared/rippled.cfg
```

Check the transaction was validated:

```bash
rippled account_info r9wRwVgL2vWVnKhTPdtxva5vdH7FNw1zPs validated strict --conf=/shared/rippled.cfg
```

## Python setup

Make sure Python is installed:

```bash
apt update
apt install python3
```

Install dependencies:

```bash
apt install python3-requests
```

## Running the Python script

Run the script:

```bash
cd /shared
python3 dexquote.py --file dex.txt
```

## Using Curl

```bash
apt install curl
```

```bash
curl -X POST http://127.0.0.1:51234 \
   -H "Content-Type: application/json" \
   -d '{ "method": "wallet_propose" }'
```