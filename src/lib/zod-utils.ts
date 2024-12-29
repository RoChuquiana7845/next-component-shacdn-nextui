export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

export const phoneEcuadorRegex = /^(?:\+593\s?|0)([9][0-9]{8})$/;

export const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;

export const postalCodeRegex = /^[0-9]{5}$/;

export const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;

export const nameRegex = /^[a-zA-Z\s]{3,30}$/;

export const validateBirthDate = (val: string | undefined): boolean => {
  if (!val) return true;

  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(val)) {
    return false;
  }

  const today = new Date();
  const birthDate = new Date(val);
  const age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18;
  }

  return age >= 18;
};

export const validateImage = (file: File | null | undefined): boolean => {
  if (!file) return true;

  const maxSize = 5 * 1024 * 1024;
  const validTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "image/gif",
  ];

  if (!(file instanceof File)) return false;
  if (!validTypes.includes(file.type)) return false;
  if (file.size > maxSize) return false;

  return true;
};
