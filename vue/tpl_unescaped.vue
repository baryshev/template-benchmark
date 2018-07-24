<html lang="en">
	<head>
		<title v-html="title"></title>
	</head>
	<body>
		<p v-html="text"></p>
		<ul v-if="projects">
			<li v-for="project in projects">
				<a v-bind:href="project.url" v-html="project.name"></a>
				<p v-html="project.description"></p>
			</li>
		</ul>
		<p v-if="!projects">
			No projects
		</p>
	</body>
</html>