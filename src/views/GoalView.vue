<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Målsättning
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är ett webbaserat MVC-program (Model-View-Controller) utvecklat i C#. Projektet
                    demonstrerar grundläggande MVC-arkitektur genom att hantera data som rör användarmål.
                    Applikationen är
                    byggd med en MongoDB-databas som backend för att lagra och hämta information.
                </p>
                <p>
                    <strong>
                        Databasanslutning (Class Library)
                    </strong><br />
                    För att hantera databaskommunikationen skapades en separat klass kallad "Databas.cs" som en del
                    av ett Class Library. Denna design möjliggör en renare struktur genom att separera datalogik från
                    huvudapplikationen. Anslutningen mellan huvudprojektet och databasbiblioteket etablerades genom
                    en ProjectReference.
                </p>
                <p>
                    <strong>
                        Funktionalitet i GoalController
                    </strong><br />
                    GoalController hanterar logiken för användarmål och är uppdelad i två huvudvyer:<br />

                    <strong> Visuell vy:</strong> Användaren kan se en komplett lista över alla befintliga mål.
                    <br />

                    <strong>Skapa mål:</strong> En dedikerad vy där användaren kan fylla i information för att skapa
                    ett nytt mål. När ett
                    mål har skapats, läggs det automatiskt till i listan.<br />

                    Dessutom har GoalController en direkt Delete-funktion som tar bort ett mål utan att kräva en
                    separat vy. Denna implementation visar en förståelse för både visuell interaktion och
                    databasoperationer.
                </p>
            </div>

            <div class="home-3">
                <h2>
                    Bilder från projektet
                </h2>
                <div v-if="activeImage" class="main-image-container">
                    <img :src="activeImage.url" :alt="activeImage.description" class="main-image">
                    <p>{{ activeImage.description }}</p>
                </div>

                <h3>Klicka på bilderna nedan för att se koden och resultatet</h3>

                <h2>Kod</h2>
                <div class="thumbnail-container">
                    <div v-for="image in codeImages" :key="image.id" @click="selectImage(image)" class="thumbnail-item">
                        <img :src="image.url" :alt="image.description" class="thumbnail-image"
                            :class="{ 'active-thumbnail': activeImage && image.id === activeImage.id }">
                    </div>
                </div>

                <h2>Resultat</h2>
                <div class="thumbnail-container">
                    <div v-for="image in resultImages" :key="image.id" @click="selectImage(image)"
                        class="thumbnail-item">
                        <img :src="image.url" :alt="image.description" class="thumbnail-image"
                            :class="{ 'active-thumbnail': activeImage && image.id === activeImage.id }">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue';
import portfGoalHC from '@/assets/images/Portf/PortfGoalHC.png';
import portfGoalIn from '@/assets/images/Portf/PortfGoalIn.png';
import portfGoalCr from '@/assets/images/Portf/PortfGoalCr.png';
import portfDBConn from '@/assets/images/Portf/PortfDBConn.png';
import modelGoal from '@/assets/images/Portf/ModelGoal.png';
import goalIn from '@/assets/images/Portf/GoalIn.png';
import goalCreate from '@/assets/images/Portf/GoalCreate.png';

export default {
    name: 'GoalView',
    components: {
        ProjectList
    },

    data() {
        // Alla bilder definierade här
        const allImages = [
            // Kodbilder (ID 1, 3, 4, 5)
            { id: 1, url: portfGoalHC, description: 'Kod: GoalControllern. Den bestämmer vad vyerna ska innehålla.' },
            { id: 2, url: portfGoalCr, description: 'Kod: Koden för vy:n för att skapa en målsättning. Där man får lägga till ett datum, om det är startdatum eller slutdatum är upp till en själv.' },
            { id: 3, url: portfDBConn, description: 'Kod: Kopplingen till Databasen i projektfilen.' },
            { id: 4, url: modelGoal, description: 'Kod: En klass som ligger i Database.cs. Vilket bestämmer vad som ska tas emot och vad som visas. Den ska stämma överens med de namnen som finns i databasen.' },
            { id: 5, url: portfGoalIn, description: 'Resultat: Index: startsidan för målsättningssidan. Här visas alla målsättningar och om man vill skapa eller radera en målsättning.' },
            // Resultatbilder (ID 2, 6, 7)            
            { id: 6, url: goalIn, description: 'Resultat: Startsidan för målsättningssidan som återfinns i "portfolio i webb MVC". Det finns ingen separat sida för att radera, utan det dyker upp en ruta som frågar om man är säker på om man vill radera målsättningen. Målen man lägger till hamnar även på startsidan för portfoliot.' },
            { id: 7, url: goalCreate, description: 'Resultat: Sidan för att skapa en ny målsättning. Här ser man hur man skapar en målsättning. Efter man skapat en målsättning, hamnar man på startsidan för målsättningssidan' }
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            const codeIds = [1, 2, 3, 4, 5];
            return this.images.filter(image => codeIds.includes(image.id));
        },
        resultImages() {
            const resultIds = [6, 7];
            return this.images.filter(image => resultIds.includes(image.id));
        }
    },
    mounted() {
        // activeImage är redan satt i data(), så mounted är inte nödvändig för detta längre.
        // Du kan ta bort den om du inte har annan logik här.
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>