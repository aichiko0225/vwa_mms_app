import { useEffect, useRef, useState } from 'react';
import userService from '../services/userService';
import { PUBLIC_KEY } from '../common/constants';

export default function useForgetPasswordFlow() {
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

  const queryEmail = async username => {
    const res = await userService.queryEmail(username);
    if (res.data && res.data.success && res.data.result) {
      if (res.data.result.status === 2) throw new Error('Your Account Has Been Frozen, Please Contact The Administrator To Unfreeze');
      return res.data.result.email || '';
    }
    const message = (res.data && res.data.message) || 'Query failed';
    throw new Error(message);
  };

  const queryRole = async username => {
    const res = await userService.appSelectUserRoleByUsername(username);
    if (res.data && res.data.success) {
      const roles = (res.data.result || []).map(r => r.roleCode);
      return roles.includes('admin') ? 1 : 0;
    }
    const message = (res.data && res.data.message) || 'Query role failed';
    throw new Error(message);
  };

  const sendEmailCode = async (username, email) => {
    const res = await userService.sendEmail({ username, email });
    if (res.data && res.data.success) {
      startCountdown(60);
      return true;
    }
    const message = (res.data && res.data.message) || 'Send failed';
    throw new Error(message);
  };

  const validatePassword = (pwd, isAdmin) => {
    const adminRule = /^(?=.*[A-Z]|.*[\W_])(?=.*[A-Z]|.*[a-z])(?=.*[A-Z]|.*\d)(?=.*[a-z]|.*[\W_])(?=.*[a-z]|.*\d)(?=.*\d|.*[\W_]).{15,}$/;
    const userRule  = /^(?=.*[A-Z]|.*[\W_])(?=.*[A-Z]|.*[a-z])(?=.*[A-Z]|.*\d)(?=.*[a-z]|.*[\W_])(?=.*[a-z]|.*\d)(?=.*\d|.*[\W_]).{12,}$/;
    const rule = isAdmin === 1 ? adminRule : userRule;
    return rule.test(pwd);
  };

  const submitForgetPassword = async (username, email, newPassword, code) => {
    const res = await userService.forgetPassword({ password: encrypt(newPassword), username, email, code });
    return res;
  };

  return { countdown, queryEmail, queryRole, sendEmailCode, validatePassword, submitForgetPassword };
}