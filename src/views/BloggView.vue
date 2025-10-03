<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Bloggplattform med Frontend och Backend i VueJS
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en fullstack-lösning för en bloggplattform, där jag har kombinerat frontend med
                    backend. För att ge en överblick på kod innehållet i sidan, har varje del en kort förklaring för vad
                    delen gör i projektet.
                </p>
                <p>
                    <strong>Frontend:</strong> Utvecklad med Vue.js för att ge en dynamisk och responsiv
                    användarupplevelse.
                    <br />
                    <strong>Backend:</strong> Skapad i C# och fungerar som ett API som hanterar dataflödet. Denna del
                    kommunicerar med en SQL-databas där all information för bloggplattformen lagras.
                    <br />
                    <strong>Funktionalitet:</strong> Användare kan utföra CRUD-operationer (Create, Read, Update,
                    Delete) på blogginlägg.
                    <br />
                    <strong>Visa:</strong> Hämta en lista över alla inlägg eller välja ett specifikt inlägg för att
                    läsa.
                    <br />
                    <strong>Skapa:</strong> Användaren kan skapa inlägg genom ett formulär som finns på sidan.
                    <br />
                    <strong>Redigera:</strong> Uppdatera befintliga inlägg på sidan.
                    <br />
                    <strong>Ta bort:</strong> Radera inlägg från sidan och databasen.
                    <br />
                    <strong>Databas:</strong> All data lagras i en SQL-databas, vilket säkerställer att informationen är
                    persistent och lättillgänglig.
                </p>
                <p>
                    I de andra flikarna som startar med "Bloggplattform med..." finns olika versioner av en liknande
                    blogg. Där man kan se hur jag har utvecklat bloggen steg för steg, med olika teknologier och
                    funktioner.
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
import imageBloggApiCon from '@/assets/images/BloggFB/BloggApiCon.png';
import imageBloggApiDB from '@/assets/images/BloggFB/BloggApiDB.png';
import imageBloggApiCl from '@/assets/images/BloggFB/BloggApiCl.png';
import imageBloggApiPro from '@/assets/images/BloggFB/BloggApiPro.png';
import imageBloggVIn from '@/assets/images/BloggFB/BloggVIn.png';
import imageBloggVApp from '@/assets/images/BloggFB/BloggVApp.png';
import imageBloggVHome from '@/assets/images/BloggFB/BloggVHome.png';
import imageBloggVOne from '@/assets/images/BloggFB/BloggVOne.png';
import imageBloggVList from '@/assets/images/BloggFB/BloggVList.png';
import imageBloggStart from '@/assets/images/BloggFB/BloggStart.png';
import imageBloggSingle from '@/assets/images/BloggFB/BloggSingle.png';
import imageBloggOm from '@/assets/images/BloggFB/BloggOm.png';


export default {
    name: 'BloggView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageBloggApiCon, description: 'Koden för API Controller.' },
            { id: 2, url: imageBloggApiDB, description: 'Koden för API databaskoppling.' },
            { id: 3, url: imageBloggApiCl, description: 'Koden för API Class.' },
            { id: 4, url: imageBloggApiPro, description: 'Koden för API Program.' },
            { id: 5, url: imageBloggVIn, description: 'Koden för Vue index.' },
            { id: 6, url: imageBloggVApp, description: 'Koden för Vue App.' },
            { id: 7, url: imageBloggVHome, description: 'Koden för Vue Home.' },
            { id: 8, url: imageBloggVOne, description: 'Koden för Vue SingleBlog.' },
            { id: 9, url: imageBloggVList, description: 'Koden för Vue BlogList.' },
            { id: 10, url: imageBloggStart, description: 'Resultat: Startsidan.' },
            { id: 11, url: imageBloggSingle, description: 'Resultat: Singleblog-sidan.' },
            { id: 12, url: imageBloggOm, description: 'Resultat: Om oss-sidan.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 9);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 10 && image.id <= 12);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>