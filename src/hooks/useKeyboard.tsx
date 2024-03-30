import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

/**
 * Custom hook to track the visibility of the keyboard.
 *
 * @return {Boolean} The visibility of the keyboard
 */
export const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState<Boolean>(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return isKeyboardVisible;
};
