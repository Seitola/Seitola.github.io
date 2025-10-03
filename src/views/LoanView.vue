<template>
    <div class="main-layout-2">
        <ProjectList />

        <div class="content-container">
            <div class="home-2">
                <h1>
                    CRUD för lån med VueJS och C#
                </h1>

                <h2>
                    Beskrivning
                </h2>
                <p>
                    Jag utökade ett befintligt API-program i C#, som gjordes under lektionstid, genom att addera
                    funktionalitet för att hantera boklån. I projektet låg fokuset på att implementera en ny
                    Loans-modell och tillhörande Controller. Jag skapade en modell med egenskaperna Id, BookId och
                    StartDate. Genom att implementera fullständiga CRUD-operationer (Create, Read, Update, Delete)
                    möjliggjordes en strukturerad hantering av lån, parallellt med hanteringen av böcker. Detta
                    inkluderade att skapa nya lån, hämta information om befintliga lån, uppdatera lånedetaljer och ta
                    bort lån vid behov.
                </p>
                <p>
                    Till detta projekt utvecklade jag ingen frontend för att interagera med API:et. Istället använde jag
                    verktyget Swagger för att testa och verifiera att alla CRUD-operationer fungerade som förväntat.
                    Detta tillvägagångssätt gjorde det möjligt att fokusera på backend-logiken och säkerställa att
                    API:et var robust och pålitligt innan eventuell frontend-integration.
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
import imageLoanApiCl from '@/assets/images/Loan/LoanApiCl.png';
import imageLoanApiDB from '@/assets/images/Loan/LoanApiDB.png';
import imageLoanApiController from '@/assets/images/Loan/LoanApiController.png';
import imageLoanStart from '@/assets/images/Loan/LoanStart.png';
import imageLoanAll from '@/assets/images/Loan/LoanAll.png';
import imageLoanCreate from '@/assets/images/Loan/LoanCreate.png';
import imageLoanOne from '@/assets/images/Loan/LoanOne.png';
import imageLoanEdit from '@/assets/images/Loan/LoanEdit.png';
import imageLoanDelete from '@/assets/images/Loan/LoanDelete.png';

export default {
    name: 'LoanView',
    components: {
        ProjectList
    },

    data() {
        const allImages = [
            { id: 1, url: imageLoanApiCl, description: 'Koden för API Class.' },
            { id: 2, url: imageLoanApiDB, description: 'Koden för API databaskoppling.' },
            { id: 3, url: imageLoanApiController, description: 'Koden för API Controller.' },
            { id: 4, url: imageLoanStart, description: 'Resultat: Startsidan.' },
            { id: 5, url: imageLoanAll, description: 'Resultat: Alla lån.' },
            { id: 6, url: imageLoanCreate, description: 'Resultat: Skapa lån.' },
            { id: 7, url: imageLoanOne, description: 'Resultat: Ett specifikt lån.' },
            { id: 8, url: imageLoanEdit, description: 'Resultat: Redigera lån.' },
            { id: 9, url: imageLoanDelete, description: 'Resultat: Ta bort lån.' },
        ];

        return {
            activeImage: allImages[0] || null,
            images: allImages
        };
    },
    computed: {
        codeImages() {
            return this.images.filter(image => image.id >= 1 && image.id <= 3);
        },
        resultImages() {
            return this.images.filter(image => image.id >= 4 && image.id <= 9);
        }
    },

    methods: {
        selectImage(image) {
            this.activeImage = image;
        }
    }
}
</script>