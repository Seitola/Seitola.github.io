<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Receptlista med API
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Utveckling av ett Recept-API med C#, ASP.NET Core och MongoDB.
                    Detta är mitt första skapade Web API med fokus på att hantera receptdata.
                    Jag har använt mig av Visual Studio 2022 för att skapa programmet och MongoDB för att skapa
                    databasen och kollektionerna, där det står "Databas:" före förklaringen.
                </p>
                <p>
                    <strong>Tekniker:</strong> Byggt med ASP.NET Core Web API i C#.<br />
                    <strong>Databas:</strong> Använde MongoDB för flexibel och skalbar lagring av receptdata.<br />
                    <strong>Funktionalitet:</strong> API:et exponerar CRUD-endpoints (POST, GET, PUT, DELETE) för att
                    hantera recept.<br />
                    <strong>Datamodell:</strong> Recept har en Titel (begränsad till 100 tecken) och Instruktioner
                    (begränsad till 5000
                    tecken).<br />
                    <strong>Dokumentation/Testning:</strong> Swagger integrerades för att underlätta dokumentation och
                    interaktiv testning av API-endpoints.
                </p>
                <p>
                    Detta projekt var en utmärkt start för att lära mig grunderna inom API-utveckling och
                    REST-principer. Det gav mig praktisk erfarenhet av att bygga och dokumentera ett API, samt hantera
                    data med MongoDB. Jag lärde mig också vikten av att strukturera kod och data på ett sätt som är både
                    effektivt och lätt att underhålla. Vidare ser jag fram emot att bygga vidare på denna grund och
                    utforska mer avancerade koncept inom API-utveckling i framtiden.
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
import imageReceptCont from '@/assets/images/ReceptAPI/ReceptAPICont.png';
import imageReceptAPIdb from '@/assets/images/ReceptAPI/ReceptAPIdb.png';
import imageReceptAPIList from '@/assets/images/ReceptAPI/ReceptAPIList.png';
import imageReceptAPIcl from '@/assets/images/ReceptAPI/ReceptAPIcl.png';
import imageReceptAPIstart from '@/assets/images/ReceptAPI/ReceptAPIstart.png';
import imageReceptAPIall from '@/assets/images/ReceptAPI/ReceptAPIall.png';
import imageReceptAPIone from '@/assets/images/ReceptAPI/ReceptAPIone.png';
import imageReceptAPIcre from '@/assets/images/ReceptAPI/ReceptAPIcre.png';
import imageReceptAPIed from '@/assets/images/ReceptAPI/ReceptAPIed.png';
import imageReceptAPIdel from '@/assets/images/ReceptAPI/ReceptAPIdel.png';

export default {
    name: 'ReceptApiView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            { id: 1, url: imageReceptCont, description: 'Koden för RecipeController.' },
            { id: 2, url: imageReceptAPIdb, description: 'Koden för databaskopplingen (DB).' },
            { id: 3, url: imageReceptAPIList, description: 'Koden för att lista alla recept.' },
            { id: 4, url: imageReceptAPIcl, description: 'Koden för klassen Recipe.' },
            { id: 5, url: imageReceptAPIstart, description: 'Resultat: Startsidan.' },
            { id: 6, url: imageReceptAPIall, description: 'Resultat: Vyn som visar alla recept.' },
            { id: 7, url: imageReceptAPIone, description: 'Resultat: Vyn som visar ett enskilt recept.' },
            { id: 8, url: imageReceptAPIcre, description: 'Resultat: Vyn för att skapa ett nytt recept.' },
            { id: 9, url: imageReceptAPIed, description: 'Resultat: Vyn för att redigera ett befintligt recept.' },
            { id: 10, url: imageReceptAPIdel, description: 'Resultat: Vyn för att ta bort ett recept.' },
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