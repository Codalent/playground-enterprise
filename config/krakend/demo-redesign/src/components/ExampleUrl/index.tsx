import { useRef, useState } from "react";

interface ExampleUrlProps {
  exampleUrl?: string;
  placeholderValue?: string;
  helpText?:string;
}

const ExampleUrl: React.FC<ExampleUrlProps> = ({
  exampleUrl,
  placeholderValue,
  helpText,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonText, setButtonText] = useState<string>("Copy the url"); // Button text state
  const [isCopied, setIsCopied] = useState(false); // State to track if the URL is copied

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input
    }
  };

  const handleCopyUrl = () => {
    const inputValue = inputRef.current?.value || "";

    // Concatenate the URL and input value
    const fullUrl = `${exampleUrl}${inputValue}`;

    // Copy to clipboard
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        console.log("URL copied:", fullUrl);
        setButtonText("Copied!");
        setIsCopied(true);

        setTimeout(() => {
          setButtonText("Copy the url");
          setIsCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  return (
    <div className="mt-6">
      <p className="font-semibold mb-2">Example URL</p>
      <div
        className="bg-white py-2 px-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between"
        onClick={handleDivClick}
      >
        <div className="flex text-brand-neutral-600 w-9/12">
          <p>{exampleUrl || "No example url"}</p>
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholderValue}
            className="focus:outline-none w-full"
          />
        </div>

        <button
          className={`bg-brand-neutral-900 rounded-md px-6 py-2 mt-4 sm:mt-0 ${
            isCopied ? "bg-green-500" : ""
          }`}
          onClick={handleCopyUrl}
        >
          {buttonText}
        </button>
      </div>
      {helpText && <p className="mt-2 font-semibold">{helpText}</p>}
    </div>
  );
};

export default ExampleUrl;
