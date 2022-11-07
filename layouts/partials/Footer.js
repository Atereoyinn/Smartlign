import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { Smartlign,Atereoyin } = config.params.copyright;
  return (
    <footer className="section bg-theme-dark">
      <div className="container text-center">
        {/* footer menu */}
        <ul className="mb-8 space-x-4">
          {menu.footer.map((menu) => (
            <li className="inline-block" key={menu.name}>
              <Link href={menu.url} passHref>
                <a className="p-4 text-light hover:text-white">{menu.name}</a>
              </Link>
            </li>
          ))}
        </ul>
        {/* social icons */}
        <Social source={social} className="social-icons mb-8" />
        {/* copyright */}
        {markdownify(Smartlign, "p", "text-light")}
        {markdownify(Atereoyin, "p", "text-light")}
      </div>
    </footer>
  );
};

export default Footer;
