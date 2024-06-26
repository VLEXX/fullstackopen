
export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [ {
        name: 'Fundamentals of React',
        exercises: 10
      },{
        name: 'Using props to pass data',
        exercises: 7
      },{
        name: 'State of a component',
        exercises: 14
      }
    ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />
    </div>
  )
}

function Header({course}){
  return(<h1>{course}</h1>)
}

function Content(props){
  console.log('Content props:')
  console.log(props)
  return(<>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
    </>
  )
}
function Part(props){
  console.log('Part props:')
  console.log(props)
  return(<p>
    {props.part.name} {props.part.exercises}
  </p>)
}

function Total(props){
  console.log('Total props:')
  console.log(props)
  return(<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>)
}
