import type { Chain } from "../src/types";
export default {
  "chain": "Evmos",
  "chainId": 9001,
  "explorers": [
    {
      "name": "Evmos Explorer (Escan)",
      "url": "https://escan.live",
      "standard": "none"
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmeZW6VKUFTbz7PPW8PmDR3ZHa6osYPLBFPnW8T5LSU49c",
    "width": 400,
    "height": 400,
    "format": "png"
  },
  "infoURL": "https://evmos.org",
  "name": "Evmos",
  "nativeCurrency": {
    "name": "Evmos",
    "symbol": "EVMOS",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://evmos.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://evmos-evm.publicnode.com",
    "wss://evmos-evm.publicnode.com"
  ],
  "shortName": "evmos",
  "slug": "evmos",
  "testnet": false
} as const satisfies Chain;