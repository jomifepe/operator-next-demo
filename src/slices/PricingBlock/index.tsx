import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, type SliceComponentProps } from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `PricingBlock`.
 */
export type PricingBlockProps = SliceComponentProps<Content.PricingBlockSlice>;

/**
 * Component for "PricingBlock" Slices.
 */
const PricingBlock: FC<PricingBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.pricingBlock}
    >
      {/* Testimonial Section */}
      <div className={styles.testimonial}>
        {isFilled.richText(slice.primary.testimonial_quote) && (
          <div className={styles.testimonialQuote}>
            <PrismicRichText field={slice.primary.testimonial_quote} />
          </div>
        )}
        <div className={styles.testimonialAuthor}>
          {isFilled.image(slice.primary.testimonial_avatar) && (
            <PrismicNextImage
              field={slice.primary.testimonial_avatar}
              className={styles.testimonialAvatar}
            />
          )}
          {isFilled.keyText(slice.primary.testimonial_author_name) && (
            <div className={styles.testimonialAuthorName}>
              {slice.primary.testimonial_author_name}
            </div>
          )}
          {isFilled.keyText(slice.primary.testimonial_author_description) && (
            <div className={styles.testimonialAuthorDescription}>
              {slice.primary.testimonial_author_description}
            </div>
          )}
        </div>
      </div>

      {/* Pricing Section */}
      <div className={styles.pricing}>
        {isFilled.keyText(slice.primary.pricing_tagline) && (
          <div className={styles.pricingTagline}>
            {slice.primary.pricing_tagline}
          </div>
        )}
        {isFilled.richText(slice.primary.pricing_heading) && (
          <div className={styles.pricingHeading}>
            <PrismicRichText field={slice.primary.pricing_heading} />
          </div>
        )}
        {isFilled.richText(slice.primary.pricing_description) && (
          <div className={styles.pricingDescription}>
            <PrismicRichText field={slice.primary.pricing_description} />
          </div>
        )}

        {/* Pricing Card */}
        <div className={styles.pricingCard}>
          {isFilled.keyText(slice.primary.plan_name) && (
            <div className={styles.planName}>{slice.primary.plan_name}</div>
          )}
          {isFilled.keyText(slice.primary.price) && (
            <div className={styles.price}>{slice.primary.price}</div>
          )}
          {isFilled.keyText(slice.primary.price_description) && (
            <div className={styles.priceDescription}>
              {slice.primary.price_description}
            </div>
          )}
          {isFilled.link(slice.primary.pricing_cta_link) && (
            <PrismicNextLink
              field={slice.primary.pricing_cta_link}
              className={styles.pricingCta}
            >
              {slice.primary.pricing_cta_label || "Learn More"}
            </PrismicNextLink>
          )}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className={styles.bottomCta}>
        {isFilled.richText(slice.primary.bottom_heading) && (
          <div className={styles.bottomHeading}>
            <PrismicRichText field={slice.primary.bottom_heading} />
          </div>
        )}
        {isFilled.richText(slice.primary.bottom_description) && (
          <div className={styles.bottomDescription}>
            <PrismicRichText field={slice.primary.bottom_description} />
          </div>
        )}
        {isFilled.link(slice.primary.bottom_cta_link) && (
          <PrismicNextLink
            field={slice.primary.bottom_cta_link}
            className={styles.bottomCtaButton}
          >
            {slice.primary.bottom_cta_label || "Get Started"}
          </PrismicNextLink>
        )}
      </div>
    </section>
  );
};

export default PricingBlock;
