import { Blockchain, SandboxContract } from '@ton-community/sandbox';
import { Cell, toNano } from 'ton-core';
import { Account } from '../wrappers/Account';
import '@ton-community/test-utils';
import { compile } from '@ton-community/blueprint';

describe('Account', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('Account');
    });

    let blockchain: Blockchain;
    let account: SandboxContract<Account>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        account = blockchain.openContract(Account.createFromConfig({}, code));

        const deployer = await blockchain.treasury('deployer');

        const deployResult = await account.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: account.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and account are ready to use
    });
});
