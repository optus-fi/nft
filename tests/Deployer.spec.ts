import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { Deployer } from '../wrappers/Deployer';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Deployer', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Deployer');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<Deployer>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        deployer = blockchain.openContract(Deployer.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await deployer.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: deployer.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and deployer are ready to use
    });
});
