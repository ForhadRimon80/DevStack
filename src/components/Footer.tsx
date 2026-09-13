import Logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <>
      {/* Top Divider */}
      <div className="mt-16 border-t border-[#edf0f5] sm:mt-20 lg:mt-25" />

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-12 md:py-14 lg:py-16">
          {/* Main Footer */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-[2.1fr_1fr_1fr_1fr] lg:gap-12 xl:gap-16">
            {/* Brand */}
            <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-left">
              {/* Logo */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={Logo}
                  alt="DevStack Logo"
                  className="h-auto w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40"
                />
              </div>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#71809c] sm:mt-5 sm:text-[15px] md:text-base md:leading-[1.55] lg:mx-0">
                Curated tools, technologies, and resources for developers
                building modern software.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:mt-7 sm:gap-x-5 lg:justify-start">
                <a
                  href="#"
                  className="text-sm font-medium text-[#3f4d66] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                  GitHub
                </a>

                <span className="inline text-[#3f4d66] md:hidden">•</span>

                <a
                  href="#"
                  className="text-sm font-medium text-[#3f4d66] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                  Twitter
                </a>

                <span className="inline text-[#3f4d66] md:hidden">•</span>

                <a
                  href="#"
                  className="text-sm font-medium text-[#3f4d66] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Product - Desktop Only */}
            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold tracking-[0.2px] text-[#182238] sm:text-base">
                PRODUCT
              </h3>

              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Technologies
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Project
                  </a>
                </li>
              </ul>
            </div>

            {/* Company - Desktop Only */}
            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold tracking-[0.2px] text-[#182238] sm:text-base">
                COMPANY
              </h3>

              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Contact
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal - Desktop Only */}
            <div className="hidden lg:block">
              <h3 className="text-sm font-semibold tracking-[0.2px] text-[#182238] sm:text-base">
                LEGAL
              </h3>

              <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-sm text-[#71809c] transition-colors duration-200 hover:text-[#e52b82] sm:text-base">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="mt-10 border-t border-[#edf0f5] sm:mt-12 md:mt-14 lg:mt-16" />

          {/* Bottom Bar */}
          <div className="flex flex-col items-center gap-4 pt-7 text-center text-sm text-[#98a7c0] sm:flex-row sm:justify-between sm:gap-5 sm:pt-8 sm:text-left md:text-base lg:pt-10">
            {/* Copyright */}
            <p>© 2026 Dev Stack. All rights reserved.</p>

            {/* Privacy / Terms */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-end sm:gap-x-8">
              <a
                href="#"
                className="transition-colors duration-200 hover:text-[#e52b82]">
                Privacy
              </a>

              <a
                href="#"
                className="transition-colors duration-200 hover:text-[#e52b82]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
