<html lang="en">
	<head>
		<title>{{title}}</title>
	</head>
	<body>
		<p>{{text}}</p>
		<ul v-if="projects">
			<li v-for="project in projects">
				<a v-bind:href="project.url">{{project.name}}</a>
				<p>{{project.description}}</p>
			</li>
		</ul>
		<p v-if="!projects">
			No projects
		</p>
	</body>
</html>
