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

  const navigateToLogEdit = () => {
    navigate(`/study-group/${params.groupId}/records/${params.recordId}/edit`)
  }

  const navigateToCreateNewStudy = () => {
    navigate('/study-group/create')
  }

  const navigateToGroupDetail = () => {
    navigate(`/study-group/${params.groupId}`)
  }

  return {
    handleGoBack,
    navigateToGroupEdit,
    navigateToLogEdit,
    navigateToCreateNewStudy,
    navigateToGroupDetail,
  }
}
