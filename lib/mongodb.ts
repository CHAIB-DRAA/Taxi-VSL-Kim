import { MongoClient } from "mongodb"

if (!process.env.MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable")
}

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect().then((c) => {
      console.log("✅ MongoDB connected (dev)")
      return c
    }).catch((err) => {
      console.error("❌ MongoDB connection error (dev):", err)
      throw err
    })
  }
  clientPromise = (global as any)._mongoClientPromise
} else {
  clientPromise = client.connect().then((c) => {
    console.log("✅ MongoDB connected (prod)")
    return c
  }).catch((err) => {
    console.error("❌ MongoDB connection error (prod):", err)
    throw err
  })
}

export default clientPromise
