import type { Chain } from "../src/types";
export default {
  "chain": "T-EKTA",
  "chainId": 1004,
  "explorers": [
    {
      "name": "test-ektascan",
      "url": "https://test.ektascan.io",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [],
  "icon": {
    "url": "ipfs://QmfMd564KUPK8eKZDwGCT71ZC2jMnUZqP6LCtLpup3rHH1",
    "width": 2100,
    "height": 2100,
    "format": "png"
  },
  "infoURL": "https://www.ekta.io",
  "name": "T-EKTA",
  "nativeCurrency": {
    "name": "T-EKTA",
    "symbol": "T-EKTA",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://t-ekta.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://test.ekta.io:8545"
  ],
  "shortName": "t-ekta",
  "slug": "t-ekta",
  "testnet": true
} as const satisfies Chain;