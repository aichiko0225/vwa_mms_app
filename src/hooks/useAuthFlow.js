import { useEffect, useRef, useState } from 'react';
import userService from '../services/userService';
import { PUBLIC_KEY } from '../common/constants';

export default function useAuthFlow() {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const encrypt = v => {
    try {
      const { sm2 } = require('sm-crypto');
      const pk = PUBLIC_KEY;
      return sm2.doEncrypt(v, pk);
    } catch { return v; }
  };

  const startCountdown = sec => {
    setCountdown(sec);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCountdown(p => {
        if (p <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return p - 1;
      });
    }, 1000);
  };

  const queryPhone = async username => {
    const res = await userService.queryEmail(username);
    if (res.data && res.data.success && res.data.result) return res.data.result.phone || '';
    const message = (res.data && res.data.message) || 'Query failed';
    throw new Error(message);
  };

  const sendSmsCode = async (username, phone, password) => {
    const params = { username, phone, password: encrypt(password) };
    const res = await userService.sendSms(params);
    if (res.data && res.data.success) {
      startCountdown(120);
      return true;
    }
    const message = (res.data && res.data.message) || 'Send failed';
    throw new Error(message);
  };

  const login = async (username, password, phone, captcha) => {
    setLoading(true);
    try {
      const params = { username, password: encrypt(password), phone, captcha, checkKey: Date.now() };
      const res = await userService.h5Login(params);
      return res;
    } finally {
      setLoading(false);
    }
  };

  return { loading, countdown, queryPhone, sendSmsCode, login };
}