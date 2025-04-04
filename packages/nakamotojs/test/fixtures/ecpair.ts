const ecpair = {
  valid: [
    {
      d: '0000000000000000000000000000000000000000000000000000000000000001',
      Q: '0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
      compressed: true,
      network: 'bitcoin',
      address: '1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH',
      WIF: 'KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sVHnoWn',
    },
    {
      d: '0000000000000000000000000000000000000000000000000000000000000001',
      Q: '0479be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8',
      compressed: false,
      network: 'bitcoin',
      address: '1EHNa6Q4Jz2uvNExL497mE43ikXhwF6kZm',
      WIF: '5HpHagT65TZzG1PH3CSu63k8DbpvD8s5ip4nEB3kEsreAnchuDf',
    },
    {
      d: '2bfe58ab6d9fd575bdc3a624e4825dd2b375d64ac033fbc46ea79dbab4f69a3e',
      Q: '02b80011a883a0fd621ad46dfc405df1e74bf075cbaf700fd4aebef6e96f848340',
      compressed: true,
      network: 'bitcoin',
      address: '1MasfEKgSiaSeri2C6kgznaqBNtyrZPhNq',
      WIF: 'KxhEDBQyyEFymvfJD96q8stMbJMbZUb6D1PmXqBWZDU2WvbvVs9o',
    },
    {
      d: '6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b',
      Q: '024289801366bcee6172b771cf5a7f13aaecd237a0b9a1ff9d769cabc2e6b70a34',
      compressed: true,
      network: 'bitcoin',
      address: '1LwwMWdSEMHJ2dMhSvAHZ3g95tG2UBv9jg',
      WIF: 'KzrA86mCVMGWnLGBQu9yzQa32qbxb5dvSK4XhyjjGAWSBKYX4rHx',
    },
    {
      d: '6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b',
      Q: '044289801366bcee6172b771cf5a7f13aaecd237a0b9a1ff9d769cabc2e6b70a34cec320a0565fb7caf11b1ca2f445f9b7b012dda5718b3cface369ee3a034ded6',
      compressed: false,
      network: 'bitcoin',
      address: '1zXcfvKCLgsFdJDYPuqpu1sF3q92tnnUM',
      WIF: '5JdxzLtFPHNe7CAL8EBC6krdFv9pwPoRo4e3syMZEQT9srmK8hh',
    },
    {
      d: '6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b',
      Q: '024289801366bcee6172b771cf5a7f13aaecd237a0b9a1ff9d769cabc2e6b70a34',
      compressed: true,
      network: 'testnet',
      address: 'n1TteZiR3NiYojqKAV8fNxtTwsrjM7kVdj',
      WIF: 'cRD9b1m3vQxmwmjSoJy7Mj56f4uNFXjcWMCzpQCEmHASS4edEwXv',
    },
    {
      d: '6c4313b03f2e7324d75e642f0ab81b734b724e13fec930f309e222470236d66b',
      Q: '044289801366bcee6172b771cf5a7f13aaecd237a0b9a1ff9d769cabc2e6b70a34cec320a0565fb7caf11b1ca2f445f9b7b012dda5718b3cface369ee3a034ded6',
      compressed: false,
      network: 'testnet',
      address: 'mgWUuj1J1N882jmqFxtDepEC73Rr22E9GU',
      WIF: '92Qba5hnyWSn5Ffcka56yMQauaWY6ZLd91Vzxbi4a9CCetaHtYj',
    },
    {
      d: 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140',
      Q: '0379be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798',
      compressed: true,
      network: 'bitcoin',
      address: '1GrLCmVQXoyJXaPJQdqssNqwxvha1eUo2E',
      WIF: 'L5oLkpV3aqBjhki6LmvChTCV6odsp4SXM6FfU2Gppt5kFLaHLuZ9',
    },
  ],
  invalid: {
    fromPrivateKey: [
      {
        exception: 'Private key not in range \\[1, n\\)',
        d: '0000000000000000000000000000000000000000000000000000000000000000',
      },
      {
        exception: 'Private key not in range \\[1, n\\)',
        d: 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141',
      },
      {
        exception: 'Private key not in range \\[1, n\\)',
        d: 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364142',
      },
      {
        exception:
          'Expected property "compressed" of type \\?Boolean, got Number 2',
        d: '0000000000000000000000000000000000000000000000000000000000000001',
        options: {
          compressed: 2,
        },
      },
      {
        exception:
          'Expected property "network.messagePrefix" of type Buffer|String, got undefined',
        d: '0000000000000000000000000000000000000000000000000000000000000001',
        options: {
          network: {},
        },
      },
    ],
    fromPublicKey: [
      {
        exception: 'Expected isPoint, got Buffer',
        Q: '',
        options: {},
      },
      {
        exception:
          'Expected property "network.messagePrefix" of type Buffer|String, got undefined',
        Q: '044289801366bcee6172b771cf5a7f13aaecd237a0b9a1ff9d769cabc2e6b70a34cec320a0565fb7caf11b1ca2f445f9b7b012dda5718b3cface369ee3a034ded6',
        options: {
          network: {},
        },
      },
      {
        description: 'Bad X coordinate (== P)',
        exception: 'Expected isPoint, got Buffer',
        Q: '040000000000000000000000000000000000000000000000000000000000000001fffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f',
        options: {},
      },
    ],
    fromWIF: [
      {
        exception: 'Invalid network version',
        network: 'bitcoin',
        WIF: '92Qba5hnyWSn5Ffcka56yMQauaWY6ZLd91Vzxbi4a9CCetaHtYj',
      },
      {
        exception: 'Unknown network version',
        WIF: 'brQnSed3Fia1w9VcbbS6ZGDgJ6ENkgwuQY2LS7pEC5bKHD1fMF',
      },
      {
        exception: 'Invalid compression flag',
        WIF: 'KwDiBf89QgGbjEhKnhXJuH7LrciVrZi3qYjgd9M7rFU73sfZr2ym',
      },
      {
        exception: 'Invalid WIF length',
        WIF: '3tq8Vmhh9SN5XhjTGSWgx8iKk59XbKG6UH4oqpejRuJhfYD',
      },
      {
        exception: 'Invalid WIF length',
        WIF: '38uMpGARR2BJy5p4dNFKYg9UsWNoBtkpbdrXDjmfvz8krCtw3T1W92ZDSR',
      },
    ],
  },
};
export default ecpair;
