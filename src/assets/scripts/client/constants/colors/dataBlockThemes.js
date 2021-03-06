import { COLOR } from './colors';

const DATA_BLOCK_COLOR_IN_RANGE_DEFAULT = {
    ARRIVAL_BAR: COLOR.RED_05,
    BACKGROUND: COLOR.GREEN_05,
    DEPARTURE_BAR: COLOR.BLUE_05,
    TEXT: COLOR.WHITE_05
};

const DATA_BLOCK_COLOR_SELECTED_DEFAULT = {
    ARRIVAL_BAR: COLOR.RED_09,
    BACKGROUND: COLOR.GREEN_09,
    DEPARTURE_BAR: COLOR.BLUE_09,
    TEXT: COLOR.WHITE_09
};

const DATA_BLOCK_COLOR_OUT_OF_RANGE_DEFAULT = {
    ARRIVAL_BAR: COLOR.RED_02,
    BACKGROUND: COLOR.GREEN_02,
    DEPARTURE_BAR: COLOR.BLUE_02,
    TEXT: COLOR.WHITE_02
};

const DATA_BLOCK_COLOR_DEFAULT = {
    IN_RANGE: DATA_BLOCK_COLOR_IN_RANGE_DEFAULT,
    OUT_OF_RANGE: DATA_BLOCK_COLOR_OUT_OF_RANGE_DEFAULT,
    SELECTED: DATA_BLOCK_COLOR_SELECTED_DEFAULT
};

export const DATA_BLOCK_THEME = {
    DEFAULT: DATA_BLOCK_COLOR_DEFAULT
};
