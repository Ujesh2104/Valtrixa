import { BrainCircuit, Sparkles } from "lucide-react"

const AIScore = () => {
  return (
    <section className="mt-8 rounded-2xl border border-[#1F2940] bg-[#0B1020] p-8">
        <div className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold text-white">
                    YOUR PRODUCT SCORE
                </h2>
                <p className="mt-2 text-gray-400">
                    YOUR AI BASED PRODUCT PREDICTION AND SCORE 
                </p>
            </div>
            <BrainCircuit size={36} className="text-violet-500 rotate-90"/>
        </div>
        <div className="mt-10 flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-[10px]">
                <div className="text-center">
                    <Sparkles size={30} className="mx-auto text-violet-600"/>
                        <h1 className="mt-3 text-6xl font-extrabold text-white">94</h1>
                        <p className="text-gray-400">ANALYSIS SCORE</p>
                </div>
            </div>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-7">
            <div className="rounded-xl bg-[#111827] p-5">
                <p className="text-gray-400">SUCCESS PROBABILITY</p>
                <h2 className="mt-2 text-2xl font-bold text-green-500">91%</h2>
            </div>
            <div className="rounded-xl bg-[#111827] p-5">
                <p className="text-gray-400 uppercase">Confidence</p>
                <h2 className="mt-2 text-2xl font-bold text-violet-500">VERY HIGH</h2>
            </div>
            <div className="rounded-xl bg-[#111827] p-5">
                <p className="text-gray-400 uppercase">RISK</p>
                <h2 className="mt-2 text-2xl font-bold text-cyan-500">LOW</h2>
            </div>
        </div>
    </section>
  )
}

export default AIScore
