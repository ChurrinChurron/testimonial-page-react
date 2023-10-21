import './App.css'
import Ratings from './components/Ratings'
import Star from "./assets/star.png"

function App() {

  return (
    <section className='app'>
      <div className='review'>
        <img src={Star} className='review__star' alt="star" />
        <h1>Reviewers</h1>
        <h2>Reviewers is where people can access guidelines, checklists, and other tools to assist them in reviewing papers or manuscripts. 
          It provides a structured approach to ensure that the review process is thorough, efficient, and consistent.
        </h2>
        <ul className='review__check'>
          <li>Checklist to Review an Academic Paper</li>
          <li>Peer Review Checklist</li>
          <li>Checklist for Editors, Reviewers, and Authors of SPIE Journals</li>
        </ul>
      </div>
      <Ratings />
    </section>
  )
}

export default App
