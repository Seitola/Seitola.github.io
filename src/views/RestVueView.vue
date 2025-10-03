<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Resturangsida med VueJS
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en restaurangsida med en dynamisk veckomeny som är implementerad i Vue.js.<br />
                    Jag skapade en webbplats för en fiktiv restaurang med hjälp av Vue.js som frontend-ramverk. Syftet
                    var att bygga en lättanvänd och interaktiv sida för att presentera veckans lunchutbud.
                </p>
                <p>
                    <strong>Funktionalitet:</strong><br />

                    - Visar restauranginformation på startsidan.<br />
                    - En dynamisk lunchmeny där användare kan expandera/minimera varje veckodag (måndag - fredag) för
                    att se dagens rätter.<br />
                    - En "Kontakta oss"-sektion med kontaktuppgifter.
                </p>
                <p>
                    Resultatet är en modern och användarvänlig webbplats som effektivt presenterar restaurangens
                    erbjudanden och gör det enkelt för besökare att navigera och hitta information.
                    Denna restaurangsida i Vue.js visar min förmåga att skapa dynamiska och interaktiva
                    webbapplikationer med moderna JavaScript-ramverk.

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
import imageRestVuein from '@/assets/images/RestVue/RestVuein.png';
import imageRestVueApp from '@/assets/images/RestVue/RestVueApp.png';
import imageRestVueHome from '@/assets/images/RestVue/RestVueHome.png';
import imageRestVueMenu from '@/assets/images/RestVue/RestVueMenu.png';
import imageRestVueCon from '@/assets/images/RestVue/RestVueCon.png';
import imageRestVueStart from '@/assets/images/RestVue/RestVueStart.png';
import imageRestVueMeny from '@/assets/images/RestVue/RestVueMeny.png';
import imageRestVueKon from '@/assets/images/RestVue/RestVueKon.png';

export default {
    name: 'RestVueView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageRestVuein, description: 'Koden för index.html.' },
            { id: 2, url: imageRestVueApp, description: 'Koden för App.vue.' },
            { id: 3, url: imageRestVueHome, description: 'Koden för Home-komponenten.' },
            { id: 4, url: imageRestVueMenu, description: 'Koden för Menu-komponenten.' },
            { id: 5, url: imageRestVueCon, description: 'Koden för Contact-komponenten.' },
            { id: 6, url: imageRestVueStart, description: 'Resultat: Startsidan.' },
            { id: 7, url: imageRestVueMeny, description: 'Resultat: Menysidan.' },
            { id: 8, url: imageRestVueKon, description: 'Resultat: Kontaktsidan.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 5);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 6 && image.id <= 8);
        }
    },
    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>