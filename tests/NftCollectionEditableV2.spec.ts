import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { NftCollectionEditableV2 } from '../wrappers/NftCollectionEditableV2';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('NftCollectionEditableV2', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('NftCollectionEditableV2');
    });

    let blockchain: Blockchain;
    let nftCollectionEditableV2: SandboxContract<NftCollectionEditableV2>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftCollectionEditableV2 = blockchain.openContract(NftCollectionEditableV2.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await nftCollectionEditableV2.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftCollectionEditableV2.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftCollectionEditableV2 are ready to use
    });
});
