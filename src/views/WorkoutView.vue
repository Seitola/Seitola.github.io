<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Träningsdagbok: C# MVC-applikation med MongoDB
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Projektet är en webbaserad Träningsdagbok utvecklad med C# och ASP.NET MVC. Applikationen tillåter
                    användaren att registrera och hantera sin träning. <br />
                    Jag använde mig av Visual Studio för att skapa projektet och MongoDB för att hantera databasen.
                    För att interagera med MongoDB använde jag MongoDBs officiella C#-driver.
                </p>
                <p>
                    Användare kan skapa, läsa, uppdatera och ta bort (CRUD) träningspass och övningar. Varje
                    träningspass
                    innehåller information som datum, tid och en lista över övningar med detaljer som namn, antal set,
                    reps
                    och vikt. Applikationen använder MongoDB som databas för att lagra träningsdata, vilket möjliggör
                    flexibel och skalbar lagring. Gränssnittet är användarvänligt och responsivt, vilket gör det enkelt
                    för
                    användare att navigera och interagera med sina träningsdata. Projektet demonstrerar grundläggande
                    webbutvecklingskoncept som MVC-arkitektur, routing, formulärhantering och databasinteraktion med
                    MongoDB.
                </p>
                <p>
                    <strong>Huvudfunktioner:</strong>
                    <br />
                    - <strong>Övningar:</strong> Användare kan skapa, läsa, uppdatera och ta bort övningar.
                    <br />
                    - <strong>Träningstillfällen:</strong> Användare kan registrera ett pass genom att ange datum, välja
                    en
                    övning och specificera resultatet (t.ex. lyft vikt eller sprungna kilometer).<br />
                    - <strong>CRUD-operationer:</strong> Fullständig CRUD-funktionalitet för både övningar och
                    träningstillfällen. <br />
                    - <strong>Databasinteraktion:</strong> Applikationen använder MongoDB för att lagra och hämta
                    träningsdata.
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
import imageWorkoutHome from '@/assets/images/Workout/WorkoutHome.png';
import imageWorkoutDiary from '@/assets/images/Workout/WorkoutDiary.png';
import imageWorkoutCr from '@/assets/images/Workout/WorkoutCr.png';
import imageWorkoutDel from '@/assets/images/Workout/WorkoutDel.png';
import imageWorkoutExIn from '@/assets/images/Workout/WorkoutExIn.png';
import imageWorkouteExCr from '@/assets/images/Workout/WorkoutExCr.png'; // Notera att denna har 'e' i 'Workoute'
import imageWorkoutController from '@/assets/images/Workout/WorkoutController.png';
import imageWorkoutCreate from '@/assets/images/Workout/WorkoutCreate.png';
import imageWorkoutIn from '@/assets/images/Workout/WorkoutIn.png';
import imageWorkoutClass from '@/assets/images/Workout/WorkoutClass.png';
import imageWorkoutDB from '@/assets/images/Workout/WorkoutDB.png';
import imageWorkoutExCl from '@/assets/images/Workout/WorkoutExCl.png';
import imageWorkoutExCont from '@/assets/images/Workout/WorkoutExCont.png';
import imageWorkoutExCreate from '@/assets/images/Workout/WorkoutExCreate.png'; // Notera att denna har 'Create' istället för 'Cre'
import imageWorkoutExIndex from '@/assets/images/Workout/WorkoutExIndex.png';

export default {
    name: 'WorkoutView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            // Kodbilder (ID 1-9)
            { id: 1, url: imageWorkoutController, description: 'Koden för Workout Controller.' },
            { id: 2, url: imageWorkoutCreate, description: 'Koden för funktionen för att skapa ett träningspass (Create Workout).' },
            { id: 3, url: imageWorkoutIn, description: 'Koden för funktionen som listar träningspass (Workout Index).' },
            { id: 4, url: imageWorkoutClass, description: 'Koden för klassmodellen Workout.' },
            { id: 5, url: imageWorkoutDB, description: 'Koden för databasklassen som interagerar med MongoDB.' },
            { id: 6, url: imageWorkoutExCont, description: 'Koden för Exercise Controller.' },
            { id: 7, url: imageWorkoutExCreate, description: 'Koden för funktionen för att skapa en övning (Create Exercise).' },
            { id: 8, url: imageWorkoutExIndex, description: 'Koden för funktionen som listar övningar (Exercise Index).' },
            { id: 9, url: imageWorkoutClass, description: 'Koden för klassmodellen Workout.' },
            { id: 10, url: imageWorkoutExCl, description: 'Koden för klassmodellen Exercise.' },
            // Resultatbilder (ID 10-15)
            { id: 11, url: imageWorkoutHome, description: 'Resultat: Startsida som visar en översikt.' },
            { id: 12, url: imageWorkoutDiary, description: 'Resultat: "Workout Diary" – en lista över träningspass.' },
            { id: 13, url: imageWorkoutCr, description: 'Resultat: "Create Workout" – sidan för att skapa ett nytt träningspass.' },
            { id: 14, url: imageWorkoutDel, description: 'Resultat: "Delete Workout" – bekräftelse på borttagning av ett träningspass.' },
            { id: 15, url: imageWorkoutExIn, description: 'Resultat: "Exercises Index" - en lista över alla övningar.' },
            { id: 16, url: imageWorkouteExCr, description: 'Resultat: "Create Exercise" – sidan för att skapa en ny övning.' },
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
            return this.images.filter(image => image.id >= 11 && image.id <= 16);
        }
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>