import { HeadingPuckConfig } from "./components/heading";
import { CardsSectionPuckConfig } from "./components/cards-section";

export default {
  [HeadingPuckConfig?.componentName]: HeadingPuckConfig?.componentConfig,
  [CardsSectionPuckConfig?.componentName]:
    CardsSectionPuckConfig?.componentConfig,
};
