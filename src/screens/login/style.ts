import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flexDirection: 'column',
    height: '100%',
  },

  containerLogin: {
    alignItems: 'center',
    padding: responsiveNumbers.twentyScale,
    backgroundColor: theme.colors.PrimaryLogin,
    flexDirection: 'column',
    borderRadius: 5,
  },

  logo: {
    height: '30%',
    width: '60%',
    resizeMode: 'stretch',
  },

  forgotButton: {
    marginVertical: responsiveNumbers.fifteenScale,
  },
  navButtonText: {
    fontSize: theme.fontSizes[2],
    fontWeight: 'normal',
    color: theme.colors.primaryPurple,
  },
});
