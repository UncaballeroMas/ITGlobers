import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';

export const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderRadius: 5,
    paddingLeft: responsiveNumbers.tenScale,
  },
  container: {
    padding: responsiveNumbers.twentyScale,
    backgroundColor: theme.colors.PrimaryLogin,
    flexDirection: 'column',
    height: '100%',
  },
  email: {
    fontSize: theme.fontSizes[2],
    fontWeight: 'normal',
    color: theme.colors.primaryPurple,
  },
  label: {
    color: theme.colors.primaryPurple,
    fontSize: theme.fontSizes[5],
    fontWeight: 'bold',
    paddingVertical: responsiveNumbers.tenScale,
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  containerList: (color: string) => ({
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: color,
  }),
  flatlistStyle: {
    width: '100%',
    maxHeight: responsiveNumbers.fourHundredScale,
  },
  nameText: {
    padding: 15,
    minWidth: '33%',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'purple',
    borderWidth: 3,
  },
});
