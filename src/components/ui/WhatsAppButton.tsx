import { useLocale, useTranslations } from "next-intl";

import { getWhatsAppUrl } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";
import { buttonStyles } from "@/components/ui/Button";

type WhatsAppButtonProps = {
  className?: string;
  label?: string;
  message?: string;
  fullWidth?: boolean;
  variant?: "outline" | "whatsapp";
  size?: "sm" | "md" | "lg";
};

export function WhatsAppButton({
  className,
  label,
  message,
  fullWidth,
  variant = "whatsapp",
  size = "md",
}: WhatsAppButtonProps) {
  const locale = useLocale() as AppLocale;
  const t = useTranslations("common");

  return (
    <a
      href={getWhatsAppUrl(locale, message)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles({
        variant,
        size,
        className,
        fullWidth,
      })}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-4 w-4 shrink-0 opacity-80"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.115 1.52 5.849L.056 23.326a.5.5 0 00.618.618l5.477-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.228-3.256.87.87-3.256-.228-.382A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
      {label ?? t("whatsappCta")}
    </a>
  );
}
