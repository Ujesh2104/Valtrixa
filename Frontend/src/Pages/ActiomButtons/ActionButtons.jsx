import { Download, Save } from "lucide-react";
const ActionButtons = () => {
    return (
        <section className="mt-8 mb-10 flex justify-end gap-5">
            <button className="flex items-center gap-3 rounded-xl border border-violet-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-600">
                <Save size={20} />
                Save Analysis
            </button>
            <button className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105">
                <Download size={20} />
                Generate PDF
            </button>
        </section>
    );
};

export default ActionButtons;