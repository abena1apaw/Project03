import React from "react";
const About = () => {
  return (
    <div className="App">
      <h1> About My Todo App</h1>
      <p> This is a react app.</p>
      <p>
        {" "}
        The parent component or the root component is called the TodoApp, this
        holds all the child components, namely the header, AddTodo, Todos,
        TodoItem.{" "}
      </p>
      <p>
        {" "}
        The header component renders the header contents, the AddTodo component
        accepts the user inputs, the Todos renders the todo list and the
        TodoItem component renders each of the to do items.
      </p>

      <h1> About My Meme Generator</h1>
      <p> This is also a react app.</p>
      <p>
        {" "}
        The parent component or the root component is called the MemeApp, this
        holds all the child components, memeheader, and MemeGenerator
      </p>
      <p>
        {" "}
        The memeheader component renders the header contents, the MemeGenerator
        component accepts the user inputs and holds state and helps to fetch
        data from an endpoint url
      </p>
      <p>
        The app accepts some top and bottom text and generates a new image
        anytime the Generate Meme button is clicked.
      </p>
    </div>
  );
};
export default About;
