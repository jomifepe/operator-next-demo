import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `PricingShowcase`.
 */
export type PricingShowcaseProps =
  SliceComponentProps<Content.PricingShowcaseSlice>;

/**
 * Component for "PricingShowcase" Slices.
 */
const PricingShowcase: FC<PricingShowcaseProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      {/* Testimonial Section */}
      <div className={styles.testimonialContainer}>
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialInner}>
            {isFilled.richText(slice.primary.testimonialQuote) && (
              <div className={styles.quote}>
                <PrismicRichText field={slice.primary.testimonialQuote} />
              </div>
            )}

            <div className={styles.authorContainer}>
              {isFilled.image(slice.primary.testimonialAvatar) && (
                <PrismicNextImage
                  field={slice.primary.testimonialAvatar}
                  className={styles.avatar}
                />
              )}

              <div className={styles.authorInfo}>
                {isFilled.keyText(slice.primary.testimonialAuthorName) && (
                  <div className={styles.authorName}>
                    {slice.primary.testimonialAuthorName}
                  </div>
                )}

                {isFilled.keyText(slice.primary.testimonialAuthorRole) && (
                  <p className={styles.authorRole}>
                    {slice.primary.testimonialAuthorRole}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Image Section */}
      {isFilled.image(slice.primary.pricingImage) && (
        <div className={styles.pricingContainer}>
          <PrismicNextImage
            field={slice.primary.pricingImage}
            className={styles.pricingImage}
          />
        </div>
      )}

      {/* CTA Section */}
      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTextContent}>
              {isFilled.richText(slice.primary.ctaHeading) && (
                <div className={styles.heading}>
                  <PrismicRichText field={slice.primary.ctaHeading} />
                </div>
              )}

              {isFilled.richText(slice.primary.ctaDescription) && (
                <div className={styles.description}>
                  <PrismicRichText field={slice.primary.ctaDescription} />
                </div>
              )}
            </div>

            {isFilled.link(slice.primary.ctaButton) && (
              <div className={styles.buttonWrapper}>
                <PrismicNextLink field={slice.primary.ctaButton} className={styles.button}>
                  {slice.primary.ctaButton.text || "Learn more"}
                </PrismicNextLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingShowcase;
