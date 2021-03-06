import {Dimensions, Platform, PixelRatio} from 'react-native';
import {REF_RATIO} from './responsive';

const {height, width} = Dimensions.get('window');

export const H = height;
export const W = width;

const scale = width / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios')
    return Math.round(PixelRatio.roundToNearestPixel(newSize));

  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export const iPhoneSE = () => height < 570;

export function responsiveSize(value: number) {
  return Math.round(value * REF_RATIO);
}

export function responsiveSizePlatForm(
  iphoneSize: number,
  androidSize: number,
) {
  return Platform.OS === 'ios'
    ? responsiveSize(iphoneSize)
    : responsiveSize(androidSize);
}

export const rs = responsiveSize;
export const nlz = normalize;

export const responsiveNumbers = {
  minusFifteenScale: rs(-15),
  minusTenScale: rs(-10),
  minusSevenScale: rs(-7),
  minusFiveScale: rs(-5),
  minusOneScale: rs(-1),
  minusZeroOneScale: rs(-0.1),
  ceroScale: rs(0),
  ceroFiveScale: rs(0.5),
  oneScale: rs(1),
  oneFiveScale: rs(1),
  twoScale: rs(2),
  threeScale: rs(3),
  threeFiveScale: rs(3.5),
  fourScale: rs(4),
  fourFiveScale: rs(4.5),
  fiveScale: rs(5),
  sixScale: rs(6),
  sevenScale: rs(7),
  sevenFiveScale: rs(7.5),
  eightScale: rs(8),
  nineScale: rs(9),
  tenScale: rs(10),
  elevenScale: rs(11),
  twelveScale: rs(12),
  thirteenScale: rs(13),
  fourteenScale: rs(14),
  fourteenFiveScale: rs(14.5),
  fifteenScale: rs(15),
  sixteenScale: rs(16),
  seventeenScale: rs(17),
  eighteenScale: rs(18),
  nineteenScale: rs(19),
  twentyScale: rs(20),
  twentyOneScale: rs(21),
  twentyTwoScale: rs(22),
  twentyThreeScale: rs(23),
  twentyFourScale: rs(24),
  twentyFiveScale: rs(25),
  twentySixScale: rs(26),
  twentySevenScale: rs(27),
  twentyEightScale: rs(28),
  thirtyScale: rs(30),
  thirtyOneScale: rs(31),
  thirtyTwoScale: rs(32),
  thirtyThreeScale: rs(33),
  thirtyFourScale: rs(34),
  thirtyFiveScale: rs(35),
  thirtySixScale: rs(36),
  thirtySevenScale: rs(37),
  thirtyEightScale: rs(38),
  thirtyNineScale: rs(39),
  fortyScale: rs(40),
  fortyThreeScale: rs(43),
  fortyFourScale: rs(44),
  fortyFiveScale: rs(45),
  fortySixScale: rs(46),
  fortySevenScale: rs(47),
  fiftyScale: rs(50),
  fiftyTwoScale: rs(52),
  fiftyFourScale: rs(54),
  fiftyFiveScale: rs(55),
  fiftySevenScale: rs(57),
  sixtyScale: rs(60),
  sixtyFourScale: rs(64),
  sixtyFiveScale: rs(65),
  sixtyEightScale: rs(68),
  sixtyNineScale: rs(69),
  seventyScale: rs(70),
  seventyTwoScale: rs(72),
  seventyFiveScale: rs(75),
  eightyScale: rs(80),
  eightyThreeScale: rs(83),
  eightyFourScale: rs(84),
  ninetyScale: rs(90),
  ninetyFiveScale: rs(95),
  oneHundredScale: rs(100),
  oneHundredFiveScale: rs(105),
  oneHundredEightScale: rs(108),
  oneHundredSixTeenScale: rs(116),
  oneHundredTwentyScale: rs(120),
  oneHundredTwentyFiveScale: rs(125),
  oneHundredThirtySixScale: rs(136),
  oneHundredFourtyScale: rs(140),
  oneHundredFourtyFourScale: rs(144),
  oneHundredFiftyScale: rs(150),
  oneHundredSixtyFiveScale: rs(165),
  oneHundredeightyScale: rs(180),
  oneHundredeightyFiveScale: rs(185),
  twoHundredScale: rs(200),
  twoHundredTwentyFiveScale: rs(225),
  twoHundredThirtyThreeScale: rs(233),
  twoHundredFortyFiveScale: rs(245),
  twoHundredSixtyScale: rs(260),
  twoHundredSeventyScale: rs(270),
  twoHundredEightyScale: rs(280),
  threeHundredScale: rs(300),
  threeHundredTenScale: rs(310),
  threeHundredFourtyScale: rs(340),
  threeHundredFourtySixScale: rs(346),
  fourHundredScale: rs(400),
};
