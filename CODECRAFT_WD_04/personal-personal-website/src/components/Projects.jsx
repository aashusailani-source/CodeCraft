
function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and TailwindCSS.",
      link: "#",
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with modern UI/UX design.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
