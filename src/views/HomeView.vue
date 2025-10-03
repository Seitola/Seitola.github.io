<template>
  <div class="main-layout">
    <ProjectList />

    <div class="home">
      <IntroHeader />

      <p>

        Här kan du utforska mina projekt och lära känna mig bättre. Jag är en passionerad programmerare med en bakgrund
        inom läraryrket och en kandidatexamen i religionsvetenskap. Jag har alltid haft ett intresse för problemlösning
        och teknik, vilket ledde mig till att studera programmering. Något som jag är öppen för är nya möjligheter och
        utmaningar inom programmering. Tack vare min bakgrund som lärare har jag utvecklat starka kommunikations- och
        samarbetsförmågor, vilket jag tror är värdefullt i alla team.
      </p>
      <p>
        <strong>
          Vill du veta mer om mig och mina kunskaper? <br />
        </strong>

        Klicka på <router-link to="/about">Om mig</router-link> här eller i menyn ovan för att läsa mer om min
        bakgrund och vad jag kan.<br />
        Jag har skapat ett flertal projekt som du kan se i listan till vänster. Varje projekt har
        gett mig värdefull erfarenhet och insikt i olika aspekter av webbutveckling och programmering. <br />
        Klicka på något av projekten i listan för att se mer information och exempel på mitt arbete.
      </p>
      <p>
        <strong>
          Mina projekt:<br />
        </strong>
        Projekten med namnen "Att-Göra lista" och "Bloggplattform" är fullstack program med en frontend
        som är kopplad till en backend. Även "Receptlista" har en fullstack-lösning, i projektet
        kan en administratör gå in i en kontroller för att lägga till recept.
        Utöver de projekten som nämndes ovan, finns det några projekt som det står "...med API",
        "...med SQL", "...med VueJS" och "...med NodeJS". Det är för att de projekten har API, VueJS,
        NodeJS eller SQL som huvudfokus.
        <br />
        Alla projekt har en beskrivinng och bilder på kod samt resultat från projektet. Varje bild
        har en kort beskrivning på vad den innehåller eller gör.
      </p>
      <p>
        Tack för att du besöker min portfolio och jag hoppas att du hittar något som intresserar dig!
      </p>
    </div>

  </div>
</template>


<script>
import IntroHeader from '@/components/IntroHeader.vue';
import ProjectList from '@/components/ProjectList.vue';

export default {
  name: 'HomeView',
  components: {
    IntroHeader,
    ProjectList
  },
}
</script>