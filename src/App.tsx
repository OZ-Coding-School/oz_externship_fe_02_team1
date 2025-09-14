import { Route, Routes } from 'react-router'

import './App.css'
import { CreateStudyLog, Layout } from '@components'
import { StudyGroupDetail } from '@pages'
import StudyGroupEdit from './pages/StudyGroupEdit'

function App() {
  return (
    <Routes>
      <Route path="/study-group" element={<Layout maxWidth="large" />}>
        <Route path=":groupId" element={<StudyGroupDetail />} />
      </Route>

      <Route
        path="/study-group"
        element={<Layout maxWidth="medium" isBackgroundGray />}
      >
        <Route path=":groupId/edit" element={<StudyGroupEdit />} />
        <Route path=":groupId/records/crete" element={<CreateStudyLog />} />
      </Route>
    </Routes>
  )
}

export default App
