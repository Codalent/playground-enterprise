import { Layout } from "@/components/common";
import BGPurplePattern from "@/image/images/background/bg-pattern-purple.webp";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
const Page: FC<any> = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-brand-neutral-900 section--sm relative">
        <div className="container--boxed">
          <Image
            src={BGPurplePattern}
            width={580}
            height={321}
            alt=""
            className="absolute top-8 left-1/2 -translate-x-1/2"
          />
          <div className="relative z-10">
            <h1 className="heading--h1 flex flex-col items-center text-center mb-4 md:mb-7">
              <span className="text-white">KrakenD Enterprise</span>
              <span className="text-gradient--lavender leading-normal">
                Playground
              </span>
            </h1>
            <p
              className="text-brand-neutral-300 text--lg text-center mx-auto"
              style={{ maxWidth: "722px" }}
            >
              This is a demonstration environment that puts together the
              necessary pieces to get you started with our API Gateway, using
              example use-cases.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-brand-neutral-900">
          <div></div>
          <div></div>
        </div>
      </section>
      <section className="section--xl bg-brand-neutral-900">
        <div className="container--boxed flex items-center flex-col ">
          <h2 className="text-center heading--h2 text-white mb-6 md:mb-8">
            Questions?
          </h2>
          <Link href={"#"} className="button--primary">
            Ask Support
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
