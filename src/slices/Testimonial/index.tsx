import { type FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import {
  PrismicRichText,
  type SliceComponentProps,
} from "@prismicio/react";
import styles from "./index.module.css";

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial: FC<TestimonialProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.testimonial}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          {isFilled.richText(slice.primary.quote) && (
            <PrismicRichText
              field={slice.primary.quote}
              components={{
                paragraph: ({ children }) => (
                  <p className={styles.quote}>{children}</p>
                ),
              }}
            />
          )}

          <div className={styles.author}>
            {isFilled.image(slice.primary.avatar) && (
              <PrismicNextImage
                field={slice.primary.avatar}
                className={styles.avatar}
              />
            )}

            <div className={styles.authorInfo}>
              {isFilled.keyText(slice.primary.author_name) && (
                <div className={styles.authorName}>
                  {slice.primary.author_name}
                </div>
              )}

              {isFilled.keyText(slice.primary.author_description) && (
                <p className={styles.authorDescription}>
                  {slice.primary.author_description}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
