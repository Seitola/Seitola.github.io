<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Portfolio i MVC
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Projektet är en Portfolio-webbplats byggd med ramverket ASP.NET MVC (Model-View-Controller)
                    i språket C#. Detta val ger en stabil, skalbar och strukturerad backend. Sidan använder MongoDB för
                    att lagra all projektdata och innehåll. Detta möjliggör snabb och flexibel hantering av
                    informationen. Webbplatsen är uppdelad i sektioner:<br />

                    - En startsida som fungerar som en introduktion och presentation av mig.<br />
                    - En separat "Projekt"-flik som visar ett urval av mina bästa arbeten.<br />
                    <br />
                    Användaren kan navigera till projektöversikten och sedan klicka på ett specifikt projekt för att se
                    dess funktionalitet och detaljer. De projekt som presenteras är primärt de som är utvecklade med
                    webb MVC. För lagring och hantering av projektdatan valdes MongoDB, vilket utnyttjades som
                    databaslösning.
                    <br />
                    Projekten som ligger i detta portfolio kommer att presenteras under en egen flik.
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
import image1 from '@/assets/images/Portf/PortfMvcHC.png';
import image2 from '@/assets/images/Portf/PortfMvsIn.png';
import image3 from '@/assets/images/Portf/PortfMvcPC.png';
import image4 from '@/assets/images/Portf/PortfMvcPI.png';
import image5 from '@/assets/images/Portf/PortfStart.png';
import image6 from '@/assets/images/Portf/PortfProj.png';

export default {
    name: 'PortfolioMvcView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: image1, description: 'HomeController - styr vyn; här visar den att Index-vyn ska innehålla en lista över mål.' },
            { id: 2, url: image2, description: 'Koden för Index-vyn (startsidan) definierar presentationen av mig och mina mål.' },
            { id: 3, url: image3, description: 'ProjektController -  styr vyn; vilket i detta projekt, behövde vara en index view.' },
            { id: 4, url: image4, description: 'Projekt Index: Startsida med kortfattade projektbeskrivningar och länkar till dess funktioner.' },
            { id: 5, url: image5, description: 'Startsidan: Här är resultatet av koden i HomeController och tillhörande Index.' },
            { id: 6, url: image6, description: 'Projekt Index: startsidan för projekten. Här är resultatet av ProjectControllern med tillhörande Index.' }
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            const codeIds = [1, 2, 3, 4];
            return this.images.filter(image => codeIds.includes(image.id));
        },
        resultImages() {
            const resultIds = [5, 6];
            return this.images.filter(image => resultIds.includes(image.id));
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>