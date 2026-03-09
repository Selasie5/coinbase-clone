import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/coinbaseLogoNavigation-4.svg";
import Button from "../common/Button";
import { NAVIGATION } from "../../data/NavbarLinks";
import Megamenu from "./Megamenu";
import LanguageRegionPicker from "../common/LanguageRegionPicker";
import MarketSearchOverlay from "../search/MarketSearchOverlay";
import { useLocale } from "../../context/LocaleContext";
import { MenuIcon, XIcon, SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMenuIndex, setMobileMenuIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [localeOpen, setLocaleOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTab, setSearchTab] = useState("Top");
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);
  const searchCloseTimerRef = useRef(null);
  const { t } = useLocale();

  const cancelSearchClose = () => {
    if (!searchCloseTimerRef.current) return;
    clearTimeout(searchCloseTimerRef.current);
    searchCloseTimerRef.current = null;
  };

  const scheduleSearchClose = () => {
    cancelSearchClose();
    searchCloseTimerRef.current = setTimeout(() => {
      setSearchOpen(false);
      setSearchActive(false);
    }, 140);
  };

  useEffect(() => {
    if (searchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchActive]);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!searchRef.current) return;
      if (searchRef.current.contains(event.target)) return;
      setSearchActive(false);
      setSearchOpen(false);
    };
    const onEscape = (event) => {
      if (event.key === "Escape") {
        setSearchActive(false);
        setSearchOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
      cancelSearchClose();
    };
  }, []);

  const selectedMobileNav = mobileMenuIndex !== null ? NAVIGATION[mobileMenuIndex] : null;
  const mobileMenuItems = selectedMobileNav?.sections
    ? selectedMobileNav.sections.flatMap((section) => section.items)
    : [];

  return (
    <nav
      className="fixed z-50 flex w-full items-center justify-between border-b border-(--coinbase-gray-1) bg-white px-8 py-3"
      onMouseLeave={() => {
        setActiveIndex(null);
      }}
    >
      <div className="flex gap-2 items-center">
    <a href="/">
        <img src={logo} alt="Coinbase Logo" className="w-10 h-10" />
      </a>
    
      <div className="hidden md:flex gap-4">
        {NAVIGATION.map((nav, idx) => (
          <div
            key={nav.label}
            className="relative"
            onMouseEnter={() => nav.sections ? setActiveIndex(idx) : setActiveIndex(null)}
          >
            <a
              href={nav.href || "#"}
              className={`font-medium px-2 py-1 rounded ${activeIndex === idx ? "bg-gray-100 rounded-full py-4 px-5" : ""}`}
            >
              {nav.label}
            </a>
          </div>
        ))}
      </div>
    
    </div>
  
      <div className="flex gap-2 items-center">
        <div
          ref={searchRef}
          className="relative hidden md:block"
          onMouseEnter={cancelSearchClose}
          onMouseLeave={scheduleSearchClose}
        >
          <div
            className={`flex items-center gap-2 rounded-full transition-all duration-250 ease-out ${
              searchActive
                ? "w-105 border border-[#0052FF] bg-white px-4 py-2 opacity-100"
                : "w-11 bg-gray-100 p-2 opacity-95 hover:bg-gray-200"
            }`}
          >
            <button
              type="button"
              className={`rounded-full p-1 ${searchActive ? "text-[#0052FF]" : "text-(--coinbase-black)"}`}
              onClick={() => {
                setSearchActive(true);
                setSearchOpen(true);
              }}
              aria-label="Open search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <input
              ref={searchInputRef}
              value={searchQuery}
              onClick={() => setSearchOpen(true)}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setSearchOpen(true);
              }}
              placeholder="Search"
              className={`w-full bg-transparent text-base text-[#2d3444] outline-none placeholder:text-[#667087] transition-opacity duration-200 ${
                searchActive ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
          </div>
          {searchActive && searchOpen ? (
            <MarketSearchOverlay activeTab={searchTab} onTabChange={setSearchTab} searchQuery={searchQuery} />
          ) : null}
        </div>
        <LanguageRegionPicker
          triggerClassName="hidden md:flex bg-gray-100 p-2 rounded-full"
          triggerVariant="icon"
          panelDirection="down"
          openOnHover
          controlledOpen={localeOpen}
          onOpenChange={setLocaleOpen}
        />
        <Button children={t("signIn")} disabled className="hidden md:block" href="/SignIn" />
        <Button children={t("signUp")} primary className="hidden md:block" href="/SignUp" />
      
        <button
          className="md:hidden bg-gray-100 p-2 rounded-full"
          onClick={() => {
            setMobileOpen((prev) => {
              const next = !prev;
              if (!next) {
                setMobileMenuIndex(null);
              }
              return next;
            });
          }}
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>
    
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 flex flex-col p-4 md:hidden">
          {selectedMobileNav ? (
            <div>
              <button
                type="button"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-600"
                onClick={() => setMobileMenuIndex(null)}
              >
                <ChevronLeftIcon className="h-4 w-4" />
                Back
              </button>
              <h3 className="mb-2 text-base font-semibold text-(--coinbase-black)">{selectedMobileNav.label}</h3>
              <div className="space-y-1">
                {mobileMenuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block rounded-md px-1 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileMenuIndex(null);
                    }}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            NAVIGATION.map((nav, idx) => (
              <div key={nav.label} className="mb-1">
                {nav.sections ? (
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-md px-1 py-2 text-left text-base font-medium text-(--coinbase-black) hover:bg-gray-100"
                    onClick={() => setMobileMenuIndex(idx)}
                  >
                    <span>{nav.label}</span>
                    <ChevronRightIcon className="h-4 w-4 text-gray-500" />
                  </button>
                ) : (
                  <a
                    href={nav.href || "#"}
                    className="block rounded-md px-1 py-2 text-base font-medium text-(--coinbase-black) hover:bg-gray-100"
                    onClick={() => setMobileOpen(false)}
                  >
                    {nav.label}
                  </a>
                )}
              </div>
            ))
          )}
          <div className="flex gap-2 mt-4">
            <Button children={t("signIn")} disabled href="/SignIn" />
            <Button children={t("signUp")} primary href="/SignUp" />
          </div>
        </div>
      )}
      {activeIndex !== null && (
        <Megamenu activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      )}
    </nav>
  );
};

export default Navbar;
