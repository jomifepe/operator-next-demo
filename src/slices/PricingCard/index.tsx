import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `PricingCard`.
 */
export type PricingCardProps = SliceComponentProps<Content.PricingCardSlice>;

/**
 * Component for "PricingCard" Slices.
 */
const PricingCard: FC<PricingCardProps> = ({ slice }) => {
  return (
    <section className={styles.pricingCard}>
      {/* Testimonial Section */}
      {isFilled.richText(slice.primary.testimonialQuote) && (
        <div className={styles.testimonial}>
          <div className={styles.testimonialQuote}>
            <PrismicRichText field={slice.primary.testimonialQuote} />
          </div>
          {isFilled.image(slice.primary.testimonialAvatar) && (
            <div className={styles.testimonialAvatar}>
              <PrismicNextImage
                field={slice.primary.testimonialAvatar}
                imgixParams={{ ar: "1:1", fit: "crop" }}
              />
            </div>
          )}
          {isFilled.keyText(slice.primary.testimonialName) && (
            <p className={styles.testimonialName}>
              {slice.primary.testimonialName}
            </p>
          )}
          {isFilled.keyText(slice.primary.testimonialSubtitle) && (
            <p className={styles.testimonialSubtitle}>
              {slice.primary.testimonialSubtitle}
            </p>
          )}
        </div>
      )}

      {/* Main Pricing Section */}
      <div className={styles.pricingSection}>
        {isFilled.keyText(slice.primary.tagline) && (
          <p className={styles.tagline}>{slice.primary.tagline}</p>
        )}
        {isFilled.richText(slice.primary.heading) && (
          <div className={styles.heading}>
            <PrismicRichText field={slice.primary.heading} />
          </div>
        )}
        {isFilled.richText(slice.primary.description) && (
          <div className={styles.description}>
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}

        {/* Pricing Card */}
        <div className={styles.card}>
          {isFilled.keyText(slice.primary.planName) && (
            <p className={styles.planName}>{slice.primary.planName}</p>
          )}
          {isFilled.keyText(slice.primary.price) && (
            <p className={styles.price}>{slice.primary.price}</p>
          )}
          {isFilled.keyText(slice.primary.priceSuffix) && (
            <p className={styles.priceSuffix}>{slice.primary.priceSuffix}</p>
          )}
          {isFilled.link(slice.primary.pricingCta) && (
            <PrismicNextLink
              field={slice.primary.pricingCta}
              className={styles.ctaButton}
            />
          )}
        </div>
      </div>

      {/* Bottom Section */}
      {isFilled.richText(slice.primary.bottomHeading) && (
        <div className={styles.bottomSection}>
          <div className={styles.bottomHeading}>
            <PrismicRichText field={slice.primary.bottomHeading} />
          </div>
          {isFilled.richText(slice.primary.bottomDescription) && (
            <div className={styles.bottomDescription}>
              <PrismicRichText field={slice.primary.bottomDescription} />
            </div>
          )}
          {isFilled.link(slice.primary.bottomCta) && (
            <PrismicNextLink
              field={slice.primary.bottomCta}
              className={styles.bottomCtaButton}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default PricingCard;
