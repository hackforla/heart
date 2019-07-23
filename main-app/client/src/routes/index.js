import Intake from '../components/Form/Intake'
import LoginPage from '../components/Authorization/loginPage'
import ParticipantList from '../components/ParticipantsList/ParticipantsList'
import ParticipantProfile from '../components/Participant/Profile'

export const PATHS = {
  INTAKE: '/form',
  LOGIN: '/login',
  PARTICIPANT: '/participants/:id',
  PARTICIPANTS: '/',
}

export default { PATHS }
