import {
  heightPercentageToDP as height,
  widthPercentageToDP as width,
} from 'react-native-responsive-screen';
import {RFPercentage as font} from 'react-native-responsive-fontsize';

export {height, width, font};

export const removeDuplicateTypes = data => {
  const track = [];
  if (data == undefined) {
    return console.log('error');
  }
  const res = Object.values(data).filter(row => {
    if (track.includes(row.type)) {
      return false;
    }
    track.push(row.type);
    return true;
  });
  return res;
};
