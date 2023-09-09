import { toNano } from 'ton-core';
import { Account } from '../wrappers/Account';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const account = provider.open(Account.createFromConfig({}, await compile('Account')));

    await account.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(account.address);

    // run methods on `account`
}
