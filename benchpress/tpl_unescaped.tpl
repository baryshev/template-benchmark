<html>
	<head>
		<title>{{title}}</title>
	</head>
	<body>
		<p>{{text}}</p>
		{{{ each projects }}}
			<a href="{{../url}}">{{../name}}</a>
			<p>{{../description}}</p>
		{{{ end }}}
		{{{ if !projects.length }}}
			No projects
		{{{ end }}}
	</body>
</html>