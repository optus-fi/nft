import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from 'ton-core';

export type AccountConfig = {};

export function accountConfigToCell(config: AccountConfig): Cell {
    return beginCell().endCell();
}

export class Account implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new Account(address);
    }

    static createFromConfig(config: AccountConfig, code: Cell, workchain = 0) {
        const data = accountConfigToCell(config);
        const init = { code, data };
        return new Account(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
