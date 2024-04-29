import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/pro-duotone-svg-icons";
import { LANGUAGES } from "../utilities/terms.constants";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selected.code);
  }, [selected, i18n]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative mt-2 w-36">
            <Listbox.Button className="relative w-full border-0 cursor-default rounded-md bg-primary-500 py-1.5 pl-3 pr-10 text-left text-gray-900 focus:outline-none sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {selected.flag}
                <span className="ml-3 block truncate text-secondary-500">
                  {selected.label}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <FontAwesomeIcon
                  icon={faChevronCircleDown}
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-primary-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {LANGUAGES.map((language) => (
                  <Listbox.Option
                    className={({ active }) =>
                      `${
                        active
                          ? "bg-indigo-600 text-secondary-500"
                          : "text-gray-900"
                      } relative cursor-default select-none py-2 pl-3 pr-9`
                    }
                    key={language.code}
                    value={language}
                  >
                    {({ selected }) => (
                      <div className="flex items-center">
                        {language.flag}
                        <span
                          className={`${
                            selected ? "font-semibold" : "font-normal"
                          } ml-3 block truncate`}
                        >
                          {language.label}
                        </span>
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
