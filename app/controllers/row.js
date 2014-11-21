var moment = require('alloy/moment');
var todos = Alloy.Collections.todo;
var id;


if ($model) {
    id = $model.id;
    if ($model.get('done')) {
        $.row.backgroundColor = '#eee';
        $.check.backgroundColor = '#eee';
        $.task.color = '#ccc';
        $.check.image = '/tick_64.png';
    } else {
        $.row.backgroundColor = '#fff';
        $.check.backgroundColor = '#fff';
        $.task.color = '#000';
        $.check.image = '/tick_gray_64.png';
    }
}

// toggle the "done" status of the IDed todo

function toggleStatus(e) {

    var todo = todos.get(id);

    todo.set({
        "done": todo.get('done') ? 0 : 1,
        "date_completed": moment().unix()
    }).save();
}

// delete the IDed todo from the collection

function deleteTask(e) {

    e.cancelBubble = true;


    var todo = todos.get(id);

    todo.destroy();
}