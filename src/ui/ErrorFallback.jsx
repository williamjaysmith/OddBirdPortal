import Heading from "./Heading";
import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen bg-grey-50 flex items-center justify-center p-12">
      <div className="bg-grey-0 border border-grey-100 rounded-lg p-12 flex-[0_1_96rem] text-center max-w-[90vw]">
        <Heading as="h1" className="mb-4">Something went wrong 🧐</Heading>
        <p className="font-mono mb-8 text-grey-500">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;