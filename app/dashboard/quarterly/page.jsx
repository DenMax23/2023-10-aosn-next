import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

async function quarterly() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("quart").select("*");
  return (
    <main className="">
      <div className=" w-11/12 mx-auto flex flex-wrap   ">
        {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}
        {data.map((el) => (
          <div key={el.id} className="border-gray-800 border-solid rounded-xl w-52 m-5 p-3 text-center">
            <p>{el.title}</p>
            {/* <p>{el.description_g}</p> */}
            {/* <p>{el.name_g}</p> */}
            <Link href={"/" + el.title}>
              <button className=" hover:bg-slate-600 bg-slate-400 rounded-xl p-2 m-5">Більше інформації</button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default quarterly;
