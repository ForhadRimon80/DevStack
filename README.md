🚀 DevStack

DevStack is a simple web app that helps developers explore different frontend, backend, database, and other development tools.

You can check different technologies and add the ones you like to your own stack. It makes it easy to explore and choose the right technologies for your next project.

✨ Features

🧩 Build Your Own Stack
Select technologies from different categories and create a personalized development stack.

➕ Add & Remove Technologies
Easily add technologies to your stack, remove individual technologies, or clear the entire stack.

🔔 Interactive User Feedback
Get instant toast notifications when technologies are added, removed, or when a duplicate technology is selected.

🛠️ Technologies Used
React – UI development
TypeScript – Type-safe JavaScript
Tailwind CSS – Responsive and modern styling
DaisyUI – UI components
React Icons – Icons throughout the application
React Toastify – Interactive toast notifications
Vite – Fast development and build tooling



📄 Answer all those React questions below

i. JSX stands for JavaScript XML. It is a syntax used in React that looks like HTML but is written inside JavaScript. JSX is used in React because it makes the code easy to write, read, and understand. It helps us create UI elements easily.

ii. Props and State are both used to manage data in React, but they are different. Props are used to pass data from a parent component to a child component. Props are read-only, so the child component cannot change them. State is data that belongs to a component itself. State can be changed or updated using a state function.

iii. The useState hook is used to store and update data in a React component. First, I used the useState hook for the navbar. In the mobile view, I needed to change the UI when the hamburger menu icon is clicked, so I used useState to control the menu. Then, I used useState in the Explore Technologies section to handle the DevStateCard button click and to remove an item from Your Stack. The DevStateCard and Your Stack components are both child components of the DevStateList component, so I declared the useState hook in the DevStateList component. We know that data flow in React is unidirectional, which means data flows from the parent component to the child components.

iv. The useEffect hook is used to do some work after a React component loads. For example, we can use it to fetch data, call an API, or run some code. If we want to load data from a JSON file, we can use useEffect when the component loads. Then, we can store the data in state and show it on the website. If we use an empty dependency array [], the useEffect runs only once when the component first loads. This helps us avoid loading the same data again and again. In simple words, useEffect is used to run a task after a component loads, and it can be used to load JSON data.

v. Every item in a .map() list needs a unique key prop because React needs to identify each item separately. When the list changes, React uses the key to understand which item is new, removed, or changed. This helps React update only the necessary part of the UI instead of updating the whole list again. The key should be unique and stable, usually an ID from the data. We should avoid using the array index as a key when the list can change. In simple words, a unique key helps React recognize each item in a list and update the UI correctly.

vi. Conditional rendering means showing or hiding something in the UI based on a condition. In my project, conditional rendering is used in many places. For example, I used conditional rendering in the Navbar for the mobile menu. When the user clicks the hamburger menu, the isMenuOpen state becomes true, and the mobile menu is shown. When it becomes false, the menu is hidden. I also used a condition to show the hamburger icon when the menu is closed and the close icon when the menu is open. In simple words, conditional rendering means showing different UI based on a condition.

vii. In React, we pass data from a parent component to a child component using props. The parent sends the data through props, and the child receives and uses that data. To send something back from the child to the parent, the parent can pass a handler or callback function as a prop. The child calls that function and sends the required data back to the parent.