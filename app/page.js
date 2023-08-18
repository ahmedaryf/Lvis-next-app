import PageRapper from "./components/PageRapper";


export default function Home() {
  return (
    <PageRapper>
      <main className="min-h-screen bg-gradient-to-r from-cyan-300 to-blue-500 dark:from-cyan-800 dark:to-blue-900">
        <div className=" w-[100vw] overflow-hidden md:h-[70vh]">
          <video autoPlay loop muted className="w-screen h-auto" >
            <source src={"videos/mantaWeb.mov"} />
          </video> 
        </div>
        <div>
          <h1 className="pt-6 text-5xl md:text-7xl md:font-bold text-white mt-5 text-center">LVIS Hotels</h1>

        </div>


      </main>
    </PageRapper>
  );
}
