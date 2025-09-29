import { Route, Routes } from 'react-router'

import './App.css'
import { Layout } from '@components'
import {
  CreateStudyGroup,
  StudyGroupDetail,
  EditStudyGroup,
  StudyLogDetail,
  CreateStudyLog,
  StudyGroup,
  EditStudyLog,
  TestLanding,
} from '@pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<TestLanding />}></Route>

      <Route path="/study-group" element={<Layout maxWidth="large" />}>
        <Route index element={<StudyGroup />} />
        <Route path=":groupId" element={<StudyGroupDetail />} />
      </Route>

      <Route
        path="/study-group"
        element={<Layout maxWidth="medium" isBackgroundGray />}
      >
        <Route path="create" element={<CreateStudyGroup />} />
        <Route
          path=":groupId/records/:recordId/edit"
          element={<EditStudyGroup />}
        />
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
