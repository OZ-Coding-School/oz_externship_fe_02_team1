import { useNavigate, useParams } from 'react-router'

export const usePageNav = () => {
  const navigate = useNavigate()
  const params = useParams()

  const handleGoBack = () => {
    navigate(-1)
  }

  const navigateToGroupEdit = () => {
    navigate(`/study-group/${params.groupId}/edit`)
  }

  return { handleGoBack, navigateToGroupEdit }
}
