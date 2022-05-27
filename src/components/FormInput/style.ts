import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    padding: responsiveNumbers.tenScale,
  },
  textimput: {
    height: responsiveNumbers.fortyScale,
    width: responsiveNumbers.threeHundredScale,
    borderRadius: 5,
    backgroundColor: theme.colors.white,
  },
  label: {
    color: theme.colors.primaryPurple,
    fontSize: theme.fontSizes[2],
    fontWeight: 'normal',
    lineHeight: responsiveNumbers.twentyEightScale,
    marginBottom: responsiveNumbers.fourScale,
    letterSpacing: -1,
  },
});
