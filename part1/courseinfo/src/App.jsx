
export default function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </div>
  )
}

function Header({course}){
  return(<h1>{course}</h1>)
}

function Content(props){
  return(<>
    <Part partname={props.part1} exnum={props.exercises1} />
    <Part partname={props.part2} exnum={props.exercises2} />
    <Part partname={props.part3} exnum={props.exercises3} />
    </>
  )
}
function Part({partname, exnum}){
  return(<p>
    {partname} {exnum}
  </p>)
}

function Total(props){
  return(<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>)
}
