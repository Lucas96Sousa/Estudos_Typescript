<<<<<<< HEAD
import { Collection, MongoClient } from 'mongodb'
import { AccountModel } from '../../../../domain/models/account'

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect() {
    await this.client.close()
  },

  getColletction(name: string): Collection {
    return this.client.db().collection(name)
  },

  map(collection: any): any {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }

}
=======
import { Collection, MongoClient } from 'mongodb';

export const MongoHelper = {

  client: null as unknown as MongoClient,
  uri: null as unknown as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri, {

      useNewUrlParser: true,

      useUnifiedTopology: true,

    });

  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
  },

  async getColletction(name: string): Promise<Collection> {
    if (!this.client?.isConnected()) {
      await this.connect(this.uri)
    }

    return this.client.db().collection(name);

  },

  map(collection: any): any {

    const { _id, ...collectionWithoutId } = collection;

    return Object.assign({}, collectionWithoutId, { id: _id });

  },
};
>>>>>>> 743bac7009e23c29b1b1113fd1e38ec7b925e534
