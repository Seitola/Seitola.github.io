<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>Att-Göra lista med VueJS</h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en fullt fungerande dynamisk att-göra-lista byggd med Vue.js. <br />
                    Applikationens syfte är att demonstrera grundläggande till avancerade frontend-kunskaper i Vue,
                    såsom komponentstruktur, dataflöde och användarinteraktion. Användaren kan enkelt skapa nya
                    uppgifter, redigera befintliga, och markera uppgifter som klara. Dessutom kan uppgifter permanent
                    tas bort från listan, vilket säkerställer en ren och effektiv användarupplevelse.
                </p>
                <p>
                    Observera att detta är en grundläggande frontend-version. Du kan lägga till nya punkter, men de
                    sparas inte eftersom det inte finns någon databaskoppling i det här projektet.
                    Detta är en medveten design för att visa ett specifikt moment. Om du vill se en fullständigt
                    implementerad Att-Göra-lista med permanent lagring (frontend, backend och databas) hänvisar jag till
                    mitt andra projekt: 'Att-Göra lista'.
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
import imageTodoInjs from '@/assets/images/TodoList/TodoInjs.png';
import imageTodoHome from '@/assets/images/TodoList/TodoHome.png';
import imageTodoHjs from '@/assets/images/TodoList/TodoHjs.png';
import imageTodoHstyle from '@/assets/images/TodoList/TodoHstyle.png';
import imageTodoAb from '@/assets/images/TodoList/TodoAb.png';
import imageTodoComp from '@/assets/images/TodoList/TodoComp.png';
import imageTodoStart from '@/assets/images/TodoList/TodoStart.png';
import imageTodoAbSt from '@/assets/images/TodoList/TodoAbSt.png';

export default {
    name: 'TodoListView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageTodoInjs, description: 'Koden för index.JS.' },
            { id: 2, url: imageTodoHome, description: 'Koden för startsidan.' },
            { id: 3, url: imageTodoHjs, description: 'Koden för Home-komponenten.' },
            { id: 4, url: imageTodoHstyle, description: 'Koden för styling av Home-komponenten.' },
            { id: 5, url: imageTodoAb, description: 'Koden för about-sidan.' },
            { id: 6, url: imageTodoComp, description: 'Koden för komponenterna.' },
            { id: 7, url: imageTodoStart, description: 'Resultat: startsidan.' },
            { id: 8, url: imageTodoAbSt, description: 'Resultat: about-sidan.' },
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
            return this.images.filter(image => image.id >= 7 && image.id <= 8);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>