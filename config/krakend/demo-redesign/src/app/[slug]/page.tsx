"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Layout } from "@/components/common";
import userCases from "@/data/krakend.json";
import LeftArrow from "@/image/icons/arrow-left.svg";
import CopyIcon from "@/image/icons/copy.svg";
import Prism from "prismjs";
import GitUser from "@/components/DemoDetail/GitUser"

require("prismjs/components/prism-json");
// import 'prismjs/components/prism-json';
// import 'prismjs/themes/prism-custom.css';

const componentMapping = {GitUser,};

const DemoPage = () => {
  const { slug } = useParams();
  const router = useRouter();
  const [isCopied, setIsCopied] = useState(false);

  // Finding specific use case based on the slug
  const useCase = userCases.endpoints.find(
    (uc) => uc.custom_fields.slug === slug
  );

  if (!useCase) {
    return <p>Use Case not found</p>;
  }

  // Created a new object excluding the custom_fields property
  const { custom_fields, ...useCaseWithoutCustomFields } = useCase;
  // Initialize Prism.js syntax highlighting
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(JSON.stringify(useCaseWithoutCustomFields, null, 2))
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      })
      .catch((err) => console.error("Failed to copy!", err));
  };

  const ComponentToRender = componentMapping[custom_fields.component];

  return (
    <Layout>
      <div className="bg-brand-neutral-900 text-white">
        <div className="container--boxed-xl py-8">
          <button
            onClick={() => router.back()}
            className="bg-brand-neutral-600 rounded-full px-4 py-2 flex items-center justify-center gap-1"
          >
            <LeftArrow />
            Go back
          </button>

          <div className="mt-10">
            <p className="uppercase mb-2">{useCase.custom_fields.tag}</p>
            <h1 className="heading--h2 mb-10">{useCase.custom_fields.name}</h1>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 overflow-auto">
                <p className="font-semibold mb-2">KrakenD Config</p>
                <pre className="text-sm relative">
                  <button
                    className={`absolute right-2 top-3 sm:right-6 sm:top-4 icon ${
                      isCopied ? "text-green-500" : "text-brand-neutral-200"
                    }`}
                    onClick={handleCopy}
                  >
                    <CopyIcon width={20} height={20} />
                  </button>
                  <code className="language-json">
                    {JSON.stringify(useCaseWithoutCustomFields, null, 2)}
                  </code>
                </pre>
              </div>
              <div className="lg:w-1/2">
                <p className="font-semibold mb-2">Endpoint</p>
                <p>{useCase.endpoint}</p>

                <div className="my-10">
                  <p className="font-semibold mb-2">About this demo</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        custom_fields.instructions ||
                        "<p>No instructions available</p>",
                    }}
                  />
                </div>

                <div>{ComponentToRender && <ComponentToRender />}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;
