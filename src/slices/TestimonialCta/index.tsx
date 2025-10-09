import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `TestimonialCta`.
 */
export type TestimonialCtaProps =
  SliceComponentProps<Content.TestimonialCtaSlice>;

/**
 * Component for "TestimonialCta" Slices.
 */
const TestimonialCta: FC<TestimonialCtaProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section}
    >
      {slice.variation === "testimonial" && (
        <div className={styles.testimonialContainer}>
          <div className={styles.testimonialContent}>
            <div className={styles.testimonialInner}>
              {isFilled.richText(slice.primary.quote) && (
                <div className={styles.quote}>
                  <PrismicRichText field={slice.primary.quote} />
                </div>
              )}

              <div className={styles.authorContainer}>
                {isFilled.image(slice.primary.avatar) && (
                  <PrismicNextImage
                    field={slice.primary.avatar}
                    className={styles.avatar}
                  />
                )}

                <div className={styles.authorInfo}>
                  {isFilled.keyText(slice.primary.authorName) && (
                    <div className={styles.authorName}>
                      {slice.primary.authorName}
                    </div>
                  )}

                  {isFilled.keyText(slice.primary.authorRole) && (
                    <p className={styles.authorRole}>
                      {slice.primary.authorRole}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {slice.variation === "callToAction" && (
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaInner}>
              <div className={styles.ctaTextContent}>
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
              </div>

              {isFilled.link(slice.primary.button) && (
                <div className={styles.buttonWrapper}>
                  <PrismicNextLink field={slice.primary.button} className={styles.button}>
                    {slice.primary.button.text || "Learn more"}
                  </PrismicNextLink>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialCta;
