var todos = Alloy.Collections.todo;

var INDEXES = {
    'All': 0,
    'Active': 1,
    'Done': 2
};
var whereIndex = INDEXES.All;

$.todoWin.open();
$.todoWin.addEventListener('open', function () {
    $.todoWin.activity.actionBar.hide();
});

todos && todos.fetch();

// Filtering and fetching

function whereFunction(collection) {
    return whereIndex === INDEXES.All ?
        collection.models :
        collection.where({done: whereIndex === INDEXES.Active ? 0 : 1});
}

function transformFunction(model) {
    var transform = model.toJSON();
    transform.item = '[' + transform.item + ']';
    return transform;
}

// open the "add item" window
function addToDoItem() {
    Alloy.createController("add").getView().open();
}

// Show task list based on selected status type
function showTasks(e) {
    if (typeof e.index !== 'undefined' && e.index !== null) {
        whereIndex = e.index; // TabbedBar
    } else {
        whereIndex = INDEXES[e.source.title]; // Android menu
    }

    todos.fetch();
}