import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';

export const styles = StyleSheet.create({
  label: {
    color: theme.colors.primaryPurple,
    fontSize: theme.fontSizes[5],
    fontWeight: 'bold',
  },
  container: {
    padding: responsiveNumbers.twentyScale,
    backgroundColor: theme.colors.PrimaryLogin,
    flexDirection: 'column',
    height: '100%',
  },
});
