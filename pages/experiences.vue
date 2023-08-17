<script setup lang="ts">
import Tags from '@/components/_core/Tags.vue';
</script>

<template lang="pug">
section.page-experiences
	h1 Last Experiences
	.exp-item
		h2 Jan. 2021 - May 2022 / Senior Frontend developer / 
			a(href="https://www.akeneo.com/fr/akeneo-shared-catalogs/" target="_blank") Akeneo ( PIM Editor ) 
		p
			b Among a squad dedicated to the production, delivery and maintenance of a full SaaS app: a multi tenants explorer of catalogs
		ul
			li Implemented/enhanced main UI features such reactive search with multi criteria, infinite scroll & lazy load,
				|  binded to Elastic Search backend / incremental selection of products for export / grid display
				|  with columns selection / user session state storage...
			li Low level generic components allowing to extend easily criteria, capitalizing code in different context usages ( columns / fields selection & ordering )
			li Followed & challenged UX designer, finding out the right balance between difficulty, gain and delays
			li Event Stormings with PM, defining DDD use cases from stories, splitting features into JIRA tickets deliverables
			li Jest tests coverage / Maintaining up to date 3rd party libs / reduced technical debt in parallel / pre commits scripts
			li Mentored junior frontend engineers, helping organizing, prioritizing, splitting sub tasks to deliver new features smoothly and gain full autonomy
		Tags.stack(:tags="['React.js','TypeScript','Jest','Cypress','Docker','PHP (Symfony)','Node.js','JIRA','GitHub','StoryBook']")

	.exp-item
		h2 Sept. 2018 - Dec. 2021 / Senior Frontend developper / 
			a(href="https://www.groupe-creative.fr/" target="_blank") Creative Ingenierie ( IT Services ) 
		p
			b Among multiple project teams
		ul
			li High-end conciergerie web application: backoffice & frontoffice / agenda with / contacts / electronic documents management / notifications
			li RAD application for setting up & deploy administrative applications: editor of tables, columns, views, users, roles, workflows, deployments, etc.
			li Employees planning management backoffice
		Tags.stack(:tags="['React.js','Material UI','Webpack','Node.js','JIRA','GitHub']")
		
	.exp-item
		h2 Dec. 2015 - June 2018 / Fullstack Developper / 
			a(href="https://www.armaplus.com/") Armaplus ( Software Editor for building industry )
		p
			b Fullstack developper in multiple projects
		ul
			li International commerce application for concrete reinforcement
				br
				| Entire building of rich and fluid web application
				ul
					li Design / Architecture
					li RESTful API development / socket bridge with calculation DLL
					li Design and development of HMI web, full keyboard input grid
				Tags.stack(:tags="['Vue.js 2','WebPack','HTML 5 (Pug)','SCSS','Node.js (Hapi.js)','IIS 10','MsSQL','GIT']")

			li Web 3D Configurator ( 
				a(href="http://configurateur.bugal.fr/coupe/501010201" target="_blank") configurateur.bugal.fr
				|  )
				br
				| Development of a web application allowing to configure and viewing in 3D the different possible guardrail designs
				| of BUGAL manufacturer. In collaboration with project manager who established the database and rules of metier.
				ul
					li POC end to end (client 3D files conversion routines, web visualization, technical sheet PDF generation)
					li Architecture / meshes API
					li 3D files conversion routine, on the fly PDF generation of technical sheets with quotes
					li Conception and development of 3D web visualization, views metrics and excel export for admin users
				Tags.stack(:tags="['Three.js','D3.js','Dojo.js','HTML 5 (Pug)','CSS3','Node.js (express.js)','IIS 7.5','MsSQL','GIT']")

			li Multi Platform Mobile Application for Site Operations Validation
				br
				| In collaboration with C# developer and project manager
				ul
					li Conception / Architecture
					li HMI prototype
					li RESTful API development consumed by client applications (C# Cordova)
					li DLL integration for remote databases synchronization
				Tags.stack(:tags="['Node.js (Hapi.js)','IIS 7.5','MsSQL','Mockflow','Photoshop']")

			li Website to file and manage construction blueprints
				br
				| Web application to send and share construction blueprints, including versioning and various fields, restricted
				| access by users & groups. Complete making in collaboration with project manager who established specifications.
				ul
					li Architecture
					li Frontend development 
					li Backend development
					li Registering, management, user access
				Tags.stack(:tags="['Dojo.js','HTML 5 (Twig)','CSS3','PHP (Symfony)','IIS 7.5','MsSQL']")
</template>

<style lang="scss">
.page-experiences {
	.exp-item {
		padding-top: 0.5rem;
		padding-bottom: 2rem;
		border-bottom: 1px dotted rgba(255, 255, 255, 0.15);
		margin-bottom: 2rem;
		
		.tags {
			//margin-bottom: 8px;
		}
		
		li {
			margin-bottom: 8px;
		}
	}

	.stack {
		gap: 0.25rem;
		padding: 0;
		padding-top: 0.5rem;

		.tag {
			font-size: 0.9rem;
			padding: 0.2rem 0.6rem;
			//border: 0;
			background-color: rgba(255, 255, 255, 0.05);
		}
	}

	//:global(.stack .tag) {
	//	font-size: 0.9rem;
	//	padding: 0.2rem 0.6rem;
	//	border: 0;
	//	background-color: rgba(255, 255, 255, 0.035);
	//}

}
</style>
