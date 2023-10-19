import { getSingleWork } from "@/app/actions";
import Editproject from "@/components/Dashboard/Editproject";

export default async function Page({ params }: { params: { id: number } }) {
  const project = await getSingleWork(Number(params.id));

  return (
    <div className="w-full max-w-screen-lg mx-auto py-36 flex flex-wrap gap-5 items-center justify-center flex-col">
      <div className="w-full max-w-[300px] h-[300px]  border-[3px] border-black">
        <img
          className="w-full h-full object-cover max-w"
          src={project?.thumbnail}
          alt=""
        />
      </div>
      {project && <Editproject project={project} />}
    </div>
  );
}
