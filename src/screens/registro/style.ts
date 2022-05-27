import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    flexGrow: 1,
  },

  logo: {
    height: '25%',
    width: '60%',
    resizeMode: 'stretch',
    margin: '1%',
  },

  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#f0f',
    fontFamily: 'Lato-Regular',
  },
  textimput: {
    height: '6%',
    width: '80%',
    borderWidth: 1,
    padding: 10,
    margin: '2%',
    borderRadius: 5,
    backgroundColor: '#f0f8ff',
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
});
