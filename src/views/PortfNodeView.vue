<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Portfolio med Node.js, Express och Handlebars
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta är en Portfolio-webbplats (Introduktionsprojekt i Node.js) och min startpunkt för att
                    förstå Node.js bättre samt hur man kopplar samman server och klient. Jag konfigurerade en
                    Express-server från grunden, vilket lärde mig om routing. Genom att använda
                    Handlebars fick jag praktisk erfarenhet av server-side rendering och hur man injicerar data i
                    HTML-mallar för att skapa en dynamisk och underhållbar portfolio-webbplats.
                </p>
                <p>
                    Denna webbplats implementerades med en standardstruktur (Startsida, Om mig, Tidigare projekt,
                    Kontakt). Allt innehåll hanterades utan databas genom att hårdkoda data direkt i HTML-vyerna. Även
                    om detta inte är den mest skalbara lösningen, var det ett viktigt metodologiskt val för detta
                    projekt för att isolera lärandet till Node.js och grundläggande templating-mekanismer. Det här
                    projektet var en solid grundkurs i Node.js, och nu är jag redo att ta nästa steg genom att integrera
                    tekniker som MongoDB eller SQL-databas för dynamisk innehållshantering.
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
import imagePortfNodeInd from '@/assets/images/PortfNode/PortfNodeInd.png';
import imagePortfNodeMain from '@/assets/images/PortfNode/PortfNodeMain.png';
import imagePortfNodeHome from '@/assets/images/PortfNode/PortfNodeHome.png';
import imagePortfNodeAbo from '@/assets/images/PortfNode/PortfNodeAbo.png';
import imagePortfNodePro from '@/assets/images/PortfNode/PortfNodePro.png';
import imagePortfNodeCon from '@/assets/images/PortfNode/PortfNodeCon.png';
import imagePortfNodeStart from '@/assets/images/PortfNode/PortfNodeStart.png';
import imagePortfNodeOm from '@/assets/images/PortfNode/PortfNodeOm.png';
import imagePortfNodeProj from '@/assets/images/PortfNode/PortfNodeProj.png';
import imagePortfNodeKon from '@/assets/images/PortfNode/PortfNodeKon.png';

export default {
    name: 'PortfolioMvcView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imagePortfNodeInd, description: 'Koden för index.js.' },
            { id: 2, url: imagePortfNodeMain, description: 'Koden för main.js.' },
            { id: 3, url: imagePortfNodeHome, description: 'Koden för Home-komponenten.' },
            { id: 4, url: imagePortfNodeAbo, description: 'Koden för About-komponenten.' },
            { id: 5, url: imagePortfNodePro, description: 'Koden för Projects-komponenten.' },
            { id: 6, url: imagePortfNodeCon, description: 'Koden för Contact-komponenten.' },
            { id: 7, url: imagePortfNodeStart, description: 'Resultat: Startsidan.' },
            { id: 8, url: imagePortfNodeOm, description: 'Resultat: Om-sidan.' },
            { id: 9, url: imagePortfNodeProj, description: 'Resultat: Projektsidan.' },
            { id: 10, url: imagePortfNodeKon, description: 'Resultat: Kontaktsidan.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },

    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 6);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 7 && image.id <= 10);
        }
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>