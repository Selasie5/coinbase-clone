const SearchResultSection = ({ section, searchQuery }) => {
  const normalized = searchQuery.trim().toLowerCase();
  const filteredItems = section.items.filter((item) => {
    if (!normalized) return true;
    return item.name.toLowerCase().includes(normalized) || item.code.toLowerCase().includes(normalized);
  });

  if (!filteredItems.length) return null;

  return (
    <div className="pt-4">
      <h4 className="mb-2 text-sm font-semibold tracking-wide text-[#596172]">{section.title}</h4>
      <div className="space-y-1">
        {filteredItems.map((item) => (
          <article
            key={`${section.title}-${item.name}`}
            className="grid grid-cols-[2.4fr_1.5fr_1.1fr] items-center rounded-xl px-2 py-2 hover:bg-[#f3f4f6]"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-white ${item.symbolClass}`}
              >
                {item.symbol}
              </span>
              <div>
                <p className="text-base leading-6 font-medium text-[#1d232f]">
                  {item.name}
                  {item.rank ? <span className="ml-2 rounded bg-gray-200 px-2 py-0.5 text-xs">{item.rank}</span> : null}
                </p>
                <p className="text-sm text-[#626b7f]">{item.code}</p>
              </div>
            </div>

            <div className="text-sm text-[#4e5769]">
              <p>{item.volume}</p>
              <p>{item.marketCap}</p>
            </div>

            <div className="text-right">
              <p className="text-sm text-[#2a2f3a]">{item.price}</p>
              <p className="text-sm text-emerald-600">up {item.change}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SearchResultSection;
