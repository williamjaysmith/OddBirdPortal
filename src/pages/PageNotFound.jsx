import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen bg-grey-50 flex items-center justify-center p-12">
      <div className="bg-grey-0 border border-grey-100 rounded-lg p-12 flex-[0_1_96rem] text-center max-w-[90vw]">
        <Heading as="h1" className="mb-8">
          The page you are looking for could not be found 😢
        </Heading>
        <button 
          onClick={moveBack} 
          className="text-base px-6 py-3 bg-brand-600 text-brand-50 border-none rounded hover:bg-brand-700 transition-colors duration-200"
        >
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;