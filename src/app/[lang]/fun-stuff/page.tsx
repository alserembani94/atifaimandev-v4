import Image from "next/image";
import { IoBuild } from "react-icons/io5";
import { getDictionary } from "../../../utils/get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function FunStuff({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <section className="flex flex-col gap-8 items-center justify-center flex-1">
        <Image
          src="/images/maintenance.png"
          alt="Under construction"
          width={800}
          height={253}
        />
        <div className="flex flex-col gap-4 bg-slate-700 bg-opacity-30 backdrop-blur-md border border-slate-700 rounded-md p-4 max-w-lg text-center items-center">
          <h1>{dict.nav.fun_stuff}</h1>
          <div className="flex bg-yellow-800 px-4 py-2 rounded-lg font-bold items-center gap-2 justify-center">
            <IoBuild />
            <p>{dict.maintenance.under_construction}</p>
          </div>
          <p
            dangerouslySetInnerHTML={{ __html: dict.maintenance.build_pixels }}
          />
        </div>
      </section>
    </>
  );
}
