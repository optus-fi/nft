import { Address, toNano } from 'ton-core';
import { compile, NetworkProvider } from '@ton-community/blueprint';
import { NftCollection } from '../wrappers/NftCollection';

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollection.createFromAddress(Address.parse('EQCJ8CR6d_1bhUBmUJY4zJwp1mP08Aotp59HmWNlwlqlVEnS'))
    );

    await nftCollection.sendBatchMint(provider.sender(), {
        sbts: [
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAULcjDZ4TK9huUxR4Vl_Tfa8JRooU3bhvPrmHJHZIPGWkS'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/0.json',
                index: 0,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCYzF7mFz9vJi-f34CxhAvGp_pu75M0PXLl-LBIkQsCTIVJ'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCX0M7_pQrL7e2jnVYZnXWpJzCK_Z4ryYCWU1qT9I6jdIas'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCMVejag6yVyH2l-SlHXjqlXpsmLcYjs4Tdh4lOk03Y6s4R'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/3.json',
                index: 3,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDmTPPD9J56AmCl4lihRQs-rEUx2ynAb_ovkbhA_1PLCKlu'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/4.json',
                index: 4,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD6lxgJ-yqpoGz5r_k29mAxNkCJWi_5HCDgesGxyXNIIgJf'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/5.json',
                index: 5,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBzFtzPPMhzBi_JJ_lVqym00Vh6LYXzfBQM8U6UfESOL26k'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/6.json',
                index: 6,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB88k0bX_IYdnsxNVEDxqeFeWpzhXH2oTc4Y3T_fy2uEdqd'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/7.json',
                index: 7,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBvjxCZVZZpXcXXxza7KzsgjTeqlxMZquDpVAiTfRuy3VOp'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/8.json',
                index: 8,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAvOVixtL1by_ZBrNQdUNVVloK6Pk4pvV-hK5x6rP2LfuPK'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/9.json',
                index: 9,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAQz1XpVl0imDK_isJFAas-Lch1wVV69uVNMwG2tUHqiqzF'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/10.json',
                index: 10,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCz-7-zG1t5K6h5iVGGfovOfwNLV6cC7TvPdw9c8A8KWE_0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/11.json',
                index: 11,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA2gOTZdjY-M649eAbt9EDqUEJ7FQSIwsv7kYUsnBzmLYll'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/12.json',
                index: 12,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBdyNuqAaY_VwVfPB3_IpIh8S6ZjkpaAh22Mzxh8OqeuId0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/13.json',
                index: 13,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCnYPEqfec_-ejC_pWA_7UkmjvmaSC3Oo6jAhN7eJkeP48y'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/14.json',
                index: 14,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD3GL2JmcKCQWojLoEOFLcJ9JzyGZJtGAqssuXKUGckkYc3'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/15.json',
                index: 15,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAS3_ED2YWUOthEDW7qifnqfnWkJY2hkJxPoKxAK5-0luKN'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-liq-collection/items/json/16.json',
                index: 16,
            },
        ],
    });

    ui.write('SBTs deployed!');
}
