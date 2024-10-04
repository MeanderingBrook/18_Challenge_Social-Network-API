// Requires Node Modules
const router = require("express").Router();

// Defines App Directory location of Routes
const apiRoutes = require("./api");

// Defines Routes for HTML Paths (e.g., /, /api)
router.use("/api", apiRoutes);

router.get("/test", (req, res) => res.send("Testing Testing"));

// Exports Routes for use in App
module.exports = router;

// // //
// GET Request of MongoDB Content Data
/*
app.get("/cms", async (req, res) => {
  try {
    const data = await Content.find({});
    // console.log("app.js Line 93", data);

    res.json(data);
  } catch (err) {
    console.log("app.js Line 97: CMS Data Return Failed.");
    res.json({ message: "app.js Line 98: CMS Data Return Failed." });
  }
});

app.get("/cms/:id", (req, res) => {
  const { id } = req.params;

  console.log(
    "Server index.js Line 74, CMS Post (http://localhost:3000/cms/:id) Route Sucessfully Returned"
  );
  res.json(contentPost);
});

app.post("/cms/approve/:id", (req, res) => {
  const { id } = req.params;
  const content = contentList.find((item) => item.id === id);

  if (content) {
    content.status = "Approved";
    // Move Approved Content to end of List
    contentList = contentList.filter((item) => item.id !== id);
    contentList.push(content);

    res.json({
      message: "Content Approved.",
    });
  } else {
    res.status(404).json({
      error: "Content Not Found.",
    });
  }
});

app.put("/cms/edit/:id", (req, res) => {
  const { id } = req.params;
  const updatedContent = req.body;
  const index = contentList.findIndex((item) => item.id === id);

  if (index !== -1) {
    contentList[index] = {
      ...contentList[index],
      ...updatedContent,
    };
  } else {
    res.status(404).json({
      error: "Content Not Found.",
    });
  }
});

app.post("/cms", (req, res) => {
  const newContent = req.body;
  newContent.status = "Pending";
  contentList.push(newContent);

  res.json({
    message: "Content Successfully Added.",
  });
});

// app.get("/api", (req, res) => {
//   res.send(
//     "index.js Line 27: Library Manager App Server has responded to API (/api) Request."
//   );
// });

app.get("/", (req, res) => {
  res.send(
    "index.js Line 115: Library Manager App Express Server (Backend) has responded to Root (/) Request."
  );
});

*/
