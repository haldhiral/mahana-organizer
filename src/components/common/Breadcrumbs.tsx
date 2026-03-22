import { Link } from "@/i18n/navigation";

type BreadcrumbsProps = {
  items: Array<{ href: string; label: string }>;
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;

          return (
            <li key={`${item.href}-${item.label}`} className="flex items-center gap-2">
              {isCurrentPage ? (
                <span aria-current="page">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              )}
              {!isCurrentPage ? <span className="text-border-strong" aria-hidden="true">›</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

