import { Address, toNano } from 'ton-core';
import { compile, NetworkProvider } from '@ton-community/blueprint';
import { NftCollection } from '../wrappers/NftCollection';

export async function run(provider: NetworkProvider) {

    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollection.createFromAddress(Address.parse('EQCvvleli-ANUGQyW8HwDScoogBjq3P7xNCpNGg5ks5uQJ4W'))
    );

    await nftCollection.sendBatchMint(provider.sender(), {
        sbts: [
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/3.json',
                index: 3,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/4.json',
                index: 4,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/5.json',
                index: 5,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/6.json',
                index: 6,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/7.json',
                index: 7,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/8.json',
                index: 8,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/9.json',
                index: 9,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/10.json',
                index: 10,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/11.json',
                index: 11,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/12.json',
                index: 12,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/13.json',
                index: 13,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/14.json',
                index: 14,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/15.json',
                index: 15,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/16.json',
                index: 16,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/17.json',
                index: 17,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/18.json',
                index: 18,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/19.json',
                index: 19,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/20.json',
                index: 20,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/21.json',
                index: 21,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/22.json',
                index: 22,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/23.json',
                index: 23,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/24.json',
                index: 24,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/25.json',
                index: 25,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/26.json',
                index: 26,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/27.json',
                index: 27,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/28.json',
                index: 28,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/29.json',
                index: 29,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/30.json',
                index: 30,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/31.json',
                index: 31,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/32.json',
                index: 32,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/33.json',
                index: 33,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/34.json',
                index: 34,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/35.json',
                index: 35,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/36.json',
                index: 36,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/37.json',
                index: 37,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/38.json',
                index: 38,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: provider.sender().address as Address,
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/39.json',
                index: 39,
            },
        ],
    });

    ui.write("SBTs deployed!");
}
