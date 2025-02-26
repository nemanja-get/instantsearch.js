export { default as analytics } from './analytics/analytics';
export { default as breadcrumb } from './breadcrumb/breadcrumb';
export { default as clearRefinements } from './clear-refinements/clear-refinements';
export { default as configure } from './configure/configure';
export { default as currentRefinements } from './current-refinements/current-refinements';
export { default as EXPERIMENTAL_answers } from './answers/answers';
export { default as EXPERIMENTAL_configureRelatedItems } from './configure-related-items/configure-related-items';

import dynamicWidgets from './dynamic-widgets/dynamic-widgets';
export { dynamicWidgets };
import { deprecate } from '../lib/utils';
/** @deprecated use dynamicWidgets */
export const EXPERIMENTAL_dynamicWidgets = deprecate(
  dynamicWidgets,
  'use dynamicWidgets'
);

export { default as geoSearch } from './geo-search/geo-search';
export { default as hierarchicalMenu } from './hierarchical-menu/hierarchical-menu';
export { default as hits } from './hits/hits';
export { default as hitsPerPage } from './hits-per-page/hits-per-page';
export { default as index } from './index/index';
export { default as infiniteHits } from './infinite-hits/infinite-hits';
export { default as menu } from './menu/menu';
export { default as menuSelect } from './menu-select/menu-select';
export { default as numericMenu } from './numeric-menu/numeric-menu';
export { default as pagination } from './pagination/pagination';
export { default as panel } from './panel/panel';
export { default as places } from './places/places';
export { default as poweredBy } from './powered-by/powered-by';
export { default as queryRuleContext } from './query-rule-context/query-rule-context';
export { default as queryRuleCustomData } from './query-rule-custom-data/query-rule-custom-data';
export { default as rangeInput } from './range-input/range-input';
export { default as rangeSlider } from './range-slider/range-slider';
export { default as ratingMenu } from './rating-menu/rating-menu';
export { default as refinementList } from './refinement-list/refinement-list';
export { default as relevantSort } from './relevant-sort/relevant-sort';
export { default as searchBox } from './search-box/search-box';
export { default as sortBy } from './sort-by/sort-by';
export { default as stats } from './stats/stats';
export { default as toggleRefinement } from './toggle-refinement/toggle-refinement';
export { default as voiceSearch } from './voice-search/voice-search';
