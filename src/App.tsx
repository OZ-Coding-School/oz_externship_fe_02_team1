import { Route, Routes } from 'react-router'

import './App.css'
import { CreateStudyLog, Layout } from '@components'
import {
  CreateStudyGroup,
  StudyGroupDetail,
  StudyGroupEdit,
  StudyLogDetail,
} from '@pages'

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
        <Route path="create" element={<CreateStudyGroup />} />
        <Route path=":groupId/edit" element={<StudyGroupEdit />} />
      </Route>

      <Route path="/study-group" element={<Layout maxWidth="medium" />}>
        <Route path=":groupId/records/create" element={<CreateStudyLog />} />
        <Route path=":groupId/records/:recordId" element={<StudyLogDetail />} />
      </Route>
    </Routes>
  )
}

export default App
