import { MongoClient } from 'mongodb'

let client: MongoClient | null = null
let clientPromise: Promise<MongoClient> | null = null

if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI manquant')

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.MONGODB_URI)
    // @ts-ignore
    global._mongoClientPromise = client.connect()
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(process.env.MONGODB_URI)
  clientPromise = client.connect()
}

export async function connectToDatabase() {
  const c = await clientPromise!
  return { client: c, db: c.db() }
}
