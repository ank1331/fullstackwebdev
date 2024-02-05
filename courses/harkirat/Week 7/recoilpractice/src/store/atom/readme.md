
function YehDabao() {
  const [count, setCount] = useRecoilState(atomvalue);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </>
  );
}

function Namedo() {
  const namename = useRecoilValue(enterName);
  return (
    <div>
      <h1> Original name is {namename} </h1>
    </div>
  );
}

function Changename() {
  const [yehname, setYehname] = useRecoilState(enterName);

  return (
    <>
      <label>Enter newname </label>
      <input
        type="text"
        placeholder="Enter Name bhai"
        onChange={(e) => setYehname(e.target.value)}
      />
    </>
  );
}

function Increment (){
  const [incc, setincc] = useRecoilState(atomvalue)
  setincc(incc+1)
  return(
    <button onClick={Increment}>Increase</button>
  )
}





function EnterTodo() {
  const todovalue = useRecoilValue(todo);

  
  return (
    <>
    <div>

      {todovalue.map((toto)=>
      <div key={toto.task}>
        <div>
        {toto.description}
          </div>
          <div>
            {toto.task}
            </div>
        </div>)}
    </div>
    </>
  );
}





function Changetodo() {
  const [todokivalue, settodokivalue] = useRecoilState(todo);

  const [inputval, setInputval] = useState({
    task:"",
    description:""
  })

  
  function handleChange(e){
    setInputval({...inputval, [e.target.id]:e.target.value})
  }
  
  const [enter, setenter] = useRecoilState(todo)
  function handleSubmit(e){
    e.preventDefault()
   
    setenter(enter.push(inputval))
    console.log("this is clicked")
  }
  console.log(inputval)

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input id="task" name="task"  onChange={handleChange} type="text" placeholder="Enter Task" />
        <input id="description" name="description"  onChange={handleChange} type="text" placeholder="Enter Description" />
        <button > Submit the Task </button>
      </form>
    </>
  );
}

function Yehdekho() {
  const newval = useRecoilValue(atomvalue);

  return <div>{newval}</div>;
}


function Increment(){
  const [inc, setinc] = useRecoilState(atomvalue)

  function handleClick(){
    setinc(inc+1)
  }

  return(
    <button onClick={handleClick}>Increase</button>
  )
}