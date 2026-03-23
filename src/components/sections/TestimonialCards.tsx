"use client";

import { type FocusEvent, useEffect, useEffectEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { testimonialEntries } from "@/data/testimonials";
import { getWeddingOfferings } from "@/data/offerings";
import { Badge } from "@/components/ui/Badge";
import { ElegantImagePlaceholder } from "@/components/ui/ElegantImagePlaceholder";
import type { AppLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY_MS = 5000;

function wrapIndex(index: number, total: number) {
  return ((index % total) + total) % total;
}

type TestimonialCarouselProps = {
  limit?: number;
  featuredOnly?: boolean;
  className?: string;
};

function CarouselArrow({ direction }: { direction: "previous" | "next" }) {
  const isPrevious = direction === "previous";

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d={isPrevious ? "M12.5 15L7.5 10L12.5 5" : "M7.5 5L12.5 10L7.5 15"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TestimonialCarousel({
  limit,
  featuredOnly = false,
  className,
}: TestimonialCarouselProps) {
  const locale = useLocale() as AppLocale;
  const offerings = getWeddingOfferings(locale);
  const tPage = useTranslations("testimonialsPage");
  const tTags = useTranslations("taxonomy.tags");
  const items = testimonialEntries
    .filter((entry) => !featuredOnly || entry.featured)
    .slice(0, limit);
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isFocusPaused, setIsFocusPaused] = useState(false);
  const [rotationKey, setRotationKey] = useState(0);
  const isPaused = isHoverPaused || isFocusPaused;
  const currentIndex = total > 0 ? wrapIndex(activeIndex, total) : 0;

  const labels =
    locale === "id"
      ? {
          carousel: "Carousel testimoni",
          previous: "Testimoni sebelumnya",
          next: "Testimoni berikutnya",
          slide: (name: string) => `Lihat testimoni ${name}`,
        }
      : {
          carousel: "Testimonials carousel",
          previous: "Previous testimonial",
          next: "Next testimonial",
          slide: (name: string) => `Show testimonial from ${name}`,
        };

  const advanceSlide = useEffectEvent(() => {
    if (total <= 1) {
      return;
    }

    setActiveIndex((current) => wrapIndex(current + 1, total));
  });

  useEffect(() => {
    if (isPaused || total <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      advanceSlide();
    }, AUTOPLAY_DELAY_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, rotationKey, total]);

  if (total === 0) {
    return null;
  }

  function restartAutoplay() {
    setRotationKey((current) => current + 1);
  }

  function goToSlide(index: number) {
    setActiveIndex(wrapIndex(index, total));
    restartAutoplay();
  }

  function goToPrevious() {
    setActiveIndex((current) => wrapIndex(current - 1, total));
    restartAutoplay();
  }

  function goToNext() {
    setActiveIndex((current) => wrapIndex(current + 1, total));
    restartAutoplay();
  }

  function handleBlurCapture(event: FocusEvent<HTMLDivElement>) {
    const nextFocused = event.relatedTarget;

    if (nextFocused instanceof Node && event.currentTarget.contains(nextFocused)) {
      return;
    }

    setIsFocusPaused(false);
  }

  return (
    <div
      className={cn("carousel-wrapper", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={labels.carousel}
      onMouseEnter={() => setIsHoverPaused(true)}
      onMouseLeave={() => setIsHoverPaused(false)}
      onFocusCapture={() => setIsFocusPaused(true)}
      onBlurCapture={handleBlurCapture}
    >
      <div className="carousel-stage">
        {total > 1 ? (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-desktop carousel-arrow-previous"
            aria-label={labels.previous}
            onClick={goToPrevious}
          >
            <CarouselArrow direction="previous" />
          </button>
        ) : null}

        <div className="carousel-viewport">
          {items.map((item, index) => {
            const name = tPage(`items.${item.id}.name`);

            return (
              <article
                key={item.id}
                className={cn(
                  "carousel-slide",
                  index === currentIndex && "carousel-slide-active",
                )}
                aria-hidden={index !== currentIndex}
              >
                <div className="carousel-card">
                  <div className="carousel-card-header">
                    <ElegantImagePlaceholder
                      alt={name}
                      src={item.image}
                      label={offerings.placeholderLabels.couple}
                      title={name}
                      ratio="square"
                      variant="avatar"
                      className="carousel-avatar"
                      imageClassName="rounded-full"
                      sizes="(min-width: 640px) 72px, 56px"
                    />
                    <div className="carousel-meta">
                      <p className="carousel-name">{name}</p>
                      <p className="carousel-context">{tPage(`items.${item.id}.context`)}</p>
                    </div>
                  </div>

                  <div className="carousel-tags">
                    {item.tagIds.map((tagId) => (
                      <Badge key={tagId}>{tTags(tagId)}</Badge>
                    ))}
                  </div>

                  <div className="carousel-copy">
                    <span className="quote-mark" aria-hidden="true">
                      &ldquo;
                    </span>
                    <blockquote className="carousel-quote">
                      {tPage(`items.${item.id}.quote`)}
                    </blockquote>
                  </div>

                  <span className="gold-divider carousel-divider" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>

        {total > 1 ? (
          <button
            type="button"
            className="carousel-arrow carousel-arrow-desktop carousel-arrow-next"
            aria-label={labels.next}
            onClick={goToNext}
          >
            <CarouselArrow direction="next" />
          </button>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow carousel-arrow-mobile"
            aria-label={labels.previous}
            onClick={goToPrevious}
          >
            <CarouselArrow direction="previous" />
          </button>

          <div className="carousel-dots">
            {items.map((item, index) => {
              const name = tPage(`items.${item.id}.name`);

              return (
                <button
                  key={item.id}
                  type="button"
                  className={cn("carousel-dot", index === currentIndex && "carousel-dot-active")}
                  aria-label={labels.slide(name)}
                  aria-current={index === currentIndex ? "true" : undefined}
                  onClick={() => goToSlide(index)}
                />
              );
            })}
          </div>

          <button
            type="button"
            className="carousel-arrow carousel-arrow-mobile"
            aria-label={labels.next}
            onClick={goToNext}
          >
            <CarouselArrow direction="next" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
