const signature = {
    valid: [
        {
            hashType: 1,
            hex: '3044022033a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c902206f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa5434226201',
            raw: {
                r: '33a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c9',
                s: '6f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa54342262',
            },
        },
        {
            hashType: 2,
            hex: '3044022054c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed022007082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a502',
            raw: {
                r: '54c4a33c6423d689378f160a7ff8b61330444abb58fb470f96ea16d99d4a2fed',
                s: '07082304410efa6b2943111b6a4e0aaa7b7db55a07e9861d1fb3cb1f421044a5',
            },
        },
        {
            hashType: 3,
            hex: '3045022100ff466a9f1b7b273e2f4c3ffe032eb2e814121ed18ef84665d0f515360dab3dd002206fc95f5132e5ecfdc8e5e6e616cc77151455d46ed48f5589b7db7771a332b28303',
            raw: {
                r: 'ff466a9f1b7b273e2f4c3ffe032eb2e814121ed18ef84665d0f515360dab3dd0',
                s: '6fc95f5132e5ecfdc8e5e6e616cc77151455d46ed48f5589b7db7771a332b283',
            },
        },
        {
            hashType: 129,
            hex: '3045022100c0dafec8251f1d5010289d210232220b03202cba34ec11fec58b3e93a85b91d3022075afdc06b7d6322a590955bf264e7aaa155847f614d80078a90292fe205064d381',
            raw: {
                r: 'c0dafec8251f1d5010289d210232220b03202cba34ec11fec58b3e93a85b91d3',
                s: '75afdc06b7d6322a590955bf264e7aaa155847f614d80078a90292fe205064d3',
            },
        },
        {
            hashType: 130,
            hex: '304402207186363571d65e084e7f02b0b77c3ec44fb1b257dee26274c38c928986fea45d02200de0b38e06807e46bda1f1e293f4f6323e854c86d58abdd00c46c16441085df682',
            raw: {
                r: '7186363571d65e084e7f02b0b77c3ec44fb1b257dee26274c38c928986fea45d',
                s: '0de0b38e06807e46bda1f1e293f4f6323e854c86d58abdd00c46c16441085df6',
            },
        },
        {
            hashType: 131,
            hex: '3045022100fbfe5076a15860ba8ed00e75e9bd22e05d230f02a936b653eb55b61c99dda48702200e68880ebb0050fe4312b1b1eb0899e1b82da89baa5b895f612619edf34cbd3783',
            raw: {
                r: 'fbfe5076a15860ba8ed00e75e9bd22e05d230f02a936b653eb55b61c99dda487',
                s: '0e68880ebb0050fe4312b1b1eb0899e1b82da89baa5b895f612619edf34cbd37',
            },
        },
        {
            hashType: 129,
            hex: '3045022100cde1302d83f8dd835d89aef803c74a119f561fbaef3eb9129e45f30de86abbf9022006ce643f5049ee1f27890467b77a6a8e11ec4661cc38cd8badf90115fbd03cef81',
            raw: {
                r: 'cde1302d83f8dd835d89aef803c74a119f561fbaef3eb9129e45f30de86abbf9',
                s: '06ce643f5049ee1f27890467b77a6a8e11ec4661cc38cd8badf90115fbd03cef',
            },
        },
    ],
    invalid: [
        {
            exception: 'DER sequence length is too short',
            hex: 'ffffffffffffff01',
        },
        {
            exception: 'DER sequence length is too long',
            hex: 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01',
        },
        {
            exception: 'Expected DER sequence',
            hex: '00ffff0400ffffff020400ffffff01',
        },
        {
            exception: 'DER sequence length is invalid',
            hex: '30ff020400ffffff020400ffffff01',
        },
        {
            exception: 'DER sequence length is invalid',
            hex: '300c030400ffffff030400ffffff000001',
        },
        {
            exception: 'Expected DER integer',
            hex: '300cff0400ffffff020400ffffff01',
        },
        {
            exception: 'Expected DER integer \\(2\\)',
            hex: '300c020200ffffff020400ffffff01',
        },
        {
            exception: 'R length is zero',
            hex: '30080200020400ffffff01',
        },
        {
            exception: 'S length is zero',
            hex: '3008020400ffffff020001',
        },
        {
            exception: 'R length is too long',
            hex: '300c02dd00ffffff020400ffffff01',
        },
        {
            exception: 'S length is invalid',
            hex: '300c020400ffffff02dd00ffffff01',
        },
        {
            exception: 'R value is negative',
            hex: '300c020480000000020400ffffff01',
        },
        {
            exception: 'S value is negative',
            hex: '300c020400ffffff02048000000001',
        },
        {
            exception: 'R value excessively padded',
            hex: '300c02040000ffff020400ffffff01',
        },
        {
            exception: 'S value excessively padded',
            hex: '300c020400ffffff02040000ffff01',
        },
        {
            exception: 'Invalid hashType 7',
            hashType: 7,
            hex: '3044022033a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c902206f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa5434226207',
            raw: {
                r: '33a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c9',
                s: '6f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa54342262',
            },
        },
        {
            exception: 'Invalid hashType 140',
            hashType: 140,
            hex: '3044022033a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c902206f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa543422628c',
            raw: {
                r: '33a69cd2065432a30f3d1ce4eb0d59b8ab58c74f27c41a7fdb5696ad4e6108c9',
                s: '6f807982866f785d3f6418d24163ddae117b7db4d5fdf0071de069fa54342262',
            },
        },
    ],
};
export default signature;
