<html>
	<head>
		<title>{title}</title>
	</head>
	<body>
		<p>{text}</p>
		<!-- BEGIN projects -->
			<a href="{projects.url}">{projects.name}</a>
			<p>{projects.description}</p>
		<!-- END projects -->
		<!-- IF !projects.length -->
			No projects
		<!-- ENDIF !projects.length -->
	</body>
</html>