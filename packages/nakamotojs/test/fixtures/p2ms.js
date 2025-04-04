const p2msFixtures = {
    valid: [
        {
            description: 'output from output',
            arguments: {
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
            },
            options: {},
            expected: {
                m: 2,
                n: 2,
                name: 'p2ms(2 of 2)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
                signatures: null,
                input: null,
                witness: null,
            },
        },
        {
            description: 'output from m/pubkeys',
            arguments: {
                m: 1,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
            },
            expected: {
                m: 1,
                n: 2,
                name: 'p2ms(1 of 2)',
                output: 'OP_1 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
                signatures: null,
                input: null,
                witness: null,
            },
        },
        {
            description: 'input/output from m/pubkeys/signatures',
            arguments: {
                m: 2,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                    '030000000000000000000000000000000000000000000000000000000000000003',
                ],
                signatures: ['300602010002010001', '300602010102010001'],
            },
            expected: {
                m: 2,
                n: 3,
                name: 'p2ms(2 of 3)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                    '030000000000000000000000000000000000000000000000000000000000000003',
                ],
                signatures: ['300602010002010001', '300602010102010001'],
                input: 'OP_0 300602010002010001 300602010102010001',
                witness: [],
            },
        },
        {
            description: 'input/output from output/signatures',
            arguments: {
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                signatures: ['300602010002010001', '300602010102010001'],
            },
            expected: {
                m: 2,
                n: 3,
                name: 'p2ms(2 of 3)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                    '030000000000000000000000000000000000000000000000000000000000000003',
                ],
                signatures: ['300602010002010001', '300602010102010001'],
                input: 'OP_0 300602010002010001 300602010102010001',
                witness: [],
            },
        },
        {
            description: 'input/output from input/output',
            arguments: {
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                input: 'OP_0 300602010002010001 300602010102010001',
            },
            expected: {
                m: 2,
                n: 3,
                name: 'p2ms(2 of 3)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                    '030000000000000000000000000000000000000000000000000000000000000003',
                ],
                signatures: ['300602010002010001', '300602010102010001'],
                input: 'OP_0 300602010002010001 300602010102010001',
                witness: [],
            },
        },
        {
            description: 'input/output from input/output, even if incomplete',
            arguments: {
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                input: 'OP_0 OP_0 300602010102010001',
            },
            options: {
                allowIncomplete: true,
            },
            expected: {
                m: 2,
                n: 2,
                name: 'p2ms(2 of 2)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
                signatures: [0, '300602010102010001'],
                input: 'OP_0 OP_0 300602010102010001',
                witness: [],
            },
        },
        {
            description: 'input/output from output/signatures, even if incomplete',
            arguments: {
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                signatures: [0, '300602010102010001'],
            },
            options: {
                allowIncomplete: true,
            },
            expected: {
                m: 2,
                n: 2,
                name: 'p2ms(2 of 2)',
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 OP_2 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
                signatures: [0, '300602010102010001'],
                input: 'OP_0 OP_0 300602010102010001',
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
                m: 2,
            },
        },
        {
            exception: 'Not enough data',
            arguments: {
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
            },
        },
        {
            description: 'Non OP_INT chunk (m)',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_RESERVED',
            },
        },
        {
            description: 'Non OP_INT chunk (n)',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_1 OP_RESERVED',
            },
        },
        {
            description: 'Missing OP_CHECKMULTISIG',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_1 OP_2 OP_RESERVED',
            },
        },
        {
            description: 'm is 0',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_0 OP_2 OP_CHECKMULTISIG',
            },
        },
        {
            description: 'n is 0 (m > n)',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_2 OP_0 OP_CHECKMULTISIG',
            },
        },
        {
            description: 'm > n',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_3 OP_2 OP_CHECKMULTISIG',
            },
        },
        {
            description: 'n !== output pubkeys',
            exception: 'Output is invalid',
            options: {},
            arguments: {
                output: 'OP_1 030000000000000000000000000000000000000000000000000000000000000001 OP_2 OP_CHECKMULTISIG',
            },
        },
        {
            description: 'Non-canonical output public key',
            exception: 'Output is invalid',
            arguments: {
                output: 'OP_1 ffff OP_1 OP_CHECKMULTISIG',
            },
        },
        {
            exception: 'n mismatch',
            arguments: {
                n: 2,
                output: 'OP_1 030000000000000000000000000000000000000000000000000000000000000001 OP_1 OP_CHECKMULTISIG',
            },
        },
        {
            exception: 'm mismatch',
            arguments: {
                m: 2,
                output: 'OP_1 030000000000000000000000000000000000000000000000000000000000000001 OP_1 OP_CHECKMULTISIG',
            },
        },
        {
            exception: 'Pubkeys mismatch',
            options: {},
            arguments: {
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                output: 'OP_1 030000000000000000000000000000000000000000000000000000000000000002 OP_1 OP_CHECKMULTISIG',
            },
        },
        {
            exception: 'Pubkey count mismatch',
            arguments: {
                m: 2,
                n: 3,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                ],
            },
        },
        {
            exception: 'Pubkey count cannot be less than m',
            arguments: {
                m: 4,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
            },
        },
        {
            exception: 'Not enough signatures provided',
            arguments: {
                m: 2,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                signatures: ['300602010002010001'],
            },
        },
        {
            exception: 'Signature mismatch',
            arguments: {
                m: 1,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                signatures: ['300602010002010001'],
                input: 'OP_0 300602010002010101',
            },
        },
        {
            exception: 'Too many signatures provided',
            arguments: {
                m: 2,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                signatures: [
                    '300602010002010001',
                    '300602010002010001',
                    '300602010002010001',
                ],
            },
        },
        {
            description: 'Missing OP_0',
            exception: 'Input is invalid',
            options: {},
            arguments: {
                m: 2,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                input: 'OP_RESERVED',
            },
        },
        {
            exception: 'Input has invalid signature\\(s\\)',
            arguments: {
                m: 1,
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                ],
                input: 'OP_0 ffffffffffffffff',
            },
        },
    ],
    dynamic: {
        depends: {
            m: ['output'],
            n: ['output', ['m', 'pubkeys']],
            output: ['output', ['m', 'pubkeys']],
            pubkeys: ['output'],
            signatures: [['input', 'output']],
            input: [['signatures', 'output']],
            witness: [['input', 'output']],
        },
        details: [
            {
                description: 'p2ms',
                m: 2,
                n: 3,
                output: 'OP_2 030000000000000000000000000000000000000000000000000000000000000001 030000000000000000000000000000000000000000000000000000000000000002 030000000000000000000000000000000000000000000000000000000000000003 OP_3 OP_CHECKMULTISIG',
                pubkeys: [
                    '030000000000000000000000000000000000000000000000000000000000000001',
                    '030000000000000000000000000000000000000000000000000000000000000002',
                    '030000000000000000000000000000000000000000000000000000000000000003',
                ],
                signatures: ['300602010002010001', '300602010102010001'],
                input: 'OP_0 300602010002010001 300602010102010001',
                witness: [],
            },
        ],
    },
};
export default p2msFixtures;
