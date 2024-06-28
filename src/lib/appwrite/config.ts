import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "666d0fe1002119bdbd27",
  databaseId: "66711fee003044804c5c",
  storageId: "66711e59001c250f6ca6",
  userCollectionId: "667121de00272d090e07",
  postCollectionId: "667120780034a4232bda",
  savesCollectionId: "6671221d00384af1f347",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
