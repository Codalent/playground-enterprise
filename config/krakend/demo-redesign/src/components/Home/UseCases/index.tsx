import userCases from "@/data/krakend.json";
import Link from "next/link";
import { useEffect, useState } from "react";
const UseCases = () => {
  const [useCases, setUseCases] = useState<any>({});

  // For create the structured data
  const createDataHandler = () => {
    const dataObj: any = {};
    userCases.endpoints.forEach((singleUserCase) => {
      if (
        singleUserCase?.extra_config?.["documentation/openapi"]?.tags?.length
      ) {
        singleUserCase?.extra_config?.["documentation/openapi"]?.tags.forEach(
          (tag) => {
            if (dataObj.hasOwnProperty(tag)) {
              dataObj[tag] = [...dataObj[tag], singleUserCase];
            } else {
              dataObj[tag] = [singleUserCase];
            }
          }
        );
      } else {
        dataObj["others"] = dataObj["others"]
          ? [...dataObj["others"], singleUserCase]
          : [singleUserCase];
      }
    });
    setUseCases(dataObj);
  };

  useEffect(() => {
    createDataHandler();
  }, []);

  return Object.keys(useCases).length > 0 ? (
    <div className="py-5 px-6 rounded-xl" style={{ background: "#171921" }}>
      <p className="text-brand-neutral-300 mb-6">
        Explore the demos for the following use cases:
      </p>

      {Object.entries(useCases).map((useCaseData: any) => {
        return (
          useCaseData[0] !== "others" && (
            <div
              className="p-3.5 rounded-md mb-4"
              style={{ background: "#1D202A" }}
              key={useCaseData[0]}
            >
              <p className="text-brand-neutral-300 mb-4">{useCaseData[0]}</p>
              <div className="flex flex-col gap-4">
                {useCaseData[1].map((useCase: any, index: number) => {
                  return (
                    <Link
                      href={`/${useCase.custom_fields.slug}`}
                      className="text-white p-3 rounded-md"
                      key={`${useCase.custom_fields.slug}-${index}`}
                      style={{ background: "#272B3A" }}
                    >
                      {useCase.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          )
        );
      })}

      <div className="flex flex-col gap-4">
        <p className="text-brand-neutral-300">Others</p>
        {useCases["others"].map((useCase: any, index: number) => {
          return (
            <Link
              href={`/${useCase.custom_fields.slug}`}
              key={`others-${useCase.custom_fields.slug}-${index}`}
              className="text-white p-3 rounded-md inline-block overflow-auto"
              style={{ background: "#272B3A" }}
            >
              {useCase.title}
            </Link>
          );
        })}
      </div>
    </div>
  ) : null;
};

export default UseCases;
