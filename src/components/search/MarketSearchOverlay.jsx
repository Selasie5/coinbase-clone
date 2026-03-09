import SearchTabs from "./SearchTabs";
import SearchResultSection from "./SearchResultSection";
import { SEARCH_MARKET_DATA, SEARCH_TABS } from "./searchMarketData";

const MarketSearchOverlay = ({ activeTab, onTabChange, searchQuery }) => {
  const sections = SEARCH_MARKET_DATA[activeTab] || [];

  return (
    <div className="absolute right-0 top-full z-50 mt-0 w-[560px] rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_22px_44px_rgba(0,0,0,0.16)]">
      <SearchTabs tabs={SEARCH_TABS} activeTab={activeTab} onChange={onTabChange} />
      <div className="mt-3 border-t border-gray-200" />

      <div className="mt-3 max-h-[560px] overflow-y-auto pr-1">
        {sections.map((section) => (
          <SearchResultSection key={section.title} section={section} searchQuery={searchQuery} />
        ))}
      </div>
    </div>
  );
};

export default MarketSearchOverlay;
