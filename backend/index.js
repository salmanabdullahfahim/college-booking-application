const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.sjuvyra.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection

    client.connect((err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    //College Collection

    const collegeCollection = client
      .db("collegeHunterDB")
      .collection("colleges");

    const admissionCollection = client
      .db("collegeHunterDB")
      .collection("admission");

    app.get("/colleges", async (req, res) => {
      const limit = parseInt(req.query.limit);

      const result = await collegeCollection.find().limit(limit).toArray();
      res.send(result);
    });

    //filter by id

    app.get("/colleges/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await collegeCollection.findOne(query);
      res.send(result);
    });

    //filter by specific email

    // app.get("/myToys", async (req, res) => {
    //   let query = {};

    //   if (req.query?.email) {
    //     query = {
    //       sellerEmail: req.query.email,
    //     };
    //   }

    //   const sortOption = req.query.sort;
    //   let sortQuery = {};

    //   if (sortOption === "asc") {
    //     sortQuery = { price: 1 }; // Sort by price in ascending order
    //   } else if (sortOption === "desc") {
    //     sortQuery = { price: -1 }; // Sort by price in descending order
    //   }

    //   const result = await toyCollection
    //     .find(query)
    //     .sort(sortQuery)
    //     .collation({ locale: "en_US", numericOrdering: true })
    //     .toArray();
    //   res.send(result);
    // });

    //post

    app.post("/admission", async (req, res) => {
      const toy = req.body;
      const result = await admissionCollection.insertOne(toy);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("College hunter is running");
});

app.listen(port, () => {
  console.log(`College hunter is running on port ${port}`);
});
