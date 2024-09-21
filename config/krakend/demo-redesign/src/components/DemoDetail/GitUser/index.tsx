import { useRef, useState } from "react";

const GitUser = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [buttonText, setButtonText] = useState<string>("Copy the url"); // Button text state
  const [isCopied, setIsCopied] = useState(false); // State to track if the URL is copied
  const urlExample = "http://localhost:8080/git/";

  const handleDivClick = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input
    }
  };

  const handleCopyUrl = () => {
    const inputValue = inputRef.current?.value || "";

    // Concatenate the URL and input value
    const fullUrl = `${urlExample}${inputValue}`;

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
        <div className="flex text-brand-neutral-600">
          <p>{urlExample}</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="your_github_username"
            className="focus:outline-none"
          />
        </div>

        <button
          className={`bg-brand-neutral-900 rounded-md px-6 py-2 ${
            isCopied ? "bg-green-500" : ""
          }`}
          onClick={handleCopyUrl}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default GitUser;
