

import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

async function quarterlyTitle({ params }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.from("quart").select("*");
  const paramsId = params.quarterlyTitle;

  // Знаходимо рядок з потрібним id
  const selectedRow = data.find((el) => el.id === Number(paramsId));

  return (
    <div className="w-11/12 mx-auto flex items-center justify-center">
      {selectedRow && (
        <div
          key={selectedRow.id}
          className="border-gray-800 border-solid rounded-xl w-full h-full m-5 p-3 text-center"
        >
          <p>{selectedRow.title}</p>
          <p>{selectedRow.id}</p>
        </div>
      )}
    </div>
  );
}

export default quarterlyTitle;

