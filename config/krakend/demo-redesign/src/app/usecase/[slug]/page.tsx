"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Layout } from '@/components/common';
import userCases from "@/data/krakend.json";
import LeftArrow from "@/image/icons/arrow-left.svg";
import CopyIcon from "@/image/icons/copy.svg";
import 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-custom.css';

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
        navigator.clipboard.writeText(JSON.stringify(useCaseWithoutCustomFields, null, 2))
            .then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
            })
            .catch(err => console.error('Failed to copy!', err));
    };

    return (
        <Layout>
            <div className="bg-brand-neutral-900">
                <div className='container--boxed-xl py-8'>
                    <button onClick={() => router.back()} className="bg-[#171921] text-white rounded-full w-[129px] h-[45px] flex items-center justify-center gap-x-1">
                        <LeftArrow />
                        Go back
                    </button>

                    <div className="mt-10">
                        <p className='text-white text-[18px] mb-4 uppercase'>{useCase.custom_fields.tag}</p>
                        <h1 className=" text-3xl sm:text-[48px] sm:leading-snug font-bold mb-4 text-white">{useCase.custom_fields.name}</h1>
                        <p className="text-[#A2A9BE] font-[16px] mb-8">endpoint: {useCase.endpoint}</p>

                        <div className="flex gap-8">
                            <div className="sm:w-1/2 p-8 bg-[#282a36] rounded overflow-auto relative">
                                <button
                                    onClick={handleCopy}
                                    className={`absolute right-2 top-3 sm:right-6 sm:top-8 h-5 w-5 icon ${isCopied ? 'text-green-500' : 'text-brand-neutral-200'}`}
                                >
                                    <CopyIcon />
                                </button>
                                <pre className="text-sm text-gray-200">
                                    <code className="language-json">
                                        {JSON.stringify(useCaseWithoutCustomFields, null, 2)}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DemoPage;
