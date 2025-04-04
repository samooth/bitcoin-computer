const p2pkh = {
  valid: [
    {
      description: 'output from address',
      arguments: {
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
      },
      options: {},
      expected: {
        name: 'p2pkh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'output from hash',
      arguments: {
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
      },
      expected: {
        name: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'output from output',
      arguments: {
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
      },
      expected: {
        name: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
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
        name: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'input/output from pubkey/signature',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
      },
      expected: {
        name: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000001',
        witness: [],
      },
    },
    {
      description: 'input/output from input',
      arguments: {
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000001',
      },
      expected: {
        name: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
        witness: [],
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
      description: 'Unexpected OP_RESERVED',
      exception: 'Output is invalid',
      arguments: {
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_RESERVED',
      },
    },
    {
      description: 'Unexpected OP_DUP',
      exception: 'Output is invalid',
      options: {},
      arguments: {
        output:
          'OP_DUP OP_DUP 168b992bcfc44050310b3a94bd0771136d0b28d137 OP_EQUALVERIFY',
      },
    },
    {
      description: 'Hash too short (too many chunks)',
      exception: 'Output is invalid',
      arguments: {
        output:
          'OP_DUP OP_DUP 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_TRUE OP_EQUALVERIFY',
      },
    },
    {
      description: 'Non-minimally encoded (non BIP62 compliant)',
      exception:
        'Expected property "output" of type Buffer\\(Length: 25\\), got Buffer\\(Length: 26\\)',
      arguments: {
        outputHex: '76a94c14aa4d7985c57e011a8b3dd8e0e5a73aaef41629c588ac',
      },
    },
    {
      exception: 'Invalid version or Network mismatch',
      arguments: {
        address: '3LRW7jeCvQCRdPF8S3yUCfRAx4eqXFmdcr',
      },
    },
    {
      exception: 'Invalid address',
      arguments: {
        address: '111111111111111111117K4nzc',
      },
    },
    {
      exception: 'Invalid address',
      arguments: {
        address: '111111111111111111111111133izVn',
      },
    },
    {
      exception: 'Pubkey mismatch',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000002',
      },
    },
    {
      exception: 'Input has invalid signature',
      arguments: {
        input:
          'ffffffffffffffffff 030000000000000000000000000000000000000000000000000000000000000001',
      },
    },
    {
      exception: 'Input has invalid pubkey',
      arguments: {
        input:
          '300602010002010001 ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'Input has unexpected data',
      exception: 'Input is invalid',
      arguments: {
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000001 ffff',
      },
    },
    {
      description: 'H(pubkey) != H',
      exception: 'Hash mismatch',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'address.hash != H',
      exception: 'Hash mismatch',
      arguments: {
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'address.hash != output.hash',
      exception: 'Hash mismatch',
      arguments: {
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        output:
          'OP_DUP OP_HASH160 ffffffffffffffffffffffffffffffffffffffff OP_EQUALVERIFY OP_CHECKSIG',
      },
    },
    {
      description: 'output.hash != H',
      exception: 'Hash mismatch',
      arguments: {
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'H(input.pubkey) != H',
      exception: 'Hash mismatch',
      arguments: {
        hash: 'ffffffffffffffffffffffffffffffffffffffff',
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000001',
      },
    },
    {
      exception: 'Signature mismatch',
      arguments: {
        signature: '300602010002010001',
        input:
          '300602010302010301 030000000000000000000000000000000000000000000000000000000000000001',
      },
    },
  ],
  dynamic: {
    depends: {
      address: ['address', 'output', 'hash', 'pubkey', 'input'],
      hash: ['address', 'output', 'hash', 'pubkey', 'input'],
      output: ['address', 'output', 'hash', 'pubkey', 'input'],
      pubkey: ['input'],
      signature: ['input'],
      input: [['pubkey', 'signature']],
      witness: ['input'],
    },
    details: [
      {
        description: 'p2pkh',
        address: '134D6gYy8DsR5m4416BnmgASuMBqKvogQh',
        hash: '168b992bcfc44050310b3a94bd0771136d0b28d1',
        output:
          'OP_DUP OP_HASH160 168b992bcfc44050310b3a94bd0771136d0b28d1 OP_EQUALVERIFY OP_CHECKSIG',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
        input:
          '300602010002010001 030000000000000000000000000000000000000000000000000000000000000001',
        witness: [],
      },
    ],
  },
};

export default p2pkh;
