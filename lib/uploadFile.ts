import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export interface UploadResult {
  fileName: string;
  downloadUrl: string;
  path: string;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];

export class UploadError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UploadError';
  }
}

function validateFile(file: File) {
  if (file.size > MAX_FILE_SIZE) {
    throw new UploadError(`File size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB`);
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new UploadError('File type not allowed. Please upload PDF or image files only.');
  }
}

export async function uploadFile(
  file: File,
  documentId: string,
  userId: string = 'anonymous' // We'll update this when we add authentication
): Promise<UploadResult> {
  try {
    // Validate file before uploading
    validateFile(file);

    // Create a unique file path: users/{userId}/{documentId}/{timestamp}_{filename}
    const timestamp = Date.now();
    const path = `users/${userId}/${documentId}/${timestamp}_${file.name}`;
    const storageRef = ref(storage, path);

    // Upload the file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get the download URL
    const downloadUrl = await getDownloadURL(snapshot.ref);

    return {
      fileName: file.name,
      downloadUrl,
      path
    };
  } catch (error) {
    if (error instanceof UploadError) {
      throw error;
    }
    console.error('Error uploading file:', error);
    throw new UploadError('Failed to upload file. Please try again.');
  }
} 