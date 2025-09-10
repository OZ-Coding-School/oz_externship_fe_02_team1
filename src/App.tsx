import { Route, Routes } from 'react-router'

import './App.css'
import { Layout } from '@components'
import { StudyGroupDetail } from '@pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="study-group/:groupId" element={<StudyGroupDetail />} />
      </Route>
    </Routes>
  )
}

export default App
