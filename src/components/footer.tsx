const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto py-20">
      <div className="grid md:grid-cols-4 gap-10">

        <div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              DS
            </div>

            <h2 className="text-3xl font-bold">
              Dev<span className="text-pink-500">Stack</span>
            </h2>
          </div>

          <p className="text-gray-500 mt-6">
            Curated tools, technologies, and resources for developers building modern software.
          </p>

          <div className="flex gap-6 mt-6">
            <span>GitHub</span>
            <span>Twitter</span>
            <span>LinkedIn</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">PRODUCT</h3>
          <p>Home</p>
          <p>Technologies</p>
          <p>Projects</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">COMPANY</h3>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">LEGAL</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

      </div>

      <hr className="my-10" />

      <div className="flex justify-between">
        <p>© 2026 DevStack. All rights reserved.</p>

        <div className="flex gap-5">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
