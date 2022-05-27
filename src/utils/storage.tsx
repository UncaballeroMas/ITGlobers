import CryptoES from 'crypto-es';

export const encryptData = (key: string, value: string) => {
  const valueEncrypt = CryptoES.AES.encrypt(value, key);
  return valueEncrypt.toString();
};

export const decryptData = (key: string, value: string) => {
  console.log('value', value);
  const bytes = CryptoES.AES.decrypt(value, key);
  const valueDecrypt = bytes.toString(CryptoES.enc.Utf8);
  console.log('await', valueDecrypt);
  return valueDecrypt;
};
