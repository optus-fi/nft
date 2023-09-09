import { Address, beginCell, Cell, Contract, contractAddress, ContractProvider, Sender, SendMode } from 'ton-core';

export type NftCollectionEditableV2Config = {};

export function nftCollectionEditableV2ConfigToCell(config: NftCollectionEditableV2Config): Cell {
    return beginCell().endCell();
}

export class NftCollectionEditableV2 implements Contract {
    constructor(readonly address: Address, readonly init?: { code: Cell; data: Cell }) {}

    static createFromAddress(address: Address) {
        return new NftCollectionEditableV2(address);
    }

    static createFromConfig(config: NftCollectionEditableV2Config, code: Cell, workchain = 0) {
        const data = nftCollectionEditableV2ConfigToCell(config);
        const init = { code, data };
        return new NftCollectionEditableV2(contractAddress(workchain, init), init);
    }

    async sendDeploy(provider: ContractProvider, via: Sender, value: bigint) {
        await provider.internal(via, {
            value,
            sendMode: SendMode.PAY_GAS_SEPARATELY,
            body: beginCell().endCell(),
        });
    }
}
