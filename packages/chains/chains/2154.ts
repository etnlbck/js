import type { Chain } from "../src/types";
export default {
  "chain": "Testnet-forge",
  "chainId": 2154,
  "explorers": [
    {
      "name": "findorascan",
      "url": "https://testnet-forge.evm.findorascan.io",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://findora.org/",
  "name": "Findora Forge",
  "nativeCurrency": {
    "name": "FRA",
    "symbol": "FRA",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://findora-forge.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://prod-forge.prod.findora.org:8545/"
  ],
  "shortName": "findora-forge",
  "slug": "findora-forge",
  "testnet": true
} as const satisfies Chain;