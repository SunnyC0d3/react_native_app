import { Client, Account, ID } from 'react-native-appwrite'
import {
    APPWRITE_ENDPOINT,
    APPWRITE_PLATFORM,
    APPWRITE_PROJECT_ID,
    APPWRITE_DATABASE_ID,
    APPWRITE_USER_COLLECTION_ID,
    APPWRITE_VIDEO_COLLECTION_ID,
    APPWRITE_STORAGE_ID,
} from '@env'

export const appWriteConfig = {
    endpoint: APPWRITE_ENDPOINT,
    platform: APPWRITE_PLATFORM,
    projectId: APPWRITE_PROJECT_ID,
    database: APPWRITE_DATABASE_ID,
    userCollectionId: APPWRITE_USER_COLLECTION_ID,
    videoCollectionId: APPWRITE_VIDEO_COLLECTION_ID,
    storageId: APPWRITE_STORAGE_ID,
}

const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint)
    .setProject(appWriteConfig.projectId)
    .setPlatform(appWriteConfig.platform);

const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'test@test.com', 'password', 'test')
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
};
