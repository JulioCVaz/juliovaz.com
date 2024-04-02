"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getClientDictionary, type Dictionary } from "../../server/actions";

type Lang = "en" | "pt";

interface NotFoundState {
  loading: boolean;
  dictionary: Dictionary;
}

export default function NotFound() {
  const [state, setState] = useState<NotFoundState>({
    loading: true,
    dictionary: {} as Dictionary,
  });

  const pathname = usePathname();
  const lang: Lang = pathname.split("/")[1] as Lang;

  useEffect(() => {
    void fetchClientDictionary();
  }, []);

  const fetchClientDictionary = async () => {
    try {
      const dictionary = await getClientDictionary(lang);
      setState((prevState) => ({
        ...prevState,
        dictionary,
        loading: false,
      }));
    } catch (error) {
      throw new Error("Fail to load dictionary");
    }
  };

  return (
    <div className="flex min-h-48 flex-col content-center justify-center text-center">
      {state.loading ? (
        <p>Loading</p>
      ) : (
        <>
          <h1 className="text-2xl font-semibold">
            {state.dictionary.not_found.alert}
          </h1>
          <p>{state.dictionary.not_found.description}</p>
          <Link className="mt-4 text-sky-500 hover:underline" href="/">
            {state.dictionary.not_found.go_home}
          </Link>
        </>
      )}
    </div>
  );
}
