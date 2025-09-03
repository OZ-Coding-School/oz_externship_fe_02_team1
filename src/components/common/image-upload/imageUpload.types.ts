import type { ChangeEvent, RefObject } from 'react';

export interface ImageUploadProps {
  value?: string | null;
  name?: string | null;
  onChange?: (file: File | null) => void;
  className?: string;
}

export interface ValidateFileParams {
  file: File;
}

export interface HandleFileChangeParams {
  event: ChangeEvent<HTMLInputElement>;
  isResetting: RefObject<boolean>;
  onChange?: (file: File | null) => void;
  formRef: RefObject<HTMLFormElement | null>;
}

export interface HandleImageDeleteParams {
  onChange?: (file: File | null) => void;
  formRef: RefObject<HTMLFormElement | null>;
}

export interface HandleImageChangeParams {
  isResetting: RefObject<boolean>;
  formRef: RefObject<HTMLFormElement | null>;
  fileInputRef: RefObject<HTMLInputElement | null>;
}