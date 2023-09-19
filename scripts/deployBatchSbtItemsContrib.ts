import { Address, toNano } from 'ton-core';
import { compile, NetworkProvider } from '@ton-community/blueprint';
import { NftCollection } from '../wrappers/NftCollection';

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollection.createFromAddress(Address.parse('EQCD8AJyKeCAEtzvYYXo3-yXw19sCw70LuVjJCanF_YbwoVQ'))
    );

    await nftCollection.sendBatchMint(provider.sender(), {
        sbts: [
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDmYoHvv2ZSnpjMlH1LDsJorTvtEF_sRN2hoDlHMeoCXO4I'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-contrib-collection/items/json/0.json',
                index: 0,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB9tsqI3aTrUyOSnvsae-NB4S1ANxBXi95NyZ7hVjewTDfN'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-contrib-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAl62-Cs-sdwC8wh4PHpsPZf_ojHP8ptlPuMv-lS9FkLO7b'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-contrib-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAlOqSXNBfYa0B9qq5gKWphiDTYH62abkDskNdpm6VXwPjU'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-contrib-collection/items/json/3.json',
                index: 3,
            },
        ],
    });

    ui.write('SBTs deployed!');
}
