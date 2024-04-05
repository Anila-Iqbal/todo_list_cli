#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Printing a Welcime message:
console.log(chalk.blueBright.bold("\n\t Welcome to Anila-Iqbal Todo_list\n"));

// inquirer
// array
// function
// operators

let todos: string[] = [];//arrayis like ashopper
let condition = true;

//make a function
async function createTodo(todos: string[]) {
  while (condition) {
    let ans = await inquirer.prompt({
      type: "list",
      message: chalk.magentaBright.bold("select an operation"),
      name: "select",
      choices: ["Add", "Update", "View", "Delete","Exit"],
    });

    // condition -1 add
    if (ans.select == "Add") {
      let addTodo = await inquirer.prompt({
        type: "input",
        message: chalk.gray.bold("Add item in the list"),
        name: "todo",
      });
      todos.push(addTodo.todo);
      console.log(todos);
    }

    //condition -2 update and add again ( when multiple array we use ... dot )
    if (ans.select == "Update") {
      let updateTodo = await inquirer.prompt({
        type: "list",
        message: chalk.magentaBright.bold("Update items in the list"),
        name: "todo",
        choices: todos.map((item) => item),
      });
      let addTodo = await inquirer.prompt({
        type: "input",
        message: chalk.gray.bold("Add item in the list"),
        name: "todo",
      });
      let newTodo = todos.filter((val) => val !== updateTodo.todo);
      todos = [...newTodo, addTodo.todo];
      console.log(todos);
    }

    //condition 3 view
    if (ans.select == "View") {
      console.log (chalk.blueBright.bold("****TO DO LIST****"));
      console.log(todos);
      console.log(chalk.blueBright.bold("*******************"));
    }
  
    //condition 4 delete and exit
    if (ans.select == "Delete") {
      let deleteTodo = await inquirer.prompt({
        type: "list",
        message: chalk.magentaBright.bold("Update items in the list"),
        name: "todo",
        choices: todos.map((item) => item),
      });

      let newTodo = todos.filter((val) => val !== deleteTodo.todo);
      todos = [...newTodo];
      console.log(todos);
    }
    if(ans.select === "Exit"){
      console.log(chalk.redBright.bold("Exiting program....."));
      condition = false;
      
    }
  } 
  }
//function call
createTodo(todos);
