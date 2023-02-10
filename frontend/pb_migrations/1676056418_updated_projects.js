migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6wrgyj0s333xiy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ie3epzsh",
    "name": "technologies",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("d6wrgyj0s333xiy")

  // remove
  collection.schema.removeField("ie3epzsh")

  return dao.saveCollection(collection)
})
