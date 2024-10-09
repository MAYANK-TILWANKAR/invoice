"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseFooter = () => {
  const { _t } = useTranslationContext();

  return <footer className=""></footer>;
};

export default BaseFooter;
