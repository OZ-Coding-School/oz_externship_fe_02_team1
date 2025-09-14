import { Route, Routes } from 'react-router'

import './App.css'
import { Layout } from '@components'
import { StudyGroupDetail, StudyGroupEdit } from '@pages'

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
      </Route>
    </Routes>
  )
}

export default App
