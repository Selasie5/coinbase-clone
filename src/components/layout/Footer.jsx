import { footerLinks } from "../../data/footerLinks";
import logo from "../../assets/coinbaseLogoNavigation-4.svg";
import LanguageRegionPicker from "../common/LanguageRegionPicker";
import { useLocale } from "../../context/LocaleContext";
import { Instagram, Linkedin, Music2, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useLocale();

  return (
    <footer className="w-full bg-gray-100 px-8 py-10 md:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 md:flex-row md:gap-16">
        <div className="flex shrink-0 flex-col md:min-h-[620px] md:w-[160px] md:justify-between">
          <img src={logo} alt="" className="h-10 w-10" />
         
        </div>

        <div className="grid flex-1 grid-cols-1 gap-10 md:grid-cols-4 md:gap-14">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 font-bold">{section.title}</h3>

              <ul className="space-y-2 text-gray-600">
                {section.links?.map((link, i) => (
                  <li key={i} className="cursor-pointer transition hover:text-black">
                    {link}
                  </li>
                ))}
              </ul>

              {section.subsections?.map((sub, i) => (
                <div key={i} className="mt-8">
                  <h4 className="mb-2 font-semibold text-black">{sub.subtitle}</h4>
                  <ul className="space-y-2 text-gray-600">
                    {sub.links.map((link, j) => (
                      <li key={j} className="cursor-pointer text-base text-gray-500 transition hover:text-black">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center gap-8 text-gray-900 md:mt-20">
            <a href="#" aria-label="X" className="hover:text-black/70">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-black/70">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-black/70">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-black/70">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
      <div className="mx-auto mt-8 max-w-[1280px]">
        <hr className="w-full border border-gray-200" />
      </div>

      <div className="mx-auto mt-5 flex max-w-[1280px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <p>&copy; {new Date().getFullYear()} Coinbase</p>
          <a href="" className="text-gray-500">
            &middot; {t("privacy")}
          </a>
          <a href="" className="text-gray-500">
            &middot; {t("terms")}
          </a>
        </div>

        <div className="flex gap-2 md:justify-end">
          <LanguageRegionPicker />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
