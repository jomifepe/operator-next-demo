import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
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
      <div className={styles.testimonialSection}>
        {isFilled.richText(slice.primary.testimonial_quote) && (
          <div className={styles.testimonialQuote}>
            <PrismicRichText field={slice.primary.testimonial_quote} />
          </div>
        )}

        {isFilled.image(slice.primary.testimonial_image) && (
          <PrismicNextImage
            field={slice.primary.testimonial_image}
            className={styles.testimonialImage}
          />
        )}

        {isFilled.keyText(slice.primary.testimonial_name) && (
          <div className={styles.testimonialName}>
            {slice.primary.testimonial_name}
          </div>
        )}

        {isFilled.keyText(slice.primary.testimonial_tagline) && (
          <div className={styles.testimonialTagline}>
            {slice.primary.testimonial_tagline}
          </div>
        )}
      </div>

      {/* Pricing Section */}
      <div className={styles.pricingSection}>
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

          {isFilled.keyText(slice.primary.price_note) && (
            <div className={styles.priceNote}>{slice.primary.price_note}</div>
          )}

          {isFilled.keyText(slice.primary.pricing_button_text) &&
            isFilled.link(slice.primary.pricing_button_link) && (
              <PrismicNextLink
                field={slice.primary.pricing_button_link}
                className={styles.pricingButton}
              >
                {slice.primary.pricing_button_text}
              </PrismicNextLink>
            )}
        </div>
      </div>

      {/* CTA Section */}
      <div className={styles.ctaSection}>
        {isFilled.richText(slice.primary.cta_heading) && (
          <div className={styles.ctaHeading}>
            <PrismicRichText field={slice.primary.cta_heading} />
          </div>
        )}

        {isFilled.richText(slice.primary.cta_description) && (
          <div className={styles.ctaDescription}>
            <PrismicRichText field={slice.primary.cta_description} />
          </div>
        )}

        {isFilled.keyText(slice.primary.cta_button_text) &&
          isFilled.link(slice.primary.cta_button_link) && (
            <PrismicNextLink
              field={slice.primary.cta_button_link}
              className={styles.ctaButton}
            >
              {slice.primary.cta_button_text}
            </PrismicNextLink>
          )}
      </div>
    </section>
  );
};

export default PricingBlock;
