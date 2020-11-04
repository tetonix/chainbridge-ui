import ETHIcon from "./media/tokens/eth.svg";

type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
};

export type ChainbridgeConfig = {
  erc20ResourceId: string;
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  // Goerli - Kotti Bridge
  erc20ResourceId:
    "0x000000000000000000000014dD060dB55c0E7cc072BD3ab4709d55583119c001",
  chains: [
    {
      chainId: 1,
      networkId: 5,
      name: "Ethereum - Goerli",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://goerli.prylabs.net",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      tokens: [
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "Test Goerli",
          symbol: "TESTG",
          imageUri: ETHIcon,
        },
      ],
    },
    {
      chainId: 2,
      networkId: 6,
      name: "Ethereum Classic - Kotti",
      bridgeAddress: "0x2524d71D163f60747630c4EBeB077a9832329646",
      erc20HandlerAddress: "0xDc26320258ADfd806d125223Fb0F94e54D13FA51",
      rpcUrl: "https://www.ethercluster.com/kotti",
      type: "Ethereum",
      blockExplorer: "https://blockscout.com/etc/kotti/tx",
      tokens: [
        {
          address: "0x14dD060dB55c0E7cc072BD3ab4709d55583119c0",
          name: "Test Kotti",
          symbol: "TESTK",
          imageUri: ETHIcon,
        },
      ],
    },
  ],

  // DEVNET
  //   erc20ResourceId:
  //   "0x00000000000000000000000021605f71845f372A9ed84253d2D024B7B10999f4",
  // chains: [
  // {
  //   chainId: 1,
  //   networkId: 5,
  //   name: "Ethereum - A",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8545",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthA",
  //       symbol: "TESTA",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // {
  //   chainId: 2,
  //   networkId: 6,
  //   name: "Ethereum - B",
  //   bridgeAddress: "0x62877dDCd49aD22f5eDfc6ac108e9a4b5D2bD88B",
  //   erc20HandlerAddress: "0x3167776db165D8eA0f51790CA2bbf44Db5105ADF",
  //   rpcUrl: "http://localhost:8546",
  //   type: "Ethereum",
  //   tokens: [
  //     {
  //       address: "0x21605f71845f372A9ed84253d2D024B7B10999f4",
  //       name: "Test EthB",
  //       symbol: "TESTB",
  //       imageUri: ETHIcon,
  //     },
  //   ],
  // },
  // ]
};
