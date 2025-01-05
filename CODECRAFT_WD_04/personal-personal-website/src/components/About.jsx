// src/About.jsx
const About = () => {
    return (
      <section className="bg-gray-100 py-16">

        <div className="max-w-7xl px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <div className="flex flex-col justify-start items-center">

            <p className="text-lg text-gray-700 mb-4 max-w-2xl">
                I&apos;m a web developer with a strong foundation in Computer Science and a passion for creating impactful web solutions.
            </p>

            <p className="text-lg text-gray-700 mb-4 max-w-2xl">
                <strong>Education:</strong> Bachelor’s Degree in Computer Science
            </p>

            <p className="text-lg text-gray-700 max-w-2xl">
                <strong>Experience:</strong> Worked on multiple projects focusing on front-end development, responsive designs, and modern web technologies.
            </p>

          </div>

        </div>

      </section>
    );
  }
  
  export default About;
  