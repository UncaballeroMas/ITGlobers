import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../../utils/dimensions';
import theme from '../../../utils/theme';

export const styles = StyleSheet.create({
  message: {
    fontWeight: '400',
    fontSize: theme.fontSizes[1],
    lineHeight: responsiveNumbers.twentyTwoScale,
    letterSpacing: -0.47,
    color: theme.colors.white,
    paddingLeft: responsiveNumbers.tenScale,
    flex: 1,
    textAlign: 'center',
  },
  container: {
    borderRadius: 35,
    paddingHorizontal: responsiveNumbers.twentyScale,
    paddingVertical: responsiveNumbers.tenScale,
    width: '90%',
    backgroundColor: theme.colors.errorRed,
    zIndex: 999,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 10,
    elevation: 5,
  },
});
