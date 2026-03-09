import { SearchIcon } from "@heroicons/react/outline";
import { marketStats,assets,topMovers,newOnCoinbase } from "../data/explore";

const Explore = () => {
  return (
    <main className="w-full bg-[#f7f8fa]">
      <section className="mx-auto grid w-full max-w-325 grid-cols-1 gap-0 border-b border-r border-(--coinbase-gray-1) bg-white lg:grid-cols-[minmax(0,2fr)_340px]">
        <div className="divide-y divide-(--coinbase-gray-1)">
          <div className="p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-(--coinbase-black)">Explore crypto</h1>
                <p className="mt-1 text-base text-gray-600">Coinbase 50 Index is up 3.04% (24hrs)</p>
              </div>
              <div className="flex w-full items-center gap-3 rounded-full bg-gray-100 px-4 py-3 md:max-w-95">
                <SearchIcon className="h-5 w-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search for an asset"
                  className="w-full bg-transparent text-base outline-none placeholder:text-gray-500"
                />
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Market stats</h2>
              <span className="text-base text-gray-500">↔</span>
            </div>
            <p className="mt-2 text-base text-gray-600">
              The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is
              24.7 trillion, representing a 0.23% decrease from last week.
            </p>
            <a className="mt-2 inline-block text-base text-(--primary)" href="#">
              Read more
            </a>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {marketStats.map((stat) => (
                <article key={stat.title} className="rounded-xl bg-[#f6f7f9] p-3">
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="mt-1 text-base font-semibold">
                    {stat.value}{" "}
                    <span className={stat.trend === "down" ? "text-rose-500" : "text-emerald-600"}>
                      {stat.trend === "down" ? "↘" : "↗"} {stat.change}
                    </span>
                  </p>
                  <div className="mt-3 h-10 rounded bg-linear-to-r from-gray-200 to-gray-100" />
                </article>
              ))}
            </div>
          </div>

          <div className="p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-semibold">
                Crypto market prices <span className="text-base font-normal text-gray-500">18,533 assets</span>
              </h2>
            </div>
            <p className="mt-2 text-base text-gray-600">
              The overall crypto market is shrinking this week. As of today, the total crypto market capitalization is
              24.7 trillion, representing a 0.23% decrease from last week.
            </p>
            <a className="mt-2 inline-block text-base text-(--primary)" href="#">
              Read more
            </a>

            <div className="mt-4 flex flex-wrap gap-2">
              {["All assets", "1D", "GHS", "10 rows"].map((filter) => (
                <button key={filter} className="rounded-full bg-gray-100 px-4 py-2 text-base">
                  {filter}
                </button>
              ))}
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="min-w-190 w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-sm text-gray-500">
                    <th className="py-3">Asset</th>
                    <th className="py-3">Market price</th>
                    <th className="py-3">Change</th>
                    <th className="py-3">Mkt cap</th>
                    <th className="py-3">Volume</th>
                    <th className="py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset) => (
                    <tr key={asset.code} className="border-b border-gray-100 text-base">
                      <td className="py-4">
                        <div className="font-medium">{asset.name}</div>
                        <div className="text-sm text-gray-500">{asset.code}</div>
                      </td>
                      <td>{asset.price}</td>
                      <td className="text-emerald-600">↗ {asset.change}</td>
                      <td>{asset.mcap}</td>
                      <td>{asset.volume}</td>
                      <td>
                        <button className="rounded-full bg-(--primary) px-4 py-1.5 text-sm font-medium text-white">
                          Trade
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-(--primary) p-6 text-white">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-520px text-3xl font-medium leading-10">
                Create a Coinbase account to trade crypto. It&apos;s quick, easy, and secure.
              </p>
              <button className="rounded-full bg-white px-6 py-3 text-base font-medium text-(--coinbase-black)">
                Start Trading
              </button>
            </div>
          </div>
        </div>

        <aside className="border-t border-(--coinbase-gray-1) lg:sticky lg:top-28 lg:self-start lg:border-l lg:border-t-0">
          <div className="border-b border-(--coinbase-gray-1) bg-(--primary) p-5 text-white">
            <h3 className="text-lg font-semibold">Get started</h3>
            <p className="mt-1 text-base">Create your account today.</p>
            <button className="mt-4 rounded-full bg-white px-5 py-2 text-base font-medium text-(--coinbase-black)">
              Sign up
            </button>
          </div>

          <div className="border-b border-(--coinbase-gray-1) bg-white p-5">
            <h3 className="text-2xl font-semibold">Top movers</h3>
            <p className="mt-1 text-base text-gray-500">24h change</p>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {topMovers.map((mover) => (
                <article key={mover.name} className="rounded-xl bg-[#f6f7f9] p-3">
                  <p className="text-base font-medium">{mover.name}</p>
                  <p className="text-sm text-gray-600">{mover.price}</p>
                  <p className="text-base text-emerald-600">↗ {mover.change}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="bg-white p-5">
            <h3 className="text-2xl font-semibold">New on Coinbase</h3>
            <div className="mt-3 grid grid-cols-1 gap-3">
              {newOnCoinbase.map((item) => (
                <article key={item.name} className="rounded-xl bg-[#f6f7f9] p-3">
                  <p className="text-base font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Explore;
