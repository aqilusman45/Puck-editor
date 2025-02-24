import classnames from "classnames";
import React from "react";
import Heading from "../heading";
import Image from "next/image";
import { AutoField, FieldLabel } from "@measured/puck";

interface CardsSectionProps {
  otherClasses?: string;
  heading?: string;
  cards?: {
    heading: string;
    image: string;
    subText: string;
  }[];
}

const CardsSection: React.FC<CardsSectionProps> = ({
  otherClasses,
  heading,
  cards,
}) => {
  const cardsSectionClasses = classnames(otherClasses);

  return (
    <section className={cardsSectionClasses} data-testid="cards-section">
      <div className="mx-auto my-20 grid max-w-1440 gap-10   px-4 lg:my-128 lg:gap-16 lg:px-14 xl:px-120">
        <Heading
          type="h2"
          otherClasses="text-center not-italic font-Montserrat text-blue-900 font-semibold "
        >
          {heading}
        </Heading>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards?.map(({ heading, image, subText }, index) => {
            const isUrl =
              image.startsWith("http://") || image.startsWith("https://");
            return (
              <div key={index} className="group flex flex-col gap-6">
                {image && isUrl && (
                  <Image
                    src={image}
                    width={200}
                    alt="image"
                    height={200}
                    className="object-contain w-full transition ease-in-out duration-300 group-hover:scale-105"
                  />
                )}
                <div className="flex flex-col gap-4 px-4 md:px-0">
                  <Heading
                    type="h4"
                    otherClasses="text-3xl font-light font-Montserrat leading-10 text-gray-1000"
                  >
                    {heading}
                  </Heading>
                  <p>{subText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

export const CardsSectionPuckConfig = {
  componentName: "CardsSection",
  componentConfig: {
    fields: {
      heading: {
        label: "Heading",
        type: "text",
      },
      cards: {
        label: "Cards",
        type: "array",
        min: 3,
        arrayFields: {
          heading: { label: "Heading", type: "text" },
          subText: {
            label: "Sub Text",
            type: "textarea",
          },
          image: {
            label: "Image",
            type: "text",
          },
          // image: {
          //   type: "custom",
          //   label: "Image",
          //   render: ({ value, field, name, onChange, readOnly }) => {

          //     {
          //       /* <>
          //          <label>{field.label || name}</label>
          //         <input
          //           type="url"
          //           defaultValue={value}
          //           name={name}
          //           onChange={(e) => onChange(e.currentTarget.value)}
          //         />
          //      </>*/
          //     }
          //     return (
          //       <FieldLabel label={field.label || name} readOnly={readOnly}>
          //         <AutoField
          //           field={{ type: "text" }}
          //           value={value}
          //           onChange={onChange}
          //           readOnly={readOnly}
          //         />
          //       </FieldLabel>
          //     );
          //   },
          // },
        },
      },
    },
    defaultProps: {},
    render: (props: CardsSectionProps) => <CardsSection {...props} />,
  },
};
