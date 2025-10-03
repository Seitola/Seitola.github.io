<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Receptlista med Node JS och Handlebars
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta är en CRUD-applikation för Recept med Node.js, där jag utvecklade en dynamisk receptsida genom
                    att använda Node.js och Express för backend, samt Handlebars för rendering av vyer. Projektet
                    fokuserade på att implementera fullständiga CRUD-funktioner:<br />
                    <strong>Skapa & Redigera:</strong> Lägg till nya recept eller ändra befintliga.<br />
                    <strong>Visa & Radera:</strong> Presentera en lista över recept och möjliggör borttagning av
                    dem.
                </p>
                <p>
                    För datalagring använde jag MongoDB, vilket möjliggjorde en flexibel och skalbar
                    NoSQL-databaslösning. Applikationen är strukturerad med Express-router för att hantera olika
                    HTTP-förfrågningar och Handlebars används för att skapa responsiva och användarvänliga gränssnitt.
                </p>
                <p>
                    Jag använde mig av Visual Studio Code för att skapa programmet och MongoDB Atlas för att hantera
                    databasen. Genom detta projekt förbättrade jag mina färdigheter i Node.js, Express och Handlebars,
                    samt fick praktisk erfarenhet av att bygga en fullständig webbaserad applikation med en
                    NoSQL-databas.
                </p>
                <p>
                    Projektet gav mig praktisk erfarenhet av att hantera databegränsningar, som att sätta maxlängder på
                    recepttitlar (≤100 tecken) och instruktioner (≤5000 tecken). Detta var mitt andra Node.js-projekt,
                    och det bidrog till en viktig utveckling av mina kunskaper inom området.
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
import ProjectList from '@/components/ProjectList.vue';
import imageReceptNInd from '@/assets/images/ReceptNode/ReceptNInd.png';
import imageReceptNMain from '@/assets/images/ReceptNode/ReceptNMain.png';
import imageReceptNHome from '@/assets/images/ReceptNode/ReceptNHome.png';
import imageReceptNCr from '@/assets/images/ReceptNode/ReceptNCr.png';
import imageReceptNDet from '@/assets/images/ReceptNode/ReceptNDet.png';
import imageReceptNEdit from '@/assets/images/ReceptNode/ReceptNEdit.png';
import imageReceptNList from '@/assets/images/ReceptNode/ReceptNList.png';
import imageReceptNStart from '@/assets/images/ReceptNode/ReceptNStart.png';
import imageReceptNlista from '@/assets/images/ReceptNode/ReceptNlista.png';
import imageReceptNskapa from '@/assets/images/ReceptNode/ReceptNskapa.png';
import imageReceptNde from '@/assets/images/ReceptNode/ReceptNde.png';
import imageReceptNed from '@/assets/images/ReceptNode/ReceptNed.png';
import imageReceptNdel from '@/assets/images/ReceptNode/ReceptNdel.png';


export default {
    name: 'NodeReceptView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageReceptNInd, description: 'Koden för index.js.' },
            { id: 2, url: imageReceptNMain, description: 'Koden för main.js.' },
            { id: 3, url: imageReceptNHome, description: 'Koden för Home-komponenten.' },
            { id: 4, url: imageReceptNCr, description: 'Koden för Create-komponenten.' },
            { id: 5, url: imageReceptNDet, description: 'Koden för Details-komponenten.' },
            { id: 6, url: imageReceptNEdit, description: 'Koden för Edit-komponenten.' },
            { id: 7, url: imageReceptNList, description: 'Koden för List-komponenten.' },
            { id: 8, url: imageReceptNStart, description: 'Resultat: Startsidan.' },
            { id: 9, url: imageReceptNlista, description: 'Resultat: Listan över färdiga recept.' },
            { id: 10, url: imageReceptNskapa, description: 'Resultat: Skapa nytt recept.' },
            { id: 11, url: imageReceptNde, description: 'Resultat: Detaljerad vy över ett recept.' },
            { id: 12, url: imageReceptNed, description: 'Resultat: Redigera befintliga recept på sidan.' },
            { id: 13, url: imageReceptNdel, description: 'Resultat: När man trycker på "Radera"-knappen, dycker denna ruta upp.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 7);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 8 && image.id <= 13);
        }
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>