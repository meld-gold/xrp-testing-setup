# Ripple Docker setup

Run the Ripple node:

```bash
docker compose up
```

Start a new terminal and shell into the Ripple node:

```bash
docker exec -it validator_1 bash
```

## Starting Ripple

Start Ripple in standalone mode:

```bash
rippled -a --start --conf=/shared/rippled.cfg
```

## Standalone gensis address

Address: rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh

Secret: snoPBrXtMeMyMHUVTgbuqAfg1SUTb ("masterpassphrase")

## Testing the Ripple server

Check the server:

```bash
rippled server_info
```

Check the genesis account info:

```bash
rippled account_info rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh validated strict
```

Submit a transaction:

```bash
rippled submit 'snoPBrXtMeMyMHUVTgbuqAfg1SUTb' '{ "Account": "rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh", "Amount": "1000000000", "Destination": "r9wRwVgL2vWVnKhTPdtxva5vdH7FNw1zPs", "TransactionType": "Payment", "Fee": "10" }'
```

Source: https://xrpl.org/docs/infrastructure/testing-and-auditing/run-private-network-with-docker#perform-a-test-transaction

Manually advance the ledger:

```bash
rippled ledger_accept --conf=/shared/rippled.cfg
```

Check the transaction was validated:

```bash
rippled account_info r9wRwVgL2vWVnKhTPdtxva5vdH7FNw1zPs validated strict
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
curl -X POST http://127.0.0.1:5005 \
   -H "Content-Type: application/json" \
   -d '{ "method": "wallet_propose" }'
```