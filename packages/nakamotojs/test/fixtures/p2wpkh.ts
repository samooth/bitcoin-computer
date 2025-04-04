const p2wpkh = {
  valid: [
    {
      description: 'output from address',
      arguments: {
        address: 'bc1qafk4yhqvj4wep57m62dgrmutldusqde8adh20d',
      },
      options: {},
      expected: {
        name: 'p2wpkh',
        hash: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        output: 'OP_0 ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'output from hash',
      arguments: {
        hash: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
      },
      expected: {
        name: 'p2wpkh',
        address: 'bc1qafk4yhqvj4wep57m62dgrmutldusqde8adh20d',
        output: 'OP_0 ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'output from output',
      arguments: {
        output: 'OP_0 ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
      },
      expected: {
        name: 'p2wpkh',
        address: 'bc1qafk4yhqvj4wep57m62dgrmutldusqde8adh20d',
        hash: 'ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'output from pubkey',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
      },
      expected: {
        name: 'p2wpkh',
        address: 'bc1qz69ej270c3q9qvgt822t6pm3zdksk2x35j2jlm',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output: 'OP_0 168b992bcfc44050310b3a94bd0771136d0b28d1',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'witness/output from pubkey/signature',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
      },
      expected: {
        name: 'p2wpkh',
        address: 'bc1qz69ej270c3q9qvgt822t6pm3zdksk2x35j2jlm',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output: 'OP_0 168b992bcfc44050310b3a94bd0771136d0b28d1',
        input: '',
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
    },
    {
      description: 'witness/output from witness',
      arguments: {
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
      expected: {
        name: 'p2wpkh',
        address: 'bc1qz69ej270c3q9qvgt822t6pm3zdksk2x35j2jlm',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output: 'OP_0 168b992bcfc44050310b3a94bd0771136d0b28d1',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
        input: '',
      },
    },
  ],
  invalid: [
    {
      exception: 'Not enough data',
      arguments: {},
    },
    {
      exception: 'Not enough data',
      arguments: {
        signature: '300602010002010001',
      },
    },
    {
      exception: 'Output is invalid',
      description: 'Unexpected OP',
      arguments: {
        output: 'OP_RESERVED ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
      },
    },
    {
      exception: 'Invalid pubkey for p2wpkh',
      description: 'Uncompressed pubkey in pubkey',
      arguments: {
        pubkey:
          '049fa211b0fca342589ca381cc96520c3d0e3924832158d9f29891936cac091e80687acdca51868ee1f89a3bb36bb16f186262938e1f94c1e7692924935b9b1457',
      },
    },
    {
      exception: 'Witness has invalid pubkey',
      description: 'Uncompressed pubkey in witness',
      arguments: {
        witness: [
          '300602010002010001',
          '049fa211b0fca342589ca381cc96520c3d0e3924832158d9f29891936cac091e80687acdca51868ee1f89a3bb36bb16f186262938e1f94c1e7692924935b9b1457',
        ],
      },
    },
    {
      exception: 'Pubkey mismatch',
      options: {},
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000002',
        ],
      },
    },
    {
      exception: 'Signature mismatch',
      arguments: {
        signature: '300602010002010002',
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
    },
    {
      exception: 'Invalid prefix or Network mismatch',
      arguments: {
        address:
          'foo1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqs30dvv',
      },
    },
    {
      exception: 'Invalid address version',
      arguments: {
        address:
          'bc1pqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq5us4ke',
      },
    },
    {
      exception: 'Invalid address data',
      arguments: {
        address: 'bc1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqmql8k8',
      },
    },
    {
      exception: 'Hash mismatch',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      exception: 'Hash mismatch',
      arguments: {
        address: 'bc1qafk4yhqvj4wep57m62dgrmutldusqde8adh20d',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      exception: 'Hash mismatch',
      arguments: {
        output: 'OP_0 ea6d525c0c955d90d3dbd29a81ef8bfb79003727',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      exception: 'Hash mismatch',
      arguments: {
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
      },
    },
    {
      exception: 'Hash mismatch',
      arguments: {
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
    },
    {
      exception: 'Witness is invalid',
      arguments: {
        witness: [],
      },
    },
    {
      exception: 'Witness has invalid signature',
      arguments: {
        witness: [
          'ffffffffffffffffff',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
    },
    {
      exception: 'Witness has invalid pubkey',
      arguments: {
        witness: [
          '300602010002010001',
          'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        ],
      },
    },
  ],
  dynamic: {
    depends: {
      address: ['address', 'output', 'hash', 'pubkey', 'witness'],
      hash: ['address', 'output', 'hash', 'pubkey', 'witness'],
      output: ['address', 'output', 'hash', 'pubkey', 'witness'],
      pubkey: ['witness'],
      signature: ['witness'],
      input: ['witness'],
      witness: [['pubkey', 'signature']],
    },
    details: [
      {
        description: 'p2wpkh',
        address: 'bc1qz69ej270c3q9qvgt822t6pm3zdksk2x35j2jlm',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output: 'OP_0 168b992bcfc44050310b3a94bd0771136d0b28d1',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
        input: '',
        witness: [
          '300602010002010001',
          '030000000000000000000000000000000000000000000000000000000000000001',
        ],
      },
    ],
  },
};

export default p2wpkh;
