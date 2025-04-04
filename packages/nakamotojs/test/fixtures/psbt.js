const psbt = {
    bip174: {
        invalid: [
            {
                description: 'Network transaction, not PSBT format',
                errorMessage: 'Format Error: Invalid Magic Number',
                psbt: 'AgAAAAEmgXE3Ht/yhek3re6ks3t4AAwFZsuzrWRkFxPKQhcb9gAAAABqRzBEAiBwsiRRI+a/R01gxbUMBD1MaRpdJDXwmjSnZiqdwlF5CgIgATKcqdrPKAvfMHQOwDkEIkIsgctFg5RXrrdvwS7dlbMBIQJlfRGNM1e44PTCzUbbezn22cONmnCry5st5dyNv+TOMf7///8C09/1BQAAAAAZdqkU0MWZA8W6woaHYOkP1SGkZlqnZSCIrADh9QUAAAAAF6kUNUXm4zuDLEcFDyTT7rk8nAOUi8eHsy4TAA==',
            },
            {
                description: 'PSBT missing outputs',
                errorMessage: 'Format Error: Unexpected End of PSBT',
                psbt: 'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAA==',
            },
            {
                description: 'PSBT where one input has a filled scriptSig in the unsigned tx',
                errorMessage: 'Format Error: Transaction ScriptSigs are not empty',
                psbt: 'cHNidP8BAP0KAQIAAAACqwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QAAAAAakcwRAIgR1lmF5fAGwNrJZKJSGhiGDR9iYZLcZ4ff89X0eURZYcCIFMJ6r9Wqk2Ikf/REf3xM286KdqGbX+EhtdVRs7tr5MZASEDXNxh/HupccC1AaZGoqg7ECy0OIEhfKaC3Ibi1z+ogpL+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAABASAA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHhwEEFgAUhdE1N/LiZUBaNNuvqePdoB+4IwgAAAA=',
            },
            {
                description: 'PSBT where inputs and outputs are provided but without an unsigned tx',
                errorMessage: 'Format Error: Only one UNSIGNED_TX allowed',
                psbt: 'cHNidP8AAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAA==',
            },
            {
                description: 'PSBT with duplicate keys in an input',
                errorMessage: 'Format Error: Keys must be unique for each input: input index 0 key 00',
                psbt: 'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAQA/AgAAAAH//////////////////////////////////////////wAAAAAA/////wEAAAAAAAAAAANqAQAAAAAAAAAA',
            },
            {
                description: 'PSBT With invalid global transaction typed key',
                errorMessage: 'Format Error: Invalid global key: 0001',
                psbt: 'cHNidP8CAAFVAgAAAAEnmiMjpd+1H8RfIg+liw/BPh4zQnkqhdfjbNYzO1y8OQAAAAAA/////wGgWuoLAAAAABl2qRT/6cAGEJfMO2NvLLBGD6T8Qn0rRYisAAAAAAABASCVXuoLAAAAABepFGNFIA9o0YnhrcDfHE0W6o8UwNvrhyICA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GRjBDAiAEJLWO/6qmlOFVnqXJO7/UqJBkIkBVzfBwtncUaUQtBwIfXI6w/qZRbWC4rLM61k7eYOh4W/s6qUuZvfhhUduamgEBBCIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
            },
            {
                description: 'PSBT With invalid input witness utxo typed key',
                errorMessage: 'Format Error: Invalid input key: 0100',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAIBACCVXuoLAAAAABepFGNFIA9o0YnhrcDfHE0W6o8UwNvrhyICA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GRjBDAiAEJLWO/6qmlOFVnqXJO7/UqJBkIkBVzfBwtncUaUQtBwIfXI6w/qZRbWC4rLM61k7eYOh4W/s6qUuZvfhhUduamgEBBCIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
            },
            {
                description: 'PSBT With invalid pubkey length for input partial signature typed key',
                errorMessage: 'Format Error: invalid pubkey in key 0x0203b1341ccba7683b6af4f1238cd6e97e7167d569fac47f1e48d47541844355bd',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIQIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYwQwIgBCS1jv+qppThVZ6lyTu/1KiQZCJAVc3wcLZ3FGlELQcCH1yOsP6mUW1guKyzOtZO3mDoeFv7OqlLmb34YVHbmpoBAQQiACB3H9GK1FlmbdSfPVZOPbxC9MhHdONgraFoFqjtSI1WgQEFR1IhA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GIQPeVdHh2sgF4/iljB+/m5TALz26r+En/vykmV8m+CCDvVKuIgYDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYQtKa6ZwAAAIAAAACABAAAgCIGA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9ELSmumcAAACAAAAAgAUAAIAAAA==',
            },
            {
                description: 'PSBT With invalid redeemscript typed key',
                errorMessage: 'Format Error: Invalid input key: 0400',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQIEACIAIHcf0YrUWWZt1J89Vk49vEL0yEd042CtoWgWqO1IjVaBAQVHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
            },
            {
                description: 'PSBT With invalid witnessscript typed key',
                errorMessage: 'Format Error: Invalid input key: 0500',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoECBQBHUiEDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUYhA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9Uq4iBgOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RhC0prpnAAAAgAAAAIAEAACAIgYD3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg70QtKa6ZwAAAIAAAACABQAAgAAA',
            },
            {
                description: 'PSBT With invalid bip32 typed key',
                errorMessage: 'Format Error: invalid pubkey in key 0x0603b1341ccba7683b6af4f1238cd6e97e7167d569fac47f1e48d47541844355bd',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoEBBUdSIQOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RiED3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg71SriEGA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb0QtKa6ZwAAAIAAAACABAAAgCIGA95V0eHayAXj+KWMH7+blMAvPbqv4Sf+/KSZXyb4IIO9ELSmumcAAACAAAAAgAUAAIAAAA==',
            },
            {
                description: 'PSBT With invalid non-witness utxo typed key',
                errorMessage: 'Format Error: Invalid input key: 0000',
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAIAALsCAAAAAarXOTEBi9JfhK5AC2iEi+CdtwbqwqwYKYur7nGrZW+LAAAAAEhHMEQCIFj2/HxqM+GzFUjUgcgmwBW9MBNarULNZ3kNq2bSrSQ7AiBKHO0mBMZzW2OT5bQWkd14sA8MWUL7n3UYVvqpOBV9ugH+////AoDw+gIAAAAAF6kUD7lGNCFpa4LIM68kHHjBfdveSTSH0PIKJwEAAAAXqRQpynT4oI+BmZQoGFyXtdhS5AY/YYdlAAAAAQfaAEcwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAUgwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gFHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4AAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBByMiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEI2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
            },
            {
                description: 'PSBT With invalid final scriptsig typed key',
                errorMessage: 'Format Error: Invalid input key: 0700',
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAACBwDaAEcwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAUgwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gFHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4AAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBByMiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEI2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
            },
            {
                description: 'PSBT With invalid final script witness typed key',
                errorMessage: 'Format Error: Invalid input key: 0800',
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAggA2gQARzBEAiBi63pVYQenxz9FrEq1od3fb3B1+xJ1lpp/OD7/94S8sgIgDAXbt0cNvy8IVX3TVscyXB7TCRPpls04QJRdsSIo2l8BRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
            },
            {
                description: 'PSBT With invalid pubkey in output BIP 32 derivation paths typed key',
                errorMessage: 'Format Error: invalid pubkey in key 0x0203a9a4c37f5996d3aa25dbac6b570af0650394492942460b354753ed9eeca587',
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIQIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1PtnuylhxDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
            },
            {
                description: 'PSBT With invalid input sighash type typed key',
                errorMessage: 'Format Error: Invalid input key: 0300',
                psbt: 'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wCAwABAAAAAAEAFgAUYunpgv/zTdgjlhAxawkM0qO3R8sAAQAiACCHa62DLx0WgBXtQSMqnqZaGBXZ7xPA74dZ9ktbKyeKZQEBJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
            },
            {
                description: 'PSBT With invalid output redeemScript typed key',
                errorMessage: 'Format Error: Invalid output key: 0000',
                psbt: 'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wAAgAAFgAUYunpgv/zTdgjlhAxawkM0qO3R8sAAQAiACCHa62DLx0WgBXtQSMqnqZaGBXZ7xPA74dZ9ktbKyeKZQEBJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
            },
            {
                description: 'PSBT With invalid output witnessScript typed key',
                errorMessage: 'Format Error: Unexpected End of PSBT',
                psbt: 'cHNidP8BAHMCAAAAATAa6YblFqHsisW0vGVz0y+DtGXiOtdhZ9aLOOcwtNvbAAAAAAD/////AnR7AQAAAAAAF6kUA6oXrogrXQ1Usl1jEE5P/s57nqKHYEOZOwAAAAAXqRS5IbG6b3IuS/qDtlV6MTmYakLsg4cAAAAAAAEBHwDKmjsAAAAAFgAU0tlLZK4IWH7vyO6xh8YB6Tn5A3wAAQAWABRi6emC//NN2COWEDFrCQzSo7dHywABACIAIIdrrYMvHRaAFe1BIyqeploYFdnvE8Dvh1n2S1srJ4plIQEAJVEhA7fOI6AcW0vwCmQlN836uzFbZoMyhnR471EwnSvVf4qHUa4A',
            },
        ],
        valid: [
            {
                description: 'PSBT with one P2PKH input. Outputs are empty',
                psbt: 'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAAAA',
            },
            {
                description: 'PSBT with one P2PKH input and one P2SH-P2WPKH input. First input is signed and finalized. Outputs are empty',
                psbt: 'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEHakcwRAIgR1lmF5fAGwNrJZKJSGhiGDR9iYZLcZ4ff89X0eURZYcCIFMJ6r9Wqk2Ikf/REf3xM286KdqGbX+EhtdVRs7tr5MZASEDXNxh/HupccC1AaZGoqg7ECy0OIEhfKaC3Ibi1z+ogpIAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIAAAA',
            },
            {
                description: 'PSBT with one P2PKH input which has a non-final scriptSig and has a sighash type specified. Outputs are empty',
                psbt: 'cHNidP8BAHUCAAAAASaBcTce3/KF6Tet7qSze3gADAVmy7OtZGQXE8pCFxv2AAAAAAD+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQD9pQEBAAAAAAECiaPHHqtNIOA3G7ukzGmPopXJRjr6Ljl/hTPMti+VZ+UBAAAAFxYAFL4Y0VKpsBIDna89p95PUzSe7LmF/////4b4qkOnHf8USIk6UwpyN+9rRgi7st0tAXHmOuxqSJC0AQAAABcWABT+Pp7xp0XpdNkCxDVZQ6vLNL1TU/////8CAMLrCwAAAAAZdqkUhc/xCX/Z4Ai7NK9wnGIZeziXikiIrHL++E4sAAAAF6kUM5cluiHv1irHU6m80GfWx6ajnQWHAkcwRAIgJxK+IuAnDzlPVoMR3HyppolwuAJf3TskAinwf4pfOiQCIAGLONfc0xTnNMkna9b7QPZzMlvEuqFEyADS8vAtsnZcASED0uFWdJQbrUqZY3LLh+GFbTZSYG2YVi/jnF6efkE/IQUCSDBFAiEA0SuFLYXc2WHS9fSrZgZU327tzHlMDDPOXMMJ/7X85Y0CIGczio4OFyXBl/saiK9Z9R5E5CVbIBZ8hoQDHAXR8lkqASECI7cr7vCWXRC+B3jv7NYfysb3mk6haTkzgHNEZPhPKrMAAAAAAQMEAQAAAAAAAA==',
            },
            {
                description: "PSBT with one P2PKH input and one P2SH-P2WPKH input both with non-final scriptSigs. P2SH-P2WPKH input's redeemScript is available. Outputs filled.",
                psbt: 'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEA3wIAAAABJoFxNx7f8oXpN63upLN7eAAMBWbLs61kZBcTykIXG/YAAAAAakcwRAIgcLIkUSPmv0dNYMW1DAQ9TGkaXSQ18Jo0p2YqncJReQoCIAEynKnazygL3zB0DsA5BCJCLIHLRYOUV663b8Eu3ZWzASECZX0RjTNXuOD0ws1G23s59tnDjZpwq8ubLeXcjb/kzjH+////AtPf9QUAAAAAGXapFNDFmQPFusKGh2DpD9UhpGZap2UgiKwA4fUFAAAAABepFDVF5uM7gyxHBQ8k0+65PJwDlIvHh7MuEwAAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIACICAurVlmh8qAYEPtw94RbN8p1eklfBls0FXPaYyNAr8k6ZELSmumcAAACAAAAAgAIAAIAAIgIDlPYr6d8ZlSxVh3aK63aYBhrSxKJciU9H2MFitNchPQUQtKa6ZwAAAIABAACAAgAAgAA=',
            },
            {
                description: 'PSBT with one P2SH-P2WSH input of a 2-of-2 multisig, redeemScript, witnessScript, and keypaths are available. Contains one signature.',
                psbt: 'cHNidP8BAFUCAAAAASeaIyOl37UfxF8iD6WLD8E+HjNCeSqF1+Ns1jM7XLw5AAAAAAD/////AaBa6gsAAAAAGXapFP/pwAYQl8w7Y28ssEYPpPxCfStFiKwAAAAAAAEBIJVe6gsAAAAAF6kUY0UgD2jRieGtwN8cTRbqjxTA2+uHIgIDsTQcy6doO2r08SOM1ul+cWfVafrEfx5I1HVBhENVvUZGMEMCIAQktY7/qqaU4VWepck7v9SokGQiQFXN8HC2dxRpRC0HAh9cjrD+plFtYLisszrWTt5g6Hhb+zqpS5m9+GFR25qaAQEEIgAgdx/RitRZZm3Unz1WTj28QvTIR3TjYK2haBao7UiNVoEBBUdSIQOxNBzLp2g7avTxI4zW6X5xZ9Vp+sR/HkjUdUGEQ1W9RiED3lXR4drIBeP4pYwfv5uUwC89uq/hJ/78pJlfJvggg71SriIGA7E0HMunaDtq9PEjjNbpfnFn1Wn6xH8eSNR1QYRDVb1GELSmumcAAACAAAAAgAQAAIAiBgPeVdHh2sgF4/iljB+/m5TALz26r+En/vykmV8m+CCDvRC0prpnAAAAgAAAAIAFAACAAAA=',
            },
            {
                description: 'PSBT with unknown types in the inputs.',
                psbt: 'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PAAA=',
            },
            {
                description: 'PSBT with one P2TR input and one P2TR output.',
                psbt: 'cHNidP8BAF4CAAAAAWbQAKi9hNXynJhqPu8bqkvp0kHihVShkWGh3yLy15+LAAAAAAD/////Aej9AAAAAAAAIlEgRvZJfLLxnVDD6emCqVDcyGIUsB/M5DekIGHHvbEjDTMAAAAAAAEBK7gFAQAAAAAAIlEglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAA==',
            },
        ],
        failSignChecks: [
            {
                description: 'A Witness UTXO is provided for a non-witness input',
                errorMessage: 'Input #0 has witnessUtxo but non-segwit script',
                psbt: 'cHNidP8BAKACAAAAAqsJSaCMWvfEm4IS9Bfi8Vqz9cM9zxU4IagTn4d6W3vkAAAAAAD+////qwlJoIxa98SbghL0F+LxWrP1wz3PFTghqBOfh3pbe+QBAAAAAP7///8CYDvqCwAAAAAZdqkUdopAu9dAy+gdmI5x3ipNXHE5ax2IrI4kAAAAAAAAGXapFG9GILVT+glechue4O/p+gOcykWXiKwAAAAAAAEBItPf9QUAAAAAGXapFNSO0xELlAFMsRS9Mtb00GbcdCVriKwAAQEgAOH1BQAAAAAXqRQ1RebjO4MsRwUPJNPuuTycA5SLx4cBBBYAFIXRNTfy4mVAWjTbr6nj3aAfuCMIACICAurVlmh8qAYEPtw94RbN8p1eklfBls0FXPaYyNAr8k6ZELSmumcAAACAAAAAgAIAAIAAIgIDlPYr6d8ZlSxVh3aK63aYBhrSxKJciU9H2MFitNchPQUQtKa6ZwAAAIABAACAAgAAgAA=',
                inputToCheck: 0,
            },
            {
                description: 'redeemScript with non-witness UTXO does not match the scriptPubKey',
                errorMessage: "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq8iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
                inputToCheck: 0,
            },
            {
                description: 'redeemScript with witness UTXO does not match the scriptPubKey',
                errorMessage: "Redeem script for input #1 doesn't match the scriptPubKey in the prevout",
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQABBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
                inputToCheck: 1,
            },
            {
                description: 'witnessScript with witness UTXO does not match the redeemScript',
                errorMessage: "Witness script for input #1 doesn't match the scriptPubKey in the prevout",
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSrSIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
                inputToCheck: 1,
            },
        ],
        creator: [
            {
                inputs: [
                    {
                        hash: '75ddabb27b8845f5247975c8a5ba7c6f336c4570708ebe230caf6db5217ae858',
                        index: 0,
                    },
                    {
                        hash: '1dea7cd05979072a3578cab271c02244ea8a090bbb46aa680a65ecd027048d83',
                        index: 1,
                    },
                ],
                outputs: [
                    {
                        script: '0014d85c2b71d0060b09c9886aeb815e50991dda124d',
                        value: 149990000,
                    },
                    {
                        script: '001400aea9a2e5f0f876a588df5546e8742d1d87008f',
                        value: 100000000,
                    },
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAAAAAA=',
            },
        ],
        updater: [
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAAAAAA=',
                inputData: [
                    {
                        nonWitnessUtxo: "Buffer.from('0200000001aad73931018bd25f84ae400b68848be09db706eac2ac18298babee71ab656f8b0000000048473044022058f6fc7c6a33e1b31548d481c826c015bd30135aad42cd67790dab66d2ad243b02204a1ced2604c6735b6393e5b41691dd78b00f0c5942fb9f751856faa938157dba01feffffff0280f0fa020000000017a9140fb9463421696b82c833af241c78c17ddbde493487d0f20a270100000017a91429ca74f8a08f81999428185c97b5d852e4063f618765000000', 'hex')",
                        redeemScript: "Buffer.from('5221029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f2102dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d752ae', 'hex')",
                        bip32Derivation: [
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f', 'hex')",
                                path: "m/0'/0'/0'",
                            },
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('02dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d7', 'hex')",
                                path: "m/0'/0'/1'",
                            },
                        ],
                    },
                    {
                        witnessUtxo: {
                            script: "Buffer.from('a914b7f5faf40e3d40a5a459b1db3535f2b72fa921e887', 'hex')",
                            value: 200000000,
                        },
                        redeemScript: "Buffer.from('00208c2353173743b595dfb4a07b72ba8e42e3797da74e87fe7d9d7497e3b2028903', 'hex')",
                        witnessScript: "Buffer.from('522103089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc21023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e7352ae', 'hex')",
                        bip32Derivation: [
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e73', 'hex')",
                                path: "m/0'/0'/3'",
                            },
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('03089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc', 'hex')",
                                path: "m/0'/0'/2'",
                            },
                        ],
                    },
                ],
                outputData: [
                    {
                        bip32Derivation: [
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('03a9a4c37f5996d3aa25dbac6b570af0650394492942460b354753ed9eeca58771', 'hex')",
                                path: "m/0'/0'/4'",
                            },
                        ],
                    },
                    {
                        bip32Derivation: [
                            {
                                masterFingerprint: "Buffer.from('d90c6a4f', 'hex')",
                                pubkey: "Buffer.from('027f6399757d2eff55a136ad02c684b1838b6556e5f1b6b34282a94b6b50051096', 'hex')",
                                path: "m/0'/0'/5'",
                            },
                        ],
                    },
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
            },
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
                inputData: [
                    {
                        sighashType: 1,
                    },
                    {
                        sighashType: 1,
                    },
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
            },
            {
                description: 'Update taproot output',
                isTaproot: true,
                psbt: 'cHNidP8BAF4CAAAAAbc48X2AGPRzFoMvXHqldFViBB89ZrPfTH6yxr42pJsWAAAAAAAKAAAAAZBBBgAAAAAAIlEgwjn5jxVDmCN6B+wTPt4zCjlF+5KOEDapZ4S9Y3HZxdwAAAAAAAEBK6BoBgAAAAAAIlEgOJumKbXWO2VGchS5k1l1NzOsAyg8aBVQbDNJ88BPtH5iFcF6ESg3Xx4VxbYhRfEEyJc6dumg3zlxfNO8piELt1JMShpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdYmWrJ1IAOmFFKDvSwulomGXZP6LYOYOGBHzSRnrh2w9cb0vzIGrMAAAA==',
                outputData: [
                    {
                        tapInternalKey: "Buffer.from('b3310106b13af5def8fc341fe7120e844ab73d4437649aefcadd306d974c9958', 'hex')",
                        tapTree: {
                            leaves: [
                                {
                                    depth: 1,
                                    leafVersion: 192,
                                    script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0ac', 'hex')",
                                },
                                {
                                    depth: 2,
                                    leafVersion: 192,
                                    script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0ac', 'hex')",
                                },
                                {
                                    depth: 2,
                                    leafVersion: 192,
                                    script: "Buffer.from('5ab2752003a6145283bd2c2e9689865d93fa2d8398386047cd2467ae1db0f5c6f4bf3206ac', 'hex')",
                                },
                            ],
                        },
                    },
                ],
                result: 'cHNidP8BAF4CAAAAAbc48X2AGPRzFoMvXHqldFViBB89ZrPfTH6yxr42pJsWAAAAAAAKAAAAAZBBBgAAAAAAIlEgwjn5jxVDmCN6B+wTPt4zCjlF+5KOEDapZ4S9Y3HZxdwAAAAAAAEBK6BoBgAAAAAAIlEgOJumKbXWO2VGchS5k1l1NzOsAyg8aBVQbDNJ88BPtH5iFcF6ESg3Xx4VxbYhRfEEyJc6dumg3zlxfNO8piELt1JMShpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdYmWrJ1IAOmFFKDvSwulomGXZP6LYOYOGBHzSRnrh2w9cb0vzIGrMAAAQUgszEBBrE69d74/DQf5xIOhEq3PUQ3ZJrvyt0wbZdMmVgBBnIBwCIgUJKbdMGgSVS3i0tgNel6XgeKWg8o7JbVR7/ums6AOsCsAsAiIFCSm3TBoElUt4tLYDXpel4HiloPKOyW1Ue/7prOgDrArALAJVqydSADphRSg70sLpaJhl2T+i2DmDhgR80kZ64dsPXG9L8yBqwA',
            },
        ],
        signer: [
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
                keys: [
                    {
                        inputToSign: 0,
                        WIF: 'cP53pDbR5WtAD8dYAW9hhTjuvvTVaEiQBdrz9XPrgLBeRFiyCbQr',
                    },
                    {
                        inputToSign: 1,
                        WIF: 'cR6SXDoyfQrcp4piaiHE97Rsgta9mNhGTen9XeonVgwsh4iSgw6d',
                    },
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEBAwQBAAAAAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
            },
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
                keys: [
                    {
                        inputToSign: 0,
                        WIF: 'cT7J9YpCwY3AVRFSjN6ukeEeWY6mhpbJPxRaDaP5QTdygQRxP9Au',
                    },
                    {
                        inputToSign: 1,
                        WIF: 'cNBc3SWUip9PPm1GjRoLEJT6T41iNzCYtD7qro84FMnM5zEqeJsE',
                    },
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
            },
            {
                description: 'Sign PSBT with 3 inputs [P2PKH, P2TR (key-path), P2WPKH] and two outputs [P2TR, P2WPKH]',
                psbt: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgAAABASu4BQEAAAAAACJRIJQh5zSw+dLEZ+p90ZfGGstEZ83LyfTLDFcfi2OlxAyuARcglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAQEfECcAAAAAAAAWABRPoqyhKLb53uUwnE9wBR5Jxl/XMgAAAA==',
                isTaproot: true,
                keys: [
                    {
                        inputToSign: 0,
                        WIF: 'cRyKzLXVgTReWe7wgfEiXktTa9tf4e5DK1STha274d7BBbnucTaR',
                    },
                    {
                        inputToSign: 1,
                        WIF: 'cR62L1G154fjHFrBCJMxJxbk1rcxhT2xcTh7WstvFdFDsZ9uFiVj',
                    },
                    {
                        inputToSign: 2,
                        WIF: 'cPPRdCmAMZMjPdHfRmTCmzYVruZHJ8GbM1FqN2W6DnmEPWDg29aL',
                    },
                ],
                result: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgACICAi5ovBH1xLoGxPqtFh48wUEpnM+St1SbPzRwO7kBNKOQRzBEAiBpWClBybtHveXkhAgTiE8QSczMJs8MGuH4LOSNRA6s/AIgWlbB3xJOtJIsszj1qZ/whA5jK9wnTzeZzDlVs/ivq2cBAAEBK7gFAQAAAAAAIlEglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4BE0Cd7/ny+QreV7urBWKNroQWCvnZczwkU0kLZiKsJQjtftKHWXMknftjt1d4K6aPYH7cBXzhlrUF+2GovjYLccZeARcglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAQEfECcAAAAAAAAWABRPoqyhKLb53uUwnE9wBR5Jxl/XMiICA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660SDBFAiEAoCIktghL55iuMAmkzwYJzb+h+qmNewZXxAx/06ObxIQCIELCsBz/wd2wPlnJb27OluxMkTPnCyHA2C+SxHiX/FvPAQAAAA==',
            },
            {
                description: 'Sign PSBT with 1 input [P2TR] (script-path, 3-of-3) and one output [P2TR]',
                psbt: 'cHNidP8BAF4CAAAAAQU2GLj/HTOEN804Hc6JRNTLM7EmDlIBdjG2G1aUw266AAAAAAD/////AYAaBgAAAAAAIlEg35sLGepBXUbR93XfxDJcYBCHqNVjw/jogOgPVdic1UgAAAAAAAEBK6BoBgAAAAAAIlEgVZx4+tHeORcb0jDJnOytrOnNOGL1uS0MdMUg1GQeS15iFcFmuQP4s1ds7KJtMOh4fTw1QCgxkWUA3FUAuUzKHzjDvhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZpII+JGq8uLXsUYXjFSofirt3Z0daGaSJXko5nzwgXT/N1rCA5X4Ep3WO0pcLxISTqoFt6ftMPcOUfuTMF3uzFQuf567ogqKs3vBYJ2DTDkTs1ONrRyE1/m2qDX/wXV3eRWjeuNXK6U5zAAAA=',
                isTaproot: true,
                keys: [
                    {
                        inputToSign: 0,
                        WIF: 'cRXSy63fXDve59e8cvqozVFfqXJB6YL6cPzoRewmEsux81SgPrfj',
                    },
                    {
                        inputToSign: 0,
                        WIF: 'cQQXUJocNBS6oZCCtyhCsdN5ammK6WoJWpx44ANKxZSN2A3WDDEN',
                    },
                    {
                        inputToSign: 0,
                        WIF: 'cTrPNrN2EQo4ppBHcFNxyLBFq2WLjZoNKY5nQbPwAGdhQqqsRKSu',
                    },
                ],
                result: 'cHNidP8BAF4CAAAAAQU2GLj/HTOEN804Hc6JRNTLM7EmDlIBdjG2G1aUw266AAAAAAD/////AYAaBgAAAAAAIlEg35sLGepBXUbR93XfxDJcYBCHqNVjw/jogOgPVdic1UgAAAAAAAEBK6BoBgAAAAAAIlEgVZx4+tHeORcb0jDJnOytrOnNOGL1uS0MdMUg1GQeS15BFDlfgSndY7SlwvEhJOqgW3p+0w9w5R+5MwXe7MVC5/nrrqI0FdZdKILLLZgRVK8L9Bn2ijU6IcoqqyImKIWt3MtAA3alBoU7IBCkBk9OHD1wE8fJI4y+lbnTRj48e8AAwRM77q3Rml679qCzGvEAKAs99UNMaXHQIhgGfRP11AMlJkEUj4kary4texRheMVKh+Ku3dnR1oZpIleSjmfPCBdP83WuojQV1l0ogsstmBFUrwv0GfaKNTohyiqrIiYoha3cy0DYJZ6Lv7FZPIBRZFfVgF5v3gcRiQnT8aM82Q5IPkwkzZrGo4ThZblvunG/+hu8ZPuJrUU+uXb+s9rcwSH+BihIQRSoqze8FgnYNMOROzU42tHITX+baoNf/BdXd5FaN641cq6iNBXWXSiCyy2YEVSvC/QZ9oo1OiHKKqsiJiiFrdzLQEfQ5UkAg4lTbhJxjMzB7hu6ad1fywYxHCXjFXHHrm5PJTOFJLg2oTnwuQToz/Z2AW/UET7Op+WSoHZvW4tzzLhiFcFmuQP4s1ds7KJtMOh4fTw1QCgxkWUA3FUAuUzKHzjDvhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZpII+JGq8uLXsUYXjFSofirt3Z0daGaSJXko5nzwgXT/N1rCA5X4Ep3WO0pcLxISTqoFt6ftMPcOUfuTMF3uzFQuf567ogqKs3vBYJ2DTDkTs1ONrRyE1/m2qDX/wXV3eRWjeuNXK6U5zAAAA=',
            },
            {
                description: 'Sign PSBT with 1 input [P2TR]. Signer pubkey found in two tapleaf scripts (both get signed)',
                psbt: 'cHNidP8BAF4CAAAAATNOP+fCPDCsZrgGIptDVbwY/yrkM2xaFfLe05BSLulZAAAAAAD/////AZBBBgAAAAAAIlEgo6glLro4LvJCjIXCj+2xYC8NQ5BB/tvaXLukmWNHDaQAAAAAAAEBK6BoBgAAAAAAIlEgo6glLro4LvJCjIXCj+2xYC8NQ5BB/tvaXLukmWNHDaRiFcDXgjtX0c88beKd6Y8zRYbANZXEc8dDhlup8v3SCiX0bBpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWWeEQK6JF8Ev4E8Yg25gvDzbizKAO6m6JD082gFjsWNVpIP1IuUG/pcYMyG7KOHraqMXMKKOJb5eIpnjGt7LrvcsWrCDxKlbBaB54iRPj/r6t5N9DtBFItV8uoHfEwGboXpVsHLogt01J+NwSsj7PM7m6QbLDiXLdoYzn9pHNA4kAGF1pL3+6U5zAQhXA14I7V9HPPG3inemPM0WGwDWVxHPHQ4ZbqfL90gol9Gx4Lk64Mk5QMzz2Xo97sRZFcGH0TduAOb6H0hHOB/0CrCMg/Ui5Qb+lxgzIbso4etqoxcwoo4lvl4imeMa3suu9yxaswAAA',
                isTaproot: true,
                keys: [
                    {
                        inputToSign: 0,
                        WIF: 'cSu5bjn9TsAEeqZxEFKy5of3FKfHha6FT56KvfAGmu6rMmPNJTrV',
                    },
                ],
                result: 'cHNidP8BAF4CAAAAATNOP+fCPDCsZrgGIptDVbwY/yrkM2xaFfLe05BSLulZAAAAAAD/////AZBBBgAAAAAAIlEgo6glLro4LvJCjIXCj+2xYC8NQ5BB/tvaXLukmWNHDaQAAAAAAAEBK6BoBgAAAAAAIlEgo6glLro4LvJCjIXCj+2xYC8NQ5BB/tvaXLukmWNHDaRBFP1IuUG/pcYMyG7KOHraqMXMKKOJb5eIpnjGt7LrvcsWIjJncH2zqZGpUloPoJZipi/NkKmjWthVrvnedXPOOOdABNUCXyGRAy4nthiGpE8dXioP2P50J+fU5gojlqunTwPKRPvqWcCzOoaJGvUEF+oxpMXZ1+FZWHRppoeoZFParUEU/Ui5Qb+lxgzIbso4etqoxcwoo4lvl4imeMa3suu9yxZZ4RArokXwS/gTxiDbmC8PNuLMoA7qbokPTzaAWOxY1UAF3RzlWz+5cWYG1EqfZTT/CO7O3hGYvMMjlJV5rluR916WCgGYO2hHj9fiEH0rxD3BRbzR78PShCen+beqDncSYhXA14I7V9HPPG3inemPM0WGwDWVxHPHQ4ZbqfL90gol9GwaUpyfs81+d21htiJbbGEOiQb7j6psWaxcPpW1+C0p1lnhECuiRfBL+BPGINuYLw824sygDupuiQ9PNoBY7FjVaSD9SLlBv6XGDMhuyjh62qjFzCijiW+XiKZ4xrey673LFqwg8SpWwWgeeIkT4/6+reTfQ7QRSLVfLqB3xMBm6F6VbBy6ILdNSfjcErI+zzO5ukGyw4ly3aGM5/aRzQOJABhdaS9/ulOcwEIVwNeCO1fRzzxt4p3pjzNFhsA1lcRzx0OGW6ny/dIKJfRseC5OuDJOUDM89l6Pe7EWRXBh9E3bgDm+h9IRzgf9AqwjIP1IuUG/pcYMyG7KOHraqMXMKKOJb5eIpnjGt7LrvcsWrMAAAA==',
            },
            {
                description: 'Sign PSBT with 1 input [P2TR]. Signer pubkey found in two tapleaf scripts (sign only the matching tapleaf hash)',
                psbt: 'cHNidP8BAF4CAAAAAdXMkUOLeYvgm981k3T7Pmdf5Dr31jOxvpFHiXiU9D2gAAAAAAD/////AZBBBgAAAAAAIlEgD31MIAvwCaanOsAzyBoQ4o/WozgFiqVQTEqGJE18XqwAAAAAAAEBK6BoBgAAAAAAIlEgD31MIAvwCaanOsAzyBoQ4o/WozgFiqVQTEqGJE18XqxiFcAI1JOUM3VATBJC28HI1B5zKQNd5N4/c4g7M1CYhZWnWhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWk4qTbS/aPOMicn4cednnrKiVhdggWbZxsQhaXXg5/EtpICo/Wsfk0hSOCy21lUyn+vXnc1SG1lNVWHlnXCh3xegqrCCcumXmHlTmveMSBLOPSfb6H3laX97tZtF4gqmxzV+gbLogXBeUvuJ0b/mMOa3539xiz0/Nf9RQCWGZXXoCNcFUYde6U5zAQhXACNSTlDN1QEwSQtvByNQecykDXeTeP3OIOzNQmIWVp1pfFb/yNVlibfG8oN35ON4kJ+kBZQ4LphUz16+7jituPiMgKj9ax+TSFI4LLbWVTKf69edzVIbWU1VYeWdcKHfF6CqswAAA',
                isTaproot: true,
                keys: [
                    {
                        inputToSign: 0,
                        tapLeafHashToSign: 'f2d9fd9a2f80e0e7abeac881398fc37198f46e5c802ec00c95152aa6f703e71e',
                        WIF: 'cP76Rzf6bVcmFbnJ3DigWvyNvki2bZeXxoq3B5pcZ8zVRnT4fKdx',
                    },
                ],
                result: 'cHNidP8BAF4CAAAAAdXMkUOLeYvgm981k3T7Pmdf5Dr31jOxvpFHiXiU9D2gAAAAAAD/////AZBBBgAAAAAAIlEgD31MIAvwCaanOsAzyBoQ4o/WozgFiqVQTEqGJE18XqwAAAAAAAEBK6BoBgAAAAAAIlEgD31MIAvwCaanOsAzyBoQ4o/WozgFiqVQTEqGJE18XqxBFCo/Wsfk0hSOCy21lUyn+vXnc1SG1lNVWHlnXCh3xegq8tn9mi+A4Oer6siBOY/DcZj0blyALsAMlRUqpvcD5x5Aa7X0m4UCLaHA/Vnjkl+if6rVeiBbIlbHXHLh7RqJyB8Wgs66p6/ZnwSW/HD6o7rMHffIva+jgJgYWf6MvzrfTWIVwAjUk5QzdUBMEkLbwcjUHnMpA13k3j9ziDszUJiFladaGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdaTipNtL9o84yJyfhx52eesqJWF2CBZtnGxCFpdeDn8S2kgKj9ax+TSFI4LLbWVTKf69edzVIbWU1VYeWdcKHfF6CqsIJy6ZeYeVOa94xIEs49J9vofeVpf3u1m0XiCqbHNX6BsuiBcF5S+4nRv+Yw5rfnf3GLPT81/1FAJYZldegI1wVRh17pTnMBCFcAI1JOUM3VATBJC28HI1B5zKQNd5N4/c4g7M1CYhZWnWl8Vv/I1WWJt8byg3fk43iQn6QFlDgumFTPXr7uOK24+IyAqP1rH5NIUjgsttZVMp/r153NUhtZTVVh5Z1wod8XoKqzAAAA=',
            },
        ],
        combiner: [
            {
                psbts: [
                    'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEBAwQBAAAAAQQiACCMI1MXN0O1ld+0oHtyuo5C43l9p06H/n2ddJfjsgKJAwEFR1IhAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcIQI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc1KuIgYCOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnMQ2QxqTwAAAIAAAACAAwAAgCIGAwidwQx6xttU+RMpr2FzM9s4jOrQwjH3IzedG5kDCwLcENkMak8AAACAAAAAgAIAAIAAIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
                    'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU210gwRQIhAPYQOLMI3B2oZaNIUnRvAVdyk0IIxtJEVDk82ZvfIhd3AiAFbmdaZ1ptCgK4WxTl4pB02KJam1dgvqKBb2YZEKAG6gEBAwQBAAAAAQRHUiEClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8hAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXUq4iBgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfxDZDGpPAAAAgAAAAIAAAACAIgYC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtcQ2QxqTwAAAIAAAACAAQAAgAABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohyICAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zRzBEAiBl9FulmYtZon/+GnvtAWrx8fkNVLOqj3RQql9WolEDvQIgf3JHA60e25ZoCyhLVtT/y4j3+3Weq74IqjDym4UTg9IBAQMEAQAAAAEEIgAgjCNTFzdDtZXftKB7crqOQuN5fadOh/59nXSX47ICiQMBBUdSIQMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3CECOt2QTz1tz1nduQaw3uI1Kbf/ue1Q5ehhUZJoYCIfDnNSriIGAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zENkMak8AAACAAAAAgAMAAIAiBgMIncEMesbbVPkTKa9hczPbOIzq0MIx9yM3nRuZAwsC3BDZDGpPAAAAgAAAAIACAACAACICA6mkw39ZltOqJdusa1cK8GUDlEkpQkYLNUdT7Z7spYdxENkMak8AAACAAAAAgAQAAIAAIgICf2OZdX0u/1WhNq0CxoSxg4tlVuXxtrNCgqlLa1AFEJYQ2QxqTwAAAIAAAACABQAAgAA=',
                ],
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
            },
            {
                psbts: [
                    'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcICQ8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgJDwECAwQFBgcICQoLDA0ODwA=',
                    'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcIEA8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCBAPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgQDwECAwQFBgcICQoLDA0ODwA=',
                ],
                result: 'cHNidP8BAD8CAAAAAf//////////////////////////////////////////AAAAAAD/////AQAAAAAAAAAAA2oBAAAAAAAKDwECAwQFBgcICQ8BAgMEBQYHCAkKCwwNDg8KDwECAwQFBgcIEA8BAgMEBQYHCAkKCwwNDg8ACg8BAgMEBQYHCAkPAQIDBAUGBwgJCgsMDQ4PCg8BAgMEBQYHCBAPAQIDBAUGBwgJCgsMDQ4PAAoPAQIDBAUGBwgJDwECAwQFBgcICQoLDA0ODwoPAQIDBAUGBwgQDwECAwQFBgcICQoLDA0ODwA=',
            },
        ],
        finalizer: [
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
                result: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
            },
            {
                description: 'Finalze taproot key-path',
                psbt: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgACICAi5ovBH1xLoGxPqtFh48wUEpnM+St1SbPzRwO7kBNKOQRzBEAiBpWClBybtHveXkhAgTiE8QSczMJs8MGuH4LOSNRA6s/AIgWlbB3xJOtJIsszj1qZ/whA5jK9wnTzeZzDlVs/ivq2cBAAEBK7gFAQAAAAAAIlEglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4BE0Cd7/ny+QreV7urBWKNroQWCvnZczwkU0kLZiKsJQjtftKHWXMknftjt1d4K6aPYH7cBXzhlrUF+2GovjYLccZeARcglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAQEfECcAAAAAAAAWABRPoqyhKLb53uUwnE9wBR5Jxl/XMiICA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660SDBFAiEAoCIktghL55iuMAmkzwYJzb+h+qmNewZXxAx/06ObxIQCIELCsBz/wd2wPlnJb27OluxMkTPnCyHA2C+SxHiX/FvPAQAAAA==',
                result: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgAAEHakcwRAIgaVgpQcm7R73l5IQIE4hPEEnMzCbPDBrh+CzkjUQOrPwCIFpWwd8STrSSLLM49amf8IQOYyvcJ083mcw5VbP4r6tnASECLmi8EfXEugbE+q0WHjzBQSmcz5K3VJs/NHA7uQE0o5AAAQEruAUBAAAAAAAiUSCUIec0sPnSxGfqfdGXxhrLRGfNy8n0ywxXH4tjpcQMrgEIQgFAne/58vkK3le7qwVija6EFgr52XM8JFNJC2YirCUI7X7Sh1lzJJ37Y7dXeCumj2B+3AV84Za1BfthqL42C3HGXgABAR8QJwAAAAAAABYAFE+irKEotvne5TCcT3AFHknGX9cyAQhsAkgwRQIhAKAiJLYIS+eYrjAJpM8GCc2/ofqpjXsGV8QMf9Ojm8SEAiBCwrAc/8HdsD5ZyW9uzpbsTJEz5wshwNgvksR4l/xbzwEhA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660AAAA',
                isTaproot: true,
            },
            {
                description: 'Finalze taproot script-path',
                psbt: 'cHNidP8BAF4CAAAAAQU2GLj/HTOEN804Hc6JRNTLM7EmDlIBdjG2G1aUw266AAAAAAD/////AYAaBgAAAAAAIlEg35sLGepBXUbR93XfxDJcYBCHqNVjw/jogOgPVdic1UgAAAAAAAEBK6BoBgAAAAAAIlEgVZx4+tHeORcb0jDJnOytrOnNOGL1uS0MdMUg1GQeS15BFDlfgSndY7SlwvEhJOqgW3p+0w9w5R+5MwXe7MVC5/nrrqI0FdZdKILLLZgRVK8L9Bn2ijU6IcoqqyImKIWt3MtAA3alBoU7IBCkBk9OHD1wE8fJI4y+lbnTRj48e8AAwRM77q3Rml679qCzGvEAKAs99UNMaXHQIhgGfRP11AMlJkEUj4kary4texRheMVKh+Ku3dnR1oZpIleSjmfPCBdP83WuojQV1l0ogsstmBFUrwv0GfaKNTohyiqrIiYoha3cy0DYJZ6Lv7FZPIBRZFfVgF5v3gcRiQnT8aM82Q5IPkwkzZrGo4ThZblvunG/+hu8ZPuJrUU+uXb+s9rcwSH+BihIQRSoqze8FgnYNMOROzU42tHITX+baoNf/BdXd5FaN641cq6iNBXWXSiCyy2YEVSvC/QZ9oo1OiHKKqsiJiiFrdzLQEfQ5UkAg4lTbhJxjMzB7hu6ad1fywYxHCXjFXHHrm5PJTOFJLg2oTnwuQToz/Z2AW/UET7Op+WSoHZvW4tzzLhiFcFmuQP4s1ds7KJtMOh4fTw1QCgxkWUA3FUAuUzKHzjDvhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZpII+JGq8uLXsUYXjFSofirt3Z0daGaSJXko5nzwgXT/N1rCA5X4Ep3WO0pcLxISTqoFt6ftMPcOUfuTMF3uzFQuf567ogqKs3vBYJ2DTDkTs1ONrRyE1/m2qDX/wXV3eRWjeuNXK6U5zAAAA=',
                result: 'cHNidP8BAF4CAAAAAQU2GLj/HTOEN804Hc6JRNTLM7EmDlIBdjG2G1aUw266AAAAAAD/////AYAaBgAAAAAAIlEg35sLGepBXUbR93XfxDJcYBCHqNVjw/jogOgPVdic1UgAAAAAAAEBK6BoBgAAAAAAIlEgVZx4+tHeORcb0jDJnOytrOnNOGL1uS0MdMUg1GQeS14BCP2PAQVAR9DlSQCDiVNuEnGMzMHuG7pp3V/LBjEcJeMVcceubk8lM4UkuDahOfC5BOjP9nYBb9QRPs6n5ZKgdm9bi3PMuEADdqUGhTsgEKQGT04cPXATx8kjjL6VudNGPjx7wADBEzvurdGaXrv2oLMa8QAoCz31Q0xpcdAiGAZ9E/XUAyUmQNglnou/sVk8gFFkV9WAXm/eBxGJCdPxozzZDkg+TCTNmsajhOFluW+6cb/6G7xk+4mtRT65dv6z2tzBIf4GKEhoII+JGq8uLXsUYXjFSofirt3Z0daGaSJXko5nzwgXT/N1rCA5X4Ep3WO0pcLxISTqoFt6ftMPcOUfuTMF3uzFQuf567ogqKs3vBYJ2DTDkTs1ONrRyE1/m2qDX/wXV3eRWjeuNXK6U5xhwWa5A/izV2zsom0w6Hh9PDVAKDGRZQDcVQC5TMofOMO+GlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdYaUpyfs81+d21htiJbbGEOiQb7j6psWaxcPpW1+C0p1gAA',
                isTaproot: true,
            },
            {
                description: 'Finalze taproot script-path (3-of-3)',
                psbt: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgACICAi5ovBH1xLoGxPqtFh48wUEpnM+St1SbPzRwO7kBNKOQRzBEAiBpWClBybtHveXkhAgTiE8QSczMJs8MGuH4LOSNRA6s/AIgWlbB3xJOtJIsszj1qZ/whA5jK9wnTzeZzDlVs/ivq2cBAAEBK7gFAQAAAAAAIlEglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4BE0ADaUubfpFFrzbU+vL8qCzZE/FO+9unzylfpIgQZ4HTy2qPUtLvbyH59GApdz0SiUZGl8K6Crvt9YIfI/5FxbOLARcglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAQEfECcAAAAAAAAWABRPoqyhKLb53uUwnE9wBR5Jxl/XMiICA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660SDBFAiEAoCIktghL55iuMAmkzwYJzb+h+qmNewZXxAx/06ObxIQCIELCsBz/wd2wPlnJb27OluxMkTPnCyHA2C+SxHiX/FvPAQAAAA==',
                result: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgAAEHakcwRAIgaVgpQcm7R73l5IQIE4hPEEnMzCbPDBrh+CzkjUQOrPwCIFpWwd8STrSSLLM49amf8IQOYyvcJ083mcw5VbP4r6tnASECLmi8EfXEugbE+q0WHjzBQSmcz5K3VJs/NHA7uQE0o5AAAQEruAUBAAAAAAAiUSCUIec0sPnSxGfqfdGXxhrLRGfNy8n0ywxXH4tjpcQMrgEIQgFAA2lLm36RRa821Pry/Kgs2RPxTvvbp88pX6SIEGeB08tqj1LS728h+fRgKXc9EolGRpfCugq77fWCHyP+RcWziwABAR8QJwAAAAAAABYAFE+irKEotvne5TCcT3AFHknGX9cyAQhsAkgwRQIhAKAiJLYIS+eYrjAJpM8GCc2/ofqpjXsGV8QMf9Ojm8SEAiBCwrAc/8HdsD5ZyW9uzpbsTJEz5wshwNgvksR4l/xbzwEhA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660AAAA',
                isTaproot: true,
            },
            {
                description: 'Finalze taproot with tapkey sig and tapscript sigs (choose tapkey)',
                psbt: 'cHNidP8BAF4CAAAAAQrtX/VtEfTwY2iXi+s8lzx2JZbV7w9a8q6lONJ4SBm1AAAAAAD/////AZBBBgAAAAAAIlEgp+9JIlFbn3ZwqTz8p4UU73qJfQl4FvNDuyBa51FMm/kAAAAAAAEBK6BoBgAAAAAAIlEgp+9JIlFbn3ZwqTz8p4UU73qJfQl4FvNDuyBa51FMm/kBE0DqpLv0n1NC7N2okYWhHwP+mCqaDGOmNGCobgPw54CAtJdHPKY2i/ioNzq/m2Muh0hUYcLlOcU5U4xF7W+6gvRuQRQGAr5sFRVLM9rtDJmH/nCNJu0u72GXSA2wf9k4GEnXrossGVn91s+ghIb0v5fVWfWjsqU6wRJBundeShgEvDIVQNduanOw6c03gjyLWLim7b/7yet7XRp1uNrtwrMklOMSujYI/h2o+TSqS7eNwCkNddW3R6v03L6S9hWHTUYprclBFDhs6fMvKmERoTq2yrBafaRMmYoKkSuw9D4o3xjiC403iywZWf3Wz6CEhvS/l9VZ9aOypTrBEkG6d15KGAS8MhVAMKZJmsPn+pjmlWzj5oPGOj8XSs0uCMnDL1jjnosEuO7G0y9Y46GlGnfOM54w/0n2qKkdDWHpXX14F9gNesiP5EEUfKybjQL7rXdJwSP1Fb15LaJyYFrW3yJnkN+aP9IdhTOGRF1EGo0fkg5hbe3o7iwS+jTgqmGOQDsHExHbJgmL90A8hHY8WzI+xJsFXMzi5ztkZS8pXf07iNlfDnLKZYyk9ZRBkAsJ9oYsvC19Irrq27l918aqfQc6sZBiskZyMs5wQRR8rJuNAvutd0nBI/UVvXktonJgWtbfImeQ35o/0h2FM4ssGVn91s+ghIb0v5fVWfWjsqU6wRJBundeShgEvDIVQFeVntO1MSRANCT3fpEWhijVJAbF6SVBdPlNAaRKc1sn3Gz+/HTfD+f9sqRlSIsF4D+ouhv6URBtAZUCuKHW6vxiFcFB6oQ4lfHrNv47TKgSz/MUn2hgozxlIgmi2demetlGgxpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWhkRdRBqNH5IOYW3t6O4sEvo04KphjkA7BxMR2yYJi/dpIHysm40C+613ScEj9RW9eS2icmBa1t8iZ5Dfmj/SHYUzrCAGAr5sFRVLM9rtDJmH/nCNJu0u72GXSA2wf9k4GEnXrrogOGzp8y8qYRGhOrbKsFp9pEyZigqRK7D0PijfGOILjTe6U5zAQhXBQeqEOJXx6zb+O0yoEs/zFJ9oYKM8ZSIJotnXpnrZRoMvbQYwKuRcSf7lDrRMU3H56Gh6NeGkogAw4hpvAn/mgCMgfKybjQL7rXdJwSP1Fb15LaJyYFrW3yJnkN+aP9IdhTOswAEXIEHqhDiV8es2/jtMqBLP8xSfaGCjPGUiCaLZ16Z62UaDARggNhmyJFW2/EeankNIJjRP9QFlju4/j/nEEcMAnlXe+XcAAA==',
                result: 'cHNidP8BAF4CAAAAAQrtX/VtEfTwY2iXi+s8lzx2JZbV7w9a8q6lONJ4SBm1AAAAAAD/////AZBBBgAAAAAAIlEgp+9JIlFbn3ZwqTz8p4UU73qJfQl4FvNDuyBa51FMm/kAAAAAAAEBK6BoBgAAAAAAIlEgp+9JIlFbn3ZwqTz8p4UU73qJfQl4FvNDuyBa51FMm/kBCEIBQOqku/SfU0Ls3aiRhaEfA/6YKpoMY6Y0YKhuA/DngIC0l0c8pjaL+Kg3Or+bYy6HSFRhwuU5xTlTjEXtb7qC9G4AAA==',
                isTaproot: true,
            },
            {
                description: 'Finalze taproot script-path with two tapleafs signed (chooses the one with the shortest path)',
                psbt: 'cHNidP8BAF4CAAAAAZsypn8thOjCXwg39Z1pAQCp7ndI8Jrw/8SGSmhgRiJpAAAAAAD/////AZBBBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQAAAAAAAEBK6BoBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzRBFAUf68vx5rAfWwxMqZNce2OVVqlduXONBcm2JEPAT2Fc2gpbUnze59ZSHmflF7erkp8eUGBfJBmAcUZG5WBbC/pAJihlaGGDKsSd04fSyIk5WDACUedUvDE1C4zD80ubbX5qFzgxizY7pGG5zrrGAoW0KOEJ8TW4WEmh/WsE0erDxEEUIKvXw9clC9dJYjC2Woo/TrIhnRP9powDMmB/GF4rBRsRCNvHrz3TPp4Id2O6W4qhmerk87mqanTdLIapgqEamkDnpOB240Ce+yZlOPO3sxZDmpXhmsxtIl6a/R6TS2ekf2VCdZXg4Dqy3OpjzxQ/jDMbXbzETL2mdHlsgQnBnUcoYhXBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrqYKqOqTjCjec9FzSPuoLS+tXB4VvMgzUTs3kZS/bDfqlRY6TCnm2dtB3ED1fA6rlsUAqbWuurDp2W9ONMZj7NiIyAFH+vL8eawH1sMTKmTXHtjlVapXblzjQXJtiRDwE9hXKzAohXBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrq0JN6gn4QLkyoANzzc29JWULjDrP5UqfSmQaKGchuNJtrHlXZrvaHq6qReW/oKlQ/dX0xKraWx8wgu3JaJuf0K7iijuCxK7L69N4En3IjdGeHqk+26eie3VOHIgdMIh0q9q7FEmRK2sbmE7NhWpbGiU/lLBm6XT+D9HvPO+T63rSMgIKvXw9clC9dJYjC2Woo/TrIhnRP9powDMmB/GF4rBRuswAAA',
                result: 'cHNidP8BAF4CAAAAAZsypn8thOjCXwg39Z1pAQCp7ndI8Jrw/8SGSmhgRiJpAAAAAAD/////AZBBBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQAAAAAAAEBK6BoBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQBCMcDQCYoZWhhgyrEndOH0siJOVgwAlHnVLwxNQuMw/NLm21+ahc4MYs2O6Rhuc66xgKFtCjhCfE1uFhJof1rBNHqw8QiIAUf68vx5rAfWwxMqZNce2OVVqlduXONBcm2JEPAT2FcrGHBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrqYKqOqTjCjec9FzSPuoLS+tXB4VvMgzUTs3kZS/bDfqlRY6TCnm2dtB3ED1fA6rlsUAqbWuurDp2W9ONMZj7NiAAA=',
                isTaproot: true,
            },
            {
                description: 'Finalze taproot script-path with two tapleafs signed (explicitly choose leaf)',
                psbt: 'cHNidP8BAF4CAAAAAZsypn8thOjCXwg39Z1pAQCp7ndI8Jrw/8SGSmhgRiJpAAAAAAD/////AZBBBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQAAAAAAAEBK6BoBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzRBFAUf68vx5rAfWwxMqZNce2OVVqlduXONBcm2JEPAT2Fc2gpbUnze59ZSHmflF7erkp8eUGBfJBmAcUZG5WBbC/pAJihlaGGDKsSd04fSyIk5WDACUedUvDE1C4zD80ubbX5qFzgxizY7pGG5zrrGAoW0KOEJ8TW4WEmh/WsE0erDxEEUIKvXw9clC9dJYjC2Woo/TrIhnRP9powDMmB/GF4rBRsRCNvHrz3TPp4Id2O6W4qhmerk87mqanTdLIapgqEamkDnpOB240Ce+yZlOPO3sxZDmpXhmsxtIl6a/R6TS2ekf2VCdZXg4Dqy3OpjzxQ/jDMbXbzETL2mdHlsgQnBnUcoYhXBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrqYKqOqTjCjec9FzSPuoLS+tXB4VvMgzUTs3kZS/bDfqlRY6TCnm2dtB3ED1fA6rlsUAqbWuurDp2W9ONMZj7NiIyAFH+vL8eawH1sMTKmTXHtjlVapXblzjQXJtiRDwE9hXKzAohXBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrq0JN6gn4QLkyoANzzc29JWULjDrP5UqfSmQaKGchuNJtrHlXZrvaHq6qReW/oKlQ/dX0xKraWx8wgu3JaJuf0K7iijuCxK7L69N4En3IjdGeHqk+26eie3VOHIgdMIh0q9q7FEmRK2sbmE7NhWpbGiU/lLBm6XT+D9HvPO+T63rSMgIKvXw9clC9dJYjC2Woo/TrIhnRP9powDMmB/GF4rBRuswAAA',
                result: 'cHNidP8BAF4CAAAAAZsypn8thOjCXwg39Z1pAQCp7ndI8Jrw/8SGSmhgRiJpAAAAAAD/////AZBBBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQAAAAAAAEBK6BoBgAAAAAAIlEgFa11cf11Y+PGzl0UxS5788pld5zElAl9YY0OtTHhHzQBCMcDQCYoZWhhgyrEndOH0siJOVgwAlHnVLwxNQuMw/NLm21+ahc4MYs2O6Rhuc66xgKFtCjhCfE1uFhJof1rBNHqw8QiIAUf68vx5rAfWwxMqZNce2OVVqlduXONBcm2JEPAT2FcrGHBr6rSntatZCCpyXS0zh+WAkLdMI4XHA0rVYAbFyHRzrqYKqOqTjCjec9FzSPuoLS+tXB4VvMgzUTs3kZS/bDfqlRY6TCnm2dtB3ED1fA6rlsUAqbWuurDp2W9ONMZj7NiAAA=',
                isTaproot: true,
            },
        ],
        extractor: [
            {
                psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAABB9oARzBEAiB0AYrUGACXuHMyPAAVcgs2hMyBI4kQSOfbzZtVrWecmQIgc9Npt0Dj61Pc76M4I8gHBRTKVafdlUTxV8FnkTJhEYwBSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAUdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSrgABASAAwusLAAAAABepFLf1+vQOPUClpFmx2zU18rcvqSHohwEHIyIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQjaBABHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwFHMEQCIGX0W6WZi1mif/4ae+0BavHx+Q1Us6qPdFCqX1aiUQO9AiB/ckcDrR7blmgLKEtW1P/LiPf7dZ6rvgiqMPKbhROD0gFHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4AIgIDqaTDf1mW06ol26xrVwrwZQOUSSlCRgs1R1Ptnuylh3EQ2QxqTwAAAIAAAACABAAAgAAiAgJ/Y5l1fS7/VaE2rQLGhLGDi2VW5fG2s0KCqUtrUAUQlhDZDGpPAAAAgAAAAIAFAACAAA==',
                transaction: '0200000000010258e87a21b56daf0c23be8e7070456c336f7cbaa5c8757924f545887bb2abdd7500000000da00473044022074018ad4180097b873323c0015720b3684cc8123891048e7dbcd9b55ad679c99022073d369b740e3eb53dcefa33823c8070514ca55a7dd9544f157c167913261118c01483045022100f61038b308dc1da865a34852746f015772934208c6d24454393cd99bdf2217770220056e675a675a6d0a02b85b14e5e29074d8a25a9b5760bea2816f661910a006ea01475221029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f2102dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d752aeffffffff838d0427d0ec650a68aa46bb0b098aea4422c071b2ca78352a077959d07cea1d01000000232200208c2353173743b595dfb4a07b72ba8e42e3797da74e87fe7d9d7497e3b2028903ffffffff0270aaf00800000000160014d85c2b71d0060b09c9886aeb815e50991dda124d00e1f5050000000016001400aea9a2e5f0f876a588df5546e8742d1d87008f000400473044022062eb7a556107a7c73f45ac4ab5a1dddf6f7075fb1275969a7f383efff784bcb202200c05dbb7470dbf2f08557dd356c7325c1ed30913e996cd3840945db12228da5f01473044022065f45ba5998b59a27ffe1a7bed016af1f1f90d54b3aa8f7450aa5f56a25103bd02207f724703ad1edb96680b284b56d4ffcb88f7fb759eabbe08aa30f29b851383d20147522103089dc10c7ac6db54f91329af617333db388cead0c231f723379d1b99030b02dc21023add904f3d6dcf59ddb906b0dee23529b7ffb9ed50e5e86151926860221f0e7352ae00000000',
            },
        ],
    },
    addInput: {
        checks: [
            {
                description: 'checks for hash and index',
                inputData: {
                    hash: 42,
                },
                exception: 'Invalid arguments for Psbt\\.addInput\\. Requires single object with at least \\[hash\\] and \\[index\\]',
            },
            {
                description: 'checks for invalid p2wsh witnessScript',
                inputData: {
                    hash: "Buffer.from('000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f', 'hex')",
                    index: 0,
                    witnessScript: "Buffer.from('0014000102030405060708090a0b0c0d0e0f00010203', 'hex')",
                },
                exception: 'P2WPKH or P2SH can not be contained within P2WSH',
            },
            {
                description: 'checks for invalid p2wsh witnessScript',
                inputData: {
                    hash: "Buffer.from('000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f', 'hex')",
                    index: 0,
                    witnessScript: "Buffer.from('a914000102030405060708090a0b0c0d0e0f0001020387', 'hex')",
                },
                exception: 'P2WPKH or P2SH can not be contained within P2WSH',
            },
            {
                description: 'should be equal',
                inputData: {
                    hash: "Buffer.from('000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f', 'hex')",
                    index: 2,
                },
                equals: 'cHNidP8BADMCAAAAAQABAgMEBQYHCAkKCwwNDg8AAQIDBAUGBwgJCgsMDQ4PAgAAAAD/////AAAAAAAAAAA=',
            },
            {
                description: 'checks for mixed taproot and non-taproot fields',
                inputData: {
                    hash: "Buffer.from('000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f', 'hex')",
                    index: 0,
                    redeemScript: "Buffer.from('0014000102030405060708090a0b0c0d0e0f00010000', 'hex')",
                    tapInternalKey: "Buffer.from('000102030405060708090a0b0c0d0e0f00010203040506070000000000000000', 'hex')",
                },
                exception: 'Invalid arguments for Psbt.addInput. Cannot use both taproot and non-taproot fields.',
            },
            {
                description: 'checks for tapleaf in taptree',
                inputData: {
                    hash: "Buffer.from('000102030405060708090a0b0c0d0e0f000102030405060708090a0b0c0d0e0f', 'hex')",
                    index: 0,
                    tapMerkleRoot: "Buffer.from('5cf5873456b400364b18bdc9a1a233870fa622a6010deef1d4e08474f3a103b4', 'hex')",
                    tapLeafScript: [
                        {
                            leafVersion: 192,
                            script: "Buffer.from('20d5e347235eba74ae0cec686b668d5a9432f45a555d6ab22cebf5974bde9dc4f3ac', 'hex')",
                            controlBlock: "Buffer.from('c0720768b9946ac22371653d92cc343bf109b8a3f819e231159fd4f2b1328944ecb424dea09f840b932a00373cdcdbd25650b8c3acfe54a9f4a641a286721b8d26dac795766bbda1eaeaa45e5bfa0a950fdd5f4c4aada5b1f3082edc9689b9fd0aee28a3b82c4aecbebd378127dc88dd19e1ea93edba7a27b754e1c881d308874a7ac4489544b7b840d045599ec9415ae71ccb090c2c465c05c9fa05f41c7a06d5', 'hex')",
                        },
                    ],
                },
                exception: 'Invalid arguments for Psbt.addInput. Tapleaf not part of taptree.',
            },
        ],
    },
    updateInput: {
        checks: [
            {
                description: 'checks for new tapleaf in taptree',
                psbt: 'cHNidP8BADMCAAAAAQ1YzlMrOEvTUad+B8zippgoNUwrXhwvsHMMGwZb6S7LAAAAAAD/////AAAAAAAAAQEroGgGAAAAAAAiUSD3Vv2gTbCrHTNlF18uY/YKLdATh0ph4pwrCyUHkhtZngEYIHsGySMEjYsxl3fCSP6Ap7tG06AUPLXA8nGnwzSEH70VAAA=',
                index: 0,
                inputData: {
                    tapLeafScript: [
                        {
                            leafVersion: 192,
                            script: "Buffer.from('20d5e347235eba74ae0cec686b668d5a9432f45a555d6ab22cebf5974bde9dc4f3ac', 'hex')",
                            controlBlock: "Buffer.from('c0720768b9946ac22371653d92cc343bf109b8a3f819e231159fd4f2b1328944ecb424dea09f840b932a00373cdcdbd25650b8c3acfe54a9f4a641a286721b8d26dac795766bbda1eaeaa45e5bfa0a950fdd5f4c4aada5b1f3082edc9689b9fd0aee28a3b82c4aecbebd378127dc88dd19e1ea93edba7a27b754e1c881d308874a7ac4489544b7b840d045599ec9415ae71ccb090c2c465c05c9fa05f41c7a06d5', 'hex')",
                        },
                    ],
                },
                exception: 'Invalid arguments for Psbt.updateInput. Tapleaf not part of taptree.',
            },
        ],
    },
    addOutput: {
        checks: [
            {
                description: 'Checks value is number',
                outputData: {
                    address: '1P2NFEBp32V2arRwZNww6tgXEV58FG94mr',
                    value: 'xyz',
                },
                exception: 'Error adding output.',
            },
            {
                description: 'Checks the mandatory values for adding an output',
                outputData: {
                    value: 1000,
                },
                exception: 'Invalid arguments for Psbt\\.addOutput. Requires single object with at least \\[script or address\\] and \\[value\\]',
            },
            {
                description: 'Adds output normally',
                outputData: {
                    address: '1P2NFEBp32V2arRwZNww6tgXEV58FG94mr',
                    value: 42,
                },
            },
            {
                description: 'Adds taproot output with internal tap key and tap tree',
                isTaproot: true,
                psbt: 'cHNidP8BADMCAAAAAcbgSGx76du9GXsr4c6Yk7DFglfHi7M2jdCNUXwc+Q+EAAAAAAD/////AAAAAAAAAQEroGgGAAAAAAAiUSClLxmVQ6aZXLEwkYA/WGZuIE91BHT7xP7DIEAvz/NITaIVwd2NnolThxX+QCpgFksj8u93bzuZy6olaHxJNHaArwK1tCTeoJ+EC5MqADc83NvSVlC4w6z+VKn0pkGihnIbjSbax5V2a72h6uqkXlv6CpUP3V9MSq2lsfMILtyWibn9Cu4oo7gsSuy+vTeBJ9yI3Rnh6pPtunont1ThyIHTCIdKesRIlUS3uEDQRVmeyUFa5xzLCQwsRlwFyfoF9Bx6BtUjIFX368Cp2d6uXSbyrn23vC4KMjRRlEssuTTh7ThM6bXQrMAAAA==',
                outputData: {
                    address: 'bc1px4ssshedlz4jc56ses3lftz462a06jwy8my4pwpx6twx30vvv6nsgwcpu3',
                    value: 410000,
                    tapInternalKey: "Buffer.from('f6d4ce132444de7f0e3a1d2be9b38ceec798cf9a76eeeac585869445830eb167', 'hex')",
                    tapTree: {
                        leaves: [
                            {
                                depth: 2,
                                leafVersion: 192,
                                script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0ac', 'hex')",
                            },
                            {
                                depth: 3,
                                leafVersion: 192,
                                script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac1ac', 'hex')",
                            },
                            {
                                depth: 3,
                                leafVersion: 192,
                                script: "Buffer.from('202258b1c3160be0864a541854eec9164a572f094f7562628281a8073bb89173a7ac', 'hex')",
                            },
                            {
                                depth: 2,
                                leafVersion: 192,
                                script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac2ac', 'hex')",
                            },
                            {
                                depth: 3,
                                leafVersion: 192,
                                script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac3ac', 'hex')",
                            },
                            {
                                depth: 4,
                                leafVersion: 192,
                                script: "Buffer.from('2050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac4ac', 'hex')",
                            },
                            {
                                depth: 4,
                                leafVersion: 192,
                                script: "Buffer.from('2055f7ebc0a9d9deae5d26f2ae7db7bc2e0a323451944b2cb934e1ed384ce9b5d0ac', 'hex')",
                            },
                        ],
                    },
                },
                result: 'cHNidP8BAF4CAAAAAcbgSGx76du9GXsr4c6Yk7DFglfHi7M2jdCNUXwc+Q+EAAAAAAD/////AZBBBgAAAAAAIlEgNWEIXy34qyxTUMwj9KxV0rr9ScQ+yVC4JtLcaL2MZqcAAAAAAAEBK6BoBgAAAAAAIlEgpS8ZlUOmmVyxMJGAP1hmbiBPdQR0+8T+wyBAL8/zSE2iFcHdjZ6JU4cV/kAqYBZLI/Lvd287mcuqJWh8STR2gK8CtbQk3qCfhAuTKgA3PNzb0lZQuMOs/lSp9KZBooZyG40m2seVdmu9oerqpF5b+gqVD91fTEqtpbHzCC7clom5/QruKKO4LErsvr03gSfciN0Z4eqT7bp6J7dU4ciB0wiHSnrESJVEt7hA0EVZnslBWuccywkMLEZcBcn6BfQcegbVIyBV9+vAqdnerl0m8q59t7wuCjI0UZRLLLk04e04TOm10KzAAAEFIPbUzhMkRN5/DjodK+mzjO7HmM+adu7qxYWGlEWDDrFnAQb9AwECwCIgUJKbdMGgSVS3i0tgNel6XgeKWg8o7JbVR7/ums6AOsCsA8AiIFCSm3TBoElUt4tLYDXpel4HiloPKOyW1Ue/7prOgDrBrAPAIiAiWLHDFgvghkpUGFTuyRZKVy8JT3ViYoKBqAc7uJFzp6wCwCIgUJKbdMGgSVS3i0tgNel6XgeKWg8o7JbVR7/ums6AOsKsA8AiIFCSm3TBoElUt4tLYDXpel4HiloPKOyW1Ue/7prOgDrDrATAIiBQkpt0waBJVLeLS2A16XpeB4paDyjsltVHv+6azoA6xKwEwCIgVffrwKnZ3q5dJvKufbe8LgoyNFGUSyy5NOHtOEzptdCsAA==',
            },
            {
                description: 'Adds taproot output with internal tap key and correct address',
                isTaproot: true,
                psbt: 'cHNidP8BAFwCAAAAAk9Ve2845C8v//JR71uKzf70FjeNfx7SvB4l3A+Q44UKAAAAAAD/////FIp10hu+RPgTSFGPmjwb01Tf/a5UkcPFUpOw/X6UEPYAAAAAAP////8AAAAAAAABASugaAYAAAAAACJRINqadqaDhePTT29qdKQScUmyJxEeDw12HLjkMYMVSlnkARcgDN4bJzix3HdE8+FUM6UgA1lEKpgpIImVUePmAGYh7yYAAQDAAgAAAAFbIoaAJqDd/f4mZppgYV4UR9bgU8lT9pTH4/aDJdFUWgAAAABrSDBFAiEA6JS0xMdSQhG+9gAPSxGs6HazyauyNUBMwrmF386IAxwCIGiyH9QHCzKOBTtg+VsISF4nUi9NfAtJAtC02J03+I07ASEDu1tkEI8W1bd6qrPZ3uLaHvE90BDUvRCwvTTzPYPXzwf/////AaBoBgAAAAAAGXapFL5QEf51k4TA7Mp5d18IM2ddq79oiKwAAAAAAAA=',
                outputData: {
                    tapInternalKey: "Buffer.from('884d969439deced21d1ab71ecd9ef9a6a8795215588ce7eff4ad5efc903e40ec', 'hex')",
                    address: 'bc1p74zfvfd7rndcn8lvzuec4hj4kzp9nnjvapvx5fgtqsegzz656hhsee8kwu',
                    value: 410000,
                },
                result: 'cHNidP8BAIcCAAAAAk9Ve2845C8v//JR71uKzf70FjeNfx7SvB4l3A+Q44UKAAAAAAD/////FIp10hu+RPgTSFGPmjwb01Tf/a5UkcPFUpOw/X6UEPYAAAAAAP////8BkEEGAAAAAAAiUSD1RJYlvhzbiZ/sFzOK3lWwglnOTOhYaiULBDKBC1TV7wAAAAAAAQEroGgGAAAAAAAiUSDamnamg4Xj009vanSkEnFJsicRHg8Ndhy45DGDFUpZ5AEXIAzeGyc4sdx3RPPhVDOlIANZRCqYKSCJlVHj5gBmIe8mAAEAwAIAAAABWyKGgCag3f3+JmaaYGFeFEfW4FPJU/aUx+P2gyXRVFoAAAAAa0gwRQIhAOiUtMTHUkIRvvYAD0sRrOh2s8mrsjVATMK5hd/OiAMcAiBosh/UBwsyjgU7YPlbCEheJ1IvTXwLSQLQtNidN/iNOwEhA7tbZBCPFtW3eqqz2d7i2h7xPdAQ1L0QsL008z2D188H/////wGgaAYAAAAAABl2qRS+UBH+dZOEwOzKeXdfCDNnXau/aIisAAAAAAABBSCITZaUOd7O0h0atx7NnvmmqHlSFViM5+/0rV78kD5A7AA=',
            },
            {
                description: 'Adds taproot output with internal tap key and bad address',
                isTaproot: true,
                psbt: 'cHNidP8BAFwCAAAAAk9Ve2845C8v//JR71uKzf70FjeNfx7SvB4l3A+Q44UKAAAAAAD/////FIp10hu+RPgTSFGPmjwb01Tf/a5UkcPFUpOw/X6UEPYAAAAAAP////8AAAAAAAABASugaAYAAAAAACJRINqadqaDhePTT29qdKQScUmyJxEeDw12HLjkMYMVSlnkARcgDN4bJzix3HdE8+FUM6UgA1lEKpgpIImVUePmAGYh7yYAAQDAAgAAAAFbIoaAJqDd/f4mZppgYV4UR9bgU8lT9pTH4/aDJdFUWgAAAABrSDBFAiEA6JS0xMdSQhG+9gAPSxGs6HazyauyNUBMwrmF386IAxwCIGiyH9QHCzKOBTtg+VsISF4nUi9NfAtJAtC02J03+I07ASEDu1tkEI8W1bd6qrPZ3uLaHvE90BDUvRCwvTTzPYPXzwf/////AaBoBgAAAAAAGXapFL5QEf51k4TA7Mp5d18IM2ddq79oiKwAAAAAAAA=',
                outputData: {
                    tapInternalKey: "Buffer.from('884d969439deced21d1ab71ecd9ef9a6a8795215588ce7eff4ad5efc903e40ec', 'hex')",
                    address: 'bc1p3efq8ujsj0qr5xvms7mv89p8cz0crqdtuxe9ms6grqgxc9sgsntslthf6w',
                    value: 410000,
                },
                exception: 'Error adding output. Script or address missmatch.',
            },
            {
                description: 'Adds taproot output with both taproot and non-taproot fields',
                isTaproot: true,
                psbt: 'cHNidP8BAFwCAAAAAk9Ve2845C8v//JR71uKzf70FjeNfx7SvB4l3A+Q44UKAAAAAAD/////FIp10hu+RPgTSFGPmjwb01Tf/a5UkcPFUpOw/X6UEPYAAAAAAP////8AAAAAAAABASugaAYAAAAAACJRINqadqaDhePTT29qdKQScUmyJxEeDw12HLjkMYMVSlnkARcgDN4bJzix3HdE8+FUM6UgA1lEKpgpIImVUePmAGYh7yYAAQDAAgAAAAFbIoaAJqDd/f4mZppgYV4UR9bgU8lT9pTH4/aDJdFUWgAAAABrSDBFAiEA6JS0xMdSQhG+9gAPSxGs6HazyauyNUBMwrmF386IAxwCIGiyH9QHCzKOBTtg+VsISF4nUi9NfAtJAtC02J03+I07ASEDu1tkEI8W1bd6qrPZ3uLaHvE90BDUvRCwvTTzPYPXzwf/////AaBoBgAAAAAAGXapFL5QEf51k4TA7Mp5d18IM2ddq79oiKwAAAAAAAA=',
                outputData: {
                    address: 'bc1px4ssshedlz4jc56ses3lftz462a06jwy8my4pwpx6twx30vvv6nsgwcpu3',
                    value: 410000,
                    tapInternalKey: "Buffer.from('884d969439deced21d1ab71ecd9ef9a6a8795215588ce7eff4ad5efc903e40ec', 'hex')",
                    redeemScript: "Buffer.from('5221029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f2102dab61ff49a14db6a7d02b0cd1fbb78fc4b18312b5b4e54dae4dba2fbfef536d752ae', 'hex')",
                },
                exception: 'Invalid arguments for Psbt.addOutput. Cannot use both taproot and non-taproot fields.',
            },
            {
                description: 'Adds output after tapkey signature has been added',
                isTaproot: true,
                psbt: 'cHNidP8BAIcCAAAAAvz6EyMK2VQ0DFKWZyIyGZLZCnaIDtG5RI55OrGVs6u7AAAAAAD/////oB9A2l2NN5WPNjBDaRsz9Nmla1WdM3jl96ElSV5WWHMAAAAAAP////8BkEEGAAAAAAAiUSCnucwjGG2x9zGqP+E0PwxTkptd/9AYMW12ch7ffaogBAAAAAAAAQEroGgGAAAAAAAiUSDbRhL5phuWYLyqKbSqVb/Pic2mpPL46idVKQur9i06ugETQOPidQWL9dHDxd819Pn5QNNGyH0fmDv58pexSJVDalZ0W/HPVliPFZy7s//0TfTbvFce87/nKXcrwz5YuItIY6cBFyAOgJIoTQyYcpAqNfsK9CutgWckFE3mBMgpL50lKXb7oQABAL8CAAAAAcdkwPNWdYy1O8QM1xRkrJjas72QGQPEanYEpv6iT3PXAAAAAGpHMEQCIFpl6Nx8hoZA1o5Huo958RS/Hndy+DloLhp0nvRyBzN8AiB9jEbitThSs6TZ1XVBHZebj4nZbLMg3CCtss8WSZpv7QEhA+VxIxwCWeqoeDMYcEw3EC0ZPxIkOqt0YSK9Y3hAKTd1/////wGgaAYAAAAAABl2qRS9gA7n636cw49cUBJWm7IDJPKuuoisAAAAACICAknGKVC7w5Ek4l3IK5XCUwLNCeU4DD+76cdMAYDB72g3RzBEAiAjekFbBddaHY/LZidwKd3sBbifjmbEpka2Ps0B2Crg+wIgUoN4BhGCwMRTDaHbAX+0MXSGYA9nSlqeQJXpWQRCBfQBAAEFIE6DvlLK0f4BrtpMgez01WQYKLUQZ8HtbfuDPD52hmSvAA==',
                outputData: {
                    address: 'bc1px4ssshedlz4jc56ses3lftz462a06jwy8my4pwpx6twx30vvv6nsgwcpu3',
                    value: 410000,
                },
                exception: 'Can not modify transaction, signatures exist.',
            },
            {
                description: 'Adds output after tap key input has been finalized',
                isTaproot: true,
                psbt: 'cHNidP8BAF4CAAAAAfyhtBTm+3OPYBuMHvdPMf9jqniZDY925hbmnt8hxbA6AAAAAAD/////AZBBBgAAAAAAIlEgV6CyzSs5a6Tc8A+TYOiozWnh6FRH9E/VWFanhMAEbLEAAAAAAAEBK6BoBgAAAAAAIlEgV6CyzSs5a6Tc8A+TYOiozWnh6FRH9E/VWFanhMAEbLEBCEIBQOAqWBD/2jhPWzQvesT8sjkN2Cowphp3QvmlWbHiLx753ChcUovvWyBlWiCq77Kk+lZGEhC4vjClSjc26br+dc8AAA==',
                outputData: {
                    address: 'bc1px4ssshedlz4jc56ses3lftz462a06jwy8my4pwpx6twx30vvv6nsgwcpu3',
                    value: 410000,
                },
                exception: 'Can not modify transaction, signatures exist.',
            },
            {
                description: 'Adds output after tapscript signatures have been added',
                isTaproot: true,
                psbt: 'cHNidP8BAF4CAAAAAa/0mhnSBXdEBKbbMC+2hm6AZZtCLBxBeubd1sjtau5dAAAAAAD/////AZBBBgAAAAAAIlEgISRIfamb9rCYzad52ikfoUUuFlvyTcImZMavR0jEaUQAAAAAAAEBK6BoBgAAAAAAIlEgISRIfamb9rCYzad52ikfoUUuFlvyTcImZMavR0jEaURBFBnEcOpwiHjNYPtWJOrQ8Pgc9bxBKyZh/i2D837Z1rC8BibL1C4Z/5e6dKzWfkzpsIbE5WEVn1bYpAAjrqIKMHlAKkl3w3Gfpkl9b0yDVbTlZd4yCEL9V2DJs6zpPrEmn3wiohBy8wwE6EZ0FxQdrCupnHKXhHBjpcHVwfJRQfcy9EEULx1ijisiHgGb/9/hBNhsIOv1ZyWsfmi/Ql+oz7AOuqAGJsvULhn/l7p0rNZ+TOmwhsTlYRWfVtikACOuogoweUBKNkxBf6vT8m7ISt1WikLWW9udCP7OQLXztr1IPalJT5z+esAWmgeLS7QoLgzTu8AnYp/rHxsgZ6CgiV8tlkciQRRXE7VxCk67h7Ee6CbSgNyotChx7CgwNTfxdJkyvCS0DgYmy9QuGf+XunSs1n5M6bCGxOVhFZ9W2KQAI66iCjB5QFN6DGtLlSIFBjZbdh3rbKBtBcEDSiEcuVxnSPpdM1RnQRmw5Ujo+/76wZfmGBMFzV0IA7vnHzzXN73jT6O8/wJiFcDBdB6IhNxYUBYgZT1K7FG5SblQ3S6nQMKRLc2vPcA0BhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZpIFcTtXEKTruHsR7oJtKA3Ki0KHHsKDA1N/F0mTK8JLQOrCAvHWKOKyIeAZv/3+EE2Gwg6/VnJax+aL9CX6jPsA66oLogGcRw6nCIeM1g+1Yk6tDw+Bz1vEErJmH+LYPzftnWsLy6U5zAAAA=',
                outputData: {
                    address: 'bc1px4ssshedlz4jc56ses3lftz462a06jwy8my4pwpx6twx30vvv6nsgwcpu3',
                    value: 410000,
                },
                exception: 'Can not modify transaction, signatures exist.',
            },
        ],
    },
    signInput: {
        checks: [
            {
                description: 'checks the input exists',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: 'No input #1',
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 1,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'checks a UTXO value exists for the input',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: 'Need a Utxo input item for signing',
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: "checks privkey matches the input it's signing",
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: 'Can not sign for this input with the key 02e717fee6be913148f9fd676c0876b7e4574118542c6758b4a9fb9f38f171842b',
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'Kz4mjzErKCH5eQ97RXNQd3Wv7WsLA83BjynfQk4N7BB8J5xuUjAv',
                },
            },
            {
                description: 'checks non-witness UTXO matches the hash specified in the prevout',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: "Non-witness UTXO hash for input #0 doesn't match the hash specified in the prevout",
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQD4AQAAAAABAbD7u8z1SxTjfvhwmkQQvdbbWA+n3GKBBmGecSIAaM5jBQAAABcWABS0SqIhdn2LbW4TAJc3GVh7SnD/eP////8CNg8AAAAAAAAWABSmNm8WWVF+wq+QAeRo9d763jEXhRAnAAAAAAAAGXapFNpkc+03Pgj0bdgAP8p7py++nFVeiKwCRzBEAiB/u0BLwdeerqWf0JH33wwMv8Nn3sKblFvj+CntdC4B9gIgKVVHBH1c9ewnzkuyW6dnz1YARujBJnle1eBNSBAJD9IBIQOmYxHmd2Yz53FpC9+nv+pKdM+5OyEAW3BAN2cccQ0LkgAAAAAAAA==',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'checks redeem script matches the scriptPubKey in a non-witness prevout',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAR2dq8JwBaxnbWHZGw0HdxuUGFcg6dvx3pgjWMm+Pzf2AAAAAAD/////AAAAAAAAAQC9AgAAAAH//////////////////////////////////////////wAAAABqRzBEAiAf7N+IK1uuxTxvEOoVGabNsiT7jMlfSDCd0VYxv+sQTQIgQVYM7ig9TIx1LzrX2RXgw2zW2fMKuRs/bT9eZx6jmYwBIQJpKKFOB6PrPJhRAtaQ+cHHryY5QYIi5dxZtkMwCtuFYf////8BAOH1BQAAAAAXqRRdh8wk5NRiF7VGQ4Zb4i8Vl1YFMocAAAAAAQRpUiECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWEhAgHGF3SgP82qhvqMptNluTLHhLtzDsmc0pNWEDETNj/rIQIFIl+T3Z90vBFGN8uYJHCrUO4DvrOGVWkVDsBeEzBUi1OuAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
                    psbt: 'cHNidP8BADMBAAAAAR2dq8JwBaxnbWHZGw0HdxuUGFcg6dvx3pgjWMm+Pzf2AAAAAAD/////AAAAAAAAAQC9AgAAAAH//////////////////////////////////////////wAAAABqRzBEAiAf7N+IK1uuxTxvEOoVGabNsiT7jMlfSDCd0VYxv+sQTQIgQVYM7ig9TIx1LzrX2RXgw2zW2fMKuRs/bT9eZx6jmYwBIQJpKKFOB6PrPJhRAtaQ+cHHryY5QYIi5dxZtkMwCtuFYf////8BAOH1BQAAAAAXqRRdh8wk5NRiF7VGQ4Zb4i8Vl1YFMocAAAAAAQRpUiEDGMZFrWWJBIIu33FdV9Q+Zit0fcoBOdgS7ooA2h2QlbAhAuAzQeDZh730hBbfTPzlaXJgCh2Jyui/ufS0k8wqJ55FIQKMg6lgEnyRnGIZ90eP4MmuRdT3EcO4+irJEm5yTCiko1OuAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'checks redeem script matches the scriptPubKey in a witness prevout',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBBBYAFC8spHIOpiw9giaEPd5RGkMYvXRHAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
                shouldThrow: {
                    errorMessage: "Redeem script for input #0 doesn't match the scriptPubKey in the prevout",
                    psbt: 'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBBBYAFA3zpl6FMnlgCviVJgbcnBj01iLgAAA=',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'checks the sighash type',
                shouldThrow: {
                    errorMessage: 'Sighash type is not allowed. Retry the sign method passing the sighashTypes array of whitelisted types. Sighash type: SIGHASH_ANYONECANPAY | SIGHASH_ALL',
                    psbt: 'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBAwSBAAAAAQQWABQvLKRyDqYsPYImhD3eURpDGL10RwAA',
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'allows signing non-whitelisted sighashtype when explicitly passed in',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAAYaq+PdOUY2PnV9kZKa82XlqrPByOqwH2TRg2+LQdqs2AAAAAAD/////AAAAAAAAAQEgAOH1BQAAAAAXqRSTNeWHqa9INvSnQ120SZeJc+6JSocBAwSBAAAAAQQWABQvLKRyDqYsPYImhD3eURpDGL10RwAA',
                    sighashTypes: [129],
                    inputToCheck: 0,
                    WIF: 'KxnAnQh6UJBxLF8Weup77yn8tWhLHhDhnXeyJuzmmcZA5aRdMJni',
                },
            },
            {
                description: 'checks taproot key-path signer (tweaked key) matches internal tap key',
                isTaproot: true,
                shouldSign: {
                    psbt: 'cHNidP8BAF4CAAAAAf17fGksrz9eKGx1nSU3RX4vcwr7bfNdQzPZ9dSEkWBcAAAAAAD/////AZBBBgAAAAAAIlEgPLBe/d3922lmXjTIt52b9NG1HFDC9jzPCTn111AG8TQAAAAAAAEBK6BoBgAAAAAAIlEgPLBe/d3922lmXjTIt52b9NG1HFDC9jzPCTn111AG8TQBFyBbMLiqcPfsndZoMRtk9GKEFd0jSA3rwEa60nKQNwdHrAEYIOUOtfVyfPBm+ZzIsEfwzo2JL2WTslXAznzBllU7Oa4zAAA=',
                    inputToCheck: 0,
                    WIF: 'KypUz2y1jdgzM8HGDUx9DYLmyzd8EWhruvLX2J5iSL7MiAcc7dBG',
                    result: 'cHNidP8BAF4CAAAAAf17fGksrz9eKGx1nSU3RX4vcwr7bfNdQzPZ9dSEkWBcAAAAAAD/////AZBBBgAAAAAAIlEgPLBe/d3922lmXjTIt52b9NG1HFDC9jzPCTn111AG8TQAAAAAAAEBK6BoBgAAAAAAIlEgPLBe/d3922lmXjTIt52b9NG1HFDC9jzPCTn111AG8TQBE0AAqkKg+dq3eThMoqzjh214urhgUoGTgwHlNyyMQ2RwhfeRIhAp+m9mZwQoXOxK7p2ILjf2G5j28F9KMhMzH7bXARcgWzC4qnD37J3WaDEbZPRihBXdI0gN68BGutJykDcHR6wBGCDlDrX1cnzwZvmcyLBH8M6NiS9lk7JVwM58wZZVOzmuMwAA',
                },
            },
            {
                description: 'check taproot script-path signer found for the input',
                isTaproot: true,
                shouldSign: {
                    psbt: 'cHNidP8BAF4CAAAAAUYAJ/rjwsScVTFXg1in8cNdaBDtwLAsQ6l1O8sWijmlAAAAAAD/////AZBBBgAAAAAAIlEgFlrANpbJgyRLzVMhozrVHKr6rGrz7e2bQ+3TyITRhB4AAAAAAAEBK6BoBgAAAAAAIlEgFlrANpbJgyRLzVMhozrVHKr6rGrz7e2bQ+3TyITRhB5BFNs7WfGuA1DZ7ZorvaC77E4rn/I2hbVtogxHpEnxKZ3DGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZAbjBxWKodWLnyqPP18sLAjhTc/OXtHVtk+Abc/e8SoTIxaOORlmqOegbCKAUyL4+NFdAlgtcUyHUCxWaxJ3ykxGIVwOpmBmLM44rn+zwtvl1cyWYheMCVYuX2agqeiHOvsrXIGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdYaUpyfs81+d21htiJbbGEOiQb7j6psWaxcPpW1+C0p1mkgq1snxZRfWXi8CMjFSaobG3elbWWeL9QqflyaQtTYEG2sINs7WfGuA1DZ7ZorvaC77E4rn/I2hbVtogxHpEnxKZ3DuiB8Z8sVUSbQp0q8mQiD5n5coMrRzQAASnO9NspgIk9pZ7pTnMAAAA==',
                    inputToCheck: 0,
                    WIF: 'L2wCzcNaJwG1W9djnumJnPQZTCpfeCkR2wgwfupphmThSrwTMCR6',
                    result: 'cHNidP8BAF4CAAAAAUYAJ/rjwsScVTFXg1in8cNdaBDtwLAsQ6l1O8sWijmlAAAAAAD/////AZBBBgAAAAAAIlEgFlrANpbJgyRLzVMhozrVHKr6rGrz7e2bQ+3TyITRhB4AAAAAAAEBK6BoBgAAAAAAIlEgFlrANpbJgyRLzVMhozrVHKr6rGrz7e2bQ+3TyITRhB5BFKtbJ8WUX1l4vAjIxUmqGxt3pW1lni/UKn5cmkLU2BBtT3q/MbhvStFL2jaKZM6N8TeYvCUfSVytPrzfjkXWQbdAoS5lV4a+yP0Y4nTr7ltbsrwMo+U3TNcC/ebE6U6xk/4er9bXfdvZNvgR+TgqrO/iZjNNI6QcGaudPObgsgYKTEEU2ztZ8a4DUNntmiu9oLvsTiuf8jaFtW2iDEekSfEpncMaUpyfs81+d21htiJbbGEOiQb7j6psWaxcPpW1+C0p1kBuMHFYqh1YufKo8/XywsCOFNz85e0dW2T4Btz97xKhMjFo45GWao56BsIoBTIvj40V0CWC1xTIdQLFZrEnfKTEYhXA6mYGYszjiuf7PC2+XVzJZiF4wJVi5fZqCp6Ic6+ytcgaUpyfs81+d21htiJbbGEOiQb7j6psWaxcPpW1+C0p1hpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWaSCrWyfFlF9ZeLwIyMVJqhsbd6VtZZ4v1Cp+XJpC1NgQbawg2ztZ8a4DUNntmiu9oLvsTiuf8jaFtW2iDEekSfEpncO6IHxnyxVRJtCnSryZCIPmflygytHNAABKc702ymAiT2lnulOcwAAA',
                },
            },
        ],
    },
    signInputHD: {
        checks: [
            {
                description: 'checks the bip32Derivation exists',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
                shouldThrow: {
                    errorMessage: 'Need bip32Derivation to sign with HD',
                    psbt: 'cHNidP8BADMBAAAAAXVa+rWvBGNyifYXEMlTten9+qC0xuHcAMxQYrQTwX1dAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFC8spHIOpiw9giaEPd5RGkMYvXRHiKwAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
            },
            {
                description: 'checks the bip32Derivation exists',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
                shouldThrow: {
                    errorMessage: 'Need one bip32Derivation masterFingerprint to match the HDSigner fingerprint',
                    psbt: 'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYD/85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kY/////ywAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
            },
            {
                description: 'checks the bip32Derivation exists',
                shouldSign: {
                    psbt: 'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYDn85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
                shouldThrow: {
                    errorMessage: 'pubkey did not match bip32Derivation',
                    psbt: 'cHNidP8BADMBAAAAARtEptsZNydT9Bh9A5ptwIZz87yH8NXwzr1bjJorAZEAAAAAAAD/////AAAAAAAAAQDAAgAAAAH//////////////////////////////////////////wAAAABrSDBFAiEAjtCPUj0vx3I5HFQKAUWHN0vCnT17jd41/omb4nobq/sCIAilSeQVi4mqykgBbs+Wz6PyqdMThi2gT463v4kPWk6cASECaSihTgej6zyYUQLWkPnBx68mOUGCIuXcWbZDMArbhWH/////AQDh9QUAAAAAGXapFJWXNY2Vp7E5pNOey64rnhhgUlohiKwAAAAAIgYD/85vSg5rlR25fd4MOU2ANsFoO+q828zuOI/5b8tj89kYBCppsiwAAIAAAACAAAAAgAAAAAAAAAAAAAA=',
                    inputToCheck: 0,
                    xprv: 'xprv9s21ZrQH143K2XNCa3o3tii6nbyJAET6GjTfzcF6roTjAMzLUBe8nt7QHNYqKah8JBv8V67MTWBCqPptRr6khjTSvCUVru78KHW13Viwnev',
                },
            },
        ],
    },
    finalizeInput: {
        finalizeTapleafByHash: {
            psbt: 'cHNidP8BAF4CAAAAAXbYuDMSrbXuy1CXHZaiA8jjI+wcNkkCOL2dJD2dNf3kAAAAAAD/////AZBBBgAAAAAAIlEgcJi/YJDTvc6x6mRTIYgQG/+fEmLs2RjsO/FHW5okOEsAAAAAAAEBK6BoBgAAAAAAIlEgcJi/YJDTvc6x6mRTIYgQG/+fEmLs2RjsO/FHW5okOEtBFG78QHu9pQ+jR/B1+dz9XQtU0jFgoC5AFXcvibFi1jFAEkntiZ6MdFzn0seJJapRqACzEKXd0ZlMa34/iq0HnrVAfYaCk2E35rtXsMfbr/Hrbk/BtLF2VLepE0vIIB3UOWZEUF8akmlnL4Kh0xwMn4Cp99QivnI0B3XOsYfEznfDHUEUesul6blPS+qc/rm41L9nGaAck9KDAZAutbDsNLSZuXXMWh7785JCWLEpzsZRkM/9RJ+EaLYT/0O2sg4cHNHo1EBHFn/xRZno2fX/vLc1l2qHqZGB2vbLkZDj5KsVfqeJd78uIc5b6uAG0K+BBtq2H6HUvl+8RWd2GWmVoMTYppVNYhXAjGyV+gMPwhuPgQ05yTUt2dmE2xJLdkeHBaiap2ej2SuYKqOqTjCjec9FzSPuoLS+tXB4VvMgzUTs3kZS/bDfqvuLvWTUb+e6sUIP9JrqDAHAjkYMd3K3PTfk+B6aMTv4IyB6y6XpuU9L6pz+ubjUv2cZoByT0oMBkC61sOw0tJm5dazAohXAjGyV+gMPwhuPgQ05yTUt2dmE2xJLdkeHBaiap2ej2Su0JN6gn4QLkyoANzzc29JWULjDrP5UqfSmQaKGchuNJtrHlXZrvaHq6qReW/oKlQ/dX0xKraWx8wgu3JaJuf0K7iijuCxK7L69N4En3IjdGeHqk+26eie3VOHIgdMIh0q48S7pX3ESdKuEJ4Jo9s+PwRFNvGdokOHBSefrgpE1JCMgbvxAe72lD6NH8HX53P1dC1TSMWCgLkAVdy+JsWLWMUCswAAA',
            index: 0,
            leafHash: '1249ed899e8c745ce7d2c78925aa51a800b310a5ddd1994c6b7e3f8aad079eb5',
            result: 'cHNidP8BAF4CAAAAAXbYuDMSrbXuy1CXHZaiA8jjI+wcNkkCOL2dJD2dNf3kAAAAAAD/////AZBBBgAAAAAAIlEgcJi/YJDTvc6x6mRTIYgQG/+fEmLs2RjsO/FHW5okOEsAAAAAAAEBK6BoBgAAAAAAIlEgcJi/YJDTvc6x6mRTIYgQG/+fEmLs2RjsO/FHW5okOEsBCP0HAQNAfYaCk2E35rtXsMfbr/Hrbk/BtLF2VLepE0vIIB3UOWZEUF8akmlnL4Kh0xwMn4Cp99QivnI0B3XOsYfEznfDHSIgbvxAe72lD6NH8HX53P1dC1TSMWCgLkAVdy+JsWLWMUCsocCMbJX6Aw/CG4+BDTnJNS3Z2YTbEkt2R4cFqJqnZ6PZK7Qk3qCfhAuTKgA3PNzb0lZQuMOs/lSp9KZBooZyG40m2seVdmu9oerqpF5b+gqVD91fTEqtpbHzCC7clom5/QruKKO4LErsvr03gSfciN0Z4eqT7bp6J7dU4ciB0wiHSrjxLulfcRJ0q4Qngmj2z4/BEU28Z2iQ4cFJ5+uCkTUkAAA=',
        },
    },
    finalizeAllInputs: [
        {
            type: 'P2PK',
            psbt: 'cHNidP8BAFUCAAAAAZfdvR7JvbVsuXunG1P19tTYi8Z0l6WHiz+0jpzTNTt+AAAAAAD/////AYA4AQAAAAAAGXapFMjtQ0xCK7OPd32ZJTY2UcdpFIaJiKwAAAAAAAEAygIAAAABb7TMmNs5UwEEpccLHlaaM0w3HEHhh85NjrUObLDMuZsBAAAAa0gwRQIhANWUevBBcqfRpH67rDuFqI+KHqxViKXxmSM+6/jE5ZHjAiBgO/vQg2EsYhaOD5lQbmZYaymRLukA6SCoXhkN21hiOwEhAoKzWGkj1LJ2iOt5wj6jMOtAMGJH50ZjAYZU81uUu6y+/////wGQXwEAAAAAACMhAzpK4NeYX+xyBOKynjD3BEPDq7EN8brZXje488gxshXwrAAAAAAiAgM6SuDXmF/scgTisp4w9wRDw6uxDfG62V43uPPIMbIV8EgwRQIhAL3H/XEPRAZEbpjBwkuLqUKBSu1Inpb2rganXNFcY2JsAiASrXTM2xODEKp7m7RTzYqBchqlvbl88zO/CGW9SePj2gEAAA==',
            result: 'cHNidP8BAFUCAAAAAZfdvR7JvbVsuXunG1P19tTYi8Z0l6WHiz+0jpzTNTt+AAAAAAD/////AYA4AQAAAAAAGXapFMjtQ0xCK7OPd32ZJTY2UcdpFIaJiKwAAAAAAAEAygIAAAABb7TMmNs5UwEEpccLHlaaM0w3HEHhh85NjrUObLDMuZsBAAAAa0gwRQIhANWUevBBcqfRpH67rDuFqI+KHqxViKXxmSM+6/jE5ZHjAiBgO/vQg2EsYhaOD5lQbmZYaymRLukA6SCoXhkN21hiOwEhAoKzWGkj1LJ2iOt5wj6jMOtAMGJH50ZjAYZU81uUu6y+/////wGQXwEAAAAAACMhAzpK4NeYX+xyBOKynjD3BEPDq7EN8brZXje488gxshXwrAAAAAABB0lIMEUCIQC9x/1xD0QGRG6YwcJLi6lCgUrtSJ6W9q4Gp1zRXGNibAIgEq10zNsTgxCqe5u0U82KgXIapb25fPMzvwhlvUnj49oBAAA=',
        },
        {
            type: 'P2PKH',
            psbt: 'cHNidP8BAFUCAAAAAaTbj9mE+B5Z8PLsuGUNGOzDqrtwdB08vvSccSCrezh+AAAAAAD/////AYA4AQAAAAAAGXapFDuK+0mR+qtL9tyadI72bKMwH+vuiKwAAAAAAAEAwAIAAAABks7XL87tkSusFA3L2u2CdJeNkqTMobehPNm/wkGQUzoBAAAAa0gwRQIhAMtzqC7axSA7/7nbio9NKQZz2ePuKeaF5T4c8JSXWEdgAiAID39I05hbJMNGSomrF7XVWEsEEHHzX/lkL3vnOOu4cAEhAvu+bfurbDCzxfOLxEhvz9ZyxPLdI1h9wMT8gl2nyLYV/////wGQXwEAAAAAABl2qRTH5239BfS9zrbwUtvpATwjua4LGYisAAAAACICA1oNX0U/6GwAuVI7JHhneD94sm/o+YrfTnRAhdRUMjoISDBFAiEAhk+HbvY6YShBCUmBVCk42sFWH9LTwUv2wbRC/tIuEAwCIED/UkklY3fpdDBN7qSBHFDyEOeHMUzXD0bvtFTAiKP7AQAA',
            result: 'cHNidP8BAFUCAAAAAaTbj9mE+B5Z8PLsuGUNGOzDqrtwdB08vvSccSCrezh+AAAAAAD/////AYA4AQAAAAAAGXapFDuK+0mR+qtL9tyadI72bKMwH+vuiKwAAAAAAAEAwAIAAAABks7XL87tkSusFA3L2u2CdJeNkqTMobehPNm/wkGQUzoBAAAAa0gwRQIhAMtzqC7axSA7/7nbio9NKQZz2ePuKeaF5T4c8JSXWEdgAiAID39I05hbJMNGSomrF7XVWEsEEHHzX/lkL3vnOOu4cAEhAvu+bfurbDCzxfOLxEhvz9ZyxPLdI1h9wMT8gl2nyLYV/////wGQXwEAAAAAABl2qRTH5239BfS9zrbwUtvpATwjua4LGYisAAAAAAEHa0gwRQIhAIZPh272OmEoQQlJgVQpONrBVh/S08FL9sG0Qv7SLhAMAiBA/1JJJWN36XQwTe6kgRxQ8hDnhzFM1w9G77RUwIij+wEhA1oNX0U/6GwAuVI7JHhneD94sm/o+YrfTnRAhdRUMjoIAAA=',
        },
        {
            type: 'P2MS',
            psbt: 'cHNidP8BAFUCAAAAAbmLTo7GeyF7IT5PJznDiTVjhv5pQKcKe8Qa+8rqUpXuAAAAAAD/////AYA4AQAAAAAAGXapFF2G82oAzUpx/kcDUPy58goX16gkiKwAAAAAAAEAvgIAAAABMBwIKVKOFbas6tBD24LPchtrweE2jiXkPgSHdJndEfoAAAAAa0gwRQIhAJNchwx4je/ZqtZXSCD6BKJBQkpkTBGGdLoFZTcPKlDtAiAZefY/giaVw5rcEoJk4TRnFCyMG0dYLV5IVnFWkR38fQEhAi5yX8RMW6plVrMY26hithJ6j1w2mgqh/bOCAEVnbn/Z/////wGQXwEAAAAAABepFIoQ3seh+nGYzkI7MDw5zuSCIxEyhwAAAAAiAgLFmuo7gG8OjgmaO5AHuC/1OvDarQt16R7VEKU8dkRRCEgwRQIhAOqqlnUwmc+PqKZVwAAMLPNCKskHhVgk1pXR9d7nmB6SAiA0C24idVdtgl9+sIBR8A3Za5WcswNJ3i8PWTMWR10C4QEiAgPnartRgvSQnSJ2ydRuwSPXDdU3P1YQwhYsK7XzfGuUREgwRQIhANnDBUQWjS8hDTPidRZ95rGZK3LWCLIZB1NYx9++eBT8AiASupLR+KNa1Se7eoBkWQcDny+BaBfMQ+p1RTCAXd7/GAEBBItSIQLFmuo7gG8OjgmaO5AHuC/1OvDarQt16R7VEKU8dkRRCCEC4X74b+vRF3XLgyXyGejmE5VB1f3RY/IReUggyNHgdLYhA+dqu1GC9JCdInbJ1G7BI9cN1Tc/VhDCFiwrtfN8a5REIQO94OZv6yPD4kEZSZBquYA7FPsABZZ6UAteVuEw7fVxzlSuAAA=',
            result: 'cHNidP8BAFUCAAAAAbmLTo7GeyF7IT5PJznDiTVjhv5pQKcKe8Qa+8rqUpXuAAAAAAD/////AYA4AQAAAAAAGXapFF2G82oAzUpx/kcDUPy58goX16gkiKwAAAAAAAEAvgIAAAABMBwIKVKOFbas6tBD24LPchtrweE2jiXkPgSHdJndEfoAAAAAa0gwRQIhAJNchwx4je/ZqtZXSCD6BKJBQkpkTBGGdLoFZTcPKlDtAiAZefY/giaVw5rcEoJk4TRnFCyMG0dYLV5IVnFWkR38fQEhAi5yX8RMW6plVrMY26hithJ6j1w2mgqh/bOCAEVnbn/Z/////wGQXwEAAAAAABepFIoQ3seh+nGYzkI7MDw5zuSCIxEyhwAAAAABB/0gAQBIMEUCIQDqqpZ1MJnPj6imVcAADCzzQirJB4VYJNaV0fXe55gekgIgNAtuInVXbYJffrCAUfAN2WuVnLMDSd4vD1kzFkddAuEBSDBFAiEA2cMFRBaNLyENM+J1Fn3msZkrctYIshkHU1jH3754FPwCIBK6ktH4o1rVJ7t6gGRZBwOfL4FoF8xD6nVFMIBd3v8YAUyLUiECxZrqO4BvDo4JmjuQB7gv9Trw2q0Ldeke1RClPHZEUQghAuF++G/r0Rd1y4Ml8hno5hOVQdX90WPyEXlIIMjR4HS2IQPnartRgvSQnSJ2ydRuwSPXDdU3P1YQwhYsK7XzfGuURCEDveDmb+sjw+JBGUmQarmAOxT7AAWWelALXlbhMO31cc5UrgAA',
        },
        {
            type: 'P2SH-P2WPKH',
            psbt: 'cHNidP8BAFUCAAAAATIK6DMTn8bbrG7ZdiiVU3/YAgzyk3dwa56En58YfXbDAAAAAAD/////AYA4AQAAAAAAGXapFNU4SHWUW9ZNz+BcxCiuU/7UtJoMiKwAAAAAAAEAvgIAAAABly2BCiYZ3slqurlLwE7b8UXINYKfrJ9sQlBovzBAwFsBAAAAa0gwRQIhAJJ+Hyniw+KneWomeQYrP1duH7cfQ3j8GN6/RshZCfuvAiBux7Uu/5QqmSmL+LjoWZY2b9TWdluY6zLTkQWIornmYwEhAvUo9Sy7Pu44z84ZZPrQMQxBPpDJyy9WlLQMGdGIuUy7/////wGQXwEAAAAAABepFPwojcWCH2oE9dUjMmLC3bdK/xeWhwAAAAAiAgKj88rhJwk3Zxm0p0Rp+xC/6cxmj+I741DHPWPWN7iA+0cwRAIgTRhd9WUpoHYl9tUVmoJ336fJAJInIjdYsoatvRiW8hgCIGOYMlpKRHiHA428Sfa2CdAIIGGQCGhuIgIzj2FN6USnAQEEFgAU4sZupXPxqhcsOB1ghJxBvH4XcesAAA==',
            result: 'cHNidP8BAFUCAAAAATIK6DMTn8bbrG7ZdiiVU3/YAgzyk3dwa56En58YfXbDAAAAAAD/////AYA4AQAAAAAAGXapFNU4SHWUW9ZNz+BcxCiuU/7UtJoMiKwAAAAAAAEAvgIAAAABly2BCiYZ3slqurlLwE7b8UXINYKfrJ9sQlBovzBAwFsBAAAAa0gwRQIhAJJ+Hyniw+KneWomeQYrP1duH7cfQ3j8GN6/RshZCfuvAiBux7Uu/5QqmSmL+LjoWZY2b9TWdluY6zLTkQWIornmYwEhAvUo9Sy7Pu44z84ZZPrQMQxBPpDJyy9WlLQMGdGIuUy7/////wGQXwEAAAAAABepFPwojcWCH2oE9dUjMmLC3bdK/xeWhwAAAAABBxcWABTixm6lc/GqFyw4HWCEnEG8fhdx6wEIawJHMEQCIE0YXfVlKaB2JfbVFZqCd9+nyQCSJyI3WLKGrb0YlvIYAiBjmDJaSkR4hwONvEn2tgnQCCBhkAhobiICM49hTelEpwEhAqPzyuEnCTdnGbSnRGn7EL/pzGaP4jvjUMc9Y9Y3uID7AAA=',
        },
        {
            type: 'P2WPKH',
            psbt: 'cHNidP8BAFICAAAAAb5UIQFSoXPjqxSmuiSZkM5PjaycnrXQ6VB+u2+MzbSGAAAAAAD/////ASBOAAAAAAAAFgAUXsVBEaHSlhycDORbHHtBKwDo4zIAAAAAAAEBHzB1AAAAAAAAFgAUvIgag7HZu7Rjd/ugmJC/MHlZmAYiAgLN1zezMD4c4uegTbgfJ1GCtN5/hlJYaJt7e8mt1BVzIEcwRAIgXhgL5G81tXP7MAaKJtA0QaFu17bLocOGqxXmDoIfYUACIAOIynpoPS/dTz9Omg2h7v5kiql7ab0SPzWDdxpvpsUcAQAA',
            result: 'cHNidP8BAFICAAAAAb5UIQFSoXPjqxSmuiSZkM5PjaycnrXQ6VB+u2+MzbSGAAAAAAD/////ASBOAAAAAAAAFgAUXsVBEaHSlhycDORbHHtBKwDo4zIAAAAAAAEBHzB1AAAAAAAAFgAUvIgag7HZu7Rjd/ugmJC/MHlZmAYBCGsCRzBEAiBeGAvkbzW1c/swBoom0DRBoW7Xtsuhw4arFeYOgh9hQAIgA4jKemg9L91PP06aDaHu/mSKqXtpvRI/NYN3Gm+mxRwBIQLN1zezMD4c4uegTbgfJ1GCtN5/hlJYaJt7e8mt1BVzIAAA',
        },
        {
            type: 'P2WSH-P2PK',
            psbt: 'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8iAgNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06UgwRQIhALO0xRpuqP3aVkm+DPykrtqe6fPNSgNblp9K9MAwmtHJAiAHV5ZvZN8Vi49n/o9ISFyvtHsPXXPKqBxC9m2m2HlpYgEBBSMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PIgIDXzYJxZxD0vbOD2PyOW3s6VogBM0OA0UwEoHUnXjDNOlIMEUCIQC6XN6tpo9mYlZej4BXSSh5D1K6aILBfQ4WBWXUrISx6wIgVaxFUsz8y59xJ1V4sZ1qarHX9pZ+MJmLKbl2ZSadisoBAQUjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
            result: 'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8BCG4CSDBFAiEAs7TFGm6o/dpWSb4M/KSu2p7p881KA1uWn0r0wDCa0ckCIAdXlm9k3xWLj2f+j0hIXK+0ew9dc8qoHEL2babYeWliASMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PAQhuAkgwRQIhALpc3q2mj2ZiVl6PgFdJKHkPUrpogsF9DhYFZdSshLHrAiBVrEVSzPzLn3EnVXixnWpqsdf2ln4wmYspuXZlJp2KygEjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
        },
    ],
    validateSignaturesOfInput: {
        psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
        index: 0,
        pubkey: "Buffer.from('029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e07f', 'hex')",
        incorrectPubkey: "Buffer.from('029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e02a', 'hex')",
        nonExistantIndex: 42,
    },
    validateSignaturesOfTapKeyInput: {
        psbt: 'cHNidP8BAM8CAAAAAwPzd9k+uLSN1rgF01xY1TIA/8N+YytNZ4VP9gKFP4MyAAAAAAD/////ZtAAqL2E1fKcmGo+7xuqS+nSQeKFVKGRYaHfIvLXn4sAAAAAAP////9+h+SlCwIx1MUDT7Bek0NrWXS7xnSPi5LbYbDc9sxYIgAAAAAA/////wIgKRsAAAAAACJRIEb2SXyy8Z1Qw+npgqlQ3MhiFLAfzOQ3pCBhx72xIw0zuAUBAAAAAAAWABTJijE0v48z5ZmmfEAADXdCBcG0FAAAAAAAAQDiAgAAAAABAUfY2D1t0dyMeEH39C1yOdIxigpqm7XJNqHVT3Lc+FkiAAAAAAD+////AhIsGwAAAAAAGXapFJ5+8XZ3ZP80oFldvEwrcNsBftBmiKyYdK6xAAAAABepFLDBn59UffGbX7u/olyFDG0eG1UJhwJHMEQCIDAd3s05C61flXVFqOtov0NoHRGr8KFcOpH6R/81F46EAiBt+j9hHyvT2hYEyf8fdYsM9IgbnybtPV+kRTHDa6Rj0AEhAmmZfwmoHsmCkEOn9AfRTh+863mURelmE8hSqL4MG1EydJwgACICAi5ovBH1xLoGxPqtFh48wUEpnM+St1SbPzRwO7kBNKOQRzBEAiBpWClBybtHveXkhAgTiE8QSczMJs8MGuH4LOSNRA6s/AIgWlbB3xJOtJIsszj1qZ/whA5jK9wnTzeZzDlVs/ivq2cBAAEBK7gFAQAAAAAAIlEglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4BE0Cd7/ny+QreV7urBWKNroQWCvnZczwkU0kLZiKsJQjtftKHWXMknftjt1d4K6aPYH7cBXzhlrUF+2GovjYLccZeARcglCHnNLD50sRn6n3Rl8Yay0RnzcvJ9MsMVx+LY6XEDK4AAQEfECcAAAAAAAAWABRPoqyhKLb53uUwnE9wBR5Jxl/XMiICA6VOpEBbPJM/xYsqO2euttYFpgec9vcxggyTyoklK660SDBFAiEAoCIktghL55iuMAmkzwYJzb+h+qmNewZXxAx/06ObxIQCIELCsBz/wd2wPlnJb27OluxMkTPnCyHA2C+SxHiX/FvPAQAAAA==',
        index: 1,
        pubkey: "Buffer.from('024fef5c5163bea69a93e74a59672bbeb081837077cb94cfa6e481a5cf00d8ab18', 'hex')",
        incorrectPubkey: "Buffer.from('029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e02a', 'hex')",
    },
    validateSignaturesOfTapScriptInput: {
        psbt: 'cHNidP8BAF4CAAAAAQU2GLj/HTOEN804Hc6JRNTLM7EmDlIBdjG2G1aUw266AAAAAAD/////AYAaBgAAAAAAIlEg35sLGepBXUbR93XfxDJcYBCHqNVjw/jogOgPVdic1UgAAAAAAAEBK6BoBgAAAAAAIlEgVZx4+tHeORcb0jDJnOytrOnNOGL1uS0MdMUg1GQeS15BFDlfgSndY7SlwvEhJOqgW3p+0w9w5R+5MwXe7MVC5/nrrqI0FdZdKILLLZgRVK8L9Bn2ijU6IcoqqyImKIWt3MtAA3alBoU7IBCkBk9OHD1wE8fJI4y+lbnTRj48e8AAwRM77q3Rml679qCzGvEAKAs99UNMaXHQIhgGfRP11AMlJkEUj4kary4texRheMVKh+Ku3dnR1oZpIleSjmfPCBdP83WuojQV1l0ogsstmBFUrwv0GfaKNTohyiqrIiYoha3cy0DYJZ6Lv7FZPIBRZFfVgF5v3gcRiQnT8aM82Q5IPkwkzZrGo4ThZblvunG/+hu8ZPuJrUU+uXb+s9rcwSH+BihIQRSoqze8FgnYNMOROzU42tHITX+baoNf/BdXd5FaN641cq6iNBXWXSiCyy2YEVSvC/QZ9oo1OiHKKqsiJiiFrdzLQEfQ5UkAg4lTbhJxjMzB7hu6ad1fywYxHCXjFXHHrm5PJTOFJLg2oTnwuQToz/Z2AW/UET7Op+WSoHZvW4tzzLhiFcFmuQP4s1ds7KJtMOh4fTw1QCgxkWUA3FUAuUzKHzjDvhpSnJ+zzX53bWG2IltsYQ6JBvuPqmxZrFw+lbX4LSnWGlKcn7PNfndtYbYiW2xhDokG+4+qbFmsXD6VtfgtKdZpII+JGq8uLXsUYXjFSofirt3Z0daGaSJXko5nzwgXT/N1rCA5X4Ep3WO0pcLxISTqoFt6ftMPcOUfuTMF3uzFQuf567ogqKs3vBYJ2DTDkTs1ONrRyE1/m2qDX/wXV3eRWjeuNXK6U5zAAAA=',
        index: 0,
        pubkey: "Buffer.from('02395f8129dd63b4a5c2f12124eaa05b7a7ed30f70e51fb93305deecc542e7f9eb', 'hex')",
        incorrectPubkey: "Buffer.from('029583bf39ae0a609747ad199addd634fa6108559d6c5cd39b4c2183f1ab96e02a', 'hex')",
    },
    getFeeRate: {
        psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEAuwIAAAABqtc5MQGL0l+ErkALaISL4J23BurCrBgpi6vucatlb4sAAAAASEcwRAIgWPb8fGoz4bMVSNSByCbAFb0wE1qtQs1neQ2rZtKtJDsCIEoc7SYExnNbY5PltBaR3XiwDwxZQvufdRhW+qk4FX26Af7///8CgPD6AgAAAAAXqRQPuUY0IWlrgsgzryQceMF9295JNIfQ8gonAQAAABepFCnKdPigj4GZlCgYXJe12FLkBj9hh2UAAAAiAgKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgf0cwRAIgdAGK1BgAl7hzMjwAFXILNoTMgSOJEEjn282bVa1nnJkCIHPTabdA4+tT3O+jOCPIBwUUylWn3ZVE8VfBZ5EyYRGMASICAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXSDBFAiEA9hA4swjcHahlo0hSdG8BV3KTQgjG0kRUOTzZm98iF3cCIAVuZ1pnWm0KArhbFOXikHTYolqbV2C+ooFvZhkQoAbqAQEDBAEAAAABBEdSIQKVg785rgpgl0etGZrd1jT6YQhVnWxc05tMIYPxq5bgfyEC2rYf9JoU22p9ArDNH7t4/EsYMStbTlTa5Nui+/71NtdSriIGApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/ENkMak8AAACAAAAAgAAAAIAiBgLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU21xDZDGpPAAAAgAAAAIABAACAAAEBIADC6wsAAAAAF6kUt/X69A49QKWkWbHbNTXyty+pIeiHIgIDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtxHMEQCIGLrelVhB6fHP0WsSrWh3d9vcHX7EnWWmn84Pv/3hLyyAiAMBdu3Rw2/LwhVfdNWxzJcHtMJE+mWzThAlF2xIijaXwEiAgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8Oc0cwRAIgZfRbpZmLWaJ//hp77QFq8fH5DVSzqo90UKpfVqJRA70CIH9yRwOtHtuWaAsoS1bU/8uI9/t1nqu+CKow8puFE4PSAQEDBAEAAAABBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
        fee: 21,
    },
    cache: {
        nonWitnessUtxo: {
            psbt: 'cHNidP8BAJoCAAAAAljoeiG1ba8MI76OcHBFbDNvfLqlyHV5JPVFiHuyq911AAAAAAD/////g40EJ9DsZQpoqka7CwmK6kQiwHGyyng1Kgd5WdB86h0BAAAAAP////8CcKrwCAAAAAAWABTYXCtx0AYLCcmIauuBXlCZHdoSTQDh9QUAAAAAFgAUAK6pouXw+HaliN9VRuh0LR2HAI8AAAAAAAEER1IhApWDvzmuCmCXR60Zmt3WNPphCFWdbFzTm0whg/GrluB/IQLath/0mhTban0CsM0fu3j8SxgxK1tOVNrk26L7/vU211KuIgYClYO/Oa4KYJdHrRma3dY0+mEIVZ1sXNObTCGD8auW4H8Q2QxqTwAAAIAAAACAAAAAgCIGAtq2H/SaFNtqfQKwzR+7ePxLGDErW05U2uTbovv+9TbXENkMak8AAACAAAAAgAEAAIAAAQEgAMLrCwAAAAAXqRS39fr0Dj1ApaRZsds1NfK3L6kh6IcBBCIAIIwjUxc3Q7WV37Sge3K6jkLjeX2nTof+fZ10l+OyAokDAQVHUiEDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwhAjrdkE89bc9Z3bkGsN7iNSm3/7ntUOXoYVGSaGAiHw5zUq4iBgI63ZBPPW3PWd25BrDe4jUpt/+57VDl6GFRkmhgIh8OcxDZDGpPAAAAgAAAAIADAACAIgYDCJ3BDHrG21T5EymvYXMz2ziM6tDCMfcjN50bmQMLAtwQ2QxqTwAAAIAAAACAAgAAgAAiAgOppMN/WZbTqiXbrGtXCvBlA5RJKUJGCzVHU+2e7KWHcRDZDGpPAAAAgAAAAIAEAACAACICAn9jmXV9Lv9VoTatAsaEsYOLZVbl8bazQoKpS2tQBRCWENkMak8AAACAAAAAgAUAAIAA',
            nonWitnessUtxo: "Buffer.from('0200000001aad73931018bd25f84ae400b68848be09db706eac2ac18298babee71ab656f8b0000000048473044022058f6fc7c6a33e1b31548d481c826c015bd30135aad42cd67790dab66d2ad243b02204a1ced2604c6735b6393e5b41691dd78b00f0c5942fb9f751856faa938157dba01feffffff0280f0fa020000000017a9140fb9463421696b82c833af241c78c17ddbde493487d0f20a270100000017a91429ca74f8a08f81999428185c97b5d852e4063f618765000000', 'hex')",
            inputIndex: 0,
        },
    },
    clone: {
        psbt: 'cHNidP8BAKYCAAAAAlwKQ3suPWwEJ/zQ9sZsIioOcHKU1KoLMxlMNSXVIkEWAAAAAAD/////YYDJMap+mYgbTrCNAdpWHN+EkKvl+XYao/6co/EQfwMAAAAAAP////8CkF8BAAAAAAAWABRnPBAmVHz2HL+8/1U+QG5L2thjmjhKAAAAAAAAIgAg700yfFRyhWzQnPHIUb/XQqsjlpf4A0uw682pCVWuQ8IAAAAAAAEBKzB1AAAAAAAAIgAgth9oE4cDfC5aV58VgkW5CptHsIxppYzJV8C5kT6aTo8iAgNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06UgwRQIhALO0xRpuqP3aVkm+DPykrtqe6fPNSgNblp9K9MAwmtHJAiAHV5ZvZN8Vi49n/o9ISFyvtHsPXXPKqBxC9m2m2HlpYgEBBSMhA182CcWcQ9L2zg9j8jlt7OlaIATNDgNFMBKB1J14wzTprAABASuAOAEAAAAAACIAILYfaBOHA3wuWlefFYJFuQqbR7CMaaWMyVfAuZE+mk6PIgIDXzYJxZxD0vbOD2PyOW3s6VogBM0OA0UwEoHUnXjDNOlIMEUCIQC6XN6tpo9mYlZej4BXSSh5D1K6aILBfQ4WBWXUrISx6wIgVaxFUsz8y59xJ1V4sZ1qarHX9pZ+MJmLKbl2ZSadisoBAQUjIQNfNgnFnEPS9s4PY/I5bezpWiAEzQ4DRTASgdSdeMM06awAAAA=',
    },
};
export default psbt;
