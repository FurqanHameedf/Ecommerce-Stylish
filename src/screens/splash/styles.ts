import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONT_SIZES, h, w} from '../../constants';
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: w('70%'),
    height: h('18%'),
    alignSelf: 'center',
  },
});
export default styles;
