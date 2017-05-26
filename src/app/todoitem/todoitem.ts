import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {TodoItem as ToDoItemModel} from './../store/todoStore';

@Component({
    selector: 'todo-item',
    templateUrl: 'app/todoitem/todoitem.html',
    styleUrls: ['app/todoitem/todoitem.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TodoItem {
  completed = false;

  @Input()
  item: ToDoItemModel;

  @Output()
  done = new EventEmitter();

  doneClicked() {
    this.done.next(this.item);
  }

  toggleCompleted(completed) {
    this.completed = completed;
  }
}
