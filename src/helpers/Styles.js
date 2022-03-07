import {StyleSheet} from 'react-native';
import {font} from './Index';

const Styles = StyleSheet.create({
  text: (color, value, family) => ({
    fontSize: font(value),
    color: color,
    fontWeight: `${family}`,
  }),
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Styles;
