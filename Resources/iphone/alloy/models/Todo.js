var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            item: "text",
            done: "integer",
            date_completed: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "todo"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                _.each(attrs, function(value, key) {
                    if (!value) return;
                    switch (key) {
                      case "item":
                        if (0 >= value.length) return "Error: No item!";
                        break;

                      case "done":
                        if (0 >= value.length) return "Error: No completed tag!";
                    }
                });
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get("done");
            }
        });
        return Collection;
    }
};

model = Alloy.M("todo", exports.definition, [ function(migration) {
    migration.name = "todo";
    migration.id = "201410100926682";
    migration.up = function(migrator) {
        migrator.createTable({
            columns: {
                item: "text",
                done: "integer",
                date_completed: "text"
            }
        });
    };
    migration.down = function(migrator) {
        migrator.dropTable("todo");
    };
} ]);

collection = Alloy.C("todo", exports.definition, model);

exports.Model = model;

exports.Collection = collection;