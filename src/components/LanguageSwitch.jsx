import React, { useRef, useState } from 'react';
import { StyleSheet, View, Modal, Animated, Easing, Pressable } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  const openSheet = () => {
    setVisible(true);
    Animated.timing(anim, { toValue: 1, duration: 200, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
  };
  const closeSheet = () => {
    Animated.timing(anim, { toValue: 0, duration: 200, easing: Easing.in(Easing.cubic), useNativeDriver: true }).start(({ finished }) => {
      if (finished) setVisible(false);
    });
  };

  const changeLanguage = async (lng) => {
    try { await i18n.changeLanguage(lng); } catch {}
    closeSheet();
  };

  const currentLabel = i18n.language === 'zh' ? '中文' : 'English';
  const currentLng = (i18n.language || '').startsWith('zh') ? 'zh' : 'en';

  return (
    <View style={styles.container}>
      <TouchableRipple onPress={openSheet}>
        <View style={styles.button}>
          <Text style={styles.text}>{currentLabel}</Text>
          <MaterialDesignIcons name="chevron-down" size={16} color="#fff" />
        </View>
      </TouchableRipple>

      <Modal visible={visible} transparent animationType="fade" onRequestClose={closeSheet}>
        <Pressable style={styles.backdrop} onPress={closeSheet} />
        <Animated.View style={[styles.sheet, { transform: [{ translateY: anim.interpolate({ inputRange: [0,1], outputRange: [260, 0] }) }] }]}>
          <View style={styles.sheetHandle} />
          <Pressable style={styles.sheetItem} onPress={() => changeLanguage('en')}>
            <Text style={[styles.sheetText, currentLng === 'en' && styles.selectedText]}>English</Text>
          </Pressable>
          <Pressable style={styles.sheetItem} onPress={() => changeLanguage('zh')}>
            <Text style={[styles.sheetText, currentLng === 'zh' && styles.selectedText]}>中文</Text>
          </Pressable>
        </Animated.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 4,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.25)'
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 20,
    paddingTop: 8
  },
  sheetHandle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ddd',
    marginBottom: 8
  },
  sheetItem: {
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  sheetText: {
    fontSize: 16,
    color: '#222'
  },
  selectedText: {
    color: '#0A84FF',
    fontWeight: '600'
  },
  sheetCancel: {
    marginTop: 4
  }
});

export default LanguageSwitch;
