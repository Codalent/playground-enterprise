const Footer = () => {
  return (
    <section className="bg-brand-neutral-900">
      <div className="container--boxed-xl flex flex-col items-center justify-betwee w-full">
        <div className="bg-slate-600 border w-full"></div>
        <div className="relative px-0 py-4 lg:pb-10 lg:pt-8 w-full">
          <div className=" text-white flex items-center justify-between">
            <p
              className="text-brand-neutral-300 text--lg"
              style={{ maxWidth: "722px" }}
            >
              Copyright 2017 - 2024 KRAKEND S.L.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
