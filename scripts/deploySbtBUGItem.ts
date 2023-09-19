import { Address, toNano } from 'ton-core';
import { NetworkProvider } from '@ton-community/blueprint';
import { NftCollection } from '../wrappers/NftCollection';

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollection.createFromAddress(Address.parse('EQBwTO1wu1rTpzlN1EVtPuPpJKrCLXR9XGe5q3tvD9A22x0v'))
    );

    await nftCollection.sendMint(provider.sender(), {
        amount: toNano('0.1'),
        itemOwnerAddress: Address.parse('EQDNbXPLabqHcfpRMAQve6oRnJ4fXdyra6kWm2ZLJGKS3MWi'),
        itemAuthorityAddress: provider.sender().address as Address,
        itemContent:
            'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/39.json',
        itemIndex: 39,
    });

    ui.write('SBT deployed!');
}
