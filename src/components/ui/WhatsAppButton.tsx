import { useLocale, useTranslations } from "next-intl";

import { getWhatsAppUrl } from "@/config/site";
import type { AppLocale } from "@/i18n/routing";
import { buttonStyles } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";

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
      <WhatsAppIcon className="h-4 w-4 shrink-0 opacity-85" />
      {label ?? t("whatsappCta")}
    </a>
  );
}
