import React from 'react'
import Card from './components/Card'
import Loader from '../UI/Loader'
import Error from '../UI/Error'
import './Profile.scss'
import Citations from './components/Citations'
import Notes from './components/Notes'
import Status from './components/Status'
import { Page, PageContent } from 'components/UI/Page'
import {useFetch} from '../../hooks/useFetch'

const ParticipantProfile = (props) => {
  const [state, fetchData, dispatch] = useFetch(`participants/${props.match.params.id}`);

  return (
    <Page blue>
      <PageContent>
        {state.isLoading && <Loader />}
        {state.isError && <Error error={state.isError} />}
        {!state.isLoading && state.data && (
          <div className="user-profile--content-container">
            <a href={'/participants'} className="user-profile--nav">
              <i className="fas fa-arrow-left"></i>
              Back to Index
            </a>
            <Card user={state.data[0]} />
            <Notes user={state.data[0]} />
            <Citations user={state.data[0]} />
            <Status user={state.data[0]} />
          </div>
        )}
      {JSON.stringify(state)}
      </PageContent>
    </Page>
  )
}

export default ParticipantProfile
