<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Receptlista med SQL-databas
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Jag skapade en webbapplikation i C# med ASP.NET MVC-arkitekturen för att visa och hantera recept.
                    Applikationen använder en SQL Server-databas för att lagra recept och deras ingredienser.
                    Användare kan bläddra bland recept, se detaljer för varje recept och administratörer kan lägga till
                    nya recept och ingredienser via en lösenordsskyddad adminpanel. Syftet med projektet var att lära
                    mig hur vi kan integrera en SQL-databas med en webbapplikation och implementera grundläggande
                    CRUD-funktioner (Create, Read, Update, Delete) i en ASP.NET MVC-miljö.
                </p>
                <p>
                    Applikationen består av två huvuddelar:<br />
                    <strong>Publik vy:</strong> En startsida som presenterar alla tillgängliga recept i en lista.<br />
                    <strong>Adminpanel:</strong> En lösenordsskyddad del där administratörer kan skapa nya recept och
                    lägga till ingredienser till dessa.
                </p>
                <p>
                    Utvecklingen utfördes i Visual Studio 2022. För datalagring och strukturering användes SQL Server;
                    databasen och dess tabeller konfigurerades via SQL Server Management Studio.
                    Koden för databasinteraktion skrevs i C# och följde MVC-arkitekturen för att separera logik, data
                    och presentation. Applikationen är designad för att vara enkel och användarvänlig, med fokus på
                    funktionalitet och effektiv datalagring.
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
import imageSqlReceptDB from '@/assets/images/SqlReceptsida/SqlReceptDB.png';
import imageSqlReceptInDB from '@/assets/images/SqlReceptsida/SqlReceptInDB.png';
import imageSqlReceptIdDB from '@/assets/images/SqlReceptsida/SqlReceptIdDB.png';
import imageSqlReceptTaDB from '@/assets/images/SqlReceptsida/SqlReceptTaDB.png';
import imageSqlReceptSol from '@/assets/images/SqlReceptsida/SqlReceptSol.png';
import imageSqlReceptConn from '@/assets/images/SqlReceptsida/SqlReceptConn.png';
import imageSqlReceptDBC from '@/assets/images/SqlReceptsida/SqlReceptDBC.png';
import imageSqlReceptCl from '@/assets/images/SqlReceptsida/SqlReceptCl.png';
import imageSqlReceptInCl from '@/assets/images/SqlReceptsida/SqlReceptInCl.png';
import imageSqlReceptBCl from '@/assets/images/SqlReceptsida/SqlReceptBCl.png';
import imageSqlReceptHC from '@/assets/images/SqlReceptsida/SqlReceptHC.png';
import imageSqlReceptIn from '@/assets/images/SqlReceptsida/SqlReceptIn.png';
import imageSqlReceptCDe from '@/assets/images/SqlReceptsida/SqlReceptCDe.png';
import imageSqlReceptStart from '@/assets/images/SqlReceptsida/SqlReceptStart.png';
import imageSqlReceptDe from '@/assets/images/SqlReceptsida/SqlReceptDe.png';


export default {
    name: 'SqlReceptlistView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageSqlReceptDB, description: 'Databas: Recept i en tabell.' },
            { id: 2, url: imageSqlReceptInDB, description: 'Databas: Ingredienser i en tabell.' },
            { id: 3, url: imageSqlReceptIdDB, description: 'Databas: Recept och deras ID i en tabell.' },
            { id: 4, url: imageSqlReceptTaDB, description: 'Databas: Alla tabeller i databasen.' },
            { id: 5, url: imageSqlReceptSol, description: 'Två projekt i Solution.' },
            { id: 6, url: imageSqlReceptConn, description: 'Koden för databasanslutningen (Connection).' },
            { id: 7, url: imageSqlReceptDBC, description: 'Koden för databasklassen, med koppling till SQL-Databasen samt berättar för databasen om ett recept visas, skapas, uppdateras eller raderas (DBClass).' },
            { id: 8, url: imageSqlReceptCl, description: 'Koden för Recipe Class.' },
            { id: 9, url: imageSqlReceptInCl, description: 'Koden för Ingredient Class.' },
            { id: 10, url: imageSqlReceptBCl, description: 'Koden för Receptbok Class.' },
            { id: 11, url: imageSqlReceptHC, description: 'Koden för HomeController.' },
            { id: 12, url: imageSqlReceptIn, description: 'Koden för startsidan.' },
            { id: 13, url: imageSqlReceptCDe, description: 'Koden för Details.' },
            { id: 14, url: imageSqlReceptStart, description: 'Resultat: Startsidan (Start).' },
            { id: 15, url: imageSqlReceptDe, description: 'Resultat: Detaljerad vy över ett recept (Details).' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 13);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 14 && image.id <= 15);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>