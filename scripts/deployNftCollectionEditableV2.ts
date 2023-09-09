import { toNano } from 'ton-core';
import { NftCollectionEditableV2 } from '../wrappers/NftCollectionEditableV2';
import { compile, NetworkProvider } from '@ton-community/blueprint';

export async function run(provider: NetworkProvider) {
    const nftCollectionEditableV2 = provider.open(NftCollectionEditableV2.createFromConfig({}, await compile('NftCollectionEditableV2')));

    await nftCollectionEditableV2.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftCollectionEditableV2.address);

    // run methods on `nftCollectionEditableV2`
}
