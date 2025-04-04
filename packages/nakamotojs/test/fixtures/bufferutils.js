const fixtures = {
    valid: [
        {
            dec: 0,
            hex: '0000000000000000',
        },
        {
            dec: 1,
            hex: '0100000000000000',
        },
        {
            dec: 252,
            hex: 'fc00000000000000',
        },
        {
            dec: 253,
            hex: 'fd00000000000000',
        },
        {
            dec: 254,
            hex: 'fe00000000000000',
        },
        {
            dec: 255,
            hex: 'ff00000000000000',
        },
        {
            dec: 65534,
            hex: 'feff000000000000',
        },
        {
            dec: 65535,
            hex: 'ffff000000000000',
        },
        {
            dec: 65536,
            hex: '0000010000000000',
        },
        {
            dec: 65537,
            hex: '0100010000000000',
        },
        {
            dec: 4294967295,
            hex: 'ffffffff00000000',
        },
        {
            dec: 4294967296,
            hex: '0000000001000000',
        },
        {
            dec: 4294967297,
            hex: '0100000001000000',
        },
        {
            dec: 9007199254740991,
            hex: 'ffffffffffff1f00',
        },
    ],
    invalid: {
        readUInt64LE: [
            {
                description: 'n === 2^53',
                exception: 'RangeError: value out of range',
                hex: '0000000000002000',
                dec: 9007199254740992,
            },
            {
                description: 'n > 2^53',
                exception: 'RangeError: value out of range',
                hex: '0100000000002000',
                dec: 9007199254740993,
            },
        ],
        writeUInt64LE: [
            {
                description: 'n === 2^53',
                exception: 'RangeError: value out of range',
                hex: '0000000000002000',
                dec: 9007199254740992,
            },
            {
                description: 'n > 2^53',
                exception: 'RangeError: value out of range',
                hex: '0100000000002000',
                dec: 9007199254740993,
            },
            {
                description: 'n < 0',
                exception: 'specified a negative value for writing an unsigned value',
                hex: '',
                dec: -1,
            },
            {
                description: '0 < n < 1',
                exception: 'value has a fractional component',
                hex: '',
                dec: 0.1,
            },
        ],
    },
};
export default fixtures;
