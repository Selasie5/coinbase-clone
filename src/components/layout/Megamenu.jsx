import React from "react";
import {
  ChipIcon,
  ChartBarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  ExternalLinkIcon,
  SparklesIcon,
} from "@heroicons/react/outline";
import { NAVIGATION } from "../../data/NavbarLinks";
import navigationUpsell from "../../assets/navigation-upsell.png";
import companyUpsell from "../../assets/company_upsell.png";
import institutionsUpsell from "../../assets/institutions_upsell.png";
import developersUpsell from "../../assets/developers_upsell_cdxv2_2.jpg";
import paymentsUpsell from "../../assets/onchain_payment_protocol.png";

const Megamenu = ({ activeIndex, setActiveIndex }) => {
  if (activeIndex === null || !NAVIGATION[activeIndex].sections) return null;
  const nav = NAVIGATION[activeIndex];

  const promoImageByLabel = {
    Individuals: navigationUpsell,
    Businesses: paymentsUpsell,
    Institutions: institutionsUpsell,
    Developers: developersUpsell,
    Company: companyUpsell,
  };

  const iconCycle = [
    ChartBarIcon,
    SparklesIcon,
    CurrencyDollarIcon,
    ChipIcon,
    ExternalLinkIcon,
    CreditCardIcon,
  ];

  return (
    <div
      className="absolute left-0 top-full z-50 w-full max-h-154 overflow-y-auto border-t border-(--coinbase-gray-2) bg-white shadow-[0_20px_40px_rgba(0,0,0,0.07)]"
      onMouseEnter={() => setActiveIndex(activeIndex)}
      onMouseLeave={() => setActiveIndex(null)}
    >
      <div className="mx-auto max-w-7xl px-8 py-8">
        <div className="grid grid-cols-[1fr_1fr_1.2fr] gap-10">
          {nav.sections.slice(0, 2).map((section, sectionIndex) => (
            <ul key={sectionIndex} className="space-y-2">
              {section.items.map((item, itemIndex) => {
                const Icon = iconCycle[(sectionIndex * 6 + itemIndex) % iconCycle.length];
                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="flex items-start gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-(--coinbase-gray-3)"
                    >
                      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--coinbase-gray-1)">
                        <Icon className="h-5 w-5 text-(--secondary)" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-base leading-6 font-medium text-(--secondary)">
                          {item.title}
                        </span>
                        <span className="block pt-1 text-base leading-6 text-[#5b6478]">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          ))}

          {nav.promo && (
            <div className="pt-3">
              <a href={nav.promo.href} className="flex items-center gap-7 rounded-2xl p-2 transition-colors hover:bg-(--coinbase-gray-3) group">
                <img
                  src={promoImageByLabel[nav.label] || navigationUpsell}
                  alt={nav.promo.title}
                  className="h-28 w-32 shrink-0 rounded-3xl object-cover"
                />
                <div className="pt-1">
                  <h4 className="text-[28px] leading-7 font-medium text-(--secondary) group-hover:underline">{nav.promo.title}</h4>
                  <p className="mt-1 text-[28px] leading-6 text-[#4a5670] group-hover:underline">{nav.promo.description}</p>
                  <span className="mt-3 inline-block text-base font-semibold text-(--secondary) underline underline-offset-4">
                    {nav.promo.cta}
                  </span>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
