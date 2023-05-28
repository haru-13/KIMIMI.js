
import Container from "/components/container.js";
import Hero from "/components/hero.js";
import PostBody from "/components/post-body.js";
import Contact from "components/contact.js";
import Meta from "components/meta.js";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column.js";
import Accordion from "/components/accordion";



export default function Faq() {
  return (
    <Container>
      <Meta
        pageTitle="FAQ"
        pageDesc="Frequently Asked Questions"
      />
      <Hero title="FAQ"
        subtitle="Frequently Asked Questions" />
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <h2>FAQ</h2>
            <Accordion heading="商品のご購入について">
              <p>
                現在は、他のサイトにて商品の販売をさせていただいております。
              </p>
            </Accordion>
            <Accordion heading="商品の発送について">
              <p>発送は仕入れ作業などにより多少遅れることがございます。お急ぎで商品を発送希望の場合は、事前にご連絡ください。</p>
            </Accordion>
            <Accordion heading="商品の状態について">
              <p>
                古着をご購入検討のお客様、古着のため汚れや傷などがございます。汚れ傷に関しましては、写真にてご確認ください。
                また、写真以外に多少の汚れがついている場合がございます。神経質な方はご購入をご遠慮ください。
              </p>
            </Accordion>
            
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  );
}
