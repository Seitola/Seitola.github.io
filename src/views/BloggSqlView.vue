<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Bloggplattform med SQL-databas
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    I detta projekt byggde jag en bloggplattform från grunden med en SQL-databas som backend.<br />
                    Jag fokuserade på att skapa en effektiv lösning för att hantera användargenererat innehåll. Besökare
                    kan smidigt skapa nya inlägg via ett formulär, där innehåll som titel, sammanfattning och brödtext
                    sparas säkert och strukturerat i databasen. På plattformens startsida presenteras alla inlägg i en
                    översiktlig vy, och det är enkelt att navigera till fullständiga inlägg genom ett enkelt klick.

                    På sidan för varje inlägg finns funktioner för att redigera eller radera inlägget, vilket ger
                    användarna full kontroll över sitt innehåll. Genom att använda SQL-databasen säkerställde jag att
                    all data hanteras på ett pålitligt sätt, med stöd för grundläggande CRUD-operationer (Create, Read,
                    Update, Delete).
                </p>
                <p>
                    De första tre bilderna under rubriken "kod" visar SQL-databasen med tabeller och data.
                    De följande nio bilderna under samma rubrik visar koden för själva projektet.
                    De bilderna som ligger under rubriken "resultat" visar resultatet av koden som byggde projektet.
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
import imageSqlBloggDBId from '@/assets/images/SqlBlogg/SqlBloggDBId.png';
import imageSqlBloggDBpo from '@/assets/images/SqlBlogg/SqlBloggDBpo.png';
import imageSqlBloggDBtb from '@/assets/images/SqlBlogg/SqlBloggDBtb.png';
import imageSqlBloggSol from '@/assets/images/SqlBlogg/SqlBloggSol.png';
import imageSqlBloggCon from '@/assets/images/SqlBlogg/SqlBloggCon.png';
import imageSqlBloggDBcl from '@/assets/images/SqlBlogg/SqlBloggDBcl.png';
import imageSqlBloggPcl from '@/assets/images/SqlBlogg/SqlBloggPcl.png';
import imageSqlBloggHC from '@/assets/images/SqlBlogg/SqlBloggHC.png';
import imageSqlBloggIn from '@/assets/images/SqlBlogg/SqlBloggIn.png';
import imageSqlBloggDet from '@/assets/images/SqlBlogg/SqlBloggDet.png';
import imageSqlBloggCre from '@/assets/images/SqlBlogg/SqlBloggCre.png';
import imageSqlBloggStart from '@/assets/images/SqlBlogg/SqlBloggStart.png';
import imageSqlBloggDetails from '@/assets/images/SqlBlogg/SqlBloggDetails.png';
import imageSqlBloggCreate from '@/assets/images/SqlBlogg/SqlBloggCreate.png';


export default {
    name: 'SqlBlogglistView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageSqlBloggDBId, description: 'SQL-databasen för blogginläggen (post ID).' },
            { id: 2, url: imageSqlBloggDBpo, description: 'SQL-databasen för blogginläggen (posts).' },
            { id: 3, url: imageSqlBloggDBtb, description: 'SQL-databasen för blogginläggen (diagram).' },
            { id: 4, url: imageSqlBloggSol, description: 'Två projekt i Solution..' },
            { id: 5, url: imageSqlBloggCon, description: 'Koden för databasanslutningen (Connection).' },
            { id: 6, url: imageSqlBloggDBcl, description: 'Koden för databasklassen, med koppling till SQL-Databasen samt berättar för databasen om ett inlägg visas, skapas, uppdateras eller raderas (DBClass).' },
            { id: 7, url: imageSqlBloggPcl, description: 'Koden för Post Class.' },
            { id: 8, url: imageSqlBloggHC, description: 'Koden för Home Controller.' },
            { id: 9, url: imageSqlBloggIn, description: 'Koden för Home Index.' },
            { id: 10, url: imageSqlBloggDet, description: 'Koden för Home Details.' },
            { id: 11, url: imageSqlBloggCre, description: 'Koden för att skapa inlägg (Create).' },
            { id: 12, url: imageSqlBloggStart, description: 'Resultat: Startsidan med lista över inlägg (Start).' },
            { id: 13, url: imageSqlBloggDetails, description: 'Resultat: Detaljerad vy över ett blogginlägg (Details).' },
            { id: 14, url: imageSqlBloggCreate, description: 'Resultat: Sidan för att skapa ett nytt inlägg (Create).' },
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
            return this.images.filter(image => image.id >= 12 && image.id <= 14);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>