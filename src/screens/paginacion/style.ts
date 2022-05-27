import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '2%',
    paddingHorizontal: '6%',
    borderRadius: 5,
    elevation: 25,
    backgroundColor: '#1e90ff',
    margin: '4%',
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
  flatlistStyle: {width: 350, height: 400},
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
