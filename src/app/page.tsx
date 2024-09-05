import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black h-screen flex items-center justify-center">
      <div className="bg-gray-900 rounded-xl shadow-2xl p-10 max-w-xl text-center border border-gray-700">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          <span className="text-blue-400">{"<Dixon/>"}</span> Site Under
          Construction
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          I'm currently building something amazing. Check back soon ora connect
          with me!
        </p>
        <div className="bg-gray-800 p-4 rounded-lg mb-8">
          <code className="text-green-400 text-sm">
            {`// TODO: Finish building the portfolio website.`}
          </code>
          <br />
          <code className="text-green-400 text-sm">
            {`const releaseDate = "Coming Soon";`}
          </code>
        </div>
        <div className="flex justify-center space-x-6 text-2xl text-gray-400">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-300" />
          </a>
        </div>
        <div className="flex items-center justify-center space-x-2 mt-8">
          <div className="w-4 h-4 rounded-full bg-blue-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-green-500 animate-bounce delay-200"></div>
          <div className="w-4 h-4 rounded-full bg-red-500 animate-bounce delay-400"></div>
        </div>
      </div>
    </div>
  );
}
