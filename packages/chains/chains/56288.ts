import type { Chain } from "../src/types";
export default {
  "chain": "Boba BNB Mainnet",
  "chainId": 56288,
  "explorers": [
    {
      "name": "Boba BNB block explorer",
      "url": "https://blockexplorer.bnb.boba.network",
      "standard": "none"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://boba.network",
  "name": "Boba BNB Mainnet",
  "nativeCurrency": {
    "name": "Boba Token",
    "symbol": "BOBA",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://boba-bnb.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://bnb.boba.network",
    "https://boba-bnb.gateway.tenderly.co/",
    "https://gateway.tenderly.co/public/boba-bnb",
    "https://replica.bnb.boba.network",
    "wss://boba-bnb.gateway.tenderly.co/",
    "wss://gateway.tenderly.co/public/boba-bnb"
  ],
  "shortName": "BobaBnb",
  "slug": "boba-bnb",
  "testnet": false
} as const satisfies Chain;