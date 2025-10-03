<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Förtetagssida
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    I det här projektet utvecklade jag en grundläggande, men komplett, företagssida med en fullständig
                    frontend- och backend-lösning. Mitt mål var att skapa en dynamisk webbplats som inte bara
                    presenterar information, utan också interagerar med användaren. Webbplatsen är byggd med ASP.NET
                    MVC-ramverket, vilket möjliggör en tydlig separation mellan presentation, logik och datahantering.
                    Detta gör det enklare att underhålla och vidareutveckla applikationen i framtiden.
                </p>
                <p>
                    Frontend delen består av en startsida, en om-oss-sida, en teamsida och en kontaktsida med ett
                    formulär. Utöver det, består frontend delen av CSS kod som står för desigen på sidan. 
                    För backend delen byggde jag funktionaliteten för att hantera formulärinskick.
                    Genom att ansluta applikationen till en MongoDB-databas, säkerställde jag att all inskickad data
                    från kontaktformuläret sparas effektivt för framtida åtkomst och hantering. Detta projekt
                    demonstrerar min förmåga att bygga en robust lösning som hanterar datalagring från början till slut.
                </p>

                <p>
                    Vidare vill jag tillägga att detta är ett fiktivt företag, med fiktiva medarbetare,
                    kontaktinformation och adress. Det vill säga att informationen är fiktiv, däremot fungerar
                    kontaktformuläret som är kopplad till en databas.
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
import imageComHomeC from '@/assets/images/Company/CompHomeC.png';
import imageComHomeIn from '@/assets/images/Company/CompHomeIn.png';
import imageComHomeAb from '@/assets/images/Company/CompHomeAb.png';
import imageComHomeTe from '@/assets/images/Company/CompHomeTe.png';
import imageCompKonCon from '@/assets/images/Company/CompKonCon.png';
import imageCompKonIn from '@/assets/images/Company/CompKonIn.png';
import imageCompKonForm from '@/assets/images/Company/ComKonForm.png';
import imageCompClass from '@/assets/images/Company/CompClass.png';
import imageCompStart from '@/assets/images/Company/CompStart.png';
import imageCompAbout from '@/assets/images/Company/CompAbout.png';
import imageCompTeam from '@/assets/images/Company/CompTeam.png';
import imageCompKon from '@/assets/images/Company/CompKont.png';
import imageCompKonF from '@/assets/images/Company/CompKontF.png';

export default {
    name: 'WorkoutView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            // Kodbilder (ID 1-9)
            { id: 1, url: imageComHomeC, description: 'Koden för Startsida (Home) med kontaktinformation (Contact).' },
            { id: 2, url: imageComHomeIn, description: 'Koden för homeindex (Home Index).' },
            { id: 3, url: imageComHomeAb, description: 'Koden för Om-sidan (About).' },
            { id: 4, url: imageComHomeTe, description: 'Koden för Team-sidan.' },
            { id: 5, url: imageCompKonCon, description: 'Koden för kontaktcontroller (Contact Controller).' },
            { id: 6, url: imageCompKonIn, description: 'Koden för kontaktindex (Contact Index).' },
            { id: 7, url: imageCompKonForm, description: 'Koden för kontaktformulär (Contact Form).' },
            { id: 8, url: imageCompClass, description: 'Koden för Contact-klassmodellen.' },
            { id: 9, url: imageCompStart, description: 'Resultat: Startsida (Home) med indexvy (Index).' },
            { id: 10, url: imageCompAbout, description: 'Resultat: Startsida (Home) med information om företaget (About).' },
            { id: 11, url: imageCompTeam, description: 'Resultat: Startsida (Home) med information om teamet (Team).' },
            { id: 12, url: imageCompKon, description: 'Resultat: Sidan för Kontakt (Contact).' },
            { id: 13, url: imageCompKonF, description: 'Resultat: Kontaktsidan med formulär (Contact Form).' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 8);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 9 && image.id <= 13);
        }
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>