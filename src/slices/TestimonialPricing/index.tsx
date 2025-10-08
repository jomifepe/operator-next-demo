import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `TestimonialPricing`.
 */
export type TestimonialPricingProps =
  SliceComponentProps<Content.TestimonialPricingSlice>;

/**
 * Component for "TestimonialPricing" Slices.
 */
const TestimonialPricing: FC<TestimonialPricingProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.container}
    >
      {/* Testimonial Section */}
      <div className={styles.testimonialSection}>
        {isFilled.richText(slice.primary.testimonial_quote) && (
          <div className={styles.testimonialQuote}>
            <PrismicRichText field={slice.primary.testimonial_quote} />
          </div>
        )}

        {isFilled.image(slice.primary.testimonial_avatar) && (
          <div className={styles.testimonialAvatar}>
            <PrismicNextImage
              field={slice.primary.testimonial_avatar}
              className={styles.avatarImage}
            />
          </div>
        )}

        {isFilled.keyText(slice.primary.testimonial_author) && (
          <div className={styles.testimonialAuthor}>
            {slice.primary.testimonial_author}
          </div>
        )}

        {isFilled.keyText(slice.primary.testimonial_subtitle) && (
          <div className={styles.testimonialSubtitle}>
            {slice.primary.testimonial_subtitle}
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

          <div className={styles.priceWrapper}>
            {isFilled.keyText(slice.primary.price_amount) && (
              <span className={styles.priceAmount}>
                {slice.primary.price_amount}
              </span>
            )}
            {isFilled.keyText(slice.primary.price_period) && (
              <span className={styles.pricePeriod}>
                {slice.primary.price_period}
              </span>
            )}
          </div>

          {isFilled.keyText(slice.primary.yearly_price) && (
            <div className={styles.yearlyPrice}>
              {slice.primary.yearly_price}
            </div>
          )}

          {isFilled.link(slice.primary.cta_button) && (
            <PrismicNextLink
              field={slice.primary.cta_button}
              className={styles.ctaButton}
            />
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <h2 className={styles.bottomHeading}>Ready to go further?</h2>
        <div className={styles.bottomDescription}>
          <p>This starter gives you full editing power for content.</p>
          <p>
            To customize the layout, structure, or create new Slices, install
            Slice Machine locally.
          </p>
        </div>
        <button className={styles.bottomButton}>Edit this section now</button>
      </div>
    </section>
  );
};

export default TestimonialPricing;
