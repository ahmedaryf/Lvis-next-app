import PageRapper from "./components/PageRapper";


export default function Home() {
  return (
    <PageRapper>
      <main className="min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900">
        <div className=" w-[100vw] overflow-hidden md:h-[90vh] relative">
          <video autoPlay loop muted className="w-screen h-auto" >
            <source src={"videos/mantaWeb.mov"} />
          </video> 
          <div className=" bg-black/20 py-2 w-full absolute top-[75%] md:top-[85%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h2 className="text-5xl md:text-8xl font-medium md:font-bold text-white text-center [text-shadow:_4px_1px_2px_rgb(0_0_0_/_60%)] ">LVIS Hotels</h2>
            <h1 className="text-center text-white md:text-2xl">Accommodation for visitors of Hanifaru bay</h1>
          </div>
        </div>
        <div>

        </div>
      </main>
    </PageRapper>
  );
}
