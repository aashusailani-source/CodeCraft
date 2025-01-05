
function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-500 to-green-500 text-white h-screen flex items-center justify-center text-center">
      <div>
        <img
          src="./assets/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Aashu Sailani</h1>
        <p className="text-lg mb-6">
          A passionate web developer skilled in building responsive and visually appealing websites.
        </p>
        <a
          href="#projects"
          className="bg-white text-blue-600 px-6 py-3 font-semibold rounded shadow hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default Hero;
