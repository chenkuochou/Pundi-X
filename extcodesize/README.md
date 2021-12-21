# Pundi X

## Ropsten testnet

Deploying contracts with the account: `0x2368ccf7Fcc447399d77FB46Fb5Eb107e0f80A86`

Victim deployed to: `0xF581C33A3382D25444CB56e39adcf46e6E73def3` containing the `extcodesize` function

NormalContract deployed to: `0x7b1fA6A8DAd545C1F3E34e1c03566e1FB54C512B` to interact with Victim and return `True` from extcodesize

Attacker deployed to: `0x0653ef860762f78878aA1786522e380d63b0e739` to interact with Victim and return `False` from extcodesize

## Local test result

        Interactions
    Does Victim treat NormalContract as a contract? true
        ✓ Calling from a normal contract
    Does Victim treat Attacker as a contract? false
        ✓ Calling from an attacker


    2 passing (848ms)
