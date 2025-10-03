<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Bloggplattform med API
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en Bloggplattform byggd med en ASP.NET Core Web API som backend. Den använder
                    MongoDB för datalagring, där varje blogginlägg har en titel, sammanfattning och huvudinnehåll med
                    specificerade teckengränser. Programmet ger fullständiga funktioner för hantering av blogginlägg.

                    API:et möjliggör för användaren att skapa nya inlägg, hämta befintliga, uppdatera
                    innehållet och radera inlägg (CRUD). Swagger användes för att testa och dokumentera
                    API-funktionaliteten.
                </p>
                <p>
                    Som mitt andra API-projekt stärkte det mina grundläggande kunskaper inom backend-utveckling och
                    bekräftade mitt intresse för området. Jag ser fram emot att fortsätta
                    utveckla mina färdigheter inom backend och utforska mer avancerade koncept i framtiden.
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
import imageBloggApiCon from '@/assets/images/BloggAPI/BloggApiCon.png';
import imageBloggApiDB from '@/assets/images/BloggAPI/BloggApiDB.png';
import imageBloggApiCl from '@/assets/images/BloggAPI/BloggApiCl.png';
import imageBloggApiMod from '@/assets/images/BloggAPI/BloggApiMod.png';
import imageBloggApiStart from '@/assets/images/BloggAPI/BloggApiStart.png';
import imageBloggApiAll from '@/assets/images/BloggAPI/BloggApiAll.png';
import imageBloggApiOne from '@/assets/images/BloggAPI/BloggApiOne.png';
import imageBloggApiCre from '@/assets/images/BloggAPI/BloggApiCre.png';
import imageBloggApiEdit from '@/assets/images/BloggAPI/BloggApiEdit.png';
import imageBloggApiDel from '@/assets/images/BloggAPI/BloggApiDel.png';

export default {
    name: 'BloggApiView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            { id: 1, url: imageBloggApiCon, description: 'Koden för Blogg Controller.' },
            { id: 2, url: imageBloggApiDB, description: 'Koden för databasklassen (DB).' },
            { id: 3, url: imageBloggApiCl, description: 'Koden för Post Class.' },
            { id: 4, url: imageBloggApiMod, description: 'Koden för Post ViewModel.' },
            { id: 5, url: imageBloggApiStart, description: 'Resultat: Startsidan.' },
            { id: 6, url: imageBloggApiAll, description: 'Resultat: Vyn som visar alla inlägg.' },
            { id: 7, url: imageBloggApiOne, description: 'Resultat: Vyn som visar ett enskilt inlägg.' },
            { id: 8, url: imageBloggApiCre, description: 'Resultat: Vyn för att skapa ett nytt inlägg.' },
            { id: 9, url: imageBloggApiEdit, description: 'Resultat: Vyn för att redigera ett befintligt inlägg.' },
            { id: 10, url: imageBloggApiDel, description: 'Resultat: Vyn för att ta bort ett inlägg.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 4);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 5 && image.id <= 10);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>