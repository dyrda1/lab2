const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  const todoContainer = document.createElement('div');
  todoContainer.classList.add(classNames.TODO_ITEM);

  const todoCheckbox = document.createElement('input');
  todoCheckbox.type = 'checkbox';
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX);

  const todoText = document.createElement('span');
  todoText.classList.add(classNames.TODO_TEXT);
  todoText.textContent = 'Your TODO text goes here';

  const todoDelete = document.createElement('button');
  todoDelete.classList.add(classNames.TODO_DELETE);
  todoDelete.textContent = 'Delete';
  todoDelete.addEventListener('click', () => {
    list.removeChild(todoContainer);
    updateCounts();
  });

  todoContainer.appendChild(todoCheckbox);
  todoContainer.appendChild(todoText);
  todoContainer.appendChild(todoDelete);

  list.appendChild(todoContainer);
  updateCounts();
}

function updateCounts() {
  const todoItems = document.querySelectorAll(`.${classNames.TODO_ITEM}`);
  const totalCount = todoItems.length;
  const uncheckedCount = Array.from(todoItems).filter(item => !item.querySelector(`.${classNames.TODO_CHECKBOX}`).checked).length;

  itemCountSpan.textContent = totalCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}
