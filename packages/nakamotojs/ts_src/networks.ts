// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731
export interface Network {
  messagePrefix: string;
  bech32: string;
  bip32: Bip32;
  pubKeyHash: number;
  scriptHash: number;
  wif: number;
}

interface Bip32 {
  public: number;
  private: number;
}

export const bitcoin: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
};

export const regtest: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const testnet: Network = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const litecoin: Network = {
  messagePrefix: '\x18Litecoin Signed Message:\n',
  bech32: 'ltc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0x80,
};

export const litecoinregtest: Network = {
  messagePrefix: '\x18Litecoin Signed Message:\n',
  bech32: 'rltc',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0x3a,
  wif: 0xef,
};

export const litecointestnet: Network = {
  messagePrefix: '\x18Litecoin Signed Message:\n',
  bech32: 'tltc',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0x3a,
  wif: 0xef,
};

export const pepecoin: Network = {
  messagePrefix: '\x18Pepecoin Signed Message:\n',
  bech32: 'pepe',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x38,
  scriptHash: 0x16,
  wif: 0x9e,
};

export const pepecoinregtest: Network = {
  messagePrefix: '\x18Pepecoin Signed Message:\n',
  bech32: 'rpepe',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const pepecointestnet: Network = {
  messagePrefix: '\x18Pepecoin Signed Message:\n',
  bech32: 'tpepe',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x71,
  scriptHash: 0xc4,
  wif: 0xf1,
};

export const groestlcoin: Network = {
  messagePrefix: '\x1cGroestlCoin Signed Message:\n',
  bech32: 'grs',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x24,
  scriptHash: 0x05,
  wif: 0x80,
};

export const groestlcoinregtest: Network = {
  messagePrefix: '\x1cGroestlCoin Signed Message:\n',
  bech32: 'grsrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const groestlcointestnet: Network = {
  messagePrefix: '\x1cGroestlCoin Signed Message:\n',
  bech32: 'tgrs',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const dogecoin: Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'doge', // TODO: Dogecoin doesn't use bech32, make type optional
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
};

export const dogecoinregtest: Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'rdoge',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};

export const dogecointestnet: Network = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bech32: 'tdoge',
  bip32: {
    public: 0x0432a9a8,
    private: 0x0432a243,
  },
  pubKeyHash: 0x71,
  scriptHash: 0xc4,
  wif: 0xf1,
};
export function getNetwork(chain: string, network: string): Network {
  switch (chain) {
    case 'BTC':
      switch (network) {
        case 'mainnet':
          return bitcoin;
        case 'testnet':
          return testnet;
        case 'regtest':
          return regtest;
        default:
          throw new Error(`Invalid network ${network}`);
      }
    case 'LTC':
      switch (network) {
        case 'mainnet':
          return litecoin;
        case 'testnet':
          return litecointestnet;
        case 'regtest':
          return litecoinregtest;
        default:
          throw new Error(`Invalid network ${network}`);
      }
    case 'PEPE':
      switch (network) {
        case 'mainnet':
          return pepecoin;
        case 'testnet':
          return pepecointestnet;
        case 'regtest':
          return pepecoinregtest;
        default:
          throw new Error(`Invalid network ${network}`);
      }
    case 'DOGE':
      switch (network) {
        case 'mainnet':
          return dogecoin;
        case 'testnet':
          return dogecointestnet;
        case 'regtest':
          return dogecoinregtest;
        default:
          throw new Error(`Invalid network ${network}`);
      }
    case 'GRS':
      switch (network) {
        case 'mainnet':
          return groestlcoin;
        case 'testnet':
          return groestlcointestnet;
        case 'regtest':
          return groestlcoinregtest;
        default:
          throw new Error(`Invalid network ${network}`);
      }      
    default:
      throw new Error(`Invalid chain ${network}`);
  }
}

export const NETWORKS: Record<string, any> = {
  // Bitcoin
  bitcoin,
  regtest,
  testnet,
  // Litecoin
  litecoin,
  litecoinregtest,
  litecointestnet,
  // Pepecoin
  pepecoin,
  pepecoinregtest,
  pepecointestnet,
  // Dogecoin
  dogecoin,
  dogecoinregtest,
  dogecointestnet,
};
