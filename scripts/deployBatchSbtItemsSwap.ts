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
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/0.json',
                index: 0,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBMubUg_eg35keX91BElNjcy5e8p23Uj3SOEyv0tipNdLr2'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/1.json',
                index: 1,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBzFtzPPMhzBi_JJ_lVqym00Vh6LYXzfBQM8U6UfESOL26k'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/2.json',
                index: 2,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB88k0bX_IYdnsxNVEDxqeFeWpzhXH2oTc4Y3T_fy2uEdqd'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/3.json',
                index: 3,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB54-6bXlYduXwFuYLnB0YreJc0M4Q_iWj_H1AgwCp8lhca'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/4.json',
                index: 4,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB_W45vYlQvuzRhc_KFZtOGyvCDgDk6sDtjv4JODWWaAms6'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/5.json',
                index: 5,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA9QXvedWBY_zf9zDykNAMxLLExlLv2Zv6nm8XHB_slFatL'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/6.json',
                index: 6,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAiSKPtKjQXsLg2xp3mX8eorW5z-9AeVv9-uak5Be0dyf31'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/7.json',
                index: 7,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB7OWc_Yd_Ht-s-6vaUUdCE7NYYSZSS5KWVe4H1md5gFAUk'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/8.json',
                index: 8,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAOXMz5qN9SqzoLVO6XTsWNf9jIXA27U7VHaEM325TmFdAm'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/9.json',
                index: 9,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBvjxCZVZZpXcXXxza7KzsgjTeqlxMZquDpVAiTfRuy3VOp'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/10.json',
                index: 10,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAvOVixtL1by_ZBrNQdUNVVloK6Pk4pvV-hK5x6rP2LfuPK'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/11.json',
                index: 11,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD6lxgJ-yqpoGz5r_k29mAxNkCJWi_5HCDgesGxyXNIIgJf'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/12.json',
                index: 12,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA1iN7cXyAMTOTy6nDIz1H6jAVm8UXK0YVYSa7jRV2Lvyn6'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/13.json',
                index: 13,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA2gOTZdjY-M649eAbt9EDqUEJ7FQSIwsv7kYUsnBzmLYll'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/14.json',
                index: 14,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA2NIRE9x89T0Y1tmfGPDYawGSwChpHMzdeIxw2_Wbs01Vo'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/15.json',
                index: 15,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQA9aQi4k23P4GwVH0dAZXqY4BMPqz40EkQCCcGGJK2jJnaZ'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/16.json',
                index: 16,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAeSqvrscr2Uwk-0caLv5AcYqHftEQQRELGP6Mj05ZOoM8q'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/17.json',
                index: 17,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAh0dnLO78Y5qSE8OCrkXmpoOES_Vsw_6uwyRFuoO1vze5-'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/18.json',
                index: 18,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAN6BriCoh-2fef8O_p0c5tUz6dWsSllkjQB1TeinuXTAai'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/19.json',
                index: 19,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQARzn3HEpt3eL90MYR7hoqMCbAMe7sBuV2UJdaUOSF-IsV0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/20.json',
                index: 20,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAvpfu4g5_vnapfZU7sWO7c04Dn6T8st0xW6V5jxlv-oYn0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/21.json',
                index: 21,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAZTNMsDDjakvhZttga7WUQ2osjjCuTIT_BMxLBfnQxV_gI'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/22.json',
                index: 22,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB_mxNkBAqVN8ZvsgHAzkJjl7qxcWdBPE7wZqzeEgRwrY8x'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/23.json',
                index: 23,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQB1QT1ttbTJBiZC9W4471aqdSMAke5G5BNn80_ZRTXpqhCS'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/24.json',
                index: 24,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBDyScYFwr0oKISG0Z_29MwMoz7L2LVq-3O8IK_ap3FNnKp'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/25.json',
                index: 25,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBg0gVsWoopV8RdNWXPVzbk2paKv82YHUrovnttOlRWKKGb'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/26.json',
                index: 26,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBLQOEmF9TnbQu8g18EILggPXzJ2osZw6QtkDDa8HY-WZAE'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/27.json',
                index: 27,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBqLh3U8nSfoch9QXII-5Nhonj4jrEPvmPTiCdym6xi-o3T'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/28.json',
                index: 28,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBuXpX8zWA2XkrO9nIYU8XvNJh3Sm17Qf_x0uBZa5j0ueEg'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/29.json',
                index: 29,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBVjV8brkBI5yPIrFkycwTo2CrID4V6ESDU_gmS2P0g7YYV'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/30.json',
                index: 30,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQBZKmW9Lf0ZiZRhVzPgYP9F4h5sl2nS7RcuJZga2UDFikU4'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/31.json',
                index: 31,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC0qt4SM32wXgXbSrQA_bDMdt6GDQZedeODVqF4ueXdvurr'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/32.json',
                index: 32,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC0TpPw3qPhU3GGD1ebiqNYqg1wTbaq5M8COWPvpFwf4Pbc'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/33.json',
                index: 33,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQC9I-9YAbbe9oqlXOvcD28rTGzHZIGG65p4I9q9BP-VPSQV'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/34.json',
                index: 34,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCcTo4ZtMGh0GKq078AWNOr-t_GnfDRLOe9jZzifODNe5O3'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/35.json',
                index: 35,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQChbL2K1yvyD2EdgSrlLxrz-gsoBAzciE7mrco2w7JKMXmj'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/36.json',
                index: 36,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCLGw3WwnTio1FxaIZoxLwRTUgkicLtJO9b4j860rJyEhVE'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/37.json',
                index: 37,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCMVejag6yVyH2l-SlHXjqlXpsmLcYjs4Tdh4lOk03Y6s4R'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/38.json',
                index: 38,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCNogWy57krCiHsL85ken7-frg_8ZFvS4MzwkDdWZb9nAZa'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/39.json',
                index: 39,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCo4VGvJ7hyd62zOAxyZzxi0_O2Yj8xeA4dJW8o0TfO7BX7'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/40.json',
                index: 40,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCths2iW7fBNDeujwatck1HOYZIKN0iuHN_A6cYv5AsUgio'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/41.json',
                index: 41,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCuJZMPd1UUfdjpS663Hs3h4yRfTLmQAR72zu9ht2fvsfDt'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/42.json',
                index: 42,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQCzwPWYInrl3eEuk14FY0NHCu7zFw0IeEp8JiIUtqCFYhpF'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/43.json',
                index: 43,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD_sD1oJsyDuRBFsxlHPEJTjOFIwFvCKoIUyOPvv__zxTP_'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/44.json',
                index: 44,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD0HH2cp-A9zqOqadpPGndGddxP99LgvaLXLmQZnlbTC6Ss'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/45.json',
                index: 45,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD3GL2JmcKCQWojLoEOFLcJ9JzyGZJtGAqssuXKUGckkYc3'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/46.json',
                index: 46,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD4Uin3sXUhSiafZTtMoI1iWc98tjTTdVUuiRBHuMNy7bHy'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/47.json',
                index: 47,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQD7qtxmRxi-gxybHDs7-JD20KLie36klQXuAPW7yl1i6GX2'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/48.json',
                index: 48,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDk2zl5JQbvIqTJPF1hZ5QEe5u9Mj1WwZU5F-ToDhD1YHaE'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/49.json',
                index: 49,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDKjuluvnNF7hycjUaBxP2H0m2JdO0beRzA7Ch8pvT5Tj6p'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/50.json',
                index: 50,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDmTPPD9J56AmCl4lihRQs-rEUx2ynAb_ovkbhA_1PLCKlu'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/51.json',
                index: 51,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDsnm80wOHEAx6e1IykdEWE__TkZS7AVMrhDwRGltkjFgG7'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/52.json',
                index: 52,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDt0OhegvCIBIH1hbY7mGM7NBw0-kJPZAZDt0mvvbrsY_kE'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/53.json',
                index: 53,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDyVcZmjfcgSfgK9fp6VuoDBRaueovw9PYL1DHNR4Gyabx5'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/54.json',
                index: 54,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQDzvMrhLQFR8jUUgHQngDSbtcNExqPxvEt2_cWDpS2vnBd0'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/55.json',
                index: 55,
            },
            {
                amount: toNano('0.1'),
                ownerAddress: Address.parse('EQAtALB8qZ6o_26DtPPidFBb5L7QBG2DiFuk3bOE0uQOPm6D'),
                authorityAddress: provider.sender().address as Address,
                content:
                    'https://raw.githubusercontent.com/optus-fi/nft/master/scripts/sbt-swap-collection/items/json/56.json',
                index: 56,
            },
        ],
    });

    ui.write('SBTs deployed!');
}
