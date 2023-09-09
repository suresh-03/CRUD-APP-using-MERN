import { useState , useEffect } from "react";
import axios from "axios";

// useState() PRACTICE...

/*
function App() {

  // also declare as useState(0)
  // but above one runs in each onClick() event
  const [count,setCount] = useState(() => 0);
  const [obj,setObj] = useState({name : "suresh", age : 20});
  let name = obj.name;
  let age = obj.age;

  const [arr,setArr] = useState([1,2,3,4,5]);


  // print "hello" in console if the '[]' array changes
  useEffect(() => console.log("hello"),[]);

  function increment(){
    setCount((prevCount) => prevCount + 1);
    setObj((prevState) => {
      return {...prevState,name : "kumar"}
    });
    setArr(() => {
      let nums = []
      for(let i = 0; i < arr.length; i++){
      nums[i] = arr[i] + count;
      }
      return nums;
    })
  }

  function decrement(){
    if(count != 0){
    setCount((prevCount) => prevCount - 1);
    }
  }

  return <>
  
  <h1>counter</h1>
  <button onClick={increment}>+</button>
  <span>{count}</span>
  <button onClick={decrement}>-</button>
  <h2>{name+" "+age}</h2>
  <h2>{`[${arr[0]},${arr[1]},${arr[2]},${arr[3]},${arr[4]}]`}</h2>
  </>;
}

export default App;
*/

const App = () => {

  const [books,setBooks] = useState(null);
  const [createForm,setCreateForm] = useState(
    {title : "",author : "",body : ""}
  );

  useEffect(() => {
    showBooks()
  },[]);

  async function showBooks(){
  // axios used to connect react with express backend
    const resJson = await axios.get("http://localhost:3000/showBooks");

  // set the books
    setBooks(resJson.data.books);
  }

  // update form field
  function updateFormField(e){
    const {name,value} = e.target;
    
    setCreateForm({
      ...createForm,
      [name] : value
    })
  }

  // creating books
  async function createBooks(e){
    // prevent page from reload when clicking submit
    e.preventDefault();

    // getting json from database once createForm is filled
    const resJson = await axios.post("http://localhost:3000/createBooks",createForm);

    // setting new books with old ones
    setBooks([...books,resJson.data.books]);

    // erasing form fields
    setCreateForm({title : "",author : "", body : ""});
  }

  

  return(
    <>
    <h1>Books</h1>
    <div>{books && books.map((book) => {
      return(
        <div key={book._id}>
          <ul>
            <li>Title : {book.title}</li>
            <li>Author : {book.author}</li>
            <li>Body : <br></br><pre>{book.body}</pre></li>
          </ul>
        </div>
      );
    })}</div>
    <h1>Create Books</h1>
    <div>
      <form onSubmit={createBooks}>
        <input name="title" onChange={updateFormField} value={createForm.title} type="text" placeholder="enter title"/>
        <input name="author" onChange={updateFormField} value={createForm.author} type="text" placeholder="enter author" />
        <textarea name="body" onChange={updateFormField} value={createForm.body}  cols="20" rows="4"></textarea>
        <input type="submit" />
      </form>
    </div>
    </>
  )
}

export default App;
