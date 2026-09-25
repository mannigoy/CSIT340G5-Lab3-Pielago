import './App.css'

const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p className="part">
      <span className="code">{props.part.courseCode}</span>
      <span className="name">{props.part.name}</span>
      <span className="units">{props.part.unitCount}</span>
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.course.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((sum, part) => sum + part.unitCount, 0)
  return <p className="total">Total Units: {total}</p>
}

const Footer = (props) => {
  return (
    <footer className="footer">
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  const fullName = 'Emman Roy Pielago'     
  const courseCode = 'CSIT340'
  const section = 'G5'             

  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
      { courseCode: 'CSIT340', name: 'Industry Elective 1', unitCount: 3 },
      { courseCode: 'CSIT349', name: 'Applied AI', unitCount: 3 },
      { courseCode: 'CSIT349', name: 'Applied AI', unitCount: 3 },
      { courseCode: 'ES038', name: 'Technopreneurship', unitCount: 3 },
      { courseCode: 'IT228', name: 'Networking 2', unitCount: 3 },
      { courseCode: 'IT228', name: 'Networking 2', unitCount: 3 },
      { courseCode: 'IT332', name: 'Capstone and Research 1', unitCount: 3 },
      { courseCode: 'IT334', name: 'IS Strategy', unitCount: 3 },
      { courseCode: 'IT342', name: 'Systems Integration and Architecture 1', unitCount: 3 },
      { courseCode: 'IT342', name: 'Systems Integration and Architecture 1', unitCount: 3 }
    ]
  }

  return (
    <div className="app">
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer name={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App