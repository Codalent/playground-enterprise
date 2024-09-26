import integrationData from "@/data/integrations.json";
import Image from "next/image";
import Link from "next/link";

const Integration = () => {
  return (
    <div
      className="py-5 px-6 rounded-xl flex flex-col gap-10"
      style={{ background: "#171921" }}
    >
      {integrationData.integrations.map((singleIntegrationData, index) => {
        return (
          <div key={index}>
            <Image
              src={singleIntegrationData.iconUrl}
              height={55}
              width={51}
              alt=""
              className="mb-4"
            />
            <Link
              href={singleIntegrationData.url}
              className="font-medium mb-2 inline-block text-white"
            >
              {singleIntegrationData.title}
            </Link>
            <div className="flex flex-col gap-4 mb-4 last:mb-0">
              {singleIntegrationData.description.map((description, index) => {
                return (
                  <p
                    className="text-brand-neutral-300"
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                  />
                );
              })}
            </div>
            {singleIntegrationData?.command && (
              <div className=" ">
                <pre className="no-scrollbar overflow-auto p-4 text-brand-neutral-50 bg-brand-neutral-600 rounded-md">
                  {singleIntegrationData.command}
                </pre>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Integration;
