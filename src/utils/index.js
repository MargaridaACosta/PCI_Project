export const checkUserIsAdmin = (currentUser) => {
    if (!currentUser || !Array.isArray(currentUser.role)) return false;
    const { role } = currentUser;
    if (role.includes('admin')) return true;

    return false;
}

export const equipmentsAdminIcons = [
    { value: 'https://drive.google.com/uc?id=1k7O-2kzIJH6hQGJQpynPeb2uGumdAkxy', label: 'Battery' },
    { value: 'https://drive.google.com/uc?id=1PDMqvY42_biarGopUOxj5mkyAgMRGwEw', label: 'Bluetooth' },
    { value: 'https://drive.google.com/uc?id=1wh0Lq-llf_hRrTS6awLIdYLkwsjjuqmo', label: 'Entradas' },
    { value: 'https://drive.google.com/uc?id=1BiCje5lUPFv97kFx4xsgyUzem8VrW024', label: 'Flash' },
    { value: 'https://drive.google.com/uc?id=1BlmEXN9IzBPXaYDokXTrozWQGSU0raje', label: 'Cards' },
    { value: 'https://drive.google.com/uc?id=1esjEXctb_WGB5f6AV7IHKr-Eir_nRYWA', label: 'ImageFormat' },
    { value: 'https://drive.google.com/uc?id=16O3S0UADSDq59aImpedJQwvMdw0SzvMY', label: 'ISO' },
    { value: 'https://drive.google.com/uc?id=16DnRCi2F3SaHxxqiv904OhuJ-X4Nd6iX', label: 'Video' },
    { value: 'https://drive.google.com/uc?id=1vv3sAADWM2uWbBsFN87Jk2vWSYzh8pdp', label: 'Processor' },
    { value: 'https://drive.google.com/uc?id=1QdFzFdE6E-Fbj2bR6MP_p3RNZfynBYuP', label: 'Timer' },
    { value: 'https://drive.google.com/uc?id=1O1NHtrBHWMxh1bsRmaDGFe8x-45lqkaP', label: 'Velocity' },
    { value: 'https://drive.google.com/uc?id=10VuITF8DANodZ-Luhzy5RQdbUi7BsfxK', label: 'VideoFormat' },
    { value: 'https://drive.google.com/uc?id=1k-O5S6AkKcYt_74AaOcywbjLBS_ujCup', label: 'ImageResolution' },

];

export const spacesAdminIcons = [
    { value: 'https://drive.google.com/uc?id=1FxbNaNI9if4FKFHvsS8VyKY0a9nX8E_G', label: 'AC' },
    { value: 'https://drive.google.com/uc?id=1Y6ooCNLPGaSPceIEdF3BlM_fTBVF1Wb8', label: 'Acessibilidade' },
    { value: 'https://drive.google.com/uc?id=1DgVhOwQzADN6CUMu14dj2YSjVYDb7dt7', label: 'Cadeira' },
    { value: 'https://drive.google.com/uc?id=1Ef_BVwDbtLNnJl60dkfZgbtpTbSXQjBa', label: 'Desktop' },
    { value: 'https://drive.google.com/uc?id=1uL1wnckr5G7S0qJhBSE9GTo6PBt_0CTF', label: 'Tomadas' },
    { value: 'https://drive.google.com/uc?id=1tFWOqlM1T2UKPIHt3FgUO7PJODQXoR7y', label: 'Pessoas' },
    { value: 'https://drive.google.com/uc?id=1wrlfK66kXn8TNVuSBDzMtW4qzWcSo-dF', label: 'Sofa' },
    { value: 'https://drive.google.com/uc?id=1mE8YTEQ8p8Rvgc0N2YDH1Ri0TpHo9q_0', label: 'Solar' },
    { value: 'https://drive.google.com/uc?id=1jfRh7c0zDzakqm3keYmbzboX39ArmpyL', label: 'Mesa' },
    { value: 'https://drive.google.com/uc?id=1NBQzfRBu6jZclypx8iALIG_717TRQREy', label: 'Wi_fi' },
    { value: 'https://drive.google.com/uc?id=1Y6ooCNLPGaSPceIEdF3BlM_fTBVF1Wb8', label: 'Acessibilidade' },
];

export const workshopsAdminIcons = [
    { value: 'https://drive.google.com/uc?id=1PGCNBcgwyf9LPC6RWlKewCJEBl4UlaG0', label: 'Aparafusadora' },
    { value: 'https://drive.google.com/uc?id=1bK1Btz5yY4bnQ4SencwsO5g-Y5wwOHjn', label: 'Acessibilidade' },
    { value: 'https://drive.google.com/uc?id=1uL1wnckr5G7S0qJhBSE9GTo6PBt_0CTF', label: 'Tomadas' },
    { value: 'https://drive.google.com/uc?id=1IF87MVBiRe3zCr-4UIHTbgwwq6MzE0i6', label: 'Esmeriladora' },
    { value: 'https://drive.google.com/uc?id=1skUR-qZUJYj_n6707QYt1PlhUtH4tdIf', label: 'Fresadora' },
    { value: 'https://drive.google.com/uc?id=137jFUBu2wUl0Cxl5PDx-60eAcGDAAhTO', label: 'Fresadora2' },
    { value: 'https://drive.google.com/uc?id=11h1GqW_3VTqm5y96dat0RFTabSZAKVp2', label: 'LixadoraOrbital' },
    { value: 'https://drive.google.com/uc?id=1Ya1TtynaNlWgS_dLwyHXMWAn16pmnTUK', label: 'LixadoraRolo' },
    { value: 'https://drive.google.com/uc?id=1NrOuNgo43FgPYXSL40eM7rSqFV53dbEc', label: 'MCorte' },
    { value: 'https://drive.google.com/uc?id=17nGfpPETxxgIG5HtepSh7LZM9PyPdDtG', label: 'MDobrar' },
    { value: 'https://drive.google.com/uc?id=1tFWOqlM1T2UKPIHt3FgUO7PJODQXoR7y', label: 'Pessoas' },
    { value: 'https://drive.google.com/uc?id=16-lA6D9DwpdYteXEzSGmmohMSWtX5UCp', label: 'Rebarbadora' },
    { value: 'https://drive.google.com/uc?id=1BnHfsx6uaYzoqjUzkM6q-C4Zp6q3SWTd', label: 'Serra' },
    { value: 'https://drive.google.com/uc?id=13ybVK8QGYoxLraprRon6KtDejQDQBKBm', label: 'SerraCircular' },
    { value: 'https://drive.google.com/uc?id=1Om4Eq_tEmSjCj3jQlzYKcgwB-zYzyuew', label: 'SerraEsquadria' },
    { value: 'https://drive.google.com/uc?id=1LkB19bW6Y2_FO-5BT7vCmbmUgoPLpb04', label: 'SerraFita' },
    { value: 'https://drive.google.com/uc?id=1mE8YTEQ8p8Rvgc0N2YDH1Ri0TpHo9q_0', label: 'Solar' },
    { value: 'https://drive.google.com/uc?id=1dy0N8b1kQtS1uEy_FCmp6_FkyKN5MzFr', label: 'Torno' },
    { value: 'https://drive.google.com/uc?id=1tPUY26H57RKLAJJ872xInlE9Gey98c30', label: 'Tupia' },
    { value: 'https://drive.google.com/uc?id=1NBQzfRBu6jZclypx8iALIG_717TRQREy', label: 'Wi_fi' },
    { value: 'https://drive.google.com/uc?id=1Y6ooCNLPGaSPceIEdF3BlM_fTBVF1Wb8', label: 'Acessibilidade' },
];