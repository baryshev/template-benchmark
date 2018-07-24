module.exports = function (data) {
    var projects;
    if (data.projects) {
        projects = data.projects.map(function (project) {
            return [
                {
                    block: "a",
                    attrs: {
                        href: project.href
                    },
                    content: project.name
                },
                {
                    block: "p",
                    content: project.description
                }
            ];
        });
    } else {
        projects = "No projects";
    }
    return {
        block: "html",
        content: [
            {
                block: "head",
                content: [{
                    block: "title",
                    content: data.title
                }]
            },
            {
                block: "body",
                content: [
                    {
                        block: "p",
                        content: data.text
                    },
                    projects
                ]
            }
        ]
    };
};