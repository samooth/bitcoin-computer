const p2pk = {
  valid: [
    {
      description: 'output from output',
      arguments: {
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
      },
      options: {},
      expected: {
        name: 'p2pk',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
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
        name: 'p2pk',
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
        signature: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'input/output from output/signature',
      arguments: {
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
        signature: '300602010002010001',
      },
      expected: {
        name: 'p2pk',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        input: '300602010002010001',
        witness: [],
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
        name: 'p2pk',
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
        input: '300602010002010001',
        witness: [],
      },
    },
    {
      description: 'input/output from input/output',
      arguments: {
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
        input: '300602010002010001',
      },
      expected: {
        name: 'p2pk',
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
      description: 'Non-canonical signature',
      exception:
        'Expected property "signature" of type \\?isCanonicalScriptSignature, got Buffer',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '3044',
      },
    },
    {
      description: 'Unexpected OP_RESERVED',
      exception: 'Output is invalid',
      arguments: {
        output: 'OP_RESERVED',
      },
    },
    {
      description: 'Non-canonical output public key',
      exception: 'Output pubkey is invalid',
      arguments: {
        output: 'ffff OP_CHECKSIG',
      },
    },
    {
      description: 'Unexpected OP_0 (at end)',
      exception: 'Output is invalid',
      arguments: {
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG OP_0',
      },
    },
    {
      exception: 'Pubkey mismatch',
      options: {},
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        output:
          '030000000000000000000000000000000000000000000000000000000000000002 OP_CHECKSIG',
      },
    },
    {
      description: 'Too many chunks',
      exception: 'Input is invalid',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        input: '300602010002010001 OP_RESERVED',
      },
    },
    {
      exception: 'Input has invalid signature',
      arguments: {
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        input: 'ffffffffffffffff',
      },
    },
    {
      exception: 'Input has invalid signature',
      arguments: {
        input: '30060201ff0201ff01',
      },
    },
    {
      exception: 'Signature mismatch',
      arguments: {
        signature: '300602010002010001',
        input: '300602010302010301',
      },
    },
  ],
  dynamic: {
    depends: {
      output: ['pubkey'],
      pubkey: ['output'],
      signature: [['input', 'output']],
      input: [['signature', 'output']],
      witness: [['input', 'output']],
    },
    details: [
      {
        description: 'p2pk',
        output:
          '030000000000000000000000000000000000000000000000000000000000000001 OP_CHECKSIG',
        pubkey:
          '030000000000000000000000000000000000000000000000000000000000000001',
        signature: '300602010002010001',
        input: '300602010002010001',
        witness: [],
      },
    ],
  },
};

export default p2pk;
