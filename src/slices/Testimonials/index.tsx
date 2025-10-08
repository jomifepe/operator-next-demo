import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.testimonials}
    >
      {isFilled.richText(slice.primary.heading) && (
        <PrismicRichText field={slice.primary.heading} />
      )}

      {isFilled.group(slice.primary.testimonials) && (
        <div className={styles.testimonialGrid}>
          {slice.primary.testimonials.map((item, index) => (
            <div key={index} className={styles.testimonialCard}>
              {isFilled.image(item.image) && (
                <PrismicNextImage field={item.image} className={styles.testimonialImage} />
              )}

              <div className={styles.testimonialContent}>
                {isFilled.keyText(item.name) && (
                  <h3 className={styles.testimonialName}>{item.name}</h3>
                )}

                {isFilled.richText(item.review) && (
                  <div className={styles.testimonialReview}>
                    <PrismicRichText field={item.review} />
                  </div>
                )}

                <div className={styles.testimonialMeta}>
                  {isFilled.keyText(item.company) && (
                    <span className={styles.testimonialCompany}>{item.company}</span>
                  )}

                  {isFilled.number(item.rating) && (
                    <div className={styles.testimonialRating}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={i < (item.rating ?? 0) ? styles.starFilled : styles.starEmpty}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;
