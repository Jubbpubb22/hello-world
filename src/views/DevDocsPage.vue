<!--Instance of a component -->

<template>
  <div>
	<div class="docs-hero">
	<DocsHero heading="ABC Dev Docs"
			  subheading="A brand new Docusaurus site, deployed to Netlify"
			  image="/images/feature-card/docusaures.svg"/>
	</div>

	<ThirdsGrid class="feature-card">
  	<FeatureCard
  		slot='card1' 
  		image="/images/feature-card/feature-cdn.svg"
  		heading="CDN"
  		content="This site is served directly from Netlify’s CDN. No servers necessary."/>
  	<FeatureCard	
  		slot='card2' 
  		image="/images/feature-card/feature-continuous-deployment.svg"
  		heading="Continous Deployment"
  		content="Publishing a page is as easy as editing a text file and pushing a Git commit."/>
  	<FeatureCard	
  		slot='card3' 
  		image="/images/feature-card/feature-branch-build.svg"
  		heading="Branch Builds"
  		content="Deployable branches make it trivial to maintain multiple versions of your docs."/>	
  	<FeatureCard	
  		slot='card4' 
  		image="/images/feature-card/feature-collaboration.svg"
  		heading="Collaboration"
  		content="Deployable branches make it trivial to maintain multiple versions of your docs."/>
  	</ThirdsGrid>

  	<HalfGrid class ="feature-fullbleed" flipped>
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/infrastructure-management.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Infrastructure Management"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>	

  	<HalfGrid class ="feature-fullbleed">
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/continuous deployment.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Infrastructure Management"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>		

  	<HalfGrid class ="feature-fullbleed" flipped>
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/site-build.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Infrastructure Management"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>	

  	<HalfGrid class ="feature-fullbleed">
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/automatic-deploy-cdn.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Automatic Deployment on a CDN"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>	

  	<HalfGrid class ="feature-fullbleed" flipped>
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/seamless-collaboration.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Seamless Collaboration"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>	

  	<HalfGrid class ="feature-fullbleed">
  		<ImageCard
  			slot='card1'
  			image="/images/feature-card/audit-log.svg"/>
  		<TextCard
  			slot='card2'
  			heading="Audit Log"
  			content="Netlify automatically manages all of your infrastructure for you. You don’t need to provision servers, configure your CDN, or worry if you have enough capacity when your dev docs wind up on the front page of Hacker News."/>
  	</HalfGrid>	
  </div>
</template>





<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import DocsHero from "@/components/DocsHero.vue";
import CtaButton from "@/components/CtaButton.vue";
import FeatureCard from "@/components/FeatureCard.vue";
import ThirdsGrid from "@/components/ThirdsGrid.vue";
import HalfGrid from "@/components/HalfGrid.vue";
import ImageCard from "@/components/ImageCard.vue";
import TextCard from "@/components/TextCard.vue";

export default {
  name: "dev-docs",
  components: {
    DocsHero,
    CtaButton,
    FeatureCard,
    ThirdsGrid,
    HalfGrid,
    ImageCard,
    TextCard,
  }
};
</script>
