<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Receptlista
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en utveckling av en receptapplikation (C# MVC) där jag implementerade en
                    fullstack-lösning för en receptwebbplats med hjälp av ASP.NET MVC i C#. Projektet skapades och
                    hanterades i Visual Studio 2022. Applikationen har två huvuddelar:<br />
                    <strong>Publik vy:</strong> En startsida som presenterar alla tillgängliga recept i en lista.<br />
                    <strong>Administration:</strong> En dedikerad adminpanel där en administratör kan logga in och
                    hantera innehållet, inklusive att skapa nya recept och lägga till dess ingredienser.<br />
                    Som databaslösning valde jag MongoDB för att effektivt lagra och hantera den dynamiska receptdatan
                    som matas in via adminpanelen.
                </p>
                <p>
                    Applikationen är designad för att vara användarvänlig och responsiv, vilket säkerställer en smidig
                    upplevelse för både slutanvändare och administratörer. Jag lade stor vikt vid att skapa en intuitiv
                    navigationsstruktur och ett rent gränssnitt för att underlätta användningen av webbplatsen.
                </p>
                <p>
                    Projekt gav mig värdefull erfarenhet av att arbeta med fullstack-utveckling, inklusive
                    backend-logik, frontend-design och databashantering. Jag lärde mig också vikten av att skapa
                    användarvänliga gränssnitt för både slutanvändare och administratörer. Jag är nöjd med resultatet av
                    detta projekt och ser fram emot att fortsätta utveckla mina färdigheter inom webbutveckling och
                    utforska fler teknologier i framtida projekt.
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
import imageReceptSol from '@/assets/images/Receptsida/ReceptSol.png';
import imageReceptDBCon from '@/assets/images/Receptsida/ReceptDBCon.png';
import imageReceptHomeC from '@/assets/images/Receptsida/ReceptHomeC.png';
import imageReceptHomeIn from '@/assets/images/Receptsida/ReceptHomeIn.png';
import imageReceptHomeDe from '@/assets/images/Receptsida/ReceptHomeDe.png';
import imageReceptDB from '@/assets/images/Receptsida/ReceptDB.png';
import imageReceptReCl from '@/assets/images/Receptsida/ReceptReCl.png';
import imageReceptIngCl from '@/assets/images/Receptsida/ReceptIngCl.png';
import imageReceptAdmin from '@/assets/images/Receptsida/ReceptAdmin.png';
import imageReceptStart from '@/assets/images/Receptsida/ReceptStart.png';
import imageReceptDe from '@/assets/images/Receptsida/ReceptDe.png';
import imageReceptAdminR from '@/assets/images/Receptsida/ReceptAdminR.png';


export default {
    name: 'ReceptListaView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageReceptSol, description: 'Tre projekt i Solution.' },
            { id: 2, url: imageReceptDBCon, description: 'Koden för databaskopplingen (DB Connection).' },
            { id: 3, url: imageReceptHomeC, description: 'Koden för Home Controller.' },
            { id: 4, url: imageReceptHomeIn, description: 'Koden för Home Index.' },
            { id: 5, url: imageReceptHomeDe, description: 'Koden för Home Details.' },
            { id: 6, url: imageReceptDB, description: 'Koden för databasklassen, med koppling till MongoDB (DB).' },
            { id: 7, url: imageReceptReCl, description: 'Koden för Recipe Class.' },
            { id: 8, url: imageReceptIngCl, description: 'Koden för Ingredient Class.' },
            { id: 9, url: imageReceptAdmin, description: 'Koden för adminpanelen, där man skapar recept.' },
            { id: 10, url: imageReceptStart, description: 'Resultat: Startsidan (Start).' },
            { id: 11, url: imageReceptDe, description: 'Resultat: Detaljerad vy över ett recept (Details).' },
            { id: 12, url: imageReceptAdminR, description: 'Resultat: Adminpanelen för att skapa recept (Admin Recipes).' },
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