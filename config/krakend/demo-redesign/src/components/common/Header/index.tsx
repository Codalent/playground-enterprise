import ExternalIcon from '@/image/images/icons/icon-external.svg'
import KrakendLogo from '@/image/images/logos/logo-krakend-bw.svg'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <section className="bg-brand-neutral-900">
      <div className="container--boxed-xl">
        <div className="relative px-0 py-4 lg:py-6  ">
          <div className="text-white flex items-center justify-between h-full">
            <div className="relative z-10">
              <Image src={KrakendLogo} alt="KrakendLogo" />
            </div>
            <div className="absolute inset-0 z-0 flex items-center justify-end">
              <ul className="flex items-center justify-between">
                <li className="mx-2 md:mx-4">
                  <Link href={''} className="font-medium text-base">
                    <span className="flex items-center">
                      Docs
                      <Image src={ExternalIcon} alt="" />
                    </span>
                  </Link>
                </li>
                <li className="mx-2 md:mx-4">
                  <Link href={''} className="font-medium text-base">
                    <span className="flex items-center">
                      Website
                      <Image src={ExternalIcon} alt="" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
