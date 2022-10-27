import { markdownify } from "@lib/utils/textConverter";
import { shortcodes } from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";
import Social from "./components/Social";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, social } = frontmatter;

  return (
    <section className="section">
      <div className="container text-center">
        {image && (
          <div className="img-cover mb-8">
            <Image
              src={image}
              width={920}
              height={515}
              alt={title}
              className="rounded-lg"
            />
          </div>
        )}
        {markdownify(title, "h1", "h2")}
        <Social source={social} className="social-icons-simple my-8" />

        <div className="content">
          <MDXRemote {...mdxContent} components={shortcodes} />
          {/*<p>
            Smartlign is your one-stop resource for all the information you need
            about technology, including helpful tips. We aim to keep you
            up-to-date with the latest gadgets and tech trends. Additionally, we
            will feature entertainment news, guides, and buzz. With this
            information, we strive to engage readers by delivering simple but
            brilliant articles. For the sake of our readers, quality will take
            precedence over quantity. Moreover, we encourage our writers to
            bring their creative views on Smartlign in a fun, interactive way.
            Finally, the Smartlign team is keen on moving fast and introducing
            the platform to readers as one of the best.
          </p>*/}
        </div>
      </div>
    </section>
  );
};
export default About;
