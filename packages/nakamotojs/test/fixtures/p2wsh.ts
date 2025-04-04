const p2wsh = {
  valid: [
    {
      description: 'p2wsh-*, out (from address)',
      arguments: {
        address:
          'bc1q6rgl33d3s9dugudw7n68yrryajkr3ha9q8q24j20zs62se4q9tsqdy0t2q',
      },
      options: {},
      expected: {
        name: 'p2wsh',
        hash: 'd0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        redeem: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'p2wsh-*, out (from hash)',
      arguments: {
        hash: 'd0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1q6rgl33d3s9dugudw7n68yrryajkr3ha9q8q24j20zs62se4q9tsqdy0t2q',
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        redeem: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'p2wsh-*, out (from output)',
      arguments: {
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1q6rgl33d3s9dugudw7n68yrryajkr3ha9q8q24j20zs62se4q9tsqdy0t2q',
        hash: 'd0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        redeem: null,
        input: null,
        witness: null,
      },
    },
    {
      description: 'p2wsh-p2pkh, out (from redeem)',
      arguments: {
        redeem: {
          address: 'this is P2PKH context, unknown and ignored by p2wsh',
          output:
            'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1qusxlgq9quu27ucxs7a2fg8nv0pycdzvxsjk9npyupupxw3y892ss2cq5ar',
        hash: 'e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        output:
          'OP_0 e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        input: null,
        witness: null,
      },
    },
    {
      description: 'p2wsh-p2wpkh, out (from redeem)',
      arguments: {
        redeem: {
          hash: 'this is P2WPKH context, unknown and ignored by p2wsh',
          output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        hash: '0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        output:
          'OP_0 0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        input: null,
        witness: null,
      },
    },
    {
      description: 'p2wsh-p2pk, out (from redeem)',
      arguments: {
        redeem: {
          output:
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
          pubkey: 'this is P2WPKH context, unknown and ignored by p2wsh',
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1q6rgl33d3s9dugudw7n68yrryajkr3ha9q8q24j20zs62se4q9tsqdy0t2q',
        hash: 'd0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        input: null,
        witness: null,
      },
    },
    {
      description:
        'p2wsh-p2pkh, in and out (from redeem, transformed to witness)',
      arguments: {
        redeem: {
          output:
            'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
          input:
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1qusxlgq9quu27ucxs7a2fg8nv0pycdzvxsjk9npyupupxw3y892ss2cq5ar',
        hash: 'e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        output:
          'OP_0 e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        redeem: {
          input: '',
        },
        input: '',
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          '76a914c30afa58ae0673b00a45b5c17dff4633780f140088ac',
        ],
      },
    },
    {
      description: 'p2wsh-p2wpkh, in and out (from redeem w/ witness)',
      arguments: {
        redeem: {
          output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
          input: '',
          witness: [
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          ],
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        hash: '0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        output:
          'OP_0 0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        input: '',
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
        ],
      },
    },
    {
      description: 'p2wsh-p2pk, in and out (from witness)',
      arguments: {
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '2103e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058ac',
        ],
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1q6rgl33d3s9dugudw7n68yrryajkr3ha9q8q24j20zs62se4q9tsqdy0t2q',
        hash: 'd0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
        redeem: {
          output:
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
          input: '',
          witness: [
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          ],
        },
        input: '',
      },
    },
    {
      description: 'p2wsh-p2wpkh, in and out (from witness)',
      arguments: {
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
        ],
      },
      expected: {
        name: 'p2wsh',
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        hash: '0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        output:
          'OP_0 0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        redeem: {
          output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
          input: '',
          witness: [
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          ],
        },
      },
    },
    {
      description: 'p2wsh-p2pkh, out (network derived from redeem)',
      arguments: {
        redeem: {
          address: 'this is P2PKH context, unknown and ignored by p2wsh',
          output:
            'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
          network: 'testnet',
        },
      },
      expected: {
        name: 'p2wsh',
        address:
          'tb1qusxlgq9quu27ucxs7a2fg8nv0pycdzvxsjk9npyupupxw3y892ssaskm8v',
        hash: 'e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        output:
          'OP_0 e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        input: null,
        witness: null,
        network: 'testnet',
      },
    },
  ],
  invalid: [
    {
      exception: 'Not enough data',
      arguments: {},
    },
    {
      description: 'address.hash != H',
      exception: 'Hash mismatch',
      arguments: {
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        hash: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'address.hash != output.hash',
      exception: 'Hash mismatch',
      arguments: {
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        output:
          'OP_0 ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
      },
    },
    {
      description: 'output.hash != H',
      exception: 'Hash mismatch',
      arguments: {
        hash: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        output:
          'OP_0 d0d1f8c5b1815bc471aef4f4720c64ecac38dfa501c0aac94f1434a866a02ae0',
      },
    },
    {
      description: 'H(redeem.output) != H',
      exception: 'Hash mismatch',
      arguments: {
        hash: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
        redeem: {
          output:
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058 OP_CHECKSIG',
        },
      },
    },
    {
      exception: 'Output is invalid',
      options: {},
      arguments: {
        output:
          'OP_HASH256 ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff OP_EQUAL',
      },
    },
    {
      exception: 'Redeem.output is invalid',
      arguments: {
        redeem: {
          output: '',
        },
      },
    },
    {
      exception: 'Redeem.output unspendable with more than 201 non-push ops',
      arguments: {
        redeem: {
          output:
            'OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP OP_0 OP_0 OP_2DROP 02c56aef124aa09836590fb858ce3517bf9d4b27e9d3fc81c2b00845f98ef87d9e OP_CHECKSIG',
        },
      },
    },
    {
      exception: 'Redeem.output unspendable if larger than 3600 bytes',
      arguments: {
        redeem: {
          output:
            '02dfec67b1047f5ee7fcfc470565e07ce346fb89013f8e56b9e48a9af572f6cc9e OP_CHECKSIGVERIFY 034896ca85df092ac577480101193980c02b96a01533e7096858e696789c55b032 OP_CHECKSIGVERIFY 03365a5bd77cb355a5edefe0b47b64adf466d37c826c42332c8ea3bd2cb0fd2c0f OP_CHECKSIGVERIFY 0206c24e25bc5048bbb4723d701532db94366aa12bd080a8cf2cd35b41ea16b7e2 OP_CHECKSIGVERIFY 02e55fb5431a1c654cce06255befb4232600a94c4db57b4ab218a4ce04259c1145 OP_CHECKSIGVERIFY 02b4af93ac624e0f45e8577d828d0de343c595b9328958005baf6ab21a650ad39a OP_CHECKSIGVERIFY 03311744aa2a0d9b0af1c10f2eb4f4dd98b672fd61a575720298f334ebff3633fb OP_CHECKSIGVERIFY 0355b2ca92e66c250fafd45f3177b4a0fb48befc8b5911a37cdf3de5acc23b6e48 OP_CHECKSIGVERIFY 023e24b1d99ee02f08451af9e7e5d08db66db3e4ba04238bb4a484fc1bd66e4b89 OP_CHECKSIGVERIFY 03e0ece48ceb3c3bb566acbfda433662d2ce14f0b23bda0d0f065c5e0589ec8f1d OP_CHECKSIGVERIFY 02426aed062674081fe6e71ed130fc9b29329cef01204fe26b5ace638648b8d846 OP_CHECKSIGVERIFY 022960bc5bb274d8c963dbe6f77ef2cf59644f93f2dc3bf0d0036903656deaf0f3 OP_CHECKSIGVERIFY 03460e475689d3222710af5d3b8079bad3a12b248f61b300657b026c44c2b392b2 OP_CHECKSIGVERIFY 029d23671b573cbfb6272f5d197bbb88afa8fda9947affb5686c16a3e1f7592bb4 OP_CHECKSIGVERIFY 038bd4adeddfe560f8d9b1d1b7fc655c74fe605de09195c3f71e2fb8f68ecc4ca0 OP_CHECKSIGVERIFY 03a531c8795353c2a10f0e1619db468e5a87fd3303091662193c2701cfc1b1c4b0 OP_CHECKSIGVERIFY 02900a11b6b8ccc281dd7f1ab84b18358bfe2fef972967f0ca0ff1c71c5c72a8cb OP_CHECKSIGVERIFY 025e8d845e3f4d0d3afccb9c3a8368ccdcac14ff56b20706f534d7f81655715605 OP_CHECKSIGVERIFY 02646cce7f0159537815819139aad2e6d33f4398f8f502a0391491c7bf25bca4de OP_CHECKSIGVERIFY 03e852e9b853a26d7199a8772382bec56b9da7478b8037112c7d16d80d7c683568 OP_CHECKSIGVERIFY 0308d04709baf88bc6f5670d57c332ca872a8707207f3a5a59272940eb9ebc2936 OP_CHECKSIGVERIFY 0393cf1028583df1323f3b712edeb68078d412fabd1e5ccde839a500ddf506885a OP_CHECKSIGVERIFY 020edb22b296434cfe44b51f8dfc33579dd587e57a5f147470564ba9f817a586c8 OP_CHECKSIGVERIFY 0233de8260c26cba2851efc0ca2f695c37008929a2dc9244298c1990b36990083a OP_CHECKSIGVERIFY 02bcae3f6aecfd066ca029dfc833fc5f9f799760ab4baed6ef8c5ff94c002a7bc6 OP_CHECKSIGVERIFY 0285bb427b63bc8ed0890132d91a9283c7b82aa3f6d7fa7b3b27a74e7ffa41373c OP_CHECKSIGVERIFY 024e4c4f5ad562855256ba6380aba4bc93d7699939ace07c7c53fbecce044836c1 OP_CHECKSIGVERIFY 030895c63aebb5ce9e1ea2b3f30ebfd23f55fed7698757c1ec03154f1d581f0531 OP_CHECKSIGVERIFY 02070a7d5b57bf8c67ba34ed35108ba26579dbb84703c043886641e6482be0ae4a OP_CHECKSIGVERIFY 029c6ce3700ffe9b47b008c4cd849d4cd6ed1264eedebc0a4e1165dcbf5db503c6 OP_CHECKSIGVERIFY 02b1aa852b32f35e73a6aa070db64bc70329ec34f3ec13081b3859d45bb19e83b9 OP_CHECKSIGVERIFY 0375b9b9b287208cc57e49e15511f2c853bbb5562ed9fdd7b35e561d7e429018fc OP_CHECKSIGVERIFY 0355b3f1730e8eee06687bc128a86e3724dbe4da8a26fd3bfa54482ca25b247a99 OP_CHECKSIGVERIFY 03e9960ff1268abaff7190ba9f34f480b1279a6a52f96608313324c79214287bd1 OP_CHECKSIGVERIFY 036c8755595e5f3cfe45585237cbbec13737c9dab16ef90feca4b59cc20a3a5535 OP_CHECKSIGVERIFY 0228adcffece12cc99217f1d763aac469754fe3e49894a16a813443e29532e9651 OP_CHECKSIGVERIFY 03a0ea1dc9043e2f67450bb8ddccaa3af31964077a25b2baef62099fe0515fbd21 OP_CHECKSIGVERIFY 037de9ef6bee93474f6e02e377721543f8f4684e7074b45584fd751881aee96cf7 OP_CHECKSIGVERIFY 032874661d4c3802ad9913852a0271cb45cc90d981e662d831bd5290f2d6fe138d OP_CHECKSIGVERIFY 03e9242d1c7ed3ba76f8eba3e2fb4c5d33d667425222b95407de9209790e1b4bd3 OP_CHECKSIGVERIFY 02473773327552dc9f3652b513c68e133cc4d39202b348bbed359bc7b00f91bade OP_CHECKSIGVERIFY 03cebb99348541461de36106a68b0c7063bd4321021a21afbe90fa05d90a3444f0 OP_CHECKSIGVERIFY 03544a4accbdebb1bc0c62dfd3055dea9bd3c610c161a10afd53b4646d736a17db OP_CHECKSIGVERIFY 02baa91fc638c57fff9211334dc9c98b9937d75b7c534bdaeefcdeb56ca8f997e3 OP_CHECKSIGVERIFY 03bd8ea1948d869143f1fc0604ec8b54c95dd6cfc6cce11800bbe82b92ae9b5b74 OP_CHECKSIGVERIFY 0319ab36ae3727162c6699d6cfa76389a49d06a4bd4d4dad47606f8deec0376e75 OP_CHECKSIGVERIFY 0293003a1bca4ad83ac3bf5a2224ef782c8d7290f4f492e3588e644ffe02b3b35a OP_CHECKSIGVERIFY 0395248d8852d32e11f3288fa4f39a36fcc8225da9289fc3d0ad65f409821c4e17 OP_CHECKSIGVERIFY 02e3bee6809b08ab3b9fdbb4a7fcaa64cb602fdae173c6ce1c4042ca36f60e90fd OP_CHECKSIGVERIFY 034b74d1136c5422239d8c4a869e6cff7985204d9dedb2c3cca0b0b9afd589a35f OP_CHECKSIGVERIFY 0318e3f8941cf82c788d5dce82256bfe9522dd87f63a467e01c5004fec6667f0fe OP_CHECKSIGVERIFY 023fcda99ba2c461c65a3d95d03ab251d29ae9bd7b4d90a485aa6d075e35460e93 OP_CHECKSIGVERIFY 0329f7b047301f8f29725a9dd93e4742460e54b4c2ac9c08cfa9c4cd6a5e14a4ed OP_CHECKSIGVERIFY 0343a0c3f0fbbfd4ed0d1677c1a0cb3bb2a59dfcecdbc4af4386a6542cf349f437 OP_CHECKSIGVERIFY 02eae41bb436873f562629380ffdaf0fe5353cb5be07bd95343adf32ee984ef0ce OP_CHECKSIGVERIFY 02d71aa051ea95ba899d3e721f12a8ede4aebdd265a2ff31081128033bdd66befc OP_CHECKSIGVERIFY 029faa4411b3bc3a2778d6d3236396d2a81afefc792d07909e212de58e0765fa07 OP_CHECKSIGVERIFY 03eb3b7d5a44fcc754383ceca274a250b9a48a348ef166fad19981d5f37781d5dc OP_CHECKSIGVERIFY 03f3ccef99da37185f238f7643b7ff553e4f62fa376cf1852a49cd80cd856e444b OP_CHECKSIGVERIFY 03ba7b6f4ea978f9c5277c97d733ae0a2f55062555997971d6ed4b37d399b4f130 OP_CHECKSIGVERIFY 0217209004fa5e8b2277767caeac19a9c26c71655c917cf61aad6817f0717fcba0 OP_CHECKSIGVERIFY 0363f2e57f2ea1a49a39ed0542e1fdbc83e2d2317a2d29b058c7d82233f3c54e8a OP_CHECKSIGVERIFY 03dfd044cc08b325121055155e90f2955771f33f0e4d5462967dbeae431ac34e4b OP_CHECKSIGVERIFY 02aa29194b8666b1526b32e7b54cebe8305637837c7821399577ee95cf7bca6a36 OP_CHECKSIGVERIFY 02e11f095aa2730bfa6ab6a6d088d015e92204a70ad36c5fe6a6a97cf4be8fdc34 OP_CHECKSIGVERIFY 02d8a0b231ca61468d86abd8bf5169bd231243a4f75184f64a6946abb8eee17b9b OP_CHECKSIGVERIFY 034653d87fbdc8cff324a5f6e3220150749cff56f39f1bb378ae73301c15caca05 OP_CHECKSIGVERIFY 02b0e8830c020a01c31d8d211708ad1d04e7309bb584b8489d35fbcf12c09c84eb OP_CHECKSIGVERIFY 030b94559a4b54fc895f861bb2b5669736a709994ade45b08f9f6148ef25dc4eca OP_CHECKSIGVERIFY 02c1d4e3bd6651e273030a6d1f436a2455fa51b50390ba045c5e78bbef03eeb78f OP_CHECKSIGVERIFY 02b7d7f60abf61f50bcbaa0435f9a31a231b8f26def0f172578d0838091f7906eb OP_CHECKSIGVERIFY 02d410fbd6d899b21c3f6d380aeafea56a2e4e0e3b70f46734a716134fee793054 OP_CHECKSIGVERIFY 02bac3d71349f3dd83bc59c15c661d1520f43475f5fc0c38698b37de978419248b OP_CHECKSIGVERIFY 0277b4f24cc552577374909a853c1d570404e9072368d48310ed3ee597c9579e9d OP_CHECKSIGVERIFY 037ab3bd19731038c03bf4eec27e4e4788a8634b52c41e364dea45130b3ac8874b OP_CHECKSIGVERIFY 03102af5eb78a65b542b878e4e3eaa29f83f2efdae8838afe75cf2f85017b3f683 OP_CHECKSIGVERIFY 02452e8e88d61c0b206b9e4a319dc262662f4f98a5737e13b7abe2ceeae2bb8dcf OP_CHECKSIGVERIFY 0360d3d51bef5d6c5932e61b2ab44c7eea23a2d03cfed2422656ed1c873286a8e1 OP_CHECKSIGVERIFY 021eadd72a30b0ff9c2bc0f0b2815352fc789b85bf958ba36bde39092967968094 OP_CHECKSIGVERIFY 02631804ca57f694c27885d2d8c5e31e1f3b741a23d8c2e95a1ccd9ac8392c3c25 OP_CHECKSIGVERIFY 021ec0824b1594998ff91ddd2a7b53099ba60de84d447b13fddebf34533d111a3e OP_CHECKSIGVERIFY 039b386361ac56bd2b73186b66b77cb6de2fffbe05326dd2abf23d6b9d26b629ea OP_CHECKSIGVERIFY 0262efb44256f6ae1f1965aa24b57847e13f80a4283cb44a257572993845439a0e OP_CHECKSIGVERIFY 0283f818f966acc4894b54197eb7e94221851acfb6c986a7862ad86f961ab50a57 OP_CHECKSIGVERIFY 03a418b8eb7da20d694e257de6a9fc493676e1f98fef9f8165f69cd8d0f8099439 OP_CHECKSIGVERIFY 03697922030495b328ea3c101a1852ffd7818aa10fbedaf6c3a88b6fa381694d4b OP_CHECKSIGVERIFY 0266a13940d79ce8a272da6094df36875fd9c337c83d4ef491e0fa2a47ab3ffc57 OP_CHECKSIGVERIFY 03747ae0c8012281475a00085795b8bb0d595ebf2322f57ebd7c6b1edbbab56f92 OP_CHECKSIGVERIFY 02e357b1c82274aea4357e36278f912338e3adf1c17d8829edf394a1cc2bedc185 OP_CHECKSIGVERIFY 02dcc75706face7293b47b2e60af164971f9920118986ebf5ea147d077722e316f OP_CHECKSIGVERIFY 0347cdc7f774f1291bc45c7cb1d86eb7ea66a24622e387ccc7ac580b750f1ad9c3 OP_CHECKSIGVERIFY 02e650efb11ecd8ab320b3e5bec0d5852db1cddc1d67ede952f3c042f90dae1e43 OP_CHECKSIGVERIFY 039c24916f37a11398d4186a634414ea371003595e6444c92d01ace02bab5267ea OP_CHECKSIGVERIFY 038a5dbb9595503741fafe92f60187bfb2aad442dda5f9e6c17e5be6ec4b5521aa OP_CHECKSIGVERIFY 0291909a41d7114fc99e81224e37c030efc0c73b33e6b0eedcd8a53bfee276f108 OP_CHECKSIGVERIFY 02da51f2cc61ba9522869d2f9a34a21288cc8d017e4cf0060c85f2fff3ceacaf28 OP_CHECKSIGVERIFY 03237812d3a5ec0c49d8a60b15c2ac676cffc7eabf459dc9ef0ae215a1cbd26bb7 OP_CHECKSIGVERIFY 020e33b6b74b7f7190b0966b4f295199244ed33cea6e324c2f39a227486d87e059 OP_CHECKSIGVERIFY 02d2c96fd98d5da619ef2033892026b7f7595fd03667ab1f0b39a59d2e45a58c98 OP_CHECKSIGVERIFY 03df7ed4e582c8997b3a4c1138fac76144c02a052c7ac2c40e4e34d50e308efb42 OP_CHECKSIGVERIFY 028f343af70f46773a48bd8fcbeeb34a15f3cfee8427b62750006da2ae8a0745fc OP_CHECKSIGVERIFY 027e2f0c4f3d8d90ea0b426c82a6d41226e7b7c579724302034f844fde9a34bf96 OP_CHECKSIGVERIFY 03abdfa8a173a9be3a2669346430dcf5cbf5e2bb2321392bd661b9fa88be82677b OP_CHECKSIG',
        },
      },
    },
    {
      exception: 'Non push-only scriptSig',
      arguments: {
        redeem: {
          output: 'OP_TRUE',
          input: 'OP_HASH256',
        },
      },
    },
    {
      exception: 'Witness and redeem.output mismatch',
      arguments: {
        redeem: {
          output: 'OP_TRUE',
          input: 'OP_0',
        },
        witness: ['02ffff'],
      },
    },
    {
      exception: 'Witness and redeem.witness mismatch',
      arguments: {
        redeem: {
          output: 'OP_TRUE',
          witness: ['01'],
        },
        witness: ['00', '02ffff'],
      },
    },
    {
      exception: 'Witness and redeem.witness mismatch',
      arguments: {
        redeem: {
          output: 'OP_TRUE',
          witness: ['04000000ff'],
        },
        witness: ['04000000ee'],
      },
    },
    {
      exception: 'Ambiguous witness source',
      arguments: {
        redeem: {
          output: 'OP_TRUE',
          input: '01',
          witness: ['01'],
        },
      },
    },
    {
      exception: 'Network mismatch',
      arguments: {
        network: 'bitcoin',
        redeem: {
          network: 'testnet',
        },
      },
    },
    {
      exception: 'Network mismatch',
      arguments: {
        network: 'testnet',
        redeem: {
          network: 'bitcoin',
        },
      },
    },
    {
      exception: 'redeem.input or redeem.output contains uncompressed pubkey',
      arguments: {
        redeem: {
          output:
            '049fa211b0fca342589ca381cc96520c3d0e3924832158d9f29891936cac091e80687acdca51868ee1f89a3bb36bb16f186262938e1f94c1e7692924935b9b1457 OP_CHECKSIG',
        },
      },
    },
    {
      exception: 'redeem.input or redeem.output contains uncompressed pubkey',
      arguments: {
        redeem: {
          input:
            '049fa211b0fca342589ca381cc96520c3d0e3924832158d9f29891936cac091e80687acdca51868ee1f89a3bb36bb16f186262938e1f94c1e7692924935b9b1457',
        },
      },
    },
    {
      exception: 'Witness contains uncompressed pubkey',
      arguments: {
        witness: [
          '049fa211b0fca342589ca381cc96520c3d0e3924832158d9f29891936cac091e80687acdca51868ee1f89a3bb36bb16f186262938e1f94c1e7692924935b9b1457',
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
  ],
  dynamic: {
    depends: {
      address: ['address', 'output', 'hash', 'redeem.output', 'witness'],
      hash: ['address', 'output', 'hash', 'redeem.output', 'witness'],
      output: ['address', 'output', 'hash', 'redeem.output', 'witness'],
      'redeem.output': ['witness'],
      'redeem.input': [['input', 'witness'], 'witness'],
      input: ['witness'],
      witness: ['redeem'],
    },
    details: [
      {
        description: 'p2wsh-p2pkh',
        disabled: ['redeem.input'],
        address:
          'bc1qusxlgq9quu27ucxs7a2fg8nv0pycdzvxsjk9npyupupxw3y892ss2cq5ar',
        hash: 'e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        output:
          'OP_0 e40df400a0e715ee60d0f754941e6c784986898684ac59849c0f026744872aa1',
        redeem: {
          output:
            'OP_DUP OP_HASH160 c30afa58ae0673b00a45b5c17dff4633780f1400 OP_EQUALVERIFY OP_CHECKSIG',
          input:
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501 03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          witness: null,
        },
        input: '',
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          '76a914c30afa58ae0673b00a45b5c17dff4633780f140088ac',
        ],
      },
      {
        description: 'p2wsh-p2wpkh',
        address:
          'bc1qpsl7el8wcx22f3fpdt3lm2wmzug7yyx2q3n8wzgtf37kps9tqy7skc7m3e',
        hash: '0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        output:
          'OP_0 0c3fecfceec194a4c5216ae3fda9db1711e210ca046677090b4c7d60c0ab013d',
        redeem: {
          output: 'OP_0 c30afa58ae0673b00a45b5c17dff4633780f1400',
          input: '',
          witness: [
            '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
            '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          ],
        },
        input: '',
        witness: [
          '3045022100e4fce9ec72b609a2df1dc050c20dcf101d27faefb3e686b7a4cb067becdd5e8e022071287fced53806b08cf39b5ad58bbe614775b3776e98a9f8760af0d4d1d47a9501',
          '03e15819590382a9dd878f01e2f0cbce541564eb415e43b440472d883ecd283058',
          '0014c30afa58ae0673b00a45b5c17dff4633780f1400',
        ],
      },
    ],
  },
};

export default p2wsh;
