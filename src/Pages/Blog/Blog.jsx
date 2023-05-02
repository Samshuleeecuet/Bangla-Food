import React from 'react';

const Blog = () => {
    return (
        <div className='font-serif pl-10 pr-10 pt-10 text-center'>
            <div className='flex'>
                <p className='text-xl font-semibold flex-grow'>Question And Answer</p>
                <p className='btn btn-outline border-2 border-blue-200 hover:bg-slate-600 hover:text-white'>Download Pdf</p>
            </div>
            <div className='text-justify pb-10'>
                <p className='text-xl font-semibold'>1. Tell us the differences between uncontrolled and controlled components.</p>
                <p>In the context of a software application, the terms "uncontrolled" and "controlled" components refer to two different ways of managing the state and behavior of a user interface.<br/>
An uncontrolled component is a component that manages its own state internally and does not rely on any external state management. This means that the state of the component is not directly accessible or modifiable from outside the component. Examples of uncontrolled components are traditional HTML form elements, like input fields and checkboxes, where the state of the component is stored internally and can be accessed through DOM APIs.<br/>
On the other hand, a controlled component is a component that relies on external state management to manage its state and behavior. This means that the component's state is defined by a parent component or a state management library, and the component receives its state and behavior as props. Controlled components are commonly used in modern front-end frameworks like React, where the state of a component is managed by the parent component or a state management library, and passed down to the child components as props.<br/>
The key difference between uncontrolled and controlled components is that uncontrolled components manage their own state internally, while controlled components rely on external state management to manage their state and behavior. Controlled components offer more fine-grained control over the state and behavior of the application, but can also be more complex to implement and manage.</p><br/><br/>
<p className='text-xl font-semibold'>2. How to validate React props using PropTypes</p>
<p>PropTypes is a typechecking library in React that allows you to validate the props passed to a component. Here's how to validate React props using PropTypes:
<br/>
1. Import PropTypes at the top of your file.<br/>
2. Define the propTypes object on your component.<br/>
3. Define the prop types that your component expects.<br/>
4. Pass the props to your component, and let PropTypes do the validation.
</p><br/><br/>

<p className='text-xl font-semibold'>3.Tell us the difference between nodejs and express js.</p>
<p>
Node.js is an open-source server-side JavaScript runtime environment that executes JavaScript code on the server-side. It provides a runtime environment that allows developers to write server-side JavaScript applications using JavaScript. Node.js has a core set of APIs and a module system that allows developers to write server-side code that can handle HTTP requests, perform file system operations, interact with databases, and more.
<br/>
Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of abstractions and helper functions to simplify the process of building web applications and APIs with Node.js. Express.js provides a routing system that allows developers to define routes for incoming HTTP requests and map them to specific controllers or middleware functions.
</p><br/><br/>

<p  className='text-xl font-semibold'>4.What is a custom hook, and why will you create a custom hook?</p>
<p>
A custom hook is a JavaScript function that uses one or more of the built-in React hooks to encapsulate and reuse a piece of stateful logic across multiple components. Custom hooks are a way to extract reusable logic from components and share it across your application.
<br/>
Here are some reasons why you might create a custom hook:<br/>
i. Reusability: If you find yourself writing the same code or using the same logic in multiple components, you can extract that logic into a custom hook and reuse it across multiple components.
<br/>
ii. Abstraction: Custom hooks allow you to abstract away complex logic or API calls, making your components more readable and easier to maintain.<br/>
iii. Testing: By encapsulating logic in a custom hook, you can easily test the hook in isolation from the components that use it.<br/>
iv. Separation of Concerns: By separating stateful logic from presentation logic, you can improve the separation of concerns in your code and make your components more focused on rendering UI.


</p>

            </div>
        </div>
    );
};

export default Blog;