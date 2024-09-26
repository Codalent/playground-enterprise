import Link from "next/link";
import React from "react";
import ExternalLinkIcon from "@/image/icons/external-link-icon.svg";

interface CreditCardProps {
  exampleUrl: string;
}

const CreditCard: React.FC<CreditCardProps> = ({ exampleUrl }) => {
  return (
    <div>
      <p className="mb-2">Example Url</p>
      <Link href={exampleUrl} target="_blank">
        <button className="bg-white px-3 py-1 rounded-md hover:bg-brand-neutral-200">
          <ExternalLinkIcon height={20} width={20} />
        </button>
      </Link>
    </div>
  );
};

export default CreditCard;
