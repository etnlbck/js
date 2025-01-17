import type { Chain } from "../src/types";
export default {
  "name": "Sepolia",
  "title": "Ethereum Testnet Sepolia",
  "chain": "ETH",
  "rpc": [
    "https://sepolia.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://sepolia.infura.io/v3/${INFURA_API_KEY}",
    "wss://sepolia.infura.io/v3/${INFURA_API_KEY}",
    "https://rpc.sepolia.org",
    "https://rpc2.sepolia.org",
    "https://rpc-sepolia.rockx.com",
    "https://rpc.sepolia.ethpandaops.io",
    "https://sepolia.gateway.tenderly.co",
    "wss://sepolia.gateway.tenderly.co"
  ],
  "faucets": [
    "http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"
  ],
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://sepolia.otterscan.io",
  "shortName": "sep",
  "chainId": 11155111,
  "networkId": 11155111,
  "explorers": [
    {
      "name": "etherscan-sepolia",
      "url": "https://sepolia.etherscan.io",
      "standard": "EIP3091"
    },
    {
      "name": "otterscan-sepolia",
      "url": "https://sepolia.otterscan.io",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "sepolia"
} as const satisfies Chain;