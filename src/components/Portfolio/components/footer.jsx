import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const iconSize = 22;
  const socialLinks = [
    {
      href: "https://github.com/ksatishreddy76",
      icon: <Github size={iconSize} />,
    },
    {
      href: "https://www.linkedin.com/in/satish-reddy-90870b233/",
      icon: <Linkedin size={iconSize} />,
    },
    {
      href: "https://www.linkedin.com/in/satish-reddy-90870b233/",
      icon: <Twitter size={iconSize} />,
    },
  ];

  return (
    <div className="p-3 py-9 border-t-primary">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2 justify-center sm:justify-start col-span-2 md:col-span-1">
            <div className=" text-xl  port-gradient-bg rounded-full p-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 640 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-semibold">Kolanu Satish Reddy</div>
              <div className="text-xs">Frontend React JS Developer</div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-2 rounded-full ">
              <ul className="flex items-center ">
                {socialLinks.map((link, idx) => (
                  <li
                    className="mx-2 menu-list-hover-bg rounded-full p-2"
                    key={`social-link-${idx}`}
                  >
                    <a href={link.href} target="_blank" rel="noreferrer">
                      {link.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center sm:justify-end">
            <div className="flex flex-col items-start gap-1">
              <span className="text-base font-semibold mb-0">
                © 2025 Satish Reddy
              </span>{" "}
              <span className="text-sm">Frontend React Developer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
