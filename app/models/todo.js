exports.definition = {
    config: {
        "columns": {
            "item":"text",
            "done":"integer",
            "date_completed":"text"
        },
        "adapter": {
            "type": "sql",
            "collection_name": "todo"
        }
    },

    extendModel : function(Model) {
        _.extend(Model.prototype, {
            validate : function(attrs) {
                _.each(attrs, function (value, key) {
                    if (!value) return;

                    switch (key) {
                        case "item":
                            if (value.length <= 0) {
                                return 'Error: No item!';
                            }
                            break;
                        case "done":
                            if (value.length <= 0) {
                                return 'Error: No completed tag!';
                            }
                            break;
                    }
                });
            }
        });

        return Model;
    },

    extendCollection : function(Collection) {
        _.extend(Collection.prototype, {
            comparator: function(todo) {
                return todo.get('done');
            }
        });

        return Collection;
    }
};