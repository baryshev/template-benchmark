<html>
	<head>
		<title>{{ title|e }}</title>
	</head>
	<body>
		<p>{{ text|e }}</p>
		{% if projects.length %}
			{% for project in projects %}
				<a href="{{ project.url|e }}">{{ project.name|e }}</a>
				<p>{{ project.description|e }}</p>
			{% endfor %}
		{% else %}
			No projects
		{% endif %}
	</body>
</html>