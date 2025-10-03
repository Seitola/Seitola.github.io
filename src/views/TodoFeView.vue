<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>Att-Göra lista med Front- och backend</h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Jag utvecklade en att-göra-lista som fullstack-projekt bestående av en Vue.js-frontend och ett
                    C#-backend-API. Genom att koppla frontend och backend skapade jag en smidig
                    Att-Göra-applikation där användare kan hantera sina uppgifter.<br />
                </p>
                <p>
                    Frontend delen är utvecklad med Vue.js för att ge en dynamisk och responsiv användarupplevelse.
                    Backend-API:et hanterar CRUD-operationer (Create, Read, Update, Delete) och lagrar
                    data för uppgifter, inklusive titel, datum och status (klar/inte klar). Om användaren klickar i att
                    en uppgift är klar, blir överstruken i listan och ligger kvar tills att användaren väljer att
                    radera uppgiften permanent.
                </p>
                <p>
                    Projektet visar min förmåga att bygga robusta applikationer från grunden,
                    hantera dataflöden mellan klient och server, samt implementera viktiga funktioner som att uppdatera
                    uppgifters status. Vidare har projektet gett mig värdefull erfarenhet inom fullstack-utveckling och
                    jag ser fram emot att fortsätta utvecklas inom detta område. Jag har även testat Entety Framework i
                    detta projekt.
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
import imageTfeApiProg from '@/assets/images/TodoFe/TfeApiProg.png';
import imageTodoFeApiDB from '@/assets/images/TodoFe/TodoFeApiDB.png';
import imageTodoFeApiCl from '@/assets/images/TodoFe/TodoFeApiCl.png';
import imageTodoFeApiCon from '@/assets/images/TodoFe/TodoFeApiCon.png';
import imageTodoFeIn from '@/assets/images/TodoFe/TodoFeIn.png';
import imageTodoFeApp from '@/assets/images/TodoFe/TodoFeApp.png';
import imageTodoFeHome from '@/assets/images/TodoFe/TodoFeHome.png';
import imageTodoFeHcss from '@/assets/images/TodoFe/TodoFeHcss.png';
import imageTodoFeLi from '@/assets/images/TodoFe/TodoFeLi.png';
import imageTodoLiCss from '@/assets/images/TodoFe/TodoLiCss.png';
import imageTodoFeStart from '@/assets/images/TodoFe/TodoFeStart.png';
import imageTodoFeOne from '@/assets/images/TodoFe/TodoFeOne.png';
import imageTodoFeOm from '@/assets/images/TodoFe/TodoFeOm.png';

export default {
    name: 'TodoFeView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageTfeApiProg, description: 'Koden för API Program.' },
            { id: 2, url: imageTodoFeApiDB, description: 'Koden för API databaskoppling med en SQL-Databas.' },
            { id: 3, url: imageTodoFeApiCl, description: 'Koden för API Class.' },
            { id: 4, url: imageTodoFeApiCon, description: 'Koden för API Controller.' },
            { id: 5, url: imageTodoFeIn, description: 'Koden för index.js.' },
            { id: 6, url: imageTodoFeApp, description: 'Koden för App.vue.' },
            { id: 7, url: imageTodoFeHome, description: 'Koden för Home.vue.' },
            { id: 8, url: imageTodoFeHcss, description: 'Koden för css till HOme.' },
            { id: 9, url: imageTodoFeLi, description: 'Koden för TodoListItem.vue.' },
            { id: 10, url: imageTodoLiCss, description: 'Koden för css till TodoListItem.' },
            { id: 11, url: imageTodoFeStart, description: 'Resultat: Startsidan.' },
            { id: 12, url: imageTodoFeOne, description: 'Resultat: Ett specifikt Att-Göra.' },
            { id: 13, url: imageTodoFeOm, description: 'Resultat: Om-sidan.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 10);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 11 && image.id <= 13);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>