<template>
    <div class="main-layout-2">
        <ProjectList />
        <div class="content-container">
            <div class="home-2">
                <h1>
                    Bloggplattform med VueJS
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta är en bloggplattform utvecklad med Vue.js för frontend med C#. Jag byggde en dynamisk
                    startsida som visar en lista över alla blogginlägg. Varje inlägg är klickbart och leder till en
                    dedikerad sida med det fullständiga innehållet.
                </p>
                <p>
                    Jag skapade även en "Om"-sida för att ge besökare information om bloggen och dess syfte. För att
                    hantera data använde jag hårdkodade inlägg i en separat fil, vilket gjorde det enkelt att lägga till
                    nya inlägg genom att uppdatera denna fil. Vidare implementerade jag Vue Router för att hantera
                    navigeringen mellan olika sidor, vilket gav en smidig användarupplevelse.
                </p>
                <p>
                    Som mitt andra projekt i Vue.js har jag blivit säkrare på de grundläggande koncepten. Även om jag är
                    medveten om att det finns mer att lära, ser jag detta projekt som ett viktigt steg i min utveckling
                    inom ramverket. Jag är nöjd med resultatet och ser fram emot att fortsätta utforska Vue.js i
                    framtida projekt.
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
import imageBloggVIn from '@/assets/images/BloggVue/BloggVIn.png';
import imageBloggVApp from '@/assets/images/BloggVue/BloggVApp.png';
import imageBloggVHome from '@/assets/images/BloggVue/BloggVHome.png';
import imageBloggVPostD from '@/assets/images/BloggVue/BloggVPostD.png';
import imageBloggVuedata from '@/assets/images/BloggVue/BloggVuedata.png';
import imageBloggVAbout from '@/assets/images/BloggVue/BloggVAbout.png';
import imageBloggVStart from '@/assets/images/BloggVue/BloggVStart.png';
import imageBloggVPost from '@/assets/images/BloggVue/BloggVPost.png';
import imageBloggVOm from '@/assets/images/BloggVue/BloggVOm.png';

export default {
    name: 'BloggVueView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageBloggVIn, description: 'Koden för index.' },
            { id: 2, url: imageBloggVApp, description: 'Koden för App.' },
            { id: 3, url: imageBloggVHome, description: 'Koden för Home.' },
            { id: 4, url: imageBloggVPostD, description: 'Koden för Post Details.' },
            { id: 5, url: imageBloggVuedata, description: 'Koden för inläggen, hårdkodade inlägg.' },
            { id: 6, url: imageBloggVAbout, description: 'Koden för About.' },
            { id: 7, url: imageBloggVStart, description: 'Resultat: Startsidan.' },
            { id: 8, url: imageBloggVPost, description: 'Resultat: Post-vy.' },
            { id: 9, url: imageBloggVOm, description: 'Resultat: Om-sidan.' },
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
            return this.images.filter(image => image.id >= 7 && image.id <= 9);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>