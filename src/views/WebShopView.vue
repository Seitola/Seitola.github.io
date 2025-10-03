<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>Webbutik med VueJS</h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Detta projekt är en E-handelsapplikation som är byggd med Vue.js för frontend, vilket möjliggör en
                    dynamisk och responsiv användarupplevelse. För backend använde jag C#
                    för att hantera serverlogik och datahantering. Jag använde mig av Vue Router för att skapa olika
                    sidor i applikationen. Utöver det så använde jag mig av två projekt i Visual Studio, ett för backend
                    och ett för frontend. Därefter kopplade jag ihop dem genom att lägga till en referens i
                    frontend-projektet till backend-projektet.
                </p>
                <p>
                    <strong>
                        Funktionalitet:<br />
                    </strong>

                    <strong>Startsida:</strong> Visar en översikt av produkter med bild, namn och pris.<br />
                    <strong>Produktdetaljer:</strong> Varje produkt är klickbar och leder till en dedikerad sida med mer
                    information.<br />
                    <strong>Simulerad Köp-process:</strong> Besökaren kan klicka på en "Köp"-knapp, vilket tar dem till
                    ett beställningsformulär där den valda produkten visas. Formuläret ger intrycket av att kunna
                    slutföra ett köp genom att fylla i betalningsuppgifter.
                </p>
                <p>
                    <strong>Viktig anmärkning:</strong> Köp-funktionen är simulerad; den är inte kopplad till en
                    fungerande betalningslösning, bank eller leverantör. Formuläret fungerar endast som en mockup för
                    att visa processen.
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
import imageShopIndJs from '@/assets/images/WebShop/ShopIndJs.png';
import imageShopApp from '@/assets/images/WebShop/ShopApp.png';
import imageShopImg from '@/assets/images/WebShop/ShopImg.png';
import imageShopHome from '@/assets/images/WebShop/ShopHome.png';
import imageShopProd from '@/assets/images/WebShop/ShopProd.png';
import imageShopCheck from '@/assets/images/WebShop/ShopCheck.png';
import imageShopChSc from '@/assets/images/WebShop/ShopChSc.png';
import imageShopStart from '@/assets/images/WebShop/ShopStart.png';
import imageShopOne from '@/assets/images/WebShop/ShopOne.png';
import imageShopEnd from '@/assets/images/WebShop/ShopEnd.png';

export default {
    name: 'WebShopView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageShopIndJs, description: 'Koden för index.js.' },
            { id: 2, url: imageShopApp, description: 'Koden för App.vue.' },
            { id: 3, url: imageShopImg, description: 'Koden för bilderna.' },
            { id: 4, url: imageShopHome, description: 'Koden för Home-komponenten.' },
            { id: 5, url: imageShopProd, description: 'Koden för Product-komponenten.' },
            { id: 6, url: imageShopCheck, description: 'Koden för Checkout-komponenten.' },
            { id: 7, url: imageShopChSc, description: 'Koden för Checkout-scriptet.' },
            { id: 8, url: imageShopStart, description: 'Resultat: Startsidan.' },
            { id: 9, url: imageShopOne, description: 'Resultat: Ett specifikt produkt.' },
            { id: 10, url: imageShopEnd, description: 'Resultat: Kassan, betalfunktionen är inte inkodad.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 7);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 8 && image.id <= 10);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>