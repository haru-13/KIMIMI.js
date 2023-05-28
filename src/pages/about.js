import Image from "next/image";
import Container from "/components/container.js";
import Hero from "/components/hero.js";
import PostBody from "/components/post-body.js";
import Contact from "components/contact.js";
import Meta from "components/meta.js";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column.js";
import aboutImage from "src/images/About-image.jpg";


export default function About() {
  return (
    <Container>
      <Meta
        pageTitle="About"
        pageDesc="About activities"
        pageImg={aboutImage.src}
        pageImgW={aboutImage.width}
        pageImgH={aboutImage.hight}
      />
      <Hero title="About"
        subtitle="About activities" />
      <figure>
        <Image
          src={aboutImage}
          layout="responsive"
          sizes="(min-width: 1152px) 1152px, 100vw"
          priority
          placeholder="blur"
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              KIMIMIは海外から輸入した古着などを低価格で販売しています。<br />
              現在、ネット販売に力を入れており、商品を丁寧に梱包し、迅速な発送を心がけています。
              毎日、輸入した商品を更新しているのでぜひ見にきてください。
            </p>
            <h2>目指す活動</h2>
            <p>
              私自身がお金のない時に、服を買いたくても買えない時期がありました。<br />
              そのため、お金がないときでも買いやすい商品を作りたいと考えました。
              KIMIMIでは、品質の良い商品を低価格で多くの人にお届けできるように努力しております。
            </p>
            <h3>チャレンジ</h3>
            <p>若い年代の方の中には「古着は嫌いだ」という人もいると思います。<br />
              今後KIMIMIは、自社ブランドを立ち上げることで低価格で品質の良い商品を、多くの人に届けられる様にしていきたいと考えています。<br />
              多くのアパレルブランドの中で、お金がないときでもお客様が服を「選べる」そんな会社にしていきたいと考えています。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
