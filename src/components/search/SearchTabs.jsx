const SearchTabs = ({ tabs, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onChange(tab)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
            activeTab === tab ? "bg-[#232833] text-white" : "bg-gray-100 text-[#232833] hover:bg-gray-200"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SearchTabs;
