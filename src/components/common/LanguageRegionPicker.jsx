import { useEffect, useRef, useState } from "react";
import { CheckIcon, GlobeAltIcon, SearchIcon } from "@heroicons/react/outline";
import { useLocale } from "../../context/LocaleContext";

const LanguageRegionPicker = ({
  showTrigger = true,
  triggerClassName = "",
  triggerVariant = "label",
  panelDirection = "up",
  openOnHover = false,
  controlledOpen,
  onOpenChange,
}) => {
  const [localOpen, setLocalOpen] = useState(false);
  const rootRef = useRef(null);
  const {
    selectedLocale,
    selectedLocaleId,
    setSelectedLocaleId,
    searchTerm,
    setSearchTerm,
    filteredOptions,
    t,
  } = useLocale();

  const isControlled = typeof controlledOpen === "boolean";
  const isOpen = isControlled ? controlledOpen : localOpen;

  const setOpen = (value) => {
    if (isControlled) {
      if (onOpenChange) onOpenChange(value);
      return;
    }
    setLocalOpen(value);
    if (onOpenChange) onOpenChange(value);
  };

  useEffect(() => {
    if (!showTrigger) return undefined;
    const onPointerDown = (event) => {
      if (!rootRef.current) return;
      if (rootRef.current.contains(event.target)) return;
      setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [showTrigger]);

  const panelPositionClass = panelDirection === "down" ? "top-15 right-0" : "bottom-10 right-0";

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => {
        if (openOnHover) setOpen(true);
      }}
      onMouseLeave={() => {
        if (openOnHover) setOpen(false);
      }}
    >
      {showTrigger ? (
        <button
          type="button"
          className={triggerClassName || "flex items-center gap-2 text-gray-600"}
          onClick={() => {
            if (!openOnHover) setOpen(!isOpen);
          }}
        >
          <GlobeAltIcon className={triggerVariant === "icon" ? "h-5 w-5" : "h-5 w-5"} />
          {triggerVariant === "label" ? (
            <>
              <span>{selectedLocale.region}</span>
              <span>&middot;</span>
              <span>{selectedLocale.language}</span>
            </>
          ) : null}
        </button>
      ) : null}

      {isOpen ? (
        <div
          className={`absolute z-50 w-[360px] rounded-2xl border border-gray-200 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)] ${panelPositionClass}`}
          onMouseEnter={() => {
            if (isControlled && onOpenChange) onOpenChange(true);
          }}
        >
          <h3 className="text-base font-semibold text-gray-600">{t("languageRegionTitle")}</h3>

          <div className="mt-4 flex items-center gap-2 rounded-full bg-[var(--coinbase-gray-2)] px-4 py-3">
            <SearchIcon className="h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder={t("search")}
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full bg-transparent text-base text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          <ul className="mt-4 max-h-80 overflow-y-auto pr-1">
            {filteredOptions.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onMouseDown={(event) => {
                    event.preventDefault();
                    setSelectedLocaleId(item.id);
                    setOpen(false);
                    setSearchTerm("");
                  }}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors ${
                    item.id === selectedLocaleId
                      ? "bg-gray-200"
                      : "hover:bg-[var(--coinbase-gray-3)]"
                  }`}
                >
                  <span>
                    <span className="block text-base leading-6 font-semibold text-[var(--coinbase-black)]">
                      {item.language}
                    </span>
                    <span className="block text-base text-gray-500">{item.region}</span>
                  </span>
                  {item.id === selectedLocaleId ? <CheckIcon className="h-6 w-6 text-emerald-600" /> : null}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default LanguageRegionPicker;
