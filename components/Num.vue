<template>
    <div class="grid md:grid-cols-2 gap-4 flex-col">
        <div class="gap-4 items-center text-center shadow-md bg-white rounded-md p-3">
            <div class="text-2xl font-medium text-red-500">
                Numéros d'urgence
            </div>
            <table>
                <thead>
                    <tr>
                        <td class="text-2xl font-medium p-1 text-red-500">
                            Services
                        </td>
                        <td class="text-2xl font-medium p-1 text-red-500">
                            Numéros de téléphone
                        </td>
                    </tr>
                </thead>
                <tbody 
                    v-for="num in NumUrg"
                    :key="num.services"
                    :num="num"
                >
                    <tr>
                        <td class="p-1">
                            {{num.services}}
                        </td>
                        <td class="pl-2">
                            {{num.numeros}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="gap-4 items-center text-center shadow-md bg-white rounded-md p-3">
            <div class="text-2xl font-medium">
                Numéros utiles
            </div>
            <table>
                <thead>
                    <tr>
                        <td class="text-2xl font-medium">
                            Services
                        </td>
                        <td class="text-2xl font-medium">
                           Numéros de téléphone
                        </td>
                    </tr>
                </thead>
                <tbody 
                    v-for="num in NumUtil"
                    :key="num.services"
                    :num="num"
                >
                    <tr>
                        <td class="p-1">
                            {{num.services}}
                        </td>
                        <td class="pl-2">
                            {{num.numeros}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: ['num'],

    data() {
		return {
            NumUrg: [
                {
                    services: 'Pompiers',
                    numeros: '18 (ou le 112)',
                },
                {
                    services: 'Samu',
                    numeros: '15 (ou le 112)',
                },
                {
                    services: 'Gendarmerie',
                    numeros: '17 (ou le 112)',
                },
                {
                    services: 'Police municipale',
                    numeros: '06 17 41 58 17',
                },
                {
                    services: 'Sauvetage en mer',
                    numeros: 'appelez le sémaphore ou le Cross',
                },
                {
                    services: 'Sémaphore de Bréhat',
                    numeros: '02 96 20 00 12',
                },
                {
                    services: 'Cross Corsen',
                    numeros: '196',
                },
                {
                    services: 'Hôpital de Paimpol',
                    numeros: '02 96 55 60 00',
                },
                {
                    services: 'Médecin',
                    numeros: '02 96 20 09 51',
                },
                {
                    services: 'Propharmacien',
                    numeros: '02 96 20 09 51',
                },
                {
                    services: 'Maison du département (services sociaux)',
                    numeros: '02 96 55 33 00',
                },   
            ],
            NumUtil: [
                {
                    services: 'Gare SNCF Paimpol',
                    numeros: '02 96 20 81 22',
                },
                {
                    services: 'Office du Tourisme',
                    numeros: '02 96 20 04 15',
                },
                {
                    services: 'Secrétariat de la mairie',
                    numeros: '02 96 20 00 36',
                },
                {
                    services: 'Petit train routier',
                    numeros: '06 86 77 85 46',
                },
                {
                    services: 'Ligne de bus AXEO Arcouest Paimpol',
                    numeros: '02 56 74 99 94',
                },
            ]
        }
    }
}
</script>
