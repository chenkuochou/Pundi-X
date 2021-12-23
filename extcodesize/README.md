# Pundi X

## Q6. extcodesize contracts

### Ropsten testnet

Deploying contracts with the account: `0x2368ccf7Fcc447399d77FB46Fb5Eb107e0f80A86`

Victim deployed to: `0x87872D4e10f1F59282931B0a3a1727164C5a03D5` containing the `extcodesize` function

NormalContract deployed to: `0x114C3B486954eD9b35d37696B35A7b79f8aADbaf` to interact with Victim and return `True` from extcodesize

Attacker deployed to: `0x819730953A0f8a6457315700Ce7C2A5F982520fe` to interact with Victim and return `False` from extcodesize

### Local test result

        Interactions
    Does Victim treat NormalContract as a contract? true
        ✓ Calling from a normal contract
    Does Victim treat Attacker as a contract? false
        ✓ Calling from an attacker


    2 passing (848ms)

## Q7. Private blockchain using geth

A local private chain has been set up in `devChain` folder.
