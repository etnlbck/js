import type { Chain } from "../src/types";
export default {
  "chain": "FNCY",
  "chainId": 73,
  "explorers": [
    {
      "name": "fncy scan",
      "url": "https://fncyscan.fncy.world",
      "standard": "EIP3091"
    }
  ],
  "faucets": [
    "https://faucet-testnet.fncy.world"
  ],
  "features": [],
  "icon": {
    "url": "ipfs://QmfXCh6UnaEHn3Evz7RFJ3p2ggJBRm9hunDHegeoquGuhD",
    "width": 256,
    "height": 256,
    "format": "png"
  },
  "infoURL": "https://fncyscan.fncy.world",
  "name": "FNCY",
  "nativeCurrency": {
    "name": "FNCY",
    "symbol": "FNCY",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://fncy.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://fncy-seed1.fncy.world"
  ],
  "shortName": "FNCY",
  "slug": "fncy",
  "testnet": true
} as const satisfies Chain;