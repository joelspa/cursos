import './Profile.css'
import UserProfile from '../components/UserProfile'
import EnrolledCourses from '../components/EnrolledCourses'

function Profile({ cursos, inscripciones, navigate }) {
  return (
    <div className="profile">
      <UserProfile />
      <EnrolledCourses 
        cursos={cursos}
        inscripciones={inscripciones}
        navigate={navigate}
      />
    </div>
  )
}

export default Profile
