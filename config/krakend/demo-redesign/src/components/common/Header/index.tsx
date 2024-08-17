import ExternalIcon from "@/image/icons/icon-external.svg";
import KrakendLogo from "@/image/logos/logo-krakend-bw.svg";
import Link from "next/link";
const Header = () => {
  return (
    <section className="bg-brand-neutral-900">
      <div className="container--boxed-xl">
        <div className="relative px-0 py-4 lg:py-6  ">
          <div className="text-white flex items-center justify-between h-full">
            <div className="relative z-10">
              <Link href={""}>
                <KrakendLogo />
              </Link>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex gap-3 md:gap-6 items-center justify-between">
                <li>
                  <Link href={""} className="font-medium text-base">
                    <span className="flex items-center">
                      Docs
                      <ExternalIcon />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href={""} className="font-medium text-base">
                    <span className="flex items-center">
                      Website
                      <ExternalIcon />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
