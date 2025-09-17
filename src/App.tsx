import { Route, Routes } from 'react-router'

import './App.css'
import { Layout } from '@components'
import {
  CreateStudyGroup,
  StudyGroupDetail,
  EditStudyGroup,
  StudyLogDetail,
  CreateStudyLog,
} from '@pages'
import StudyGroup from './pages/StudyGroup'

import EditStudyLog from './pages/EditStudyLog'

function App() {
  return (
    <Routes>
      <Route path="/study-group" element={<Layout maxWidth="large" />}>
        <Route path="/study-group" element={<StudyGroup />} />
        <Route path=":groupId" element={<StudyGroupDetail />} />
      </Route>

      <Route
        path="/study-group"
        element={<Layout maxWidth="medium" isBackgroundGray />}
      >
        <Route path="create" element={<CreateStudyGroup />} />
        <Route path=":groupId/edit" element={<EditStudyGroup />} />
      </Route>

      <Route path="/study-group" element={<Layout maxWidth="medium" />}>
        <Route path=":groupId/records/create" element={<CreateStudyLog />} />
        <Route
          path=":groupId/records/:recordId/edit"
          element={<EditStudyLog />}
        />
        <Route path=":groupId/records/:recordId" element={<StudyLogDetail />} />
      </Route>
    </Routes>
  )
}

export default App
