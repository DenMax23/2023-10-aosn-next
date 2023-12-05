
  import { cookies } from 'next/headers';
  import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
  import Link from 'next/link';



async function quarterly()  {
  const supabase = createServerComponentClient({cookies});
    const {data } = await supabase.from("quart").select("*");
  return  (
    <main className="">
      <div className=" w-11/12 mx-auto ">
      {/* <pre> {JSON.stringify(data, null, 2)}</pre> */}
      {data.map(el => (
      <div key={el.id} className='border-gray-800 border-solid rounded-xl'>
      <p>{el.title}</p>
      <p>{el.description_g}</p>
      <p>{el.name_g}</p>
      <Link href={'/'+ el.title}>
        <button>Більше інформації</button></Link>
      </div>
      ))}
      </div>
    </main>
  );
}

export default quarterly
