import { useMemo, useState } from "react";
import { MARKET_MOVER_TABS, MARKET_MOVERS_BY_TAB } from "./marketMoversData";

const MarketMoversCard = () => {
  const [activeTab, setActiveTab] = useState("Tradable");
  const rows = useMemo(() => MARKET_MOVERS_BY_TAB[activeTab] || [], [activeTab]);

  return (
    <aside className="w-full max-w-[620px] rounded-[2.2rem] bg-[#04080f] px-6 py-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
      <div className="mb-5 flex items-center gap-3">
        {MARKET_MOVER_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-4 py-2 text-base font-semibold transition-colors ${
              tab === activeTab ? "bg-[#252b36] text-white" : "bg-transparent text-white/95 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {rows.map((row) => (
          <article key={row.name} className="grid grid-cols-[1.7fr_1fr] items-center gap-4 rounded-xl px-1 py-1">
            <div className="flex items-center gap-4">
              <span
                className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white ${row.iconClass}`}
              >
                {row.icon}
              </span>
              <p className="text-lg leading-7 font-medium">{row.name}</p>
            </div>

            <div className="text-right">
              <p className="text-lg leading-7 text-white">{row.price}</p>
              <p
                className={`text-base leading-6 ${
                  row.trend === "down" ? "text-rose-400" : row.trend === "flat" ? "text-gray-300" : "text-emerald-400"
                }`}
              >
                {row.trend === "down" ? "↙" : row.trend === "flat" ? "--" : "↗"} {row.change}
              </p>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
};

export default MarketMoversCard;
