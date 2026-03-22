import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase(props: IconProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
      aria-hidden="true"
      {...props}
    />
  );
}

export function SunIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="4.25" />
      <path d="M12 2.5v2.25" />
      <path d="M12 19.25v2.25" />
      <path d="m4.93 4.93 1.58 1.58" />
      <path d="m17.49 17.49 1.58 1.58" />
      <path d="M2.5 12h2.25" />
      <path d="M19.25 12h2.25" />
      <path d="m4.93 19.07 1.58-1.58" />
      <path d="m17.49 6.51 1.58-1.58" />
    </IconBase>
  );
}

export function MoonStarsIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.25 13.1A8.75 8.75 0 1 1 10.9 3.75a6.75 6.75 0 0 0 9.35 9.35Z" />
      <path d="M17.25 4.25v2.5" />
      <path d="M16 5.5h2.5" />
      <path d="M20.25 7.75v1.75" />
      <path d="M19.38 8.63h1.75" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.25" />
      <path d="m4.5 7 6.77 5.08a1.25 1.25 0 0 0 1.46 0L19.5 7" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7.3 3.75h2.18c.45 0 .84.31.95.75l.62 2.48a1 1 0 0 1-.26.98L9.28 9.43a13.03 13.03 0 0 0 5.29 5.29l1.47-1.51a1 1 0 0 1 .98-.26l2.48.62c.44.11.75.5.75.95v2.18c0 .62-.51 1.12-1.13 1.1-8.26-.33-14.64-6.71-14.97-14.97-.03-.62.48-1.13 1.1-1.13Z" />
    </IconBase>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.75v4.7l3.15 1.9" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.53 6-11a6 6 0 1 0-12 0c0 5.47 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m12 3 1.35 3.65L17 8l-3.65 1.35L12 13l-1.35-3.65L7 8l3.65-1.35L12 3Z" />
      <path d="m18.5 13.5.82 2.18 2.18.82-2.18.82-.82 2.18-.82-2.18-2.18-.82 2.18-.82.82-2.18Z" />
      <path d="m5.5 14.5.64 1.71 1.71.64-1.71.64-.64 1.71-.64-1.71-1.71-.64 1.71-.64.64-1.71Z" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5.5 12.5 4 4L18.5 7.5" />
    </IconBase>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </IconBase>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.553 4.115 1.52 5.849L.056 23.326a.5.5 0 00.618.618l5.477-1.464A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.228-3.256.87.87-3.256-.228-.382A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}
