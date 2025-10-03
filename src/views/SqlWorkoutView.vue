<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Träningsdagbok med SQL
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Jag skapade en responsiv webbapplikation för träningsloggning med hjälp av C# och ASP.NET MVC.
                    Applikationen tillåter användare att skapa, läsa, redigera och ta bort träningspass. Varje pass
                    lagrar detaljer som övning (max 50 tecken), antal set, reps och vikt.
                </p>
                <p>
                    För datalagring använde jag en SQL Server-databas med en tabell som heter "Exercises". Denna tabell
                    har kolumner för ID (primärnyckel), övning, set, reps och vikt. Jag implementerade databasanslutning
                    och CRUD-operationer. Applikationen har en enkel och användarvänlig design med HTML och CSS,
                    inklusive responsiv layout för olika skärmstorlekar. Denna träningsdagbok med SQL är ett praktiskt
                    verktyg för att spåra och hantera träningspass, vilket hjälper användare att hålla koll på sina
                    framsteg och mål.
                    <br />
                    Jag testade applikationen noggrant för att säkerställa att alla funktioner fungerade korrekt och att
                    data sparades och hämtades från databasen som förväntat.
                </p>
                <p>
                    <strong>
                        Teknisk implementation:
                    </strong>
                    <br />
                    - <strong>Databas:</strong> En SQL Server-databas skapades (via SSMS) med en tabell för att lagra
                    träningstillfällena.<br />
                    - <strong>Arkitektur:</strong> Koden delades upp i två Visual Studio-projekt: ett för
                    MVC-webbplatsen
                    och ett separat datalagerprojekt för databashantering (inklusive CRUD-metoder). <br />
                    - <strong>Gränssnitt:</strong> HomeController hanterar logiken, och vyerna byggdes med Razor-syntax.
                    Bootstrap användes för en användarvänlig och responsiv design.
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
import imageSqlPracticeDBId from '@/assets/images/SqlWorkout/SqlPracticeDBId.png';
import imageSqlPracticeDB from '@/assets/images/SqlWorkout/SqlPracticeDB.png';
import imageSqlPracticeDiagram from '@/assets/images/SqlWorkout/SqlPracticeDiagram.png';
import imageSqlPracticeDcs from '@/assets/images/SqlWorkout/SqlPracticeDcs.png';
import imageSqlPracticeCL from '@/assets/images/SqlWorkout/SqlPracticeCL.png';
import imageSqlPracticeHC from '@/assets/images/SqlWorkout/SqlPracticeHC.png';
import imageSqlPracticeIn from '@/assets/images/SqlWorkout/SqlPracticeIn.png';
import imageSqlPracticeCr from '@/assets/images/SqlWorkout/SqlPracticeCr.png';
import imageSqlPracticeDet from '@/assets/images/SqlWorkout/SqlPracticeDet.png';
import imageSqlPracticeEd from '@/assets/images/SqlWorkout/SqlPracticeEd.png';
import imageSqlPracticeDe from '@/assets/images/SqlWorkout/SqlPracticeDe.png';
import imageSqlPracticeStart from '@/assets/images/SqlWorkout/SqlPracticeStart.png';
import imageSqlPracticeSkapa from '@/assets/images/SqlWorkout/SqlPracticeSkapa.png';
import imageSqlPracticeDeta from '@/assets/images/SqlWorkout/SqlPracticeDeta.png';
import imageSqlPracticeRe from '@/assets/images/SqlWorkout/SqlPracticeRe.png';
import imageSqlPracticeRad from '@/assets/images/SqlWorkout/SqlPracticeRad.png';

export default {
    name: 'SqlWorkoutView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            { id: 1, url: imageSqlPracticeDBId, description: 'Översikt över SQL databasen.' },
            { id: 2, url: imageSqlPracticeDB, description: 'SQL databasen med tabeller.' },
            { id: 3, url: imageSqlPracticeDiagram, description: 'Diagram över SQL databasen.' },
            { id: 4, url: imageSqlPracticeDcs, description: 'Koden för databaskopplingen samt berättar för databasen om en övning ska visas, skapas, uppdateras eller raderas (DB Connection).' },
            { id: 5, url: imageSqlPracticeCL, description: 'Koden för Övnings klassen.' },
            { id: 6, url: imageSqlPracticeHC, description: 'Koden för Home Controller.' },
            { id: 7, url: imageSqlPracticeIn, description: 'Koden för Home Index.' },
            { id: 8, url: imageSqlPracticeCr, description: 'Koden för Create.' },
            { id: 9, url: imageSqlPracticeDet, description: 'Koden för Details.' },
            { id: 10, url: imageSqlPracticeEd, description: 'Koden för Edit.' },
            { id: 11, url: imageSqlPracticeDe, description: 'Koden för Delete.' },
            { id: 12, url: imageSqlPracticeStart, description: 'Resultat: Startsidan (Start).' },
            { id: 13, url: imageSqlPracticeSkapa, description: 'Resultat: Skapa en övning.' },
            { id: 14, url: imageSqlPracticeDeta, description: 'Resultat: Detaljerad vy över en övning.' },
            { id: 15, url: imageSqlPracticeRe, description: 'Resultat: Redigera en övning.' },
            { id: 16, url: imageSqlPracticeRad, description: 'Resultat: Radera en övning.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 11);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 12 && image.id <= 16);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>