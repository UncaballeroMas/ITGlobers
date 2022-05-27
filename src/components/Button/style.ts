import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';
export const styles = StyleSheet.create({
  button: (paddingHorizontal: string) => ({
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveNumbers.eightScale,
    paddingHorizontal: paddingHorizontal,
    borderRadius: 5,
    backgroundColor: theme.colors.primaryPurple,
    margin: responsiveNumbers.twentyFiveScale,
  }),
  textbutton: {
    color: theme.colors.white,
    fontSize: theme.fontSizes[2],
    fontWeight: 'bold',
    lineHeight: responsiveNumbers.twentyEightScale,
    letterSpacing: -1,
  },
});
