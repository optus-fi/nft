import { Address, toNano } from 'ton-core';
import { compile, NetworkProvider } from '@ton-community/blueprint';
import { NftCollection } from '../wrappers/NftCollection';

export async function run(provider: NetworkProvider) {
    const ui = provider.ui();

    const nftCollection = provider.open(
        NftCollection.createFromAddress(Address.parse('EQBwTO1wu1rTpzlN1EVtPuPpJKrCLXR9XGe5q3tvD9A22x0v'))
    );

    await nftCollection.sendBatchMint(provider.sender(), {
        sbts: [
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBje3Ovqz8033oogPPm0i7n-eZsn4pgRRIsmQWCmk2_LYUp'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBoVUrXov5_Es43D4Nw57tT0Q6NoxyLYbyPeqD2fh-wXOnD'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCKbwti8yrEuUflWKCpFoAIHfFzLqjZab4DXpYVbgtnSNMO'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/3.json',
                index: 3,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD-IS_-dhjmD0r8q-1H4xtpBJK_d-LoLxkNxXOTCJeGSVFQ'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/4.json',
                index: 4,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC36cAKxSIffCfJ8KazHr_UmB_yi_Hio3dTxhIbQxaz4Q_n'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/5.json',
                index: 5,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBkso325b1M-olNeqXUJblYxlqRqJ-PVZ8Q9nufBUqDNRHz'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/6.json',
                index: 6,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBMa4CqO8tK3SASTBAaNgdvX6oAB3fTTyUvb9uzwqd02T_u'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/7.json',
                index: 7,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBBFhvEYDRe36DGp5SgPkc4TjYF-deXrGgJmKm6xagFz_jV'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/8.json',
                index: 8,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC9I-9YAbbe9oqlXOvcD28rTGzHZIGG65p4I9q9BP-VPSQV'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/9.json',
                index: 9,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCX0M7_pQrL7e2jnVYZnXWpJzCK_Z4ryYCWU1qT9I6jdIas'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/10.json',
                index: 10,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBvwehN5KbiPtkbVRykIr7DNcaaWSZunrVgHifm9DWZdneN'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/11.json',
                index: 11,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCcKVb8U6MfMOe0Uhg7OkUBjFpahGQ153pH53dMcrf2idhF'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/12.json',
                index: 12,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBvjxCZVZZpXcXXxza7KzsgjTeqlxMZquDpVAiTfRuy3VOp'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/13.json',
                index: 13,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBQczAAl-wXgAu_IsOmfJH3D5QOS75t2GMBZvsdJWBTmKmZ'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/14.json',
                index: 14,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB6OVtqtBE5FZtJUH2gjMQKQWVA47wVsgwLD7fHU3DUppgL'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/15.json',
                index: 15,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD3GL2JmcKCQWojLoEOFLcJ9JzyGZJtGAqssuXKUGckkYc3'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/16.json',
                index: 16,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDzsDO8TJbDjqBo7GTamaGQdFulguY__QLket5BYIcg8Y1M'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/17.json',
                index: 17,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCk_NSgb3MZTfS1XWqDzaJuugePMlDWi6G0KuEre41DjGVn'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/18.json',
                index: 18,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDfk7H4RAahn3bD-sjQDbD7Ddo7OrrxoBa87Yv52eaYa8nP'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/19.json',
                index: 19,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBdyNuqAaY_VwVfPB3_IpIh8S6ZjkpaAh22Mzxh8OqeuId0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/20.json',
                index: 20,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBkso325b1M-olNeqXUJblYxlqRqJ-PVZ8Q9nufBUqDNRHz'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/21.json',
                index: 21,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB_W45vYlQvuzRhc_KFZtOGyvCDgDk6sDtjv4JODWWaAms6'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/22.json',
                index: 22,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC5aj2p6ClvTKx2-jWjSBrYbWTS_S2moHW4mRh2QOq1Um6x'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/23.json',
                index: 23,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBzFtzPPMhzBi_JJ_lVqym00Vh6LYXzfBQM8U6UfESOL26k'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/24.json',
                index: 24,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCmAvd4kMenzBLW_S7k4tBGfXyKmct7Mj-dDqPz8VYmaBsC'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/25.json',
                index: 25,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDwycePAhrGWDm0AGMhpou7Mt5QJfhMhTy51160iU0ISPen'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/26.json',
                index: 26,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBbuLYqOg3MfXlp-bDJOPfduDkhS9r7zjxdLP1WfAI9r0rJ'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/27.json',
                index: 27,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCdTdEa0Y8xZwrFHBgoPtyVzEkF0eT1FYJCe4ioFXeCCryz'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/28.json',
                index: 28,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDrDwXelSnPa2xEOBferOuuQ_2Bpm7cD2zRQyIkyTB-u_o9'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/29.json',
                index: 29,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDmTPPD9J56AmCl4lihRQs-rEUx2ynAb_ovkbhA_1PLCKlu'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/30.json',
                index: 30,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDRjynZD026yQ57zDRwilONb0Qlb1dbL-BMghmB2Gzb8ACb'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/31.json',
                index: 31,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAmK-0TO6nbvqbw1oaLLS3rHYr8DEB48PyAYJDnRLylYsUX'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/32.json',
                index: 32,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCMVejag6yVyH2l-SlHXjqlXpsmLcYjs4Tdh4lOk03Y6s4R'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/33.json',
                index: 33,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAS3_ED2YWUOthEDW7qifnqfnWkJY2hkJxPoKxAK5-0luKN'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/34.json',
                index: 34,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBaSV6G0lIa59p9AGRy6Irlaz0OXWdEFsTiW1CnBy3Uzt4_'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/35.json',
                index: 35,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA0GjjzGf4LiIZAxhDBShf2oJ1TljxXeGgYYnXOZ2NSBaBD'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/36.json',
                index: 36,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDkFMeWl29gxlimZkEBv4pbDVpNR2F4j5SArnJtVWqt_qqT'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/37.json',
                index: 37,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCths2iW7fBNDeujwatck1HOYZIKN0iuHN_A6cYv5AsUgio'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-bug-collection/items/json/38.json',
                index: 38,
            },
        ],
    });

    ui.write('SBTs deployed!');
}
