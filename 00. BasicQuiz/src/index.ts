// 타입은 최대한 자세하게 기술 하는 것이 좋다.
// 중복이 많을 경우 , Interface를 이용해서 관리하자.
interface User{
  id : number;
  title: string;
  done : boolean
}


let todoItems:User[];

// api
function fetchTodoItems():User[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos():User[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo:User):void {
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index:number, todo:User):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo():User {
  return todoItems[0];
}

function showCompleted():User[] {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo({
    id:4, title:'C#' , done:false
  });
  addTodo({
    id:5, title:'C++' , done:false
  });
}

// NOTE: 유틸 함수
function log():void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
