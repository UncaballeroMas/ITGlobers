import {StyleSheet} from 'react-native';
import {responsiveNumbers} from '../../utils/dimensions';
import theme from '../../utils/theme';
export const styles = StyleSheet.create({
  container: {
    padding: responsiveNumbers.tenScale,
  },
  nameText: {
    padding: 15,
    minWidth: '33%',
  },
  containerList: (color: string) => ({
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    backgroundColor: color,
  }),
});
