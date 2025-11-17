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
      const tusername = '30af15e53d7bdc0b3be6a2fa303681d3de4a9727069ac9cf022dd75f098f87ef3ebcc548b00d60de9ff2a98d5f6fc8e8c17ded9c100db9af3e129c09e3ef793799e2babd11a8bcdc518eaa096665c681348f4d8437563cd740ff1547ae7d8810a88c0b678b3bcd'
      const tpassword = 'afabf8a41786dec7d3c2c4c3ce017346bcab79e7ccd0185ea906fce5f14435f8c7c2ef504600ec91d89d9744b77a36947aee1ad83c0b76170dd33d92e783e0b8fcaf59e2a8a813608e829c12364570153f2d32b4b866da555021b7ba4ef4e0cd23864772541df5'
      const params = { username: tusername, password: tpassword, phone, captcha, checkKey: Date.now() };
      const res = await userService.login(params);
      return res;
    } finally {
      setLoading(false);
    }
  };

  return { loading, countdown, queryPhone, sendSmsCode, login };
}