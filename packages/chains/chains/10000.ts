import type { Chain } from "../src/types";
export default {
  "chain": "smartBCH",
  "chainId": 10000,
  "explorers": [],
  "faucets": [],
  "features": [],
  "infoURL": "https://smartbch.org/",
  "name": "Smart Bitcoin Cash",
  "nativeCurrency": {
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://smart-bitcoin-cash.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://smartbch.greyh.at",
    "https://rpc-mainnet.smartbch.org",
    "https://smartbch.fountainhead.cash/mainnet",
    "https://smartbch.devops.cash/mainnet"
  ],
  "shortName": "smartbch",
  "slug": "smart-bitcoin-cash",
  "testnet": false
} as const satisfies Chain;