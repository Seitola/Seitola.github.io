<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    Tic-Tac-Toe
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Jag utvecklade en interaktiv konsolapplikation i C# för att spela Tic Tac Toe (Luffarschack).
                    <br />
                    Programmet är byggt med fokus på användarvänlighet och robust felhantering för att säkerställa en
                    smidig
                    spelupplevelse. Utöver det hanterar programmet spelarens inmatning, validerar drag, uppdaterar
                    spelbrädet och kontrollerar vinnande villkor efter varje drag. Spelet fortsätter tills en spelare
                    vinner
                    eller spelet slutar oavgjort. Det är ett roligt och engagerande sätt att demonstrera grundläggande
                    programmeringskoncept som loopar, villkor och array-hantering i C#.
                </p>
                <p>
                    <strong>Programmet:</strong><br />
                    - Visar spelplanen som ett 3x3 rutnät direkt i konsolen.<br />
                    - Tillåter två spelare att turas om att placera sina symboler (X och O) på brädet genom att ange rad
                    och
                    kolumn.<br />
                    - Kontrollerar kontinuerligt spelbrädet för att avgöra om någon spelare vunnit genom att få tre
                    markörer
                    i rad.<br />
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
import imageTicTacCon from '@/assets/images/TicTacCon.png';
import imageTicTacPro from '@/assets/images/TicTacPro.png';
import imageTicTacR from '@/assets/images/TicTacR.png';

export default {
    name: 'TicTacView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            { id: 1, url: imageTicTacCon, description: 'Kod: Denna kod definierar spelplanen (rutnätet) och hanterar inmatning av X och O.' },
            { id: 2, url: imageTicTacPro, description: 'Kod: Tic-Tac-Toe-programmet i C#. Denna ser till att spelet startar.' },
            { id: 3, url: imageTicTacR, description: 'Resultat: Spelet Tic-Tac-Toe i konsolen. Där spelarna skriver två siffror för att sätta sin pjäs.' }
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            const codeIds = [1, 2]
            return this.images.filter(image => codeIds.includes(image.id));
        },
        resultImages() {
            // Här väljer vi bild 2 (som är resultatet i din setup)
            return this.images.filter(image => image.id === 3);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>