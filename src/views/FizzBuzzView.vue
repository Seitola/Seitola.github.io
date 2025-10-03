<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    FizzBuzz
                </h1>
                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är ett konsolprogram i C# som löser den klassiska FizzBuzz-utmaningen.<br />
                    Applikationen går igenom siffrorna 1 till 100 och tillämpar en serie villkorlig logik.
                </p>
                <p>
                    Syftet med detta projekt var att förstärka min förståelse för grundläggande programmeringskoncept.
                    <br />
                    Genom att använda C# visade jag hur man effektivt hanterar upprepning och logiska flödeskontroller.
                    Resultatet är en stabil, snabb applikation som utgör ett utmärkt bevis på förmågan att
                    lösa en vanlig intervjufråga inom programmering. Projekt visar även grundläggande kunskaper inom C#,
                    inklusive användning av loopar (for-loop), villkorssatser (if/else-if/else), och aritmetiska
                    operationer (modulo) för att uppnå en dynamisk och logisk utskrift. Det är ett tydligt exempel på
                    problemlösning och en ren kodstruktur.
                </p>
                <p>
                    <strong>
                        Huvudfunktioner för programmet
                    </strong>
                </p>
                <p>
                    <strong>
                        Upprepning och utskrift:
                    </strong>
                    <br />
                    Programmet loopar genom tal från 1 till 100 och skriver ut varje tal på en
                    ny rad.
                </p>
                <p>
                    <strong>
                        Villkorlig logik:
                    </strong>
                    <br />
                    Om ett tal är jämnt delbart med 3, ersätts talet med strängen "Fizz". <br />
                    Om ett tal är jämnt delbart med 5, ersätts talet med strängen "Buzz". <br />
                    Om ett tal är jämnt delbart med både 3 och 5, ersätts talet med strängen "FizzBuzz". <br />
                    Om inget av ovanstående villkor är uppfyllda, skrivs talet ut som det är.
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
import imageFizzBuzz from '@/assets/images/FizzBuzz.png';
import imageFizzR from '@/assets/images/FizzR.png';

export default {
    name: 'FizzBuzzView',
    components: {
        ProjectList
    },

    data() {
        // Definiera alla bilder först
        const allImages = [
            { id: 1, url: imageFizzBuzz, description: 'Kod: FizzBuzz-programmet i C#. Denna kod definierar logiken för att iterera från 1 till 100 och tillämpa FizzBuzz-reglerna.' },
            { id: 2, url: imageFizzR, description: 'Resultat: Utmatningen från FizzBuzz-programmet i konsolen. Visar hur talen 1-100 ersätts med "Fizz", "Buzz" eller "FizzBuzz" enligt reglerna.' }
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            // Här väljer vi bild 1 (som är koden i din setup)
            return this.images.filter(image => image.id === 1);
        },
        resultImages() {
            // Här väljer vi bild 2 (som är resultatet i din setup)
            return this.images.filter(image => image.id === 2);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>